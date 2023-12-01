import { Outlet, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    ],
  },
]);

export default appRouter;

{
  /*
Header
Body
  SideBar
    MenuItems
  MainContainer
    ButtonsList
    VideoContainer
      VideoCard
*/
}
