import React, { Component } from "react";
import ReactDOM from "react-dom";
import PersonCard from "./Person";
import Results from "./Results";
import axios from "axios";
const style = {
  marginTop: "0.5%",
  marginBottom: "0.5%",
};
class SearchBar extends Component {
  state = {
    search: "",
    results: [],
    searchRes: [],
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  };
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
      this.setState({ results: res.data.results });
      //   console.log(this.state.results.name.first);
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.results);
    let searchVal = this.state.search;
    // if (this.state.results.name.first.includes(this.state.search)) {
    //   console.log("ay");
    // }
    // console.log(searchVal);
    for (let i = 0; i < this.state.results.length; i++) {
      const testee = this.state.results[i].name.first;
      const res = [];
      if (testee === searchVal) {
        // console.log(this.state.results[i]);
        res.push(this.state.results[i]);
        //too slow for render
        // this.setState({ searchRes: res });
        ReactDOM.render(
          <Results searchResults={res} />,
          document.getElementById("root")
        );
      }
    }

    // console.log(testee);
    // axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
    //   console.log(res.data.results);
    // });
  };
  //   handleSort = () => {
  //     // e.preventDefault();
  //     console.log("test");
  //   };

  render() {
    return (
      <>
        <form
          style={style}
          className="text-center"
          onSubmit={this.handleSubmit}
        >
          <input
            onChange={this.handleInputChange}
            type="text"
            placeholder="search"
            name="search"
            id="search"
          />
        </form>
        {/* {this.state.results.map((i) => (
          <PersonCard
            firstName={i.name.first}
            lastName={i.name.last}
            phone={i.cell}
            email={i.email}
          />
        ))} */}
        <PersonCard person={this.state.results} />
      </>
    );
  }
}

export default SearchBar;
