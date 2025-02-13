'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function ProgramsPage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banner" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Our Programs</h1>
                    <p className="text-lg">
                        {/* Kyangwali refugee settlement has almost reached its carrying capacity with the majority; 113,000 from the Democratic Republic of the Congo and 3,300 from South Sudan; (Relief Web, 2020). These countries have been facing civil conflicts for more than two decades, forcing thousands to flee to Uganda as refugees. */}
                    </p>
                </div>
            </div>
            {/* Home section ends here */}

            <section className="fullContainer" id="aboutSection">
                <div className="container">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        Our Programs
                    </h2>
                    <p className="text-lg font-normal">
                        81% of the refugees are women and children, some of these women are widowed by the wars but have families to fend for. The refugees depend on subsistence farming but due to the most recent influx of refugees from the Congo, there is no more land for farming. Most families are forced to entirely depend on the monthly food aid of $8 per head from UNHCR. These families; therefore face many challenges in the new environment; they lack quality medical care, enough food, shelter, and most importantly, means to educate their children.<br /><br />
                        
                    </p>
                </div>
            </section>

            
            <Sponsor />

            {/* Join us section ends here */}

            <FooterSection />


        </div>
    )
}