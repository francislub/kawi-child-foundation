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

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';
import educationImage3 from '../public/images/programs/3.jpg';
import bannerImage from '../public/images/banner.jpg'

import HeaderSection from "../components/header";
import FooterSection from "../components/footer";

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
                                <h2 className="text-4xl text-[#1f8cad]">Mbirabira Primary School</h2>
                                <p className="text-lg">
                                  Mbirabira is a primary school in Bunhya. Most people are local subsistence farmers. The nearest secondary school is Luubu Secondary school which is ten(10) kilometers away. Many students drop out of school after primary school because they cannot afford to walk the long distance and there is a high school drop out in the district due to early pregnancy among girls while boys prefer the quick money that can be got from harvesting sugar canes rather than spending many years in school after which getting a job is not guaranteed.   
                                </p>
                                <p className="text-lg">The foundation aims at offering opportunities to children from vulnerable families get an education and skills in order to be self sufficient in future.</p>

                                <h2 className="text-2xl text-[#1f8cad]">PRIMARY SCHOOL PROGRAMS</h2>
                                <p className="text-lg">We provide three meals a day to keep the children from absenteeism in search for food, we have a school van that takes 3 trips carrying children to and fro school and providing on-campus accommodation for orphaned, unaccompanied minors and children from farther communities within the refugee settlement.</p>

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