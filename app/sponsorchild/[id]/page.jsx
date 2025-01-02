"use client";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logoImage from "../../public/images/logo1.png";
import logoImage1 from "../../public/icons/face.png";
import logoImage2 from "../../public/icons/ins.png";
import logoImage3 from "../../public/icons/link.png";
import logoImage4 from "../../public/icons/twi.png";
import logoImage5 from "../../public/icons/you.png";
import bannerImage from "../../public/images/education1.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import PaginationControls from "../../../components/PaginationControls";

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

export default function ProgramsPage({params}) {
  const aboutSectionRef = useRef(null);

  const [children, setChildren] = useState([]);
  const [error, setError] = useState(null);

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
        console.log("Fetched data:", data); // Debug log to check the structure of the data
        console.log(params);

        if (params && params.id) {
          const filteredData = data.filter((item) => item._id === params.id);
          console.log("Filtered data:", filteredData); // Debug log to check the filtered data
          setChildren(filteredData);
        } else {
          console.warn("params.id is not defined");
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching data:", err); // Debug log to check for errors
      }
    };

    //     const data = await response.json();


    //     const filteredData = data.filter((item) => item._id === params.id);
    //     setChildren(filteredData);
    //   } catch (err) {
    //     setError(err.message);
    //   }
    // };

    fetchChildren();
  }, []);

  return (
    <div className="scroll-smooth text-gray-800">
      <div className="w-full">
      <Link href="/">
          <Image 
          src={logoImage} 
          height={100} 
          width={100} // Add width to prevent layout shift
          alt="Foundation Logo" 
          className="rounded-md"
          />
      </Link>
      </div>
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
            <h4 className="text-[18px] md:text-xl">
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
      {/* Home section ends here */}

      <section className="fullContainer -mt-20" id="aboutSection">
        <div className="container ">
          <h2 className="lg:text-center">NALONGO FOUNDATION</h2>
          <h5 className="lg:text-center text-[16px] lg:text-base">
            Choose below a child you would like to support
          </h5>
          <div className="">
            <div className="background-color">
              <div className="lg:px-3 px-2">
                {error && <p>{error}</p>}
                  <div className="">
                    <div className="flex flex-col lg:flex-row justify-between">
                      <br />
                      <div >
                      <div className="flex flex-col lg:flex-row lg:gap-5">
                       {children.map((child) => (
                        <div className="flex lg:justify-center lg:-mt-20 lg:items-center lg:text-center" key={child._id}>
                          {/* <Image src={child.photo}  alt={child.name} width={300} height={300} /> */}
                          <Image
                            src={child.photo}
                            alt={child.name}
                            width={300} height={300}
                            className="lg:-mt-20"
                          />
                        </div>
                        ))}
                        {children.map((child) => (
                        <div className="key={child._id}">
                          <br />
                          <h2 className="text-[20px] lg:text-[30px] md:text-base"> <b>About</b></h2>
                          <h5 className="text-[16px] md:text-base">
                            <b>Name: </b>
                            {child.name}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Student ID:</b>{child.childId}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Gender:</b>{child.gender}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Age:</b>{child.age}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Class:</b>{child.grade}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Nationality:</b>{child.nationality}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Parent Status:</b>{child.parentStatus}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Level of Need: </b>
                            {child.levelOfNeed}
                          </h5>
                          <h5 className="text-[16px] md:text-base">
                            <b>Years left to graduate: </b>{child.yearsLeftToGraduate}
                          </h5>
                          {/* <h5 className="text-[16px] md:text-base">{child.description}</h5> */}
                          
                        </div>
                        ))}
                      </div>
                      {children.map((child) => (
                        <div className="key={child._id}">
                        <h5 className="text-[16px] md:text-base">{child.description}</h5>
                        <div className="button-container">
                            <Link href="/sponsoranychild" className="-ml-20 lg:-ml-0">
                              <button className="close rounded text-[18px] ">Sponsor Any Other Child</button>
                            </Link>
                          </div>
                        </div>
                        
                      ))}
                      </div>
                      {children.map((child) => (
                      <div className="pt-3 key={child._id}">
                          <h2>Sponsor: {child.name}</h2>
                        <div className="frame">
                          <div className="frame1 lg:text-center">
                            <div className="background-color1">
                              <div className="px-2">
                                <h4>Choose amount</h4>
                              </div>
                            </div>
                              <h2 className="text-[26px] px-2">Sponsor {child.name}</h2>
                            <h5 className="px-2">
                              <b>with</b>
                            </h5>

                            <div className="">
                              <div>
                                {/* <Link href='#'> */}
                                <h3 className="text-[24px] px-2">USD$ 50</h3>
                                <PayPalScriptProvider
                                  options={{
                                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                                  }}
                                >
                                  {/* <PayPalScriptProvider > */}
                                  <PayPalButtons
                                    style={{
                                      color: "blue",
                                      layout: "horizontal",
                                    }}
                                    createOrder={async () => {
                                      const res = await fetch("api/checkout", {
                                        method: "POST",
                                      });
                                      const order = await res.json();
                                      console.log(order);
                                      return order.id;
                                    }}
                                    onApprove={(data, actions) => {
                                      console.log(data);
                                    }}
                                    onCancel={(data) => {
                                      console.log("Cancelled:", data);
                                    }}
                                  />
                                </PayPalScriptProvider>
                                {/* </Link> */}
                              </div>
                              <div>
                                {/* <Link href='#'> */}
                                <h3 className="text-[24px] px-2">USD$ 100</h3>
                                <PayPalScriptProvider
                                  options={{
                                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                                  }}
                                >
                                  {/* <PayPalScriptProvider > */}
                                  <PayPalButtons
                                    style={{
                                      color: "blue",
                                      layout: "horizontal",
                                    }}
                                    createOrder={async () => {
                                      const res = await fetch("api/checkout-100", {
                                        method: "POST",
                                      });
                                      const order = await res.json();
                                      console.log(order);
                                      return order.id;
                                    }}
                                    onApprove={(data, actions) => {
                                      console.log(data);
                                    }}
                                    onCancel={(data) => {
                                      console.log("Cancelled:", data);
                                    }}
                                  />
                                </PayPalScriptProvider>
                                {/* </Link> */}
                              </div>
                              <div>
                                {/* <Link href='#'> */}
                                <h3 className="text-[24px] px-2">USD$ 150</h3>
                                <PayPalScriptProvider
                                  options={{
                                    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                                  }}
                                >
                                  {/* <PayPalScriptProvider > */}
                                  <PayPalButtons
                                    style={{
                                      color: "blue",
                                      layout: "horizontal",
                                    }}
                                    createOrder={async () => {
                                      const res = await fetch("api/checkout-150", {
                                        method: "POST",
                                      });
                                      const order = await res.json();
                                      console.log(order);
                                      return order.id;
                                    }}
                                    onApprove={(data, actions) => {
                                      console.log(data);
                                    }}
                                    onCancel={(data) => {
                                      console.log("Cancelled:", data);
                                    }}
                                  />
                                </PayPalScriptProvider>
                                {/* </Link> */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <br />
                      </div>
                      ))}
                    </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About section ends here */}

      <footer className="">
        <div className="container flex md:flex-row md:justify-between md:space-x-10 space-y-5 flex-col">
          <div className="newsLetterContainer md:w-96">
            <Image
              src={logoImage}
              width={80}
              className="rounded-md pb-5"
              alt="Logo Image"
            />
            <p>
              For 15 years, we have committed to providing access to quality
              education for volunarable yet talented refugees. Donate today and
              help us create more refugee change makers like Ntakamaze
              Nziyonvira.
            </p>
            <input type="text" placeholder="Enter your email address" />
          </div>
          {/* NewsLetter container ends here */}

          <div className="linksContainer">
            <div className="title">Useful Links</div>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="link">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="link">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/education" className="link">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="link">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/joinus" className="link">
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
          {/* LinksContainer ends here */}

          <div className="connectContainer space-y-6">
            <div className="title flex items-center">follow us</div>
            <div className="flex items-center gap-4">
              <Image
                src={logoImage1}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-blue-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage2}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-green-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage3}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-red-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage4}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-purple-500"
                alt="Logo Image"
              />
              <Image
                src={logoImage5}
                width={50}
                className="rounded-full pb-0 border-yellow-500 border-2 cursor-pointer hover:border-yellow-600"
                alt="Logo Image"
              />
            </div>
            <span>Mailing address:</span>
            <br />
            <span>Phone:</span>
            <span>Email:</span> info@abcde.org
            <br />
            <p>
              Contact - Uganda <br />
            </p>
            <p>
              Contact - Denmark <br />
            </p>
            <p>
              Contact - Switzerland <br />
            </p>
            <span>Mailing address:</span>
            <br />
            <span>Physical address:</span>
            <br />
            <span>Phone:</span> +256-
            <span>Email:</span> info@abced.org
          </div>
          {/* ConnectContainer ends here */}
        </div>
      </footer>
    </div>
  );
}
