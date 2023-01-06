import Diaries from "../components/Diaries";
import Search from "../components/Search";

const Home = ({ diaries }) => {
  return (  
    <main>
      <Search />
      {diaries.length ? (
        <Diaries 
          diaries={diaries}
        />
      ) : (<h2 style={{textAlign: 'center'}}>No Diaries Yet</h2>)}
    </main>
  );
}
 
export default Home;