'use client';

import React, { useState } from 'react';
import PageLink from './PageLink';

export default function Head({ options }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const listLinks = options.map((option, index) =>
        <PageLink
            key={index}
            text={option === "App" ? "Home" : option}
            path={option === "App" ? "../" : `./${option.toLowerCase()}`}
        />
    );

    // return (
    //     <header className="bg-gray-100 w-full shadow-md fixed z-30">
    //         <div className="container mx-auto flex items-center justify-between px-24 py-4">
    //             <h1 className="text-3xl font-bold text-gray-800">Fluent.ai</h1>
    //             <nav className="flex space-x-8">
    //                 {listLinks}
    //             </nav>
    //         </div>
    //     </header>
    // )

    return (
        <header className="bg-gray-100 w-full shadow-md fixed z-30">
            <div className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-24">
                <div className="lg:hidden">
                    {/* Hamburger Menu Icon */}
                    <button onClick={toggleMenu} className="text-gray-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {menuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            )}
                        </svg>
                    </button>
                </div>
                <h1 className="text-3xl font-bold text-gray-800">Fluent.ai</h1>
                <nav className={`lg:flex space-x-8 items-center ${menuOpen ? 'block' : 'hidden'}`}>
                    {listLinks}
                </nav>
            </div>
        </header>
    )
}