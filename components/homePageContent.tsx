import SearchBox from "./searchBox";
import StartupsSpotlight from "./startupsSpotlight";

const HomePageContent = () => {
  return (
    <div className="flex flex-col w-full">
      <h1 className="text-blue-600 font-semibold text-2xl ">Startup Jobs</h1>
      <h2 className="w-2/3 pb-3">
        Help shape the future by joining one of the fastest growing technology
        startups.
      </h2>
      <div className="flex flex-col items-center">
        <SearchBox />
        <StartupsSpotlight/>
      </div>
    </div>
  );
};

export default HomePageContent;
