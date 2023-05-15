import React from "react";

const Navbar = () => {
  return (
    <div
      className="Navbar"
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#38a169",
        padding: "1.1rem 4rem",
        boxShadow:'#1a171763 0px 0px 10px 3px',
      }}
    >
      <h5 style={{ fontSize: "30px", color: "#fff",fontWeight:"bold" }}>DAILY &nbsp;JOURNAL</h5>
    </div>
  );
};

export default Navbar;
