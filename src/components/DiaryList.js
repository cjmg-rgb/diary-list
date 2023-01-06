import { RxViewVertical } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';

const DiaryList = ({ diary }) => {
  return (
    <NavLink to={`/diary/${diary.id}`}>
      <li className='diary'>
        <div>
          <h3 className='diary-title'>{diary.diarytitle}</h3>
          <p className='diary-date'>{diary.datetime}</p>
        </div>
        <button>
          <RxViewVertical />
        </button>
      </li>
    </NavLink>
  );
}
 
export default DiaryList;