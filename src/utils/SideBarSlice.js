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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = SideBarSlice.actions;
export default SideBarSlice.reducer;
