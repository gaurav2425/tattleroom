import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  name: "",
  dob: "",
  gender: "",
  bio: "",
  // photos: [],
  interests: [],
  stage: "onboarding",
  token: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setStage: (state, action) => {
      state.stage = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDob: (state, action) => {
      state.dob = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setBio: (state, action) => {
      state.bio = action.payload;
    },
    setPhotos: (state, action) => {
      state.photos = action.payload;
    },
    setInterests: (state, action) => {
      state.interests = action.payload;
    },
  },
});

export const {
  setPhone,
  setName,
  setDob: setDateOfBirth,
  setGender,
  setBio: setBioData,
  setInterests,
  setPhotosData: setPhotos,
  setStage,
  setToken,
} = userSlice.actions;
export default userSlice.reducer;
