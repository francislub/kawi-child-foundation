'use client';

import Link from "next/link";
import React, { useState } from 'react';

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
            <div className="fullContainer bannerd" id="homeSection">
               <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Primary Education</h1>
                    {/* <p className="text-lg">
                        Kawi Child Foundation has a unique operating model of education and serves one of the most vulnerable populations in the world. We are providing access to quality education for conflict affected children, living in the critically under-served refugee camps, in western Uganda.
                    </p> */}
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container ">
                    
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
                                <p className="text-lg">
                                    Additionally, cultural beliefs and gender biases may discourage girls from pursuing their education past the primary level, leading to a disparity in education access between boys and girls.
                                </p>
                                <p className="text-lg">
                                    Initiatives such as providing scholarships, building more accessible schools, and raising awareness about the importance of education can help reduce these obstacles and encourage higher enrollment and retention rates at the primary level.
                                </p>
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