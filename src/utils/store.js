import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    app: SideBarSlice,
    search: SearchSlice,
  },
});

export default store;
