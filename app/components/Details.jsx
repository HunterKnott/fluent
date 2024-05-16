import React from 'react';
import Link from 'next/link';

export default function Details() {
    return (
        <div className="flex flex-col gap-20 items-center w-full bg-green-400 py-16 px-4">
            <div className="flex flex-col gap-4 items-center text-center">
                <p>Improve Sales Performance</p>
                <h1 className="text-2xl font-bold">AI-driven sales training for better results</h1>
                <p>Features that help sales teams improve performance and close more deals</p>
            </div>
            <div className="flex md:flex-row flex-col gap-20 items-center px-8">
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">AI Driven Analysis</h2>
                    <p>Listen to sales calls and grade them based on your sales framework</p>
                    <Link href={"Home"}>
                        <button className="text-gray-800 font-bold">Learn More &rarr;</button>
                    </Link> 
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Tailored Training Recommendations</h2>
                    <p>Provide customized training recommendations for each individual rep</p>
                    <Link href={"Home"}>
                        <button className="text-gray-800 font-bold">Learn More &rarr;</button>
                    </Link> 
                </div>
                <div className="flex flex-col gap-4">
                    <h2 className="text-xl font-bold">Sales Manager Dashboard</h2>
                    <p>View graded calls and training recommendations for all reps</p>
                    <Link href={"Home"}>
                        <button className="text-gray-800 font-bold">Learn More &rarr;</button>
                    </Link> 
                </div>
            </div>
        </div>
    )
}