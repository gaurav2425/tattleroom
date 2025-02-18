import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  phone: "",
  name: "",
  dob: "",
  gender: "",
  bio: "",
  // photos: [],
  interests: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
} = userSlice.actions;
export default userSlice.reducer;
