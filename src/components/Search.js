const Search = () => {
  return (  
    <form 
      className="search-bar"
      onSubmit={e => e.preventDefault()}
    >
      <input type="search"
        placeholder="Search"
      />
    </form>
  );
}
 
export default Search;