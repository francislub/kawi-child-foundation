'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';

import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";
import Sponsor from "../../components/sponsor";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    let id = "";

    const [chapterDenmark, setChapterDenmark] = useState([]);

    const fetchChapterDenmark = async () => {
        try {
        const response = await fetch(`https://nalongo-dashboard-server.onrender.com/api/v1/chapter-denmark`);
        const data = await response.json();
        setChapterDenmark(data);
        } catch (error) {
        console.error('Error fetching chapter-denmark:', error);
        }
    };

    useEffect(() => {
        fetchChapterDenmark();
    }, []);
    
    // useEffect(() => {
    //     if (id) {
    //         fetchChapterDenmark();
    //     }
    // }, [id]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    // Helper function to truncate description
    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(' ') + '...';
        }
        return description;
    };
    return (
        <div className="scroll-smooth">
            <div className="fullContainer bannerd" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                    <h1>Chapters</h1>
                    <p className="text-lg">
                    
                    </p>
                    <button className="mb-5 hover:bg-[#197996]">
                        <Link href="/sponsor">
                            <span className="text-lg">Sponsor A Child Now</span>
                        </Link>
                    </button>
                </div>
            </div>
            {/* Home section ends here */}
            <section className="programs" id="programsSection">
                <div className="container">
                    <h1><span>CIYOTA's approach to strengthening community engagement goes beyond local communities. We have friends around the world, who care and love our work to transform communities in Africa. We welcome these people and extend the opportunity to build the community. </span></h1>
                    
                </div>
                <div className="container mx-5">
                    <h2 className="sectionTitle text-[#1f8cad]">
                        DENMARK
                    </h2>

                    <div className="boxContainer md:flex flex flex-wrap md:flex-row">
                            {chapterDenmark.map((chapter) => (
                                <div className="box flex flex-col md:w-[300px] lg:w-[350px] xl:w-[400px] 2xl:w-[450px] p-4 md:max-w-[25%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={chapter._id}>
                                    <div className="">
                                    <img src={chapter.photo} alt={chapter.name} className="w-full h-40 object-cover" style={{ height: "200px", width: "300px" }}/>
                                    </div>
                                    <div className="programTitle px-5">
                                    <span className="text-xl text-[#1f8cad]">{chapter.name}</span>
                                    </div>
                                    <div className="programDesc">
                                     <h2>{truncateDescription(chapter.description, 30)}</h2>
                                    </div>
                                    <button className="hover:bg-[#197996] w-40">
                                    <Link href={`/anja/${id=chapter._id}`}>
                                        Read More
                                    </Link>
                                    </button>
                                </div>
                            ))}
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