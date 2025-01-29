'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import educationImage3 from '../../public/images/chil6.jpg';
import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerw" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>WHAT WE DO</h1>
                    <p className="text-lg">
                    
                    </p>
                    <button className="mb-5">
                        <Link href="#joinusSection">
                            JOIN US NOW
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="py-20" id="aboutSection">
                <div className="container mx-auto px-4" id="joinusSection">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16">WHAT WE DO</h2>
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="md:flex items-center">
                    <div className="md:w-1/2 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4">Education</h2>
                        <ul className="space-y-3 text-lg mb-8">
                        <li className="flex items-center">
                            <svg
                            className="w-6 h-6 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            We educate children who cannot afford school dues
                        </li>
                        <li className="flex items-center">
                            <svg
                            className="w-6 h-6 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            We provide scholastic materials
                        </li>
                        <li className="flex items-center">
                            <svg
                            className="w-6 h-6 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            We provide medication
                        </li>
                        </ul>
                        <Link href="/education">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                            Learn More
                        </button>
                        </Link>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                        className="w-full h-full object-cover"
                        src={educationImage3}
                        alt="Education Image"
                        layout="responsive"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* About section ends here */}
            
            <Sponsor />

            {/* Join us section ends here */}

            <FooterSection />



        </div>
    )
}