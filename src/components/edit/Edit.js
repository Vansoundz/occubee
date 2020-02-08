/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, Fragment, useState } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import { loadUsers, editUser } from "../../store/actions/users";
import Loader from "../layout/Loader";

const Edit = ({
  match: {
    params: { id }
  },
  users,
  loadUsers,
  editUser
}) => {
  let labels;
  const [loading, setloading] = useState(true);
  const [feedback, setFeedback] = useState("");
  const [user, setuser] = useState({
    name: "",
    occupation: "",
    bio: "",
    email: ""
  });
  if (!users.length) {
    loadUsers();
  }

  useEffect(() => {
    let nuser = users.find(user => user.id.toString() === id);
    if (nuser) {
      const { name, email, occupation, bio } = nuser;
      setuser({
        name,
        email,
        occupation,
        bio
      });
    }
    if (users.length) {
      setloading(false);
    }
  }, [users]);

  useEffect(() => {
    labels = document.querySelectorAll(".lbl");
    labels.forEach(label => {
      label.classList.add("active");
    });
  });

  const onChange = e => {
    setuser({
      ...user,
      [e.target.id]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();

    const { name, email, occupation, bio } = user;
    if (!name) {
      setFeedback("Name id required");
    } else if (!email) {
      setFeedback("Email id required");
    } else if (!occupation) {
      setFeedback("Occupation id required");
    } else if (!bio) {
      setFeedback("Bio id required");
    } else {
      user.id = id;
      setloading(true);
      let res = await editUser(user);
      setuser(res);
      setloading(false);
    }
    setTimeout(setFeedback(""), 2000);
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="row" style={{ display: "flex" }}>
          <form
            className="col s12 m8 l6"
            style={{ margin: "auto" }}
            onSubmit={onSubmit}
          >
            <h4>Edit user</h4>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={onChange}
                  id="name"
                  type="text"
                  value={user.name}
                  className="validate"
                />
                <label className="lbl" htmlFor="name">
                  Name
                </label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={onChange}
                  id="email"
                  type="email"
                  value={user.email}
                  className="validate"
                />
                <label className="lbl" htmlFor="email">
                  Email
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input
                  onChange={onChange}
                  id="occupation"
                  type="text"
                  value={user.occupation}
                  className="validate"
                />
                <label className="lbl" htmlFor="occupation">
                  Occupation
                </label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <textarea
                  onChange={onChange}
                  id="bio"
                  type="bio"
                  value={user.bio}
                  className="materialize-textarea"
                  style={{ height: "85px" }}
                ></textarea>
                <label className="lbl" htmlFor="bio">
                  Bio
                </label>
              </div>
            </div>
            {feedback ? (
              <div className="row red white-text">{feedback}</div>
            ) : (
              <Fragment></Fragment>
            )}
            <div className="row">
              <button className="btn green accent-4">Submit</button>
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = { loadUsers, editUser };

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Edit);
