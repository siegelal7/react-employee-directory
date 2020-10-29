import React from "react";
import PersonCard from "./Person";
import Navbar from "./Navi";
// import axios from "axios";
const style = {
  marginTop: "0.5%",
  marginBottom: "0.5%",
};

const Results = (props) => {
  //   console.log(props.searchResults);
  return (
    <>
      <Navbar prompt={true} />
      {/* {props.searchResults.map((i) => (
        <h1>{i.name.first}</h1>
      ))} */}
      <>
        <form
          style={style}
          className="text-center"
          //   onSubmit={this.handleSubmit}
        >
          <input
            // onChange={this.handleInputChange}
            type="text"
            placeholder="search"
            name="search"
            id="search"
          />
        </form>
        <PersonCard person={props.searchResults} />
      </>
    </>
  );
};

export default Results;
