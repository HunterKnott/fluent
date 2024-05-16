import React from 'react';
import Link from 'next/link';
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
    return (
        <div className="flex flex-col gap-16 w-full py-16">
            <div className="flex flex-col gap-4 items-center text-center max-w-[1240px] mx-auto">
                <p className="text-green-700 font-bold">Choose the right plan for your team</p>
                <h1 className="text-2xl font-bold">Pricing Plans</h1>
                <p>Select the plan that best fits your team&rsquo;s needs and improve your sales performance today</p>
            </div>
            <div className="flex md:flex-row flex-col md:gap-6 gap-12 px-10">
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Starter Plan</p>
                    <h1 className="font-bold">
                        <span className="text-3xl">$99</span>
                        <span className="text-sm text-green-700">/month</span>
                    </h1>
                    <button className="bg-green-500 w-[300px] rounded-md font-medium my-6 py-3">Get Started</button>
                    <p className="font-bold">Ideal for small teams looking to get started with AI-driven sales training</p>
                    <ul>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            AI-driven call grading
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Tailored training recommendations
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Sales framework integration
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Performance analytics
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Basic support
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Professional Plan</p>
                    <h1 className="font-bold">
                        <span className="text-3xl">$199</span>
                        <span className="text-sm text-green-700">/month</span>
                    </h1>
                    <button className="bg-green-500 w-[300px] rounded-md font-medium my-6 py-3">Get Started</button>
                    <p className="font-bold">Perfect for growing teams that need advanced sales training capabilities</p>
                    <ul>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            All Starter Plan features
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Advanced training recommendations
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Customizable grading criteria
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Team performance tracking
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Priority support
                        </li>
                    </ul>
                    <hr />
                </div>
                <div className="flex flex-col gap-2">
                    <p className="font-bold">Enterprise Plan</p>
                    <h1 className="font-bold">
                        <span className="text-3xl">$99</span>
                        <span className="text-sm text-green-700">/month</span>
                    </h1>
                    <button className="bg-green-500 w-[300px] rounded-md font-medium my-6 py-3">Get Started</button>
                    <p className="font-bold">Designed for large organizations with complex sales processes and multiple teams</p>
                    <ul>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            All Professional Plan features
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Customized sales frameworks
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Integration with CRM systems
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            Dedicated account manager
                        </li>
                        <li className="flex items-center">
                            <FaCheck className="text-green-500 mr-2" />
                            24/7 support
                        </li>
                    </ul>
                    <hr />
                </div>
            </div>
        </div>
    )
}