"use client";
import { useRef } from "react";
import React, { useState, useEffect } from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/images/logo1.png";
import bannerImage from "../../public/images/education1.jpg";

import PaginationControls from "../../../components/PaginationControls";

import HeaderSection from "../../../components/header";
import FooterSection from "../../../components/footer";

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


  const [step, setStep] = useState(1)
  const [frequency, setFrequency] = useState("one-time")
  const [amount, setAmount] = useState("50")
  const [studentName, setStudentName] = useState("")
  const [comment, setComment] = useState("")
  const [showComment, setShowComment] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    isAnonymous: false,
    email: "",
    phone: "",
    country: "Uganda",
    address1: "",
    address2: "",
    city: "",
    state: "",
  })

  const handleAmountClick = (value) => {
    setAmount(value);
    const input = document.getElementById("customAmount");
    if (input) input.value = value;
  };

  const handleCustomAmount = (e) => {
    setAmount(e.target.value);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

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
    <HeaderSection />
      {/* <div className="w-full">
      <Link href="/">
          <Image 
          src={logoImage} 
          height={100} 
          width={100} 
          alt="Foundation Logo" 
          className="rounded-md"
          />
      </Link>
      </div> */}
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
          <h2 className="lg:text-center">KAWI CHILD FOUNDATION</h2>
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
                        <div className="flex lg:justify-center lg:items-center lg:text-center" key={child._id}>
                          {/* <Image src={child.photo}  alt={child.name} width={300} height={300} /> */}
                          <Image
                            src={child.photo}
                            alt={child.name}
                            width={200} height={200}
                            className="lg:mb-[20px] object-contain rounded-md"
                          />
                        </div>
                        ))}
                        {children.map((child) => (
                            <div className="key={child._id}">
                              <br/>
                              <h2 className="text-[20px] lg:text-[30px] md:text-base"><b>About</b></h2>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Name: </b>
                                {child.name}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Student ID:</b>{child.childId}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Gender:</b>{child.gender}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Age:</b>{child.age}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Class:</b>{child.grade}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Nationality:</b>{child.nationality}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Parent Status:</b>{child.parentStatus}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                <b>Level of Need: </b>
                                {child.levelOfNeed}
                              </h5>
                              <br/>
                              <h5 className="text-[16px] md:text-base">
                                {/*<b>Years left to graduate: </b>{child.yearsLeftToGraduate}*/}
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

                            <div className="max-w-[860px] mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                              {/* Header */}
                              <div className="bg-[#0A1F5C] text-white p-4 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  {step > 1 && (
                                      <button onClick={handleBack} className="text-white">
                                        ← Back
                                      </button>
                                  )}
                                  <h2 className="text-lg font-medium">
                                    {step === 1 ? "Choose amount" : step === 2 ? "Payment" : "Information"}
                                  </h2>
                                </div>
                                <div className="flex gap-2">
                                  {[1, 2, 3, 4].map((i) => (
                                      <div key={i}
                                           className={`w-2 h-2 rounded-full ${i === step ? "bg-white" : "bg-white/50"}`}/>
                                  ))}
                                </div>
                              </div>

                              <div className="p-6">
                                {step === 1 && (
                                    <>
                                      <h1 className="text-2xl font-semibold text-center mb-6">Sponsor a Child/Youth</h1>

                                      <div className="flex gap-2 mb-8 justify-center">
                                        {["one-time", "monthly", "annually"].map((freq) => (
                                            <button
                                                key={freq}
                                                onClick={() => setFrequency(freq)}
                                                className={`px-4 py-2 rounded-full text-sm capitalize ${
                                                    frequency === freq ? "bg-[#0A1F5C] text-white" : "border border-gray-300"
                                                }`}
                                            >
                                              {freq.replace("-", " ")}
                                            </button>
                                        ))}
                                      </div>

                                      <div className="grid grid-cols-3 gap-4 mb-6">
                                        {["50", "100", "150"].map((value) => (
                                            <button
                                                key={value}
                                                onClick={() => handleAmountClick(value)}
                                                className={`py-3 rounded-full ${
                                                    amount === value ? "border-2 border-[#0A1F5C] text-[#0A1F5C]" : "border border-gray-300"
                                                }`}
                                            >
                                              <span className="text-sm">USD$</span> {value}
                                            </button>
                                        ))}
                                      </div>

                                      <div className="mb-6">
                                        <input
                                            id="customAmount"
                                            type="text"
                                            value={`USD$ ${amount}`}
                                            onChange={handleCustomAmount}
                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                      </div>

                                      <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder="Student Name"
                                            value={studentName}
                                            onChange={(e) => setStudentName(e.target.value)}
                                            className="w-full p-3 border border-gray-300 rounded-lg"
                                        />
                                        {!studentName &&
                                            <p className="text-red-500 text-sm mt-1">This field is required</p>}
                                      </div>

                                      <div className="mb-4">
                                        <label className="flex items-center gap-2">
                                          <input
                                              type="checkbox"
                                              checked={showComment}
                                              onChange={(e) => setShowComment(e.target.checked)}
                                              className="rounded border-gray-300"
                                          />
                                          <span className="text-gray-600">Write us a comment</span>
                                        </label>
                                      </div>

                                      {showComment && (
                                          <div className="mb-8">
                                            <textarea
                                                value={comment}
                                                onChange={(e) => setComment(e.target.value)}
                                                placeholder="Your comment"
                                                className="w-full p-3 border border-gray-300 rounded-lg min-h-[100px]"
                                            />
                                          </div>
                                      )}
                                    </>
                                )}

                                {step === 2 && (
                                    <>
                                      <h2 className="text-lg font-medium mb-6 text-center">Choose a payment option:</h2>
                                      <div className="space-y-4">
                                        <button
                                            onClick={() => setPaymentMethod("paypal")}
                                            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-2"
                                        >
                                          <img src="/paypal-logo.png" alt="PayPal" className="h-6"/>
                                          PayPal
                                        </button>
                                        <button
                                            onClick={() => setPaymentMethod("card")}
                                            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-2"
                                        >
                                          <span className="text-gray-600">💳</span>
                                          Credit/Debit Card
                                        </button>
                                        <button
                                            onClick={() => setPaymentMethod("bank")}
                                            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 flex items-center gap-2"
                                        >
                                          <span className="text-gray-600">🏦</span>
                                          Bank Transfer
                                        </button>
                                      </div>
                                    </>
                                )}

                                {step === 3 && (
                                    <div className="space-y-4">
                                      <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            value={formData.firstName}
                                            onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                                            className="p-3 border border-gray-300 rounded-lg"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            value={formData.lastName}
                                            onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                                            className="p-3 border border-gray-300 rounded-lg"
                                        />
                                      </div>

                                      <label className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            checked={formData.isAnonymous}
                                            onChange={(e) => setFormData({...formData, isAnonymous: e.target.checked})}
                                            className="rounded border-gray-300"
                                        />
                                        <span className="text-gray-600">Make donation anonymous</span>
                                      </label>

                                      <input
                                          type="email"
                                          placeholder="Email"
                                          value={formData.email}
                                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />

                                      <input
                                          type="tel"
                                          placeholder="Phone"
                                          value={formData.phone}
                                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />

                                      <select
                                          value={formData.country}
                                          onChange={(e) => setFormData({...formData, country: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      >
                                        <option value="Uganda">Uganda</option>
                                        {/* Add more countries as needed */}
                                      </select>

                                      <input
                                          type="text"
                                          placeholder="Address"
                                          value={formData.address1}
                                          onChange={(e) => setFormData({...formData, address1: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />

                                      <input
                                          type="text"
                                          placeholder="Address 2"
                                          value={formData.address2}
                                          onChange={(e) => setFormData({...formData, address2: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />

                                      <input
                                          type="text"
                                          placeholder="City"
                                          value={formData.city}
                                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />

                                      <input
                                          type="text"
                                          placeholder="State / Province"
                                          value={formData.state}
                                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                                          className="w-full p-3 border border-gray-300 rounded-lg"
                                      />
                                    </div>
                                )}

                                {paymentMethod === "paypal" && (
                                    <div className="mt-6">
                                      <PayPalScriptProvider
                                          options={{
                                            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
                                          }}
                                      >
                                        <PayPalButtons
                                            style={{
                                              color: "blue",
                                              layout: "horizontal",
                                            }}
                                            createOrder={async () => {
                                              const res = await fetch(`/api/checkout-${amount}`, {
                                                method: "POST",
                                              })
                                              const order = await res.json()
                                              return order.id
                                            }}
                                            onApprove={(data, actions) => {
                                              console.log(data)
                                            }}
                                            onCancel={(data) => {
                                              console.log("Cancelled:", data)
                                            }}
                                        />
                                      </PayPalScriptProvider>
                                    </div>
                                )}

                                <button
                                    onClick={handleNext}
                                    className="w-full py-3 bg-[#FFC107] text-black rounded-full mt-6 font-medium hover:bg-[#FFB300] transition-colors"
                                >
                                  Next →
                                </button>

                                {step === 2 &&
                                    <p className="text-center text-sm text-gray-500 mt-4">Powered by Donorbox</p>}
                              </div>
                            </div>
                            {/*end */}


                            {/*<div className="frame">*/}
                            {/*  <div className="frame1 lg:text-center">*/}
                            {/*    <div className="background-color1">*/}
                            {/*      <div className="px-2">*/}
                            {/*        <h4>Choose amount</h4>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*    <h2 className="text-[26px] px-2">Sponsor {child.name}</h2>*/}
                            {/*    <h5 className="px-2">*/}
                            {/*      <b>with</b>*/}
                            {/*    </h5>*/}

                            {/*    <div className="">*/}
                            {/*      <div>*/}
                            {/*        <h3 className="text-[24px] px-2">USD$ 50</h3>*/}
                            {/*        <PayPalScriptProvider*/}
                            {/*            options={{*/}
                            {/*              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*          <PayPalButtons*/}
                            {/*              style={{*/}
                            {/*                color: "blue",*/}
                            {/*                layout: "horizontal",*/}
                            {/*              }}*/}
                            {/*              createOrder={async () => {*/}
                            {/*                const res = await fetch("api/checkout", {*/}
                            {/*                  method: "POST",*/}
                            {/*                });*/}
                            {/*                const order = await res.json();*/}
                            {/*                console.log(order);*/}
                            {/*                return order.id;*/}
                            {/*              }}*/}
                            {/*              onApprove={(data, actions) => {*/}
                            {/*                console.log(data);*/}
                            {/*              }}*/}
                            {/*              onCancel={(data) => {*/}
                            {/*                console.log("Cancelled:", data);*/}
                            {/*              }}*/}
                            {/*          />*/}
                            {/*        </PayPalScriptProvider>*/}
                            {/*      </div>*/}
                            {/*      <div>*/}
                            {/*        <h3 className="text-[24px] px-2">USD$ 100</h3>*/}
                            {/*        <PayPalScriptProvider*/}
                            {/*            options={{*/}
                            {/*              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*          <PayPalButtons*/}
                            {/*              style={{*/}
                            {/*                color: "blue",*/}
                            {/*                layout: "horizontal",*/}
                            {/*              }}*/}
                            {/*              createOrder={async () => {*/}
                            {/*                const res = await fetch("api/checkout-100", {*/}
                            {/*                  method: "POST",*/}
                            {/*                });*/}
                            {/*                const order = await res.json();*/}
                            {/*                console.log(order);*/}
                            {/*                return order.id;*/}
                            {/*              }}*/}
                            {/*              onApprove={(data, actions) => {*/}
                            {/*                console.log(data);*/}
                            {/*              }}*/}
                            {/*              onCancel={(data) => {*/}
                            {/*                console.log("Cancelled:", data);*/}
                            {/*              }}*/}
                            {/*          />*/}
                            {/*        </PayPalScriptProvider>*/}
                            {/*      </div>*/}
                            {/*      <div>*/}
                            {/*        <h3 className="text-[24px] px-2">USD$ 150</h3>*/}
                            {/*        <PayPalScriptProvider*/}
                            {/*            options={{*/}
                            {/*              clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,*/}
                            {/*            }}*/}
                            {/*        >*/}
                            {/*          <PayPalButtons*/}
                            {/*              style={{*/}
                            {/*                color: "blue",*/}
                            {/*                layout: "horizontal",*/}
                            {/*              }}*/}
                            {/*              createOrder={async () => {*/}
                            {/*                const res = await fetch("api/checkout-150", {*/}
                            {/*                  method: "POST",*/}
                            {/*                });*/}
                            {/*                const order = await res.json();*/}
                            {/*                console.log(order);*/}
                            {/*                return order.id;*/}
                            {/*              }}*/}
                            {/*              onApprove={(data, actions) => {*/}
                            {/*                console.log(data);*/}
                            {/*              }}*/}
                            {/*              onCancel={(data) => {*/}
                            {/*                console.log("Cancelled:", data);*/}
                            {/*              }}*/}
                            {/*          />*/}
                            {/*        </PayPalScriptProvider>*/}
                            {/*      </div>*/}
                            {/*    </div>*/}
                            {/*  </div>*/}
                            {/*</div>*/}
                            {/*<br/>*/}
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

      <FooterSection/>
    </div>
  );
}
