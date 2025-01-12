'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage3 from '../public/images/programs/3.jpg';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banneri" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Our Impact</h1>
                    <p className="text-lg">
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            {/* <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Our Programs
                    </h2>
                    <p className="text-lg font-normal">
                        81% of the refugees are women and children, some of these women are widowed by the wars but have families to fend for. The refugees depend on subsistence farming but due to the most recent influx of refugees from the Congo, there is no more land for farming. Most families are forced to entirely depend on the monthly food aid of $8 per head from UNHCR. These families; therefore face many challenges in the new environment; they lack quality medical care, enough food, shelter, and most importantly, means to educate their children.<br /><br />
                        This livelihood program generally seeks to address the actual needs for refugees through provision of seed funding and skills development in business management, livestock, and agricultural activities. We provide skills training and microfinance to the women to build their homes, feed and send their children to school. Assuredly, refugee families have supplementary income from these activities and can provide meals for their families and support their children in schools.
                    </p>
                </div>
            </section> */}

            <section className="fullContainer -mt-10" id="aboutSection">
                <div className="container ">
                    <div className="space-y-20">
                        <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-gray p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-2xl text-[#1f8cad]">Education</h2>
                                    <h5 className="text-1xl text-bold">Some statistics about education here? Mbirabira? Busoga? Uganda? </h5>
                                    <p>
                                    Our goal is to provide quality education to xxxx  students affected by poverty in the next 5 years at Primary, Secondary and University levels. This will be achieved by:
                                    </p> 
                                    <ul>
                                        <li>•	Identifying and enrolling talented financially unable children.</li>
                                        <li>•	Retaining and progression rate of 90% </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-blue p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-1xl text-[#1f8cad]">xx financially disadvantaged children</h2>
                                    <p >
                                    have been educated through our primary school education program
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx secondary students</h2>
                                    <p >
                                    Have accessed quality secondary education on our scholarship scheme.
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx university students</h2>
                                    <p >
                                    In Uganda have been matched to university scholarship programs to pursue university education.
                                    </p> 
                                    <h2 className="text-1xl text-[#1f8cad]">xx</h2>
                                    <p >
                                    Have been trained at the vocational institute in Busoga region.
                                    </p> 
                                </div>
                            </div>
                            <div className="flex-1 hidden xl:flex hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage3}
                            />
                            </div>
                        </div>

                        <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                                <div className="flex flex-col justify-between h-full space-y-4 background-blue p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                  
                                    <h2 className="text-2xl text-[#1f8cad]">Community Building</h2>
                                    <p className="text-lg">
                                    Our community-based program seeks to improve the livelihoods of the community members,
                                    </p>
                                    <ul>
                                        <li>•	We constructed a borehole that serves xxx people in an area of xxx km</li>
                                        <li>•	We gave land for the construction of a local church. The foundation collaborates with the local nurse who provides health programs to the community once a quarter or after need.  </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex-1">
                                   <div className="flex flex-col justify-between h-full space-y-4 background-gray p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                 
                                    <h2 className="text-2xl text-[#1f8cad]">xxxxx community members</h2>
                                    <p className="text-lg">
                                    benefited from Kawi Child Foundation's voluntary and community service programs.
                                    </p>
                                    <h2 className="text-2xl text-[#1f8cad]">xxx women</h2>
                                    <p>accessed micro loans;</p>
                                    <p className="text-lg">
                                    xxx families have easy access to the water facility that provides water needs for the community.
                                    </p>
                                    <h2 className="text-2xl text-[#1f8cad]">xx widows & single mothers</h2>
                                    <ul>
                                        <li>•	trained in tailoring and garment cutting. </li>
                                        <li>•	Also trained xxx community members.  </li>
                                    </ul>
                                    <h2 className="text-2xl text-[#1f8cad]">xxx men</h2>
                                    <p className="text-lg">
                                    trained in skills such as  - - - 
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 hidden xl:flex hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                <Image 
                                    className="rounded w-full hidden xl:flex" 
                                    src={educationImage1}
                                />
                            </div>

                        </div>

                        {/* <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Peace building</h2>
                                <p className="text-lg">
                                    University education for conflict-affected students is nearly impossible due to financial aid and admission difficulties for these students. We identify and provide college preparation support to potential students. This foundation connects these high school graduates to different college scholarship programs. We partner with scholarship programs such as the Mastercard Foundation Scholars Program (MCFSP), African Leadership Academy, universities like Bugema university for university education
                                </p>
                            </div>
                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Anti-violence Vocational Tailoring Project</h2>
                                <p className="text-lg">
                                    University education for conflict-affected students is nearly impossible due to financial aid and admission difficulties for these students. We identify and provide college preparation support to potential students. This foundation connects these high school graduates to different college scholarship programs. We partner with scholarship programs such as the Mastercard Foundation Scholars Program (MCFSP), African Leadership Academy, universities like Bugema university for university education
                                </p>
                            </div>
                            <Image 
                                className="rounded w-full hidden xl:flex" 
                                src={educationImage2}
                            />

                        </div> */}
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