'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from './public/images/1.jpg'
import HeaderSection from "../components/header";
import FooterSection from "../components/footer";
import Sponsor from "../components/sponsor";
import Impact from "../components/impact";
import Support from "../components/support";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerh" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>Education Unlocks Future</h1>
                    <p className="text-lg">
                        {/* For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira. */}
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="/sponsor">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        About Us 
                    </h2>
                    <p className="text-lg font-normal text-gray-700">
                        Kawi Child Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
                
                    </p>
                    <div className="text-center mt-8">
                        <button className="bg-[#1f8cad] hover:bg-[#197996] text-white px-3 py-2 rounded">
                            <Link href="/about">
                                Explore More About Us
                            </Link>
                        </button>
                    </div>
                </div>
            </section>
            {/* About section ends here */}

            <Support />
            {/* Education section ends here */}
             
             <Impact />
            {/* our impact section ends here */}

            <section className="programs" id="programsSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        OUR WORK
                    </h2>

                    <div className="boxContainer md:flex grid md:justify-center md:space-x-12 md:flex-row ">

                        <div className="box flex flex-col hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">EDUCATION PROGRAMS</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    We empower individuals through knowledge. 
                                    <br />Our educational programs provide essential skills and resources, focusing on all education levels levels, literacy, STEM fields, job training. By investing in education, we unlock potential and create pathways to a brighter future. 
                                </p>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40">
                                <Link href="/education">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                                <span className="text-xl text-[#1f8cad]">COMMUNITY BUILDING</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    We believe strong communities are the foundation<br /> for positive change. Through workshops, events, and mentorship programs, we foster collaboration, build trust, and empower communities to solve problems together. We create a space for shared goals and lasting connections.
                                </p>
                            </div> */}
                            <button className=" w-40">
                                <Link href="/community">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <div className="cardImage md:flex"></div>
                            <div className="programTitle px-5">
                            <span className="text-xl text-[#1f8cad]">CLEAN WATER FOR PEOPLE</span>
                            </div>
                            {/* <div className="programDesc">
                                <p className="px-2">
                                    Access to clean water is a fundamental<br /> human right. We implement sustainable solutions like well construction, rainwater harvesting, and hygiene education. By availing clean water, we promote health, dignity, and a foundation for a thriving community. 
                                </p>
                            </div> */}
                            <button className=" w-40">
                                <Link href="/programs">
                                    Explore More
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}

            <section className="donate" id="donateSection">
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       SPONSOR A CHILD
                    </h2>

                    <div className="boxContainer md:flex grid  md:justify-center md:space-x-12 md:flex-row">

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Education To Every Child
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40 text-base">
                                <Link href="/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Make Life Easier For Them
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40 text-base">
                                <Link href="/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Dedicating To Helping Kids
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40 text-base">
                                <Link href="/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                        <div className="box flex flex-col">
                            <div className="cardImage"></div>
                            <div className="donateTitle px-5">
                                Clean Water For People
                            </div>
                            {/* <div className="donationCount">
                                Donation Goal : <span>$9845</span>
                            </div> */}
                            <button className="hover:bg-[#197996] w-40 text-base">
                                <Link href="/sponsor">
                                     Sponsor A Child
                                </Link>
                            </button>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Donate section ends here */}
            
            <Sponsor />
            {/* Join us section ends here */}

            {/* footer */}
            <FooterSection />
        </div>
    )
}