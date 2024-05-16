'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import PageLink from './PageLink';

export default function Navbar({ options }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // const listLinks = options.map((option, index) =>
    //     <PageLink
    //         key={index}
    //         text={option === "App" ? "Home" : option}
    //         path={option === "App" ? "../" : `./${option.toLowerCase()}`}
    //     />
    // );

    return (
        <div className="flex justify-between items-center h-24 w-[60%] max-w-[1240px] px-4 z-30 text-gray-700">
            {!menuOpen ?
                <h1 className="w-full text-3xl font-bold text-green-700">FLUENT</h1>
                : <h1></h1>
            }
            <ul className="hidden md:flex">
                <li className="p-4">Product</li>
                <li className="p-4">Features</li>
                <li className="p-4">Contact</li>
            </ul>
            <div onClick={toggleMenu} className="block md:hidden">
                {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={menuOpen ? "fixed left-0 top-0 w-[60%] h-full bg-white border-r border-r-gray-900 ease-in-out duration-500 z-50" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold text-green-700 m-4">FLUENT</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-600">Product</li>
                    <li className="p-4 border-b border-gray-600">Features</li>
                    <li className="p-4 border-b border-gray-600">Contact</li>
                </ul>
            </div>
        </div>
    )
}