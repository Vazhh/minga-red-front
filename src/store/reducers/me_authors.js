import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/me_authors";

const { saveProfile } = actions;

const initial_state = {
  profile: {},
};

const reducer = createReducer(initial_state, (build) =>
  build.addCase(saveProfile, (state, action) => {
    let new_state = {
      ...state,
      profile: action.payload.profile,
    };
    return new_state;
  })
);

export default reducer;