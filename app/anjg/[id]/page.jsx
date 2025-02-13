'use client';

import Link from "next/link";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import HeaderSection from "../../../components/header";
import FooterSection from "../../../components/footer";
import Sponsor from "../../../components/sponsor";

export default function HomePage({params}) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const router = useRouter();

  const [chapterGermany, setChapterGermany] = useState([]);

    const fetchChapterGermany = async () => {
        try {
        const response = await fetch('https://kawi-server-production.up.railway.app/api/v1/chapter-germany');
        const data = await response.json();
        const filteredData = data.filter(item => item._id === params.id);
        // console.log(filteredData);
        setChapterGermany(filteredData);
        } catch (error) {
        console.error('Error fetching chapter-germany:', error);
        }
        
    };

    useEffect(() => {
        fetchChapterGermany();
    }, []);

//   if (!chapter) return <p>Loading...</p>;
    return (
        <div className="scroll-smooth">
            <div className="fullContainer" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

            </div>
            {/* Home section ends here */}
            <section className="programs" id="programsSection">
                <div className="container mx-5">
           
                <div className="boxContainer md:flex flex-col md:flex-row md:space-x-12">
                {chapterGermany.map((chapter) => (
                    <div className="box flex flex-col md:flex-row md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px] p-4 md:max-w-[100%] md:p-4 hover:bg-gray-100 hover:scale-105 transition duration-300 ease-in-out cursor-pointer" key={chapter._id}>
                        <div className="md:w-2/5">
                            <img src={chapter.photo} alt={chapter.name} className="w-full h-40 object-cover" style={{ height: "100%", width: "100%" }}/>
                        </div>
                        <div className="programDetails md:w-3/5 px-5 flex flex-col">
                            <div className="programTitle">
                                <span className="text-xl text-[#1f8cad]">{chapter.name}</span>
                            </div>
                            <div className="programDesc">
                                <h2>{chapter.description}</h2>
                            </div>
                        </div>
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