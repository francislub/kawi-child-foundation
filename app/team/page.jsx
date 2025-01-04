'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import logoImage from '../public/images/logo1.png'
import logoImage1 from '../public/icons/face.png'
import logoImage2 from '../public/icons/ins.png'
import logoImage3 from '../public/icons/link.png'
import logoImage4 from '../public/icons/twi.png'
import logoImage5 from '../public/icons/you.png'

import HeaderSection from "../components/header";
import FooterSection from "../components/footer";

export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    let id = "";

    const [boardmember, setBoardmember] = useState([]);
    const [leadershipTeam, setLeadershipTeam] = useState([]);

    const fetchChapterTeam = async () => {
        try {
        const response = await fetch(`https://nalongo-dashboard-server.onrender.com/api/v1/leaders`);
        const data = await response.json();
        const leadershipTeam = data.filter(item => item.leaderShipType === "leadership-team");
        const boardmember = data.filter(item => item.leaderShipType === "board-member");
        setBoardmember(boardmember);
        setLeadershipTeam(leadershipTeam);
        } catch (error) {
        console.error('Error fetching leaders:', error);
        }
    };

    useEffect(() => {
        fetchChapterTeam();
    }, []);
    

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">

                <HeaderSection />
                {/* Header ends here */}

            {/* Home section ends here */}

            {/* <section className="fullContainer" id="aboutSection"> */}
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                       Board Members
                    </h2>
                </div>
                <div className="boxContainer md:flex flex flex-wrap md:flex-row justify-center">  
                    {boardmember.map((chapter) => (
                        <div className={`flex justify-center hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out `}>
                            <Link href={`/ala/${id=chapter._id}`} className="section col-4" style={{ marginRight: '80px', cursor: 'pointer' }}>
                                <div className="frame2 text-center p-4 border rounded shadow">
                                    <img src={chapter.photo} alt={chapter.name} className="rounded-circle2"/>
                                    <h2 className="mt-4 font-bold">{chapter.name}</h2>
                                    <h3 className="mt-2">{chapter.position}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

            {/* </section> */}

            {/* <section className="fullContainer -mt-20" id="aboutSection"> */}
            <div className="container flex items-center justify-center">
                <h3 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-[#1f8cad] ">
                    Senior Leadership Team
                </h3>
            </div>

                <div className="boxContainer md:flex flex flex-wrap md:flex-row justify-center"> 
                    {leadershipTeam.map((chapter, index) => (
                        <div key={index} className={`flex justify-center hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out ${index % 4 === 0 }`}>
                            <Link href={`/ala/${id=chapter._id}`} className="section col-4" style={{ marginRight: '80px', cursor: 'pointer' }}>
                                <div className="frame2 text-center p-4 border rounded shadow">
                                    <img src={chapter.photo} alt={chapter.name} className="rounded-circle2"/>
                                    <h2 className="mt-4 font-bold">{chapter.name}</h2>
                                    <h3 className="mt-2">{chapter.position}</h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
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

            <footer className="">
                <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">

                    <div className="newsLetterContainer md:w-96">
                        <Image src={logoImage} 
                        width={80}
                        className="rounded-md pb-5" 
                        alt="Logo Image"/>
                        <p>
                            For 15 years, we have committed to providing access to quality education for volunarable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
                        </p>
                        <input 
                            type="text" 
                            placeholder="Enter your email address" />
                    </div>
                    {/* NewsLetter container ends here */}

                    <div className="linksContainer">
                        <div className="title">
                            Useful Links
                        </div>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="link">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="link">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/programs" className="link">
                                    Programs
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="link">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/gallery" className="link">
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href="/joinus" className="link">
                                    Join Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* LinksContainer ends here */}

                    <div className="connectContainer space-y-6">
                        <div className="title flex items-center">
                            follow us 
                            
                        </div>
                        <div className="flex items-center gap-4">
                            <Image src={logoImage1} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500" alt="Logo Image"/>
                            <Image src={logoImage2} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500" alt="Logo Image"/>
                            <Image src={logoImage3} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500" alt="Logo Image"/>
                            <Image src={logoImage4} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500" alt="Logo Image"/>
                            <Image src={logoImage5} width={50} className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600" alt="Logo Image"/>
                        </div>




                        <span>Mailing address:</span>
                        <br />
                        <span>Phone:</span>
                        <span>Email:</span> info@abcde.org
                        <br />
                        <p>
                            Contact - Uganda <br />
                        </p>
                        <p>
                            Contact - Denmark <br />
                        </p>
                        <p>
                            Contact - Switzerland <br />
                        </p>
                        <span>Mailing address:</span>
                        <br />
                        <span>Physical address:</span>
                        <br />
                        <span>Phone:</span> +256-
                        <span>Email:</span> info@abced.org
                    </div>
                    {/* ConnectContainer ends here */}

                </div>
            </footer>



        </div>
    )
}