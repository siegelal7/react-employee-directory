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
  render() {
    return (
      <nav className="text-center" style={style}>
        <h3 style={spanStyle} onClick={this.props.handleNavClick}>
          Employee Directory
        </h3>
        <p
          style={{
            color: "white",
          }}
        >
          Click Name to sort or use the search to narrow results
        </p>
      </nav>
    );
  }
}

export default Navi;
