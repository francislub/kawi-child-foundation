'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import educationImage1 from '../public/images/programs/1.jpg';
import educationImage2 from '../public/images/programs/2.jpg';
import educationImage3 from '../public/images/programs/3.jpg';

import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
  
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerd" id="homeSection">
                <FooterSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Education</h1>
                    <p className="text-lg">
                        Kawi Child Foundation provides access to quality education for conflict affected children living in Uganda.
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container ">
                     <p  className="text-lg">Kawi Child Foundation serves one of the world's most vulnerable communities by providing education to those least likely to be educated: those who come from families that cannot afford.  A case story is from Mbirabira primary school.  We also link students to available scholarships. We raise awareness on alternative educational pathways.</p>
                    <br />
                    <div className="space-y-20">
                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Primary School Education</h2>
                                <p className="text-lg">
                                   Mbirabira is a primary school in Bunhya. Most people are local subsistence farmers. The nearest secondary school is Luubu Secondary school which is ten(10) kilometers away. Many students drop out of school after primary school because they cannot afford to walk the long distance. 
                                </p>
                                <p className="text-lg">The young people are also exposed to risks of sexual and gender-based violence, early teen pregnancies. </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/primary'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>
                            
                            <Image 
                                className="rounded1 w-full hidden xl:flex" 
                                src={educationImage3}
                               
                            />

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded1 w-full hidden xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Secondary school program</h2>
                                {/* <h1>How many students go to secondary and where?</h1> */}
                                <p className="text-lg">
                                  The Foundation seeks to help the best students to further their education by taking them to boarding secondary schools.
                                </p>
                                        
                            </div>

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">University Program</h2>
                                <p className="text-lg">
                                  University education for these students is almost impossible and unavoidable and there is no vocational institute to offer alternative pathways. We intend to construct a Vocational school and we also seek to partner with and apply for college scholarship programs. 
                                </p>
                                {/* <p className="text-1xl text-[#1f8cad]">(the Mastercard Foundation Scholars Program (MCFSP), African Leadership Academy, universities like Bugema university for university education.)</p> */}
                                
                            </div>
                            <Image 
                                className="rounded1 w-full hidden xl:flex" 
                                src={educationImage2}
                            />

                        </div>

                        <div className="flex justify-between text-lg xl:flex-row flex-col  xl:space-x-20 space-y-4 xl:space-y-0">
                            <Image 
                                className="rounded1 w-full hidden xl:flex" 
                                src={educationImage1}
                            />

                            <div className="space-y-3">
                                <h2 className="text-4xl text-[#1f8cad]">Scholarships</h2>
                                <p className="text-lg">
                                  Kawi Child Foundation offers financial scholarships or material support to students in Primary school, Secondary school or at the University. Financial support in form of school tuition fees, scholastic material, accommodation and mentorship from the Foundation or through the Foundation partnerships. Such educational measures enable students to realize their visions. 
                                </p>
                                <p className="text-lg">
                                  A need assessment of the individual students is made. Full scholarships are given to those who come from families that cannot afford paying tuition at all; Half Scholarships are given to those who have some few means. All this depends on the available resources from the Foundation and also in partnership with some schools. 
                                </p>
                                <button className="bg-[#1f8cad] hover:bg-[#197996] px-3 py-1 text-white rounded">
                                    <Link href='/scholarships'>
                                        Learn More
                                    </Link>
                                </button>
                            </div>

                        </div>
                    </div>
                   
                    
                </div>
            </section>
            {/* About section ends here */}
            
            <Sponsor />

            {/* Join us section ends here */}

            <FooterSection />



        </div>
    )
}