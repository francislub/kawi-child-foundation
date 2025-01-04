'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";

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