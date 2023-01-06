import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import DiaryDetails from "./components/DiaryDetails";
import RootLayout from "./layout/RootLayout";
import Create from "./Pages/Create";
import Home from "./Pages/Home";
import api from './api/diaries';
import EditDiary from "./components/EditDiary";

function App() {

  const navigate = useNavigate();
  const [diaries, setDiaries] = useState([]);

  const [addTitle, setAddTitle] = useState('');
  const [addBody, setAddBody] = useState('');

  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {

    const fetchDiaries = async () => {
      try{
        const response = await api.get('/diaries');
        setDiaries(response.data)
      } catch(err) {
        if(err.response) {
          console.log(err.response.data);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchDiaries();
  }, []);

  const handleDelete = async id => {
    const modifiedDiary = diaries.filter(diary => diary.id !== id);
    setDiaries(modifiedDiary);
    navigate('/');
    try{
      await api.delete('/diaries/' + id)
      setDiaries(modifiedDiary);
      navigate('/');
    }catch(err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleUpdate = async id => {
    const datetime = format(new Date(), 'yyyy MM dd, pp');
    const updatedDiary = { diarytitle: editTitle, diarybody: editBody, datetime };
    try {
      const response = await api.put('/diaries/' + id, updatedDiary);
      setDiaries(diaries.map(diary => diary.id === id ? {...response.data } : diary));
      setEditBody('');
      setEditTitle('');
      navigate('/');
    } catch(err) {
      console.log(`Error: ${err.message}`);
    }
  };

  const handleAdd = async e => {
    e.preventDefault();
    const id = diaries.length ? diaries[diaries.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'yyyy MM dd, pp');
    const newDiary = { id, diarytitle: addTitle, diarybody: addBody, datetime };
    const datas = [...diaries, newDiary]
    setDiaries(datas);
    setAddTitle('');
    setAddBody('');
    navigate('/');
    try {
      const response = await api.post('/diaries/', newDiary);
      const datas = [...diaries, response.data]
      localStorage.setItem('diaries', JSON.stringify(datas))
      setDiaries(datas);
      setAddTitle('');
      setAddBody('');
      navigate('/');
    } catch(err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home 
          diaries={diaries}
        />} />
        <Route path="create" element={<Create 
          addTitle={addTitle}
          setAddTitle={setAddTitle}
          addBody={addBody}
          setAddBody={setAddBody}
          handleAdd={handleAdd}
        />}/>
        <Route path="diary/:id" element={<DiaryDetails 
          diaries={diaries}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />}/>
        <Route path="edit/:id" element={<EditDiary
          diaries={diaries}
          editBody={editBody}
          setEditBody={setEditBody}
          editTitle={editTitle}
          setEditTitle={setEditTitle}
          handleUpdate={handleUpdate}
        />}/>
      </Route>
    </Routes>
  );
}

export default App;
