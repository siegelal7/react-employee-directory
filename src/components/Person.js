import React, { Component } from "react";

const style = {
  height: "12vh",
};

class Person extends Component {
  state = { people: this.props };

  componentDidMount() {
    this.setState({ people: this.props.person });
  }

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col" onClick={this.props.clickEvent}>
              Name
            </th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Location</th>
          </tr>
        </thead>
        {this.props.person.map((i, d) => (
          <tbody key={d}>
            <tr style={style}>
              <th scope="row">
                <img src={i.picture.thumbnail} alt={i.name.first} />
              </th>
              <td>
                {i.name.first} {i.name.last}
              </td>
              <td>{i.email}</td>
              <td>{i.phone}</td>
              <td>
                {i.location.city}, {i.location.state}
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  }
}

export default Person;
