import { createSlice } from "@reduxjs/toolkit";

const SideBarSlice = createSlice({
  name: "SideBar",
  initialState: {
    isMenuOpen: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = SideBarSlice.actions;
export default SideBarSlice.reducer;
