import Header from "@/components/header";
import SearchBox from "@/components/searchBox";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="px-6 pt-9">
        <h1 className="text-blue-600 font-semibold text-2xl">Startup Jobs</h1>
        <h2 className="w-2/3 pb-3">
          Help shape the future by joining one of the fastest growing technology
          startups.
        </h2>
        <SearchBox />
      </div>
    </main>
  );
}
