const Header = () => {
  return (
    <nav className="w-full bg-sky-900 py-4 px-4">
      <div className="flex justify-between items-center px-10">
        <h1 className="text-xl font-bold">Navbar</h1>
        <ul className="flex space-x-10">
          <li>
            <a href="#" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Contact
            </a>
          </li>
        </ul>
        <h1 className="text-white">Login</h1>
      </div>
    </nav>
  );
};

export default Header;
