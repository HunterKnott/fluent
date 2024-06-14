"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function FluentHomepage() {
    return (
        <div className="bg-white text-gray-800" style= {{width: "100%"}}>
            <header className="py-4 px-4 md:px-8 flex justify-between items-center border-b border-gray-300 bg-gradient-to-r from-purple-200 via-green-200 to-blue-200 shadow-md">
                <img src= "/Images/logo.ico" style={{ width: "50px", height: "50px",marginLeft: "250px", borderRadius: "50%"}}/>
                <motion.h1 
                    className="text-lg md:text-xl font-bold text-blue-800"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    FLUENT
                </motion.h1>
                <nav className="space-x-2 md:space-x-4 text-sm md:text-base">
                    <Link href="/product" className="hover:text-purple-600">PRODUCT</Link> |
                    <Link href="/solutions" className="hover:text-green-600">SOLUTIONS</Link> |
                    <Link href="/customers" className="hover:text-blue-600">CUSTOMERS</Link> |
                    <Link href="/resources" className="hover:text-purple-600">RESOURCES</Link> |
                    <Link href="/company" className="hover:text-green-600">COMPANY</Link> |
                    <Link href="/pricing" className="hover:text-blue-600">PRICING</Link> |
                    <Link href="/sign-in" className="hover:text-purple-600">SIGN-IN</Link> |
                    <Link href="/demo" className="text-purple-700 font-bold">[Book a Demo]</Link>
                </nav>
            </header>

            <main className="py-10 px-4 md:px-8 space-y-20">
                <section className="text-center mb-10">
                    <motion.h2 
                        className="text-2xl md:text-3xl font-bold text-purple-800 mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        THE AI PLATFORM THAT ACCELERATES YOUR REVENUE GROWTH
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-6 text-sm md:text-base"
                    >
                        Unlock exceptional customer engagement, accurate forecasting, and enhanced team productivity with our all-in-one revenue intelligence platform.
                    </motion.p>
                    <motion.button 
                        className="mt-4 bg-purple-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-purple-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        Book a Demo
                    </motion.button>
                </section>

                <section className="text-center mb-10">
                    <motion.h3 
                        className="text-xl md:text-2xl font-bold text-green-800 mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                    >
                        OPTIMIZE YOUR REVENUE ENGINE WITH FLUENT
                    </motion.h3>
                    <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 mt-4 text-sm md:text-base">
                        <Link href="/team-productivity" className="hover:text-green-600">Team Productivity</Link>
                        <span className="hidden md:block">|</span>
                        <Link href="/revenue-predictability" className="hover:text-blue-600">Revenue Predictability</Link>
                        <span className="hidden md:block">|</span>
                        <Link href="/pipeline-growth" className="hover:text-purple-600">Pipeline Growth</Link>
                    </div>
                </section>

                <section className="mb-10">
                    <motion.h3 
                        className="text-xl md:text-2xl font-bold text-blue-800 text-center mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                    >
                        ACHIEVE NEAR-PERFECT FORECAST ACCURACY
                    </motion.h3>
                    <motion.p 
                        className="text-center mt-2 text-sm md:text-base"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                    >
                        Ensure consistent strong quarterly results with our AI-driven approach to precise pipeline management and forecasting.
                    </motion.p>
                    <motion.div 
                        className="flex justify-center mt-6"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 }}
                    >
                        <Link href="/fluent-forecast" className="text-blue-700 font-bold">Learn about Fluent Forecast</Link>
                    </motion.div>
                </section>

                <section className="mb-10">
                    <motion.h3 
                        className="text-xl md:text-2xl font-bold text-purple-800 text-center mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.6 }}
                    >
                        FROM INTERACTIONS TO INSIGHTS TO REVENUE – ALL ON ONE PLATFORM
                    </motion.h3>
                    <motion.div 
                        className="flex justify-center mt-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 1.8 }}
                    >
                        <Link href="/about-fluent" className="text-purple-700 font-bold">Learn More About Fluent</Link>
                    </motion.div>
                </section>

                <section className="text-center my-10">
                    <motion.h3 
                        className="text-lg md:text-xl font-bold text-green-800 mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.0 }}
                    >
                        READY TO TRANSFORM YOUR REVENUE OPERATIONS?
                    </motion.h3>
                    <motion.div 
                        className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4 mt-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.2 }}
                    >
                        <button className="bg-green-600 text-white px-4 md:px-6 py-2 rounded-md hover:bg-green-700">Request Live Demo</button>
                        <button className="bg-gray-300 text-gray-800 px-4 md:px-6 py-2 rounded-md hover:bg-gray-400">See It In Action</button>
                    </motion.div>
                </section>

                <section className="text-center mb-10">
                    <motion.h3 
                        className="text-lg md:text-xl font-bold text-blue-800 mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.4 }}
                    >
                        CONNECT WITH US
                    </motion.h3>
                    <motion.div 
                        className="flex justify-center space-x-6 mt-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 2.6 }}
                    >
                        <Link href="https://linkedin.com" className="text-blue-700 hover:text-blue-900">
                            <FaLinkedin size={30} />
                        </Link>
                        <Link href="https://facebook.com" className="text-blue-700 hover:text-blue-900">
                            <FaFacebook size={30} />
                        </Link>
                        <Link href="https://instagram.com" className="text-blue-700 hover:text-blue-900">
                            <FaInstagram size={30} />
                        </Link>
                        <Link href="https://twitter.com" className="text-blue-700 hover:text-blue-900">
                            <FaTwitter size={30} />
                        </Link>
                    </motion.div>
                </section>

                <section className="text-center mb-10">
                    <motion.h3 
                        className="text-lg md:text-xl font-bold text-purple-800 mb-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.0 }}
                    >
                        CONTACT US
                    </motion.h3>
                    <motion.form 
                        className="max-w-md mx-auto space-y-4"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 3.2 }}
                    >
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="name" 
                                type="text" 
                                placeholder="Your name" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="email" 
                                type="email" 
                                placeholder="Your email" 
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                id="message" 
                                rows="4" 
                                placeholder="Your message" 
                            ></textarea>
                        </div>
                        <div className="flex items-center justify-between">
                            <button 
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                                type="button"
                            >
                                Send
                            </button>
                        </div>
                    </motion.form>
                </section>
            </main>

            <footer className="py-4 px-4 md:px-8 text-center border-t border-gray-300 bg-gradient-to-r from-purple-200 via-green-200 to-blue-200 shadow-md">
                <p>2024 © Fluent.io Inc. All rights reserved.</p>
                <p>For Patent and Trademark Legal Notices, <Link href="#" className="text-blue-700 hover:text-blue-900">click here</Link>.</p>
                <Link href="/terms" className="text-blue-700 hover:text-blue-900">Terms & Conditions</Link>
            </footer>
        </div>
    );
}
