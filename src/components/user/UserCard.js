import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { name, email, id } = user;
  return (
    <li className="collection-item avatar">
      <i className="material-icons circle green">account_circle</i>
      <span className="title">{name}</span>
      <p>{email}</p>

      <div className="row" style={{ marginBottom: "unset", marginTop: "8px" }}>
        <Link to={`/edit/${id}`} className="col s2">
          <i className="material-icons left">edit</i>
          <span>Edit</span>
        </Link>
        <Link to={`/usr/${id}`} className="col s2">
          <i className="material-icons left">arrow_right</i>
          <span>Profile</span>
        </Link>
      </div>
    </li>
  );
};

export default UserCard;
