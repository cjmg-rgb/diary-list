import { NavLink, useParams } from "react-router-dom";
import { useEffect } from "react";

const EditDiary = ({ 
  editTitle, setEditTitle,
  editBody, setEditBody,
  handleUpdate, diaries
}) => {

  const { id } = useParams();
  const diary = diaries.find(d => d.id.toString() === id);

  useEffect(() => {
        if(diary) {
          setEditBody(diary.body)
          setEditTitle(diary.title)
        }
      }, [diary, setEditBody, setEditTitle])
    
      return (
        <>
          <form className="create"
            onSubmit={e => e.preventDefault()}
            >
            <div className="create-form">
            <h2>Edit Diary</h2>
              <label htmlFor="title"></label>
              <input type="text" 
                id="title"
                placeholder="Title"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
                required
              />
              <textarea
                rows='10'
                placeholder="Body..."
                value={editBody}
                onChange={e => setEditBody(e.target.value)}
                required
              />
              <button
                type="submit"
                onClick={() => handleUpdate(diary.id)}
                disabled
              >
                Edit
              </button>
            </div>
          </form>
        </>
      );
}
 
export default EditDiary;

// import { useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom";

// const EditDiary = (
//   editTitle, setEditTitle,
//   editBody, setEditBody,
//   handleUpdate, diaries
// ) => {

//   const { id } = useParams();
//   const diary = diaries.find(d => (d.id).toString() === id);

//   useEffect(() => {
//     if(diary) {
//       setEditBody(diary.body)
//       setEditTitle(diary.title)
//     }
//   }, [diary, setEditBody, setEditTitle])

//   return (
//     <>
//       {editTitle && <form className="create"
//         onSubmit={e => e.preventDefault()}
//         >
//         <div className="create-form">
//         <h2>Edit Diary</h2>
//           <label htmlFor="title"></label>
//           <input type="text" 
//             id="title"
//             placeholder="Title"
//             value={editTitle}
//             onChange={e => setEditTitle(e.target.value)}
//             required
//           />
//           <textarea
//             rows='10'
//             placeholder="Body..."
//             value={editBody}
//             onChange={e => setEditBody(e.target.value)}
//             required
//           />
//           <button
//             type="submit"
//             onClick={() => handleUpdate(diary.id)}
//           >
//             Edit
//           </button>
//         </div>
//       </form>}
//       {!editTitle &&
//         <div className="not-found">
//           <h1>That ID was not found</h1>
//           <p>Back to <NavLink to='/'>homepage</NavLink></p>
//         </div>
//       }
//     </>
//   );
// }
 
// export default EditDiary;