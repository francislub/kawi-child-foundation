'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";

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
                    {/* <p className="text-lg">
                        Nalongo Lwokyaza Foundation has a unique operating model of education and serves one of the most vulnerable populations in the world. We are providing access to quality education for conflict affected children, living in the critically under-served refugee camps, in western Uganda.
                    </p> */}
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

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded1 w-full xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Land for food cultivation on a seasonal basis  </h2>
                                {/* <p className="text-lg">
                                We have a youth hub for running CIYOTA activities in the Kyangwali refugee settlement. This is also known as COBURWAS New Site, CONES-a farming or agriculture hub. With no land for the refugees to practice subsistence farming-sole means of dependence, we have established a demonstration farm on a plot of over 10 acres of land. 
                                </p>
                                <p className="text-lg">
                                We have also introduced organic farming which will be an agribusiness enterprise to establish better farming methods and focus on solving this problem. It will involve applying animal manure to naturally sustain and maintain soil fertility and avoid other long term agronomic problems.
                                </p> */}
                            </div>

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Startup projects</h2>
                                {/* <p className="text-lg">
                                Targets Congolese refugee widows living in Kyangwali with orphans to feed and educate. CIYOTA provides small loans to such women who have projects such as; animal rearing, poultry, farming, small retail shops and those selling food items every market day. 30 widows received the loan since 2017 and 75 children attend school through this program. To reduce challenges such as failing to pay back loans, we built a vocational training center where women will meet more skilled and experienced business people, learn from their past mistakes as well as identify viable businesses in the refugee community. 
                                </p> */}
                                
                            </div>
                            <Image 
                                className="rounded1 w-full xl:flex" 
                                src={educationImage2}
                            />

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded1 w-full xl:flex" 
                                src={educationImage2}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Food and non-food items </h2>
                                {/* <p className="text-lg">
                                This is a 6-month’s young women’s program that provides entrepreneurial skills to women who did not have a chance to attend formal education. The project focuses on tailoring where girls learn to sew clothes, bags and any other traditional wear in the refugee community. 
                                </p>
                                <p className="text-lg">
                                The project has 38 women in the program, where 15 women have started their own tailoring businesses.
                                </p> */}
                                
                            </div>

                        </div>
                    </div>
                   
                    
                </div>
            </section>
            {/* About section ends here */}
            
            <section className="join" id="joinSection">
                <div className="container">
                    <div className="joinTitle">
                        SPONSOR A CHILD 
                        {/* & <span>SAVE LIVES</span> */}
                    </div>
                    <p className="text-lg">
                      Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
                    </p>
                    <button className="joinNow rounded">
                    <Link href="/joinus">JOIN US </Link>
                    </button>
                    <button className="adoptBtn rounded">
                       <Link href="/sponsor">Sponsor A Child Now</Link>
                    </button>
                </div>
            </section>
            {/* Join us section ends here */}

            <FooterSection />


        </div>
    )
}