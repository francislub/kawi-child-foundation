'use client';
// import { useState } from 'react';


import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import logoImage1 from '../public/icons/face.png'
import logoImage2 from '../public/icons/ins.png'
import logoImage3 from '../public/icons/link.png'
import logoImage4 from '../public/icons/twi.png'
import logoImage5 from '../public/icons/you.png'

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";


export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerj" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>Join Us</h1>
                    <p className="text-lg">
                        Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Kawi Child Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.
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
                        JOIN OUR TEAM
                    </h2>
                    <h1>Kawi Child Foundation is a family-based, non-profit organization established in 20xx in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor, - - - ,  - - -.</h1>
                    <br/>
                    <h1>You can partner with us in the following ways: </h1>
                    <ul>
                        <li>Buy scholastic materials.</li>
                        <li>Give some upkeep to the children. </li>
                        <li>Donate books and other educational materials</li>
                        <li>Financial and Technical support in starting and operating a vocational school.  </li>
                        <li></li>
                    </ul>
                    <div className="title text-[#1f8cad]">
                         Open Positions:
                    </div>
                    <Link href="#">   
                        <div className="bg-gray-300" >
                            <div className=" box flex flex-col">
                                <div className="bg-gray-300  ">
                                    <div className="bg-gray-300  ">
                                        <div ><h2 >There are currently no open positions.  Follow us on our social media channels or subscribe to our newsletter to stay up to date for new job opportunities.</h2> </div> 
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Image src={logoImage1} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500" alt="Logo Image"/>
                                    <Image src={logoImage2} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500" alt="Logo Image"/>
                                    <Image src={logoImage3} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500" alt="Logo Image"/>
                                    <Image src={logoImage4} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500" alt="Logo Image"/>
                                    <Image src={logoImage5} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600" alt="Logo Image"/>
                                </div>
                            </div>
                        </div>
                    </Link>
                    <div className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold">

                        {/* <div className="donationBox">
                            <div className="title text-[#1f8cad]">
                                Become Member
                            </div>
                            <p className="">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Become Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

                        {/* <div className="volunteerBox">
                            <div className="title text-[#1f8cad]">
                                Become a volunteer
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Become Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

                        {/* <div className="scholarshipBox">
                            <div className="title text-[#1f8cad]">
                                Ask For Position
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Ask Now
                            </button>
                        </div> */}
                        {/* Donation Box end */}

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
                      Kawi Child Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
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