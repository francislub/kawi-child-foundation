"use client";
import { useRef } from "react";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bannerImage from "../../public/images/five.jpg";


import HeaderSection from "../../components/header";
import FooterSection from "../../components/footer";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ProgramsPage() {
  const aboutSectionRef = useRef(null);

  const [children, setChildren] = useState([]);
  const [error, setError] = useState(null);
  
  let id = "";
  
  useEffect(() => {
    const fetchChildren = async () => {
      try {
        const response = await fetch(
          "https://kawi-server-production.up.railway.app/api/v1/children",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        const reversedData = data.slice(0).reverse();
        console.log(reversedData);
        setChildren(reversedData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchChildren();
  }, []);

  return (
      <div className="scroll-smooth text-gray-800">
        <HeaderSection/>

        {/* Section Container */}
        <div className="relative bg-gradient-to-b from-[#e3f2fd] to-white mt-2 lg:mt-[120px] px-6 lg:px-20 py-12">

          {/* Decorative Dots */}
          <div className="absolute top-10 right-10 w-16 h-16 bg-[#1f8cad] opacity-20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-12 h-12 bg-[#ffcc80] opacity-30 rounded-full"></div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">

            {/* Image Section */}
            <div className="flex justify-center lg:w-1/2">
              <Image
                  src={bannerImage}
                  alt="Sponsor a Child"
                  width={800}
                  height={500}
                  className="educationImage rounded-lg shadow-lg border-4 border-[#1f8cad]/30"
              />
            </div>

            {/* Text Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl lg:text-5xl font-extrabold text-[#1f8cad] relative inline-block">
                Sponsor A Child
                <span className="block w-24 h-1 bg-[#ff9800] mt-2 mx-auto lg:mx-0"></span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-700 mt-6 leading-relaxed">
                Help us keep refugee children in school. Below is the cost of education per child per year:
              </p>

              {/* Pricing List */}
              <div className="mt-6 text-lg space-y-3 font-medium">
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#1f8cad] rounded-full inline-block"></span>
                  $200 : Covers tuition per child per year
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#ff9800] rounded-full inline-block"></span>
                  $50 : Covers meals per child per year
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#1f8cad] rounded-full inline-block"></span>
                  $20 : Covers books per child per year
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#ff9800] rounded-full inline-block"></span>
                  $30 : Covers school uniform per child
                </p>
              </div>

              {/* Buttons Section */}
              <div className="mt-8 flex flex-col lg:flex-row lg:gap-6">
                <Link href="#aboutSection">
                  <button
                      className="bg-[#1f8cad] hover:bg-[#197996] text-white font-semibold px-6 py-3 rounded-full transition duration-300 w-full lg:w-auto">
                    Sponsor A Child
                  </button>
                </Link>
                <button
                    className="bg-[#ff9800] hover:bg-[#e68900] text-white font-semibold px-6 py-3 rounded-full transition duration-300 w-full lg:w-auto mt-4 lg:mt-0">
                  Give to a different cause
                </button>
              </div>
            </div>
          </div>
        </div>


  <section className="fullContainer -mt-20" id="aboutSection">
    <div className="container ">
      <h2 className="text-center">KAWI CHILD FOUNDATION</h2>
      <h5 className="text-center">
        Choose below a child you would like to support
      </h5>
      <div className="space-y-10">
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-2 justify-center items-center text-center">
          {children.map((child) => (
              <div key={child._id}>
                <div className="frame text-center h-[280px] background-color flex flex-col justify-center items-center">
                  <Image
                      className="rounded-xl w-[150px] h-[150px]"
                      src={child.photo}
                      alt="Education Image"
                      width={100}
                      height={100}
                      objectFit="contain"
                  />
                  <Link href={`/sponsorchild/${id = child._id}`}>
                    <button className="btn btn-primary mt-3 custom-button bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                      Sponsor
                    </button>
                  </Link>
                  <p>{child.name}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  {/* About section ends here */
  }

  <FooterSection/>
</div>
)
  ;
}
