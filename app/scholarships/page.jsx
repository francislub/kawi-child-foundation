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

import bannerImage from '../public/images/1.jpg'
import educationImage from '../public/images/gallery/8.jpg'
import galleryImage1 from '../public/images/gallery/1.jpg'
import galleryImage2 from '../public/images/gallery/2.jpg'
import galleryImage3 from '../public/images/gallery/3.jpg'
import galleryImage4 from '../public/images/gallery/4.jpg'
import galleryImage5 from '../public/images/gallery/5.jpg'
import galleryImage6 from '../public/images/gallery/6.jpg'
import galleryImage7 from '../public/images/gallery/7.jpg'
import galleryImage8 from '../public/images/gallery/8.jpg'

import HeaderSection from "../components/header";
import FooterSection from "../components/footer";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerd" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

            </div>
            {/* Home section ends here */}
            <section className="fullContainer" id="aboutSection">
                <div className="container mx-5">

                    <div className="space-y-20 md:flex flex flex-col md:flex-row">
                        <div className="row">
                            <div className="box flex flex-col">
                                
                                <div className="programDesc">
                                  <span className="text-xl text-[#1f8cad]">Scholarships</span>
                                    <p className="text-lg">
                                      Nalongo Lwokyaza Foundation offers financial scholarships or material support to students in Primary school, Secondary school or at the University. Financial support in form of school tuition fees, scholastic material, accommodation and mentorship from the Foundation or through the Foundation partnerships. Such educational measures enable students to realize their visions. 
                                    </p>
                                    <br />
                                    <p className="text-lg">A need assessment of the individual students is made. Full scholarships are given to those who come from families that cannot afford paying tuition at all; Half Scholarships are given to those who have some few means. All this depends on the available resources from the Foundation and also in partnership with some schools. </p>
                                    <br />
                                    <span className="text-2xl text-[#1f8cad]">SCHOLARSHIP SELECTION PROCESS</span>
                                    <p className="text-lg">Nalongo Lwokyaza Foundation identifies the students. There is an agreement with Mbirabira primary school to spot the poor and promising students. It is also possible for the students to apply for a scholarship.</p>
                                    <br />
                                    <h1 className="text-lg">Application forms are filled in and submitted to the scholarship committee. This criterion is as follows:</h1>
                                    <ul class="text-lg">
                                        <li>   . High academic performance: Division one and two (D1 & D2). D3 can be considered in case the student had disruptions and valid reasons (illness, etc). A ‘Level requirement is 10 points and two principle passes.<br/></li>
                                        <li>   . Students from financially disadvantaged families. <br/></li>
                                        {/* <li>Be from an area ravaged by poverty or have a disability.<br/></li> */}
                                        <li>   . The student commits to giving back to the community after education.<br/></li>
                                    </ul>
                                    <br />
                                    <h1 className="text-lg">For more details, contact</h1> <p className="text-1xl text-[#1f8cad]">scholarshipmanager@foundationname.org</p>
                                </div>
                            </div>
                        </div>
                        {/* Box ends here */}

                    </div>
                    {/* Box container ends here */}

                </div>
            </section>
            {/* Programs section ends here */}
            
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