import searchy from "../images/header2.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import HeaderFilters from "../components/HeaderFilters";
// 
import Avatar from "./Avatar";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    // If theres no term
    if (!term) return;

    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src={searchy}
          loading="lazy"
          height={60}
          width={150}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-md max-w-3xl items-center">
          <input
            type="text"
            ref={searchInputRef}
            className="flex-grow w-full focus:outline-none"
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = "")}
            className="h-7 sm:mr-3 cursor-pointer transition duration-150 transform hover:scale-110"
            style={{ color: "gray" }}
          />
          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-primary border-l-2 pl-4 border-gray" />
          <SearchIcon className="h-6 hidden text-primary sm:inline-flex" />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        <Avatar className="ml-auto" url="https://avatarfiles.alphacoders.com/128/thumb-128984.png"/>
      </div>

      {/* Header filters */}
      <HeaderFilters />
    </header>
  );
}

export default Header;
