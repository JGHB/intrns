const SearchBox = () => {
  return (
    <div className="border-black w-full shadow-md rounded-lg ring-slate-300 ring-1 flex-wrap flex flex-row justify-between">
      <div className="w-1/3 ">
        <div
          tabIndex={0}
          className="focus-within:outline-none focus-within:ring focus-within:ring-violet-300 focus-within:text-blue-500"
        >
          <h1 className="focus-within:text-blue-500">
            What job are you looking for?
          </h1>
          <input
            type="text"
            placeholder="Search"
            className="text-black focus:text-black"
          />
        </div>
      </div>
      <div
        tabIndex={0}
        className="p-8 text-center text-white bg-blue-500 cursor-pointer focus:border-4 focus:border-yellow-500"
      >
        Click me!
      </div>
      <div>HELLO</div>
      <div>HELLO</div>
    </div>
  );
};

export default SearchBox;
