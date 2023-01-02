import * as actionType from "../const/actionsTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case actionType.AUTH:
      localStorage.setItem("user_token", action?.data.token);
      localStorage.setItem("user_id", action?.data.result.id);
      return { ...state, authData: action.data };
    case actionType.LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
    default:
      return state;
  }
};

export default authReducer;
