import { createReducer } from "@reduxjs/toolkit";
import authorsAction from "../actions/me_authors";

const { saveProfile } = authorsAction;

const initialState = {
  profile: [],
};

const authorsReducer = createReducer(
  initialState,
  (builder) => builder.addCase(
    saveProfile,
    (state, action) => {
      const newState = {
        ...state,
        profile: action.payload.profile,
      };
      return newState;
    }
  )
);

export default authorsReducer;