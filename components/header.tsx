import Image from "next/image";
import startupLogo from "../public/images/startuplogo.svg";
import DropdownButton from "./dropdownButton";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import HamburgerMenu from "./hamburgerMenu";

export default function Header() {
  return (
    <main className="flex justify-between p-6">
      <div className="flex flex-row">
        <Image priority src={startupLogo} height={40} width={40} alt="" />
        <div className="hidden md:flex flex-row pl-5">
          <DropdownButton
            buttonText={"Browse Jobs"}
            options={[
              { name: "Most recent", link: "#" },
              { name: "Remote jobs", link: "#" },
              { name: "Part-time jobs", link: "#" },
              { name: "Internships", link: "#" },
              { name: "By location", link: "#" },
              { name: "By tag", link: "#" },
              { name: "By role", link: "#" },
              { name: "By collection", link: "#" },
            ]}
            className="relative inline-block text-left"
          />
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200">
            Startups
          </button>
          <button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-white px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-200">
            Advertise
          </button>
          <DropdownButton
            buttonText={"More"}
            options={[
              { name: "Interview Questions", link: "#" },
              { name: "Student Center", link: "#" },
              { name: "AI Jobs", link: "#" },
              { name: "Web3 Jobs", link: "#" },
              { name: "Twitter", link: "#" },
            ]}
            className="relative inline-block text-left"
          />
        </div>
      </div>
      <div className="flex flex-row">
        <DropdownButton
          buttonText={"For Employers"}
          options={[
            { name: "Sign in", link: "#" },
            { name: "Post a job", link: "#" },
            { name: "Pricing", link: "#" },
            { name: "Advertise", link: "#" },
            { name: "Contact us", link: "#" },
          ]}
          className="hidden relative md:inline-block text-left"
        />
        <button className="inline-flex w-full justify-center gap-x-1.5 rounded-full bg-blue-600 text-white px-3 py-2 text-sm font-semibold">
          Post a Job
        </button>
        <HamburgerMenu />
      </div>
    </main>
  );
}
