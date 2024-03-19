import React from "react";

const loadNotes = async () => {
  const response = await fetch("http://localhost:3000/api/notes");
  const data = await response.json();
  return data;
};

const HomePage = async () => {
  const notes = await loadNotes();
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h1>{note.title}</h1>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
