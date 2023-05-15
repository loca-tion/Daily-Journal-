import React, { useState } from "react";
import "../Css/AddNotes.css";
import { Zoom } from "@mui/material";

const AddNote = (props) => {

  const [isExpand, setExpand] = useState(false);


  const [note, setNote] = useState({
    Title: "",
    Information: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      Title: "",
      Information: "",
    });
    event.preventDefault();
  }

  function expand(){
    setExpand(true);
  }

  return (
    <div className="AddNote">
      <form>
        {isExpand && <input
          name="Title"
          value={note.Title}
          onChange={handleChange}
          type="text"
          placeholder="Title"
          id="Title"
        ></input>}
       
        <textarea
          name="Information"
          value={note.Information}
          onClick={expand}
          onChange={handleChange}
          type="text"
          placeholder="Take a note"
          rows={isExpand ? 3 : 1}
        ></textarea>
        <Zoom in={isExpand}>
          <button onClick={submitNote}>ADD</button>
        </Zoom>
      </form>
    </div>
  );
};

export default AddNote;
