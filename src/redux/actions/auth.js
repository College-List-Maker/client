import { AUTH } from "../const/actionsTypes";
import * as api from "../../api/index";

export const loadUser = () => async (dispatch) => {
  const localUser = JSON.parse(localStorage.getItem("user_info"));
  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const continueGoogle = (accessToken, navigate) => async (dispatch) => {
  try {
    const { data } = await api.continueGoogle(accessToken);
    dispatch({ type: AUTH, data });
  } catch (err) {
    console.log(err);
  }
};
