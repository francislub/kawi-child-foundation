'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import educationImage3 from '../public/images/programs/3.jpg';
import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";

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

            <section className="fullContainer" id="aboutSection">
                <div className="container" id="joinusSection">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       WHAT WE DO
                    </h2>
                    <br/>
                    <br/>
                        <div className="bg-gray-400" >
                            <div className=" box flex flex-col P-4">

                             <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#1f8cad]">Education</h2>
                                    <p className="text-base sm:text-lg">
                                       Nalongo Lwokyaza Foundation serves one of the world’s most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford.  A case story is from Mbirabira primary school.  
                                    </p> 
                                    <button className="hover:bg-[#197996] w-32 sm:w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="/education">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                               
                             </div>
                            </div>
                        </div>

                        <br/>
                        <br/>

                        <div className="bg-gray-600" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                                    <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                        {/* <Image 
                                            className="rounded w-full hidden xl:flex" 
                                            src={educationImage3}
                                        /> */}
                                    <div className="space-y-3">
                                        <h2 className="text-4xl text-[#1f8cad]">Community Building</h2>
                                        <p className="text-lg">
                                          Our community-based program seeks to improve the livelihoods of the community members,
                                        </p> 
                                        <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                            <Link href="/community">
                                                Learn More
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <br/>
                        <br/>

                        <div className="bg-gray-400" >
                            <div className=" box flex flex-col">

                            <div className="flex justify-between xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                                <div className="space-y-3">
                                    <h2 className="text-4xl text-[#1f8cad]"></h2>
                                    {/* <p className="text-lg">
                                    Bringing multiple tribes together to build innovative enterprises for sustainable peace, and development in the DRC. 
                                    </p>  */}
                                    <button className="hover:bg-[#197996] w-40 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded">
                                        <Link href="#">
                                            Learn More
                                        </Link>
                                    </button>
                                </div>
                                <Image className="rounded-circle1" src={educationImage3} alt="Education Image" />
                                {/* <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage3}
                                /> */}
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