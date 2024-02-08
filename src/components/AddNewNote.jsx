import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newNote = {
      title,
      description,
      id: Date.now(),
      completed: false,
      createdAt: new Date().toISOString(),
    };
    title("");
    description("");
  };

  return (
    <div className="add-new-note">
      <h2>Add New Note</h2>
      <form className="note-form" onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="text-field"
          placeholder="note descriotion"
        />
        <button className="btn btn--primary">Add New Note</button>
      </form>
    </div>
  );
}

export default AddNewNote;
