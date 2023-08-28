import Header from "@/components/header";
import HomePageContent from "@/components/homePageContent";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="px-6 pt-9">
        <HomePageContent />
      </div>
    </main>
  );
}
