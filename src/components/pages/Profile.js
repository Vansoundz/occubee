/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { compose } from "redux";
import { loadUsers } from "../../store/actions/users";
import Loader from "../layout/Loader";

const Profile = ({
  users,
  match: {
    params: { id }
  },
  loadUsers
}) => {
  const [user, setuser] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!users.length) {
      loadUsers();
    } else {
      setLoading(false);
      let p = users.find(user => user.id.toString() === id);
      if (p) {
        setuser(p);
      }
    }
  }, [users]);
  useEffect(() => {
    let p = users.find(user => user.id.toString() === id);
    if (p) {
      setuser(p);
    }
  }, [id]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          {user && (
            <div className="card">
              <div className="card-content row">
                <div className="col s12 m4 center-align">
                  <div className="">
                    <i className="material-icons circle green white-text large">
                      account_circle
                    </i>
                  </div>

                  <div>
                    <div>
                      <small>Name:</small>
                      <div className="card-title">{user.name}</div>
                    </div>
                    <div>
                      <small>Email:</small>
                      <div>{user.email}</div>
                    </div>
                  </div>
                </div>
                <div className="col s12 m8">
                  <div>
                    <small>Occupation: </small>
                    <div className="card-title">{user.occupation}</div>
                  </div>
                  <div>
                    <small>Bio:</small>
                    <div>{user.bio}</div>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <Link to={`/edit/${id}`}>
                  <i className="material-icons left">edit</i>
                  <span>Edit</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.users
});

const mapDispatchToProps = { loadUsers };

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Profile);
