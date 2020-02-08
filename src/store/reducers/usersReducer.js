import { LOAD_USERS } from "../actionTypes";

const initialState = {
  users: [],
  loading: true
};

const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOAD_USERS:
      return {
        ...state,
        users: payload,
        loading: false
      };
    default:
      return state;
  }
};

export default usersReducer;
