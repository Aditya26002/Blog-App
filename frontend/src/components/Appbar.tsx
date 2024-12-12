import { Link } from "react-router-dom";

const Appbar = () => {
  return (
    <nav className="bg-white py-4 px-10 sticky top-0 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/blogs"
          className="flex items-center text-3xl font-bold font-serif cursor-pointer"
        >
          InkVerse
        </Link>
        {/* <button className="lg:hidden flex justify-center w-8 h-8 bg-gray-200 rounded-full">
          <span className="sr-only">Open navigation menu</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button> */}

        <div className="flex items-center space-x-4">
          <Link to={"/publish"}>
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            >
              New
            </button>
          </Link>

          <div className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
            <Avatar name="Aditya" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Appbar;

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-semibold text-2xl text-gray-800 dark:text-gray-100">
        {name[0]}
      </span>
    </div>
  );
}
