import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";

const Body = () => {
  return (
    <div className="relative mt-16">
      <SideBar />
      <Outlet />
    </div>
  );
};
export default Body;
