'use client';

import Link from "next/link";
import React, { useState } from 'react';
import Image from 'next/image';
import bannerImage from './public/images/1.jpg'
import HeaderSection from "../components/header";
import FooterSection from "../components/footer";
import Sponsor from "../components/sponsor";
import Impact from "../components/impact";
import Support from "../components/support";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import { FaGraduationCap, FaHandsHelping, FaTint } from "react-icons/fa";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
       <div className="scroll-smooth">
             <div className="fullContainer bannerh" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                 {/* Content Container */}
                 <div className="relative container mx-auto flex flex-col items-center justify-center min-h-screen text-center px-6">
                     {/* Animated Heading */}
                     <motion.h1
                         className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4"
                         initial={{ opacity: 0, y: -20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.8 }}
                     >
                         {/*Education Unlocks Future*/}
                     </motion.h1>

                     {/* Animated Description */}
                     <motion.p
                         className="text-lg text-gray-200 max-w-2xl mb-6"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 1, delay: 0.3 }}
                     >
                         {/*For 15 years, we have committed to providing access to quality education for vulnerable yet talented refugees.*/}
                         {/*Donate today and help us create more refugee change-makers like Ntakamaze Nziyonvira.*/}
                     </motion.p>

                     {/* Animated Button */}
                     <motion.div
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.5, delay: 0.6 }}
                     >
                         <Link href="/sponsor">
                             <button className="bg-[#197996] hover:bg-[#125d73] text-white text-lg font-semibold px-6 py-3 rounded-full shadow-lg transition-all duration-300">
                                 Sponsor A Child Now
                             </button>
                         </Link>
                     </motion.div>
                 </div>
            </div>
            {/* Home section ends here */}

           <section className="fullContainer relative bg-gray-100 py-16" id="aboutSection">
               <div className="container mx-auto px-6 lg:px-12">

                   {/* Title */}
                   <motion.h2
                       className="text-4xl md:text-5xl font-bold text-[#1f8cad] text-center mb-6"
                       initial={{opacity: 0, y: -20}}
                       animate={{opacity: 1, y: 0}}
                       transition={{duration: 0.8}}
                   >
                       About Us
                   </motion.h2>

                   <div className="grid md:grid-cols-2 gap-8 items-center">
                       {/* Image Section */}
                       <motion.div
                           className="relative"
                           initial={{opacity: 0, x: -20}}
                           animate={{opacity: 1, x: 0}}
                           transition={{duration: 0.8, delay: 0.2}}
                       >
                           <img
                               src="/images/one.jpg"
                               alt="About Kawi Child Foundation"
                               className="rounded-lg shadow-lg w-full object-cover"
                           />
                       </motion.div>

                       {/* Text Section */}
                       <motion.div
                           className="text-lg font-normal text-gray-700 leading-relaxed"
                           initial={{opacity: 0, x: 20}}
                           animate={{opacity: 1, x: 0}}
                           transition={{duration: 0.8, delay: 0.3}}
                       >
                           <p>
                               Kawi Child Foundation is a family-based, non-profit organization established in 2023 in Vvumba - Luwero, Uganda. Dedicated to improving the lives of underprivileged children, the foundation focuses on
                               providing access
                               to quality education, healthcare, and essential resources.
                           </p>

                           <p className="mt-4">
                               Through various community programs, mentorship initiatives, and partnerships with local
                               organizations,
                               we empower children with the skills and support they need to build a brighter future. We
                               also advocate for
                               child rights, fostering a safe and nurturing environment for every child to thrive.
                           </p>

                           {/* Button */}
                           <div className="mt-6">
                               <motion.div
                                   initial={{opacity: 0, scale: 0.9}}
                                   animate={{opacity: 1, scale: 1}}
                                   transition={{duration: 0.5, delay: 0.5}}
                               >
                                   <Link href="/about">
                                       <button
                                           className="bg-[#1f8cad] hover:bg-[#197996] text-white text-lg font-semibold px-5 py-3 rounded-full shadow-md transition-all duration-300">
                                           Explore More About Us
                                       </button>
                                   </Link>
                               </motion.div>
                           </div>
                       </motion.div>
                   </div>
               </div>
           </section>
           {/* About section ends here */}

           <Support/>
           {/* Education section ends here */}

           <Impact/>
           {/* our impact section ends here */}

           <section className="programs bg-gray-100 py-16" id="programsSection">
               <div className="container mx-auto px-6 lg:px-12">

                   {/* Title */}
                   <motion.h2
                       className="text-4xl md:text-5xl font-bold text-[#1f8cad] text-center mb-12"
                       initial={{opacity: 0, y: -20}}
                       animate={{opacity: 1, y: 0}}
                       transition={{duration: 0.8}}
                   >
                       OUR WORK
                   </motion.h2>

                   {/* Grid Layout */}
                   <div className="grid md:grid-cols-3 gap-8">

                       {/* Education Programs */}
                       <motion.div
                           className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl"
                           initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8}}
                       >
                           <FaGraduationCap className="text-[#1f8cad] text-5xl mb-4"/>
                           <h3 className="text-xl font-semibold text-[#1f8cad] mb-3">
                               EDUCATION PROGRAMS
                           </h3>
                           <p className="text-gray-700">
                               Empowering individuals through knowledge with literacy, STEM education, and job training.
                           </p>
                           <Link href="/education">
                               <button
                                   className="mt-4 bg-[#1f8cad] hover:bg-[#197996] text-white px-4 py-2 rounded-full transition-all">
                                   Explore More
                               </button>
                           </Link>
                       </motion.div>

                       {/* Community Building */}
                       <motion.div
                           className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl"
                           initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8, delay: 0.2}}
                       >
                           <FaHandsHelping className="text-[#1f8cad] text-5xl mb-4"/>
                           <h3 className="text-xl font-semibold text-[#1f8cad] mb-3">
                               COMMUNITY BUILDING
                           </h3>
                           <p className="text-gray-700">
                               Strengthening communities through workshops, mentorship, and collaboration.
                           </p>
                           <Link href="/community">
                               <button
                                   className="mt-4 bg-[#1f8cad] hover:bg-[#197996] text-white px-4 py-2 rounded-full transition-all">
                                   Explore More
                               </button>
                           </Link>
                       </motion.div>

                       {/* Clean Water */}
                       <motion.div
                           className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all hover:scale-105 hover:shadow-2xl"
                           initial={{opacity: 0, y: 20}}
                           animate={{opacity: 1, y: 0}}
                           transition={{duration: 0.8, delay: 0.4}}
                       >
                           <FaTint className="text-[#1f8cad] text-5xl mb-4"/>
                           <h3 className="text-xl font-semibold text-[#1f8cad] mb-3">
                               CLEAN WATER FOR PEOPLE
                           </h3>
                           <p className="text-gray-700">
                               Providing sustainable water solutions to promote health and dignity.
                           </p>
                           <Link href="/programs">
                               <button
                                   className="mt-4 bg-[#1f8cad] hover:bg-[#197996] text-white px-4 py-2 rounded-full transition-all">
                                   Explore More
                               </button>
                           </Link>
                       </motion.div>

                   </div>
               </div>
           </section>
           {/* Programs section ends here */}


           <Sponsor/>
           {/* Join us section ends here */}

           {/* footer */}
           <FooterSection/>
       </div>
    )
}