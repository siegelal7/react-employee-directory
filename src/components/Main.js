import React, { Component } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import axios from "axios";

class Main extends Component {
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
    axios.get("https://randomuser.me/api/?results=75&nat=us").then((res) => {
      this.setState({ searchRes: res.data.results, results: res.data.results });
      //   console.log(this.state.results.name.first);
    });
  }
  //TODO: doesnt appear to work properly
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state.results);
    let searchVal = this.state.search;
    const res = [];
    for (let i = 0; i < this.state.results.length; i++) {
      const testee = this.state.results[i].name.first;

      if (testee === searchVal) {
        // console.log(this.state.results[i]);
        res.push(this.state.results[i]);
      }
    }
    this.setState({ searchRes: res });
  };
  handleSort = (e) => {
    const ppl = this.state.results;
    const arr = [];
    for (let i = 0; i < ppl.length; i++) {
      arr.push(ppl[i]);
    }
    // console.log(this.props);
    arr.sort((a, b) => {
      if (a.name.first < b.name.first) {
        return -1;
      }
      if (a.name.first > b.name.first) {
        return 1;
      }
      return 0;
    });
    // console.log(arr);
    this.setState({ searchRes: arr });
  };

  handleNavClick = (e) => {
    this.setState({ searchRes: this.state.results });
  };

  //TODO: gotta refactor to pass this down as prop or call navbar in this file
  //   resetPage() {
  //     this.setState({ searchRes: this.state.results });
  //   }

  render() {
    return (
      <div>
        <Navbar handleNavClick={this.handleNavClick} />
        <Search
          search={this.state.search}
          results={this.state.results}
          searchRes={this.state.searchRes}
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          handleSort={this.handleSort}
        />
      </div>
    );
  }
}

export default Main;
