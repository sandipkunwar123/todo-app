import Navbar from "./Navbar-list";
import LogoImage from "/Users/Sandip/react-projects/demo/src/assets/image/image.png";
export default function navbar() {
  return (
    <div>
      <header>
        <img src={LogoImage} alt="" />
        <Navbar />
        <button className="px-3 py-3 bg-green-600 text-white rounded block">
          Sign in
        </button>

        <button className="px-3 py-3 bg-green-600 text-white rounded">
          login
        </button>
      </header>
    </div>
  );
}
