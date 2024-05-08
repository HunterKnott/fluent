import Image from 'next/image'
import Head from './Head';
import Link from 'next/link';
import LinkButton from './LinkButton';

// Sections:
// Header
// Introduction
// Key Features
// Benefits
// Contact

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-100">
      <Head options={["Page 1", "Page 2", "Page 3", "Page 4"]}/>
      <div className="bg-gray-200 pt-36 pb-12 px-20 w-full min-h-screen flex flex-col gap-24">
        <div className="flex px-20 justify-center items-center">
          <img src="Images/FrontIcon.webp" alt="Icon" className="h-60 w-60"/>
        </div>
        <div className="flex flex-row">
          <div className="container flex flex-col gap-4 items-center text-center px-20 w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">The Crucial Sales Coaching App</h1>
            <h2 className="text=2xl text-gray-800">Fluent is an AI-powered tool that analyzes sales calls and finds key areas for improvement and success. By leveraging Natural Language Processing, Fluent understands the nuances of sales dialogue from pitch to customer reactions, and provides specific, actional feedback.</h2>
          </div>
          <div className="container flex flex-col gap-4 justify-center items-center text-center px-32 w-1/2">
            <h1 className="text-4xl font-bold text-gray-800">Get Started Here</h1>
            <Link href='/signup' className="flex justify-center items-center w-1/2">
              <button className="text-gray-800 bg-green-500 border border-green-600 rounded-lg px-12 py-8 mt-4 w-full transition-all duration-300 hover:bg-green-400 transform hover:scale-105">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
        <div className="container flex flex-col gap-4 items-start">
          <h1 className="text-3xl font-bold text-gray-800">Key Features</h1>
          <ul className="list-disc ml-6">
            <li className="text-base text-gray-700"><b>Real-Time Analysis: </b>Fluent monitors live sales calls to offer immediate feedback and suggestions.</li>
            <li className="text-base text-gray-700"><b>Personalized Feedback: </b>Generates custom training plans targeting individual needs of each sales rep.</li>
            <li className="text-base text-gray-700"><b>Trend Identification: </b>Detects patterns and trends in sales conversations to guide training focus areas.</li>
            <li className="text-base text-gray-700"><b>Performance Tracking: </b>Tracks progress over time to refine training approaches and measure effectiveness.</li>
          </ul>
        </div>
        <div className="container flex flex-col gap-4 items-start">
          <h1 className="text-3xl font-bold text-gray-800">Benefits</h1>
          <ul className="list-disc ml-6">
            <li className="text-base text-gray-700"><b>Enhanced Sales Efficiency</b></li>
            <li className="text-base text-gray-700"><b>Increased Deal Closure Rates</b></li>
            <li className="text-base text-gray-700"><b>Empowered Sales Teams</b></li>
            <li className="text-base text-gray-700"><b>Scalability</b></li>
          </ul>
        </div>
        <div className="flex flex-row gap-8 justify-center mt-4">
          <LinkButton srcPath="Images/icons8-linkedin.svg" altText="LinkedIn" url=""/>
          <LinkButton srcPath="Images/icons8-paper-airplane-50.png" altText="Email" url=""/>
          <LinkButton srcPath="Images/icons8-instagram-50.png" altText="Instagram" url=""/>
          <LinkButton srcPath="Images/icons8-facebook-50.png" altText="Facebook" url=""/>
        </div>
      </div>
    </main>
  )
}
