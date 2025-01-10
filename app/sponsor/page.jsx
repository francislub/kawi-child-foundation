"use client";
import { useRef } from "react";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import bannerImage from "../public/images/education1.jpg";


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
          "https://nalongo-dashboard-server.onrender.com/api/v1/children",
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
            {/* <Link href="/">
          <Image 
          src={"/images/kawi.jpg"}  
          height={100} 
          width={100} 
          alt="Foundation Logo" 
          className="rounded-md"
          />
      </Link> */}
      <div className="" id="homeSection">
        <div className="flex flex-col lg:flex-row background-color lg:gap-5">
          <div className="">
            <div>
              <Image
                src={bannerImage}
                alt="An image"
                width="800"
                className="educationImage"
              />
            </div>
          </div>
          <div className="mx-2">
            <br />
            <h1>
              <span>Sponsor A Child</span>
            </h1>
            <h4 className="text-[18px] md:text-1g">
              Help us keep refugee children in School.<br className="md:hidden block"/>
              Below is the cost of
              education per child per year:
            </h4>
            <br />
            <h5 className="text-[18px]">$200 : Covers tuition per child per year </h5>
            <h5 className="text-[18px]">$50 : Covers meals per child per year </h5>
            <h5 className="text-[18px]">$20 : Covers books per child per year </h5>
            <h5 className="text-[18px]">$30 : Covers school uniform per child </h5>
            <div>
              <Link href="#aboutSection">
                <button className="green-button">Sponsor A Child</button>
              </Link>
            </div>
            <div>
              <button className="blue-button">Give to a different cause</button>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>
      {/* Home section ends here */}

      <section className="fullContainer -mt-20" id="aboutSection">
        <div className="container ">
          <h2 className="text-center">KAWI CHILD FOUNDATION</h2>
          <h5 className="text-center">
            Choose below a child you would like to support
          </h5>
          <div className="space-y-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-2 justify-center items-center text-center">
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
                    <Link href={`/sponsorchild/${id=child._id}`}>
                      <button className="btn btn-primary mt-3 custom-button">
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
      {/* About section ends here */}

      <FooterSection />
    </div>
  );
}
