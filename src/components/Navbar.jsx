import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  return (
    <div className="shadow-lg p-4 font-poppings bg-gradient-to-r from-purple-500  to-gray-500">
      <div className="flex max-w-7xl justify-between items-center mx-auto">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img
              src="https://img.freepik.com/free-vector/movie-time-neon-sign-sign_24908-55555.jpg"
              alt="BrandLogo"
              className="w-12 h-12 rounded-full"
            />
            <h1 className="text-emerald-50 font-sans font-[400] text-[26px] tracking-wider">
              MOVIES
            </h1>
          </div>
        </Link>

        <div className="relative">
          <MenuIcon className="text-3xl cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
