import search from '../images/header2.png';
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import { XIcon } from '@heroicons/react/solid';

function Header() {
    const router = useRouter();
    const searchInputRef = useRef(null)

    return (
        <header>
            <Image src={search} 
            loading="lazy"
            height={40}
            width={120}
            className="cursor-pointer"
            onClick={() => router.push("/")}
            />
            <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
                <input type="text" ref={searchInputRef} className="flex-grow w-full focus:outline-none"/>
                <XIcon className="h-7 cursor-pointer transition duration-150 transform hover:scale-110" style={{color: 'gray'}}/>
            </form>
        </header>
    )
}

export default Header
