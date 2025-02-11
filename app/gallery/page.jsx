'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import galleryImage1 from '../../public/images/baby.jpg'
import galleryImage2 from '../../public/images/baby1.jpg'
import galleryImage3 from '../../public/images/baby2.jpg'
import galleryImage4 from '../../public/images/chil.jpg'
import galleryImage5 from '../../public/images/chil1.jpg'
import galleryImage6 from '../../public/images/chil2.jpg'
import galleryImage7 from '../../public/images/chil5.jpg'
import galleryImage8 from '../../public/images/chil6.jpg'

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banner" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1><span className="">Our Gallery</span></h1>
                    {/*<p className="text-lg">*/}
                    {/*    Our foundation is committed to paying particular attention to children and youth within their programs who have suffered from violence and trauma, and aspires to sustain support for young people who have suffered trauma. Kawi Child Foundation also recognizes the power of functional education as a critical part of healing conflict and creating social cohesion in communities.*/}
                    {/*</p>*/}
                </div>
            </div>
            {/* Home section ends here */}

            <section className="gallery" id="gallerySection">
                <div className="container">
                    <div className="sectionTitle text-[#1f8cad]">
                        Our Gallery
                    </div>

                    <div className="galleryContainer">

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage1} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage2} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage3} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage4} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage5} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage6} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Image Title
                            </span>
                            <Image src={galleryImage7} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                        <div className="item">
                            <span className="title">
                                Kawi Child Foundation
                            </span>
                            <Image src={galleryImage8} className="galleryImage"/>
                        </div>
                        {/* Item ends here */}

                    </div>

                </div>
            </section>
            {/* Gallery section ends here */}
            
            <Sponsor />

            {/* Join us section ends here */}

            <FooterSection />


        </div>
    )
}