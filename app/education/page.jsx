'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage3 from '../../public/images/chil2.jpg';

import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";
import HeaderSection from "../../components/header";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerd" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Education</h1>
                    <p className="text-lg">
                        {/*Kawi Child Foundation provides access to quality education for conflict affected children living in Uganda.*/}
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container ">
                     <p  className="text-lg">Kawi Child Foundation serves one of the world's most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford.  </p>
                    <br />
                    <div className="space-y-20">
                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Primary School Education</h2>
                                <p className="text-lg">
                                Many students drop out of school after primary school because they cannot afford to walk the long distance.
                            </p>
                            <p className="text-lg">
                                The young people are also exposed to risks of sexual and gender-based violence, early teen pregnancies, and child labor, which significantly impact their education and overall well-being.
                            </p>
                            <p className="text-lg">
                                In many rural areas, lack of proper infrastructure, such as adequate school buildings, sanitation, and teaching materials, further exacerbates the challenges for primary school children. These barriers often discourage children from continuing their education and limit their future opportunities.
                            </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/primary'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            
                            <Image 
                                className="rounded1 w-full hidden xl:flex" 
                                src={educationImage3}
                               
                            />

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