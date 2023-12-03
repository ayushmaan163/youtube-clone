import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useEffect } from "react";

const ScrollLockComponent = () => {
  useEffect(() => {
    // Save the current scroll position
    const scrollPosition = window.scrollY;

    // Disable scrolling on the body
    document.body.style.overflow = "hidden";

    // Restore the scroll position when the component is unmounted
    return () => {
      document.body.style.overflow = "auto";
      window.scrollTo(0, scrollPosition);
    };
  }, []);

  return (
    <div className="flex flex-col overflow-y-hidden">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return !isMenuOpen ? (
    <div className="flex flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  ) : (
    <ScrollLockComponent />
  );
};
export default MainContainer;
