import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="h-14 flex justify-center items-center shadow-t-lg gap-2 border-t-2">
      <span>Created By</span> <i class="fa-solid fa-heart fa-flip"></i>
      <a
        href="https://github.com/ayushmaan163"
        target="_blank"
        title="Ayushmaan Jaiswal's GitHub Profile"
      >
        <strong>Ayushmaan Jaiswal</strong>
      </a>
      <i className="fa-solid fa-copyright"></i> 2023
      <Link to="/">
        <strong style={{ fontFamily: "Oswald" }}>YouTube</strong>
      </Link>
    </div>
  );
};
export default Footer;
