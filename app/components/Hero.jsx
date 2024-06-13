import React from 'react';
import Link from 'next/link';
import { ReactTyped, Typed } from "react-typed"; // For if you want to have a typing animation

export default function Hero() {
    return (
        <div className="max-w-[1920px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col gap-6 justify-center hero">
            <div className="text-container">
                <h1 className="font-bold md:text-5xl sm:text-3xl text-2xl">AI Driven Sales Training - Utilizing Natural Language Processing</h1>
                <p className="font-bold">Revolutionize your sales team with personalized training recommendations based on real sales calls</p>
                <div className="flex flex-row gap-8 justify-center items-center">
                    <button className="w-[200px] rounded-md font-medium my-6 py-3" style={{ backgroundColor: "#3B0066", color: "white" }}>Get Started</button>
                    <Link href={"Home"}>
                        <button className="text-white-800 font-bold transition-colors duration-150 hover:text-green-500">Learn More &rarr;</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
