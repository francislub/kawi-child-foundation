'use client';

import Link from "next/link";
import React, { useState } from 'react';


import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

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
                                      Kawi Child Foundation offers financial scholarships or material support to students in Primary school, Secondary school or at the University. Financial support in form of school tuition fees, scholastic material, accommodation and mentorship from the Foundation or through the Foundation partnerships. Such educational measures enable students to realize their visions. 
                                    </p>
                                    <br />
                                    <p className="text-lg">A need assessment of the individual students is made. Full scholarships are given to those who come from families that cannot afford paying tuition at all; Half Scholarships are given to those who have some few means. All this depends on the available resources from the Foundation and also in partnership with some schools. </p>
                                    <br />
                                    <span className="text-2xl text-[#1f8cad]">SCHOLARSHIP SELECTION PROCESS</span>
                                    <p className="text-lg">Kawi Child Foundation identifies the students. There is an agreement with Mbirabira primary school to spot the poor and promising students. It is also possible for the students to apply for a scholarship.</p>
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
            
            <Sponsor />

            {/* Join us section ends here */}

            <FooterSection />


        </div>
    )
}