import HeaderFilter from "./HeaderFilter";
import {
    DotsVerticalIcon,
    MapIcon,
    NewspaperIcon,
    PhotographIcon,
    PlayIcon,
    SearchIcon,
  } from "@heroicons/react/outline";


function HeaderFilters() {
    return (
        <div className="flex w-full text-gray-700 justify-evenly 
        text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">
            {/* Left */}
            <div className="flex space-x-6">
                <HeaderFilter Icon={SearchIcon} title="All" selected/>
                <HeaderFilter Icon={PhotographIcon} title="Images"/>
                <HeaderFilter Icon={PlayIcon} title="Videos"/>
                <HeaderFilter Icon={NewspaperIcon} title="News"/>
                <HeaderFilter Icon={MapIcon} title="Maps"/>
                <HeaderFilter Icon={DotsVerticalIcon} title="More"/>
            </div>

            {/* Right */}
            <div className="flex space-x-4">
            <p className="headerLink">Settings</p>
            <p className="headerLink">Tools</p>
            </div>
        </div>
    )
}

export default HeaderFilters
