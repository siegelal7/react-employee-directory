import React from "react";

const style = {
  background: "navy",
  height: "18vh",
};
const spanStyle = {
  color: "white",
  margin: "auto",
  fontFamily: "'Montserrat', sans-serif",
  paddingTop: "1%",
};
const Navbar = () => {
  return (
    <nav className="text-center" style={style}>
      <h3 style={spanStyle}>Employee Directory</h3>
      <p
        style={{
          color: "white",
        }}
      >
        Click a category to sort or use the search to narrow results
      </p>
    </nav>
  );
};

export default Navbar;
