import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Details from './components/Details';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
// import Link from 'next/link';
// import PageLink from './PageLink';
// import LinkButton from './LinkButton';
const licorice = {color: "#110310"}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center" style = {{backgroundColor: "#110310"}}>
      <Navbar />
      <Hero />
      <Details />
      <Pricing />
      <Footer />
    </main>
  )
}
