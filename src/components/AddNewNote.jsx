function AddNewNote() {
  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={HandleSubmit}>
        <input type="text" className="text-field" placeholder="note title"/>
        <input type="text" className="text-field" placeholder="note descriotion"/>
        <button className="btn btn--primary" >
          Add New Note
        </button>
      </form>
    </div>
  );
}

export default AddNewNote;
