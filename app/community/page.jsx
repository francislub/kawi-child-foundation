'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';

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
            <div className="fullContainer bannerc" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Community Livelihood Programs</h1>
                    
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container ">
                    
                    <div className="space-y-20">
                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <p className="text-lg">
                                 Our community-based program seeks to improve the livelihoods of the community members,
                                </p>
                                <p className="text-lg">
                                We constructed a borehole that serves the people of Mbirabira village. 
                                </p>
                                <p className="text-lg">
                                 We gave land for the construction of a local church.
                                </p>
                                <p className="text-lg">
                                The foundation collaborates with the local nurse who provides health programs to the community once a quarter or after need. 
                                 </p>
                                
                            </div>
                        </div>

                        {/* <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded1 w-full xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Land for food cultivation on a seasonal basis  </h2>
                                
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