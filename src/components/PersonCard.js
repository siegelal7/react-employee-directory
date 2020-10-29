import React from "react";

const style = {
  height: "12vh",
};
const PersonCard = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      {props.person.map((i, d) => (
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
};

export default PersonCard;
