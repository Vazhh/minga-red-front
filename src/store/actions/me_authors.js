import { createAction } from "@reduxjs/toolkit";

const saveProfile = createAction("saveProfile", (obj) => {
  return {
    payload: {
      profile: obj.profile,
    },
  };
});

const authorsAction = {
  saveProfile,
};

export default authorsAction;