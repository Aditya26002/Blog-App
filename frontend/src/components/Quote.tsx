const Quote = () => {
  return (
    <div className="bg-zinc-200 h-screen flex flex-col justify-center ">
      <div className="flex justify-center">
        <div className="max-w-lg">
          <h1 className="text-3xl font-bold text-right">
            "The only thing we have to fear is fear itself."
          </h1>
          <p className=" mt-3  font-bold text-right">Franklin D. Roosevelt</p>
          <p className=" text-sm font-semibold text-zinc-400 text-right">
            President of the United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quote;
