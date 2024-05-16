import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import Link from 'next/link';
// import PageLink from './PageLink';
// import LinkButton from './LinkButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
      <Navbar />
      <Hero />
      <Details />
      <Pricing />
      <Footer />
    </main>
  )
}
