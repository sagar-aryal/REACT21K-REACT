import React from "react";

const NotesList = ({ notes }) => {
  return (
    <div>
      <h2>My Notes List</h2>
      <ul>
        {notes.map((note) => {
          return <li key={note.id}>{note.message}</li>;
        })}
      </ul>
    </div>
  );
};
export default NotesList;
