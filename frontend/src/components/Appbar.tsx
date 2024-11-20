const Appbar = () => {
  return (
    <nav className="bg-white py-4 px-6 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-3xl font-bold font-serif">InkVerse</span>
        </div>
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
        <div className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <Avatar name="Aditya" />
        </div>
      </div>
    </nav>
  );
};

export default Appbar;

function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
      <span className="font-semibold text-2xl text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
