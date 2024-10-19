import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-500 p-2 shadow-lg">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-2xl text-white font-bold hover:text-gray-200 transition">
          ShoppyGlobe
        </Link>
        <nav className="space-x-6">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/cart" className="relative text-white hover:underline">
            Cart
            
          </Link>
        </nav>
        <div>
          <Link
            to="/login"
            className="bg-white text-purple-600 font-bold py-2 px-4 rounded-lg shadow hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="ml-4 bg-transparent border border-white text-white font-bold py-2 px-4 rounded-lg hover:bg-white hover:text-purple-600 transition duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
