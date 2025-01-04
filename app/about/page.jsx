'use client';

import Link from "next/link";
import React, { useState } from 'react';
import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";


export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

  
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannera" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>WHO WE ARE</h1>
                    <p className="text-lg">
                     Nalongo Lwokyaza Foundation is a family-based, non-profit organization established in 2020 in Jinja, Uganda, in memory of the late Nalongo Mukyala Lwokyaza, a wife, mother, educator, mentor - in order to keep her legacy.
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                     Our aims:
                    </h2>
                    <div className="space-y-2 text-lg">
                        <ul>
                            <li>To support children and youth who cannot afford education to ensure they get the basic education and skills necessary to enable them to be self-sustaining in life.</li>
                            <li>To provide students and young people living in Uganda and other parts of Africa with knowledge, skills, and expertise as well as training in leadership skills, using education as a relevant aspect in curbing poverty taking up social responsibility in developing their communities. </li>
                            <li>To build morally upright, spiritual and hardworking citizens.   </li>
                        </ul>
                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Mission
                        </h2>
                        <p className="text-lg">
                          We seek to transform the lives of students, youth, families, and communities by enabling access to quality education for students and youth from families that cannot afford education for their children, to enable them gain skills for sustaining themselves, their families, communities and impart values that will enable them to become useful to society. 
                        </p>

                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Vision
                        </h2>
                        <p className="text-lg">
                            Skills-related education and self-sustained youths, families and communities in local, national and continental Africa.
                        </p>

                        <h2 className="font-bold text-2xl text-[#1f8cad]">
                            Our Core Values
                        </h2>
                        <p className="text-lg">
                            These values are based on the aspects that were highly esteemed by the late Nalongo.
                        </p>
                        <span className="text-bold font-semibold">Hard work, Morality, Godliness and the love for education </span>
                        <div className="text-lg">
                            <span className="text-bold font-semibold">Integrity:</span> We seek to promote honesty, trust, transparency, and reliability.
                            <br />
                            <br />

                            <span className="text-bold font-semibold">Compassion:</span> We are moved by the needs of those who are less privileged and deeply seek to alleviate the root causes.
                            <br />
                            <br />

                            <span className="text-bold font-semibold">Diversity:</span> : We are not limited to differences such as tribes, nationality, race, ethnicity, gender, religious beliefs, and socio-economic status.
                            <br />
                            <br />

                            {/* <span className="text-[#1f8cad] font-semibold">Community Responsibility:</span><br /> We commit to fulfilling promises made to each other.
                            <br /> */}

                            <span className="text-bold font-semibold">Excellence:</span> In all that we do and determination to fight illiteracy and poverty
                            <br />

                            {/* <span className="text-[#1f8cad] font-semibold">Boldness:</span><br /> We commit to remain courageous in the fight against illiteracy, poverty and tribalism in our communities. */}
                        </div>
                        
                    </div>
                    <div 
                        className="cards text-lg flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-4 mt-8 font-semibold"
                    >

                        {/* <div className="donationBox">
                            <div className="title text-[#1f8cad]">
                                Give Donation
                            </div>
                            <p className="">
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Donate Now
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
                                Give Scholarship
                            </div>
                            <p>
                               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi reiciendis harum eveniet odio sunt itaque in minus.
                            </p>
                            <button className="text-[#1f8cad]">
                                Give Now
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