'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage3 from '../public/images/programs/3.jpg';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banneri" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Beneficiaries</h1>
                    <p className="text-lg">
                    </p>
                </div>
            </div>

            <section className="fullContainer -mt-10" id="aboutSection">
                <div className="container ">
                <div className="space-y-10">
                    <div className="flex justify-between xl:flex-row flex-col xl:space-x-1 space-y-1 xl:space-y-0">
                        
                            {/* <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-1xl text-[#1f8cad]">Annet</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage3}
                                    />
                                    <h5 className="text-1xl text-bold">Annet was a young woman, married but with no proper education. The Foundation paid for her to take a Tailoring course so as to support her young family.</h5>
                                    
                                </div>
                            </div> */}
                        </div>

                        {/* <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                  
                                    <h2 className="text-2xl text-[#1f8cad]">Heron Kisa</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage1}
                                    />
                                    <p className="text-lg">
                                     Heron Kisa 15 years from a family whose parents separated. After completing his primary level education the single mother could not afford to send him for Secondary education.
                                    </p>
                                    <p className="text-lg">
                                    The foundation got for him a government school in Jinja city and pays for both his education and other necessities. Currently he is in senior Three
                                    </p>
                                </div>
                            </div>
                            
                    </div> */}
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