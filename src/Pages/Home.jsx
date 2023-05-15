import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import Note from "../Component/Note";
import AddNote from "../Component/AddNote";

const Home = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevnotes) => {
      return [...prevnotes, newNote];
    });
  }

  function deleteNode(id) {
    setNotes((prevnotes) => {
      return prevnotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Navbar />
      <AddNote onAdd={addNote} />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",height:'100%'}}>
        {notes.map((noteItem, index) => (
          <Note
            key={index}
            id={index}
            Title={noteItem.Title}
            Information={noteItem.Information}
            onDelete={deleteNode}
          />
        ))}
      </div>

    </div>
  );
};

export default Home;
