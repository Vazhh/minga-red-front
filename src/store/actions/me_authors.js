import { createAction } from "@reduxjs/toolkit";

const saveProfile = createAction("saveProfile", (data) => {
  // console.log(data);
  return {
    payload: {
      profile: data,
    },
  };
});

const authorsAction = {
  saveProfile,
};

export default authorsAction;