import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
        {/* <Footer /> */}
      </Provider>
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
        children: [
          {
            path: "/",
            element: <MainContainer />,
          },
          {
            path: "watch",
            element: <WatchPage />,
          },
        ],
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
