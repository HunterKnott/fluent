'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import PageLink from './PageLink';

export default function Navbar({ options }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const indigo = {color: "#3B0086"}
    const licorice = {color: "#110310"}

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
        <div className="flex justify-between items-center h-24 w-[60%] max-w-[1240px] px-4 z-3"style = {{backgroundColor: "#110310"}}>
            {!menuOpen ?
                <h1 className="w-full text-3xl font-bold" style={indigo}>FLUENT</h1>
                : <h1></h1>
            }
            <ul className="hidden md:flex">
                <li className="p-4 text-gray-100">Product</li>
                <li className="p-4 text-gray-100">Features</li>
                <li className="p-4 text-gray-100">Contact</li>
            </ul>
            <div onClick={toggleMenu} className="block md:hidden">
                {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={menuOpen ? "fixed left-0 top-0 w-[60%] h-full bg-white border-r border-r-gray-900 ease-in-out duration-500 z-50" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold m-4" style= {indigo}>FLUENT</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-6">Product</li>
                    <li className="p-4 border-b border-gray-6">Features</li>
                    <li className="p-4 border-b border-gray-6 text-gray-6">Contact</li>
                </ul>
            </div>
        </div>
    )
}
