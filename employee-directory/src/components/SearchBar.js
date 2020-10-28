import React, { Component } from "react";
import axios from "axios";
const style = {
  marginTop: "0.5%",
};
class SearchBar extends Component {
  state = {
    search: "",
    results: [],
  };
  handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    this.setState({ [name]: value });
  };
  componentDidMount() {
    axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
      this.setState({ results: res.data.results });
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.search);
    // axios.get("https://randomuser.me/api/?results=50&nat=us").then((res) => {
    //   console.log(res.data.results);
    // });
  };

  render() {
    return (
      <form style={style} className="text-center" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInputChange}
          type="text"
          placeholder="search"
          name="search"
          id="search"
        />
      </form>
    );
  }
}

export default SearchBar;
