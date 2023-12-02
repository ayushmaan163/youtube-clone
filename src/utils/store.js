import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";

const store = configureStore({
  reducer: {
    app: SideBarSlice,
  },
});

export default store;
