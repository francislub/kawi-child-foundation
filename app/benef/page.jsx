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
                    <h1>Beneficiaries</h1>
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
                <div className="space-y-10">
                    <div className="flex justify-between xl:flex-row flex-col xl:space-x-1 space-y-1 xl:space-y-0">
                        <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                <h2 className="text-2xl text-[#1f8cad]">Mirembe Alice</h2>
                                <Image
                                    className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                    src={educationImage3}
                                />
                                <h5 className="text-1xl text-bold">Mirembe Alice is a student of Katikamu SDA Secondary school and one of the Beneficiaries of this foundation. She was connected to this foundation in 2017 at Kireka SDA primary school where she sat for PLE and got a first grade.</h5>
                                <h5 className="text-1xl text-bold">From there she joined Katikamu SDA Secondary School. Right now she is in senior Five doing MIT with an aim of becoming an architecture.</h5>
                            </div>
                            </div>
                            <div className="flex-1">
                             <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-1xl text-[#1f8cad]">Kenneth Kakembo</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }} 
                                        src={educationImage3}
                                    />
                                    <h5 className="text-1xl text-bold">Kenneth Kakembo was in Primary Five but his father did not have money to continue paying for his education.</h5>
                                    <h5 className="text-1xl text-bold">The Foundation took him up and educated him at Kireka SDA and is now at Katikamu Secondary School. </h5>
                                    
                                </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                    <h2 className="text-1xl text-[#1f8cad]">Annet</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage3}
                                    />
                                    <h5 className="text-1xl text-bold">Annet was a young woman, married but with no proper education. The Foundation paid for her to take a Tailoring course so as to support her young family.</h5>
                                    {/* <h5 className="text-1xl text-bold">The Foundation took him up and educated him at Kireka SDA and is now at Katikamu Secondary School. </h5> */}
                                    
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between xl:flex-row flex-col  xl:space-x-1 space-y-1 xl:space-y-0">
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                  
                                    <h2 className="text-2xl text-[#1f8cad]">Heron Kisa</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage1}
                                    />
                                    <p className="text-lg">
                                     Heron Kisa 15 years from a family whose parents separated. After completing his primary level education the single mother could not afford to send him for Secondary education.
                                    </p>
                                    <p className="text-lg">
                                    The foundation got for him a government school in Jinja city and pays for both his education and other necessities. Currently he is in senior Three
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                 
                                    <h2 className="text-2xl text-[#1f8cad]">Hope Kisakye</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage1}
                                    />
                                    <p className="text-lg">
                                    Hope Kisakye whose mother died and the step mother stopped the father from paying her tuition. The head teacher of the school where she was studying took advantage of her vulnerable status and impregnated her.
                                    </p>
                                    <p className="text-lg">
                                    The foundation took her back to school and after completing her Ordinary level Certificate the foundation took her to a vocational institute from where she completed a tailoring course in March this year. She can now take care of her child and support herself.
                                    </p>
                            
                                </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                 
                                    <h2 className="text-2xl text-[#1f8cad]">Eric Mwebaze</h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }} 
                                        src={educationImage1}
                                    />
                                    <p className="text-lg">
                                    Eric Mwebaze whose single mother could not pay fees yet he was a bright boy. The foundation assisted him to complete his Advanced level Certificate. Fortunately an organization sponsored his university education but could not cater for his other needs.
                                    </p>
                                    <p className="text-lg">
                                    The foundation has been helping Eric meet his other University expenses. Currently, he is doing his final year of Civil Engineering in the Kampala international University in Uganda western campus.
                                     </p>
                            
                                </div>
                            </div>
                            <div className="flex-1">
                            <div className="flex flex-col justify-between h-full space-y-4 bg-gray-100 p-4 hover:bg-gray-200 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                                 
                                    <h2 className="text-2xl text-[#1f8cad]">David Muwanguzi </h2>
                                    <Image 
                                        className="rounded w-full h-40 object-cover" style={{ height: "250px", width: "300px" }}
                                        src={educationImage1}
                                    />
                                    <p className="text-lg">
                                    David Muwanguzi whose single mother has been struggling to pay fees while struggling with supporting two other children.
                                    </p>
                                    <p className="text-lg">
                                    The foundation took over paying his fees since Primary seven in 2002. Currently, David is in senior two.
                                    </p>
                            
                                </div>
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