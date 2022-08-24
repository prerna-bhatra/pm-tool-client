import { handleActions } from "redux-actions";
import { loginUser, loginSuccess, loginFailed } from "./action";

const DEFAULT_STATE = {
  status: "",
  // user: {
  //   email: "",
  //   password: "",
  // },
  token: "",
};

const handlers = {
  [loginUser]: (state) => ({ ...state, status: "PENDING" }),

  [loginSuccess]: (state, action) => {
    if (action.error) {
      return { ...state, status: "ERROR" };
    } else {
      const token = action.payload.token;
      return { ...state, status: "SUCCESS", token };
    }
  },
  [loginFailed]: (state, action) => {
    return { ...state, status: "ERROR", token: "" };
  },
};

export default handleActions(handlers, DEFAULT_STATE);
