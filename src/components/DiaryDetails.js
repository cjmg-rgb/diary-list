import { NavLink, useParams } from "react-router-dom";
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const DiaryDetails = ({ 
  diaries,
  handleDelete
}) => {

  const { id } = useParams();
  const diary = diaries.find(d => d.id.toString() === id);

  return (
    <>
      {diary && 
        <div className="diary-details">
          <header>
            <h2>{diary.diarytitle}</h2>
            <div>
              <NavLink>
                <button disabled>
                  <BiEdit />
                </button>
              </NavLink>
              <button
                onClick={() => handleDelete(diary.id)}
              >
                <AiFillDelete />
              </button>
            </div>
          </header>
          <h4>{diary.diarybody}</h4>
        </div>
      }
      {!diary &&
        <div className="not-found">
          <h1>That ID was not found</h1>
          <p>Back to <NavLink to='/'>homepage</NavLink></p>
        </div>
      }
    </>
  );
}
 
export default DiaryDetails;