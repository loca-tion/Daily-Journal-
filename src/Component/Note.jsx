import React from "react";

const Note = ({ Title, Information, onDelete, id }) => {
  function handleClick() {
    onDelete(id);
  }
  return (
    <div
      className="Note"
      style={{
        display: "block",
        padding: ".8rem .8rem",
        borderRadius: "10px",
        boxShadow: "#1a171763 0px 0px 10px 0px",
        margin: "2rem 2rem",
        maxWidth: "400px",
        background: "#fff",
      }}
    >
      <h5 style={{ fontWeight: "bold", padding: ".2rem 0" }}>{Title}</h5>
      <p
        style={{
          padding: ".6rem 0",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {Information}
      </p>
      <button onClick={handleClick} style={{ color: "#38a169" }}>
        DELETE
      </button>
    </div>
  );
};

export default Note;
