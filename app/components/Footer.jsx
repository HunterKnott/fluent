import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="flex flex-col gap-8 items-center w-full bg-green-400 py-16 px-20">
            <h1 className="text-2xl font-bold">AI-driven sales trainer for improved results</h1>
            <p>Let our AI-driven sales trainer revolutionize your sales team&rsquo;s performance. Contact us today to learn more.</p>
            <div className="flex flex-row gap-8 justify-center items-center">
                <button className="bg-gray-100 w-[200px] rounded-md font-medium my-6 py-3">Get Started</button>
                <Link href={"Home"}>
                    <button className="text-gray-800 font-bold transition-colors duration-150 hover:text-green-500">Learn More &rarr;</button>
                </Link>
            </div>
        </div>
    )
}