/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadUsers } from "../../store/actions/users";
import Loader from "../layout/Loader";
import UserCard from "../user/UserCard";

const Home = ({ loadUsers, users, loading }) => {
  useEffect(() => {
    loadUsers();
  }, []);

  const [visible, setVisible] = useState({
    from: 0,
    to: 5
  });

  const navigate = (next = true) => {
    const { from, to } = visible;
    if (next) {
      if (to > users.length) {
        setVisible({
          from: 0,
          to: 5
        });
      } else {
        setVisible({
          from: from + 5,
          to: to + 5
        });
      }
    } else {
      //   console.log(from, to);
      if (from < 11) {
        setVisible({
          from: users.length - 5,
          to: users.length
        });
      } else {
        setVisible({
          from: from - 5,
          to: to - 5
        });
      }
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul className="collection  with-header">
          <li className="collection-header">Users</li>
          {users.length ? (
            users
              .slice(visible.from, visible.to)
              .map(user => <UserCard key={user.id} user={user} />)
          ) : (
            <span>We could not find any users</span>
          )}
          {users.length && (
            <ul className="pagination collection-header">
              <li className="waves-effect" onClick={() => navigate(false)}>
                <i className="material-icons">chevron_left</i>
              </li>
              <li className="waves-effect" onClick={navigate}>
                <i className="material-icons">chevron_right</i>
              </li>
            </ul>
          )}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.users,
  loading: state.users.loading
});

const mapDispatchToProps = { loadUsers };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
