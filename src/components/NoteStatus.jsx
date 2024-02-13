import "../App.css";
import Message from "./Message";

function NoteStatus({ notes }) {
  const allNotes = notes.length;
  const completedNotes = notes.filter((n) => n.completed).length;
  const unCompletedNotes = allNotes - completedNotes;

  if (!allNotes)
    return <Message icon="❎"> No Notes has already been added.</Message>;
  return (
    <ul className="note-status">
      <li>
        All
        <span>{allNotes}</span>
      </li>
      <li>
        Completed <span>{completedNotes}</span>
      </li>
      <li>
        Open
        <span>{unCompletedNotes}</span>
      </li>
    </ul>
  );
}

export default NoteStatus;
