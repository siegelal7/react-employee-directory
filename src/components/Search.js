import React from "react";
// import ReactDOM from "react-dom";
import PersonCard from "./Person";
// import Results from "./Results";
const style = {
  marginTop: "0.5%",
  marginBottom: "0.5%",
};

const Search = (props) => {
  return (
    <>
      <form style={style} className="text-center" onSubmit={props.handleSubmit}>
        <input
          onChange={props.handleInputChange}
          type="text"
          value={props.search}
          placeholder="search by first name"
          name="search"
          id="search"
        />
      </form>

      <PersonCard person={props.searchRes} clickEvent={props.handleSort} />
    </>
  );
};

export default Search;
