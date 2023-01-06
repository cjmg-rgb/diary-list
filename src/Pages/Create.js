const Create = ({
  addTitle, setAddTitle,
  addBody, setAddBody,
  handleAdd
}) => {
  return (  
    <form className="create"
      onSubmit={handleAdd}
      >
      <div className="create-form">
      <h2>Add new diary</h2>
        <label htmlFor="title"></label>
        <input type="text" 
          id="title"
          placeholder="Title"
          value={addTitle}
          onChange={e => setAddTitle(e.target.value)}
          required
        />
        <textarea
          rows='10'
          placeholder="Body..."
          value={addBody}
          onChange={e => setAddBody(e.target.value)}
          required
        />
        <button
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
 
export default Create;