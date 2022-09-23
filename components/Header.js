// import React from 'react';
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
    CheckBadgeIcon,
    HomeIcon,
    LightBulbIcon,
    MagnifyingGlassIcon,
    Square2StackIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import rectangleStackIcon from "@heroicons/react/24/outline/esm/RectangleStackIcon";



function Header() {
    return (
        <header className={"flex flex-col sm:flex-row justify-between items-center h-auto"}>
            <div className={" flex flex-grow justify-evenly max-w-2xl"}>
                <HeaderItem title={'HOME'} Icon={HomeIcon } />
                <HeaderItem title={'TRENDING'} Icon={LightBulbIcon } />
                <HeaderItem title={'VERIFIED'} Icon={CheckBadgeIcon } />
                <HeaderItem title={'COLLECTIONS'} Icon={rectangleStackIcon } />
                <HeaderItem title={'SEARCH'} Icon={MagnifyingGlassIcon } />
                <HeaderItem title={'ACCOUNT'} Icon={UserIcon } />
            </div>

            <Image className={"object-contain"} src={"https://links.papareact.com/ua6"}
                   width={200}
                    height={100}/>
        </header>
    );
}

export default Header;