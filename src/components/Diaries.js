import DiaryList from "./DiaryList";

const Diaries = ({ diaries}) => {
  return (  
    <ul className="diaries">
      {diaries.map(diary => (
        <DiaryList diary={diary} key={diary.id} />
      ))}
    </ul>
  );
}
 
export default Diaries;