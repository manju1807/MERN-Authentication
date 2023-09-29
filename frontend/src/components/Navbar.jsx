import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex gap-2 bg-violet-600 flex-row justify-center p-2 pr-3 font-bold text-gray-100">
        <Link to="/">Home</Link>
        <Link to="/Login">Log in</Link>
        <Link to="/Register">Register</Link>
      </nav>
    </>
  );
};

export default Navbar;
