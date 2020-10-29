import React, { Component } from "react";
const style = {
  background: "navy",
  height: "18vh",
};
const spanStyle = {
  color: "white",
  margin: "auto",
  fontFamily: "'Montserrat', sans-serif",
  paddingTop: "1%",

  cursor: "pointer",
};
class Navi extends Component {
  handleClick = (e) => {
    // console.log("clicked");
    window.location.reload();
  };

  render() {
    return (
      <nav className="text-center" style={style}>
        <h3 style={spanStyle} onClick={this.handleClick}>
          Employee Directory
        </h3>
        <p
          style={{
            color: "white",
          }}
        >
          Click Name to sort or use the search to narrow results
        </p>
        {/* <p
          style={{
            color: "white",
          }}
        >
          Click "Employee Directory" above to return to Home Page
        </p> */}
      </nav>
    );
  }
}

export default Navi;
