'use client';

import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
// import PageLink from './PageLink';
import '../styles.css';
import logo from '../../public/Images/logo.png'; // Proper import

export default function Navbar({ options }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const indigo = { color: "#3B0086" };
    const licorice = { color: "#110310" };

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
        <div className="flex justify-between items-center h-24 w-[100%] max-w-[1920px] px-4 z-3" style={{ boxShadow: "0px 0px 10px 10x rgba(0,0,0,5)", borderBottom: "4px solid", borderBottomColor: "#110310" }}>
            <img src={logo} alt="Logo"/>
            {!menuOpen ?
                <h1 className="w-full text-3xl font-bold" style={indigo}>FLUENT</h1>
                : <h1></h1>
            }
            <ul className="hidden md:flex">
                <li className="p-4 underline-indigo"><a href="#" className="underline-indigo">Product</a></li>
                <li className="p-4 underline-indigo"><a href="#">Features</a></li>
                <li className="p-4 underline-indigo"><a href="#">Contact</a></li>
            </ul>
            <div onClick={toggleMenu} className="block md:hidden">
                {menuOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={menuOpen ? "fixed left-0 top-0 w-[60%] h-full bg-white border-r border-r-gray-900 ease-in-out duration-500 z-50" : "fixed left-[-100%]"}>
                <h1 className="w-full text-3xl font-bold m-4" style={indigo}>FLUENT</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-6 underline-indigo"><a href="#" className="underline-indigo">Product</a></li>
                    <li className="p-4 border-b border-gray-6 underline-indigo"><a href="#" className="underline-indigo">Features</a></li>
                    <li className="p-4 border-b border-gray-6 underline-indigo"><a href="#" className="underline-indigo">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
