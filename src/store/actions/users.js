import Axios from "axios";
import { LOAD_USERS } from "../actionTypes";
import M from "materialize-css";

export const loadUsers = () => async dispatch => {
  try {
    let res = await Axios.get("/users");
    const users = res.data;
    dispatch({
      type: LOAD_USERS,
      payload: users
    });
  } catch (error) {
    dispatch({
      type: LOAD_USERS,
      payload: []
    });
    console.log(error);
  }
};

export const editUser = user => async dispatch => {
  const { id } = user;
  try {
    const res = await Axios.patch(`/users/${id}`, user);
    loadUsers();
    M.toast({ html: "User edited successfully" });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
