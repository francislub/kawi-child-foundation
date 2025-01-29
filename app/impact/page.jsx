"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { FaGraduationCap, FaHandHoldingHeart, FaHeartbeat } from "react-icons/fa"

import educationImage from "../../public/images/plap1.jpg"
import HeaderSection from "../../components/header"
import FooterSection from "../../components/footer"
import Sponsor from "../../components/sponsor"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const ImpactArea = ({ icon: Icon, title, description, items }) => (
  <motion.div
    className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    variants={fadeInUp}
    initial="initial"
    animate="animate"
  >
    <Icon className="text-5xl text-blue-600 mb-4" />
    <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 mb-4">{description}</p>
    <ul className="space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <svg
            className="w-4 h-4 mr-2 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
)

export default function ProgramsPage() {
  const impactAreas = [
    {
      icon: FaGraduationCap,
      title: "Education",
      description: "Empowering minds and shaping futures through accessible, quality education for all.",
      items: ["Scholarships for underprivileged students", "Teacher training programs", "Digital literacy initiatives"],
    },
    {
      icon: FaHandHoldingHeart,
      title: "Community Building",
      description: "Fostering strong, resilient communities through collaborative initiatives and support programs.",
      items: ["Local leadership development", "Cultural preservation projects", "Community center establishments"],
    },
    {
      icon: FaHeartbeat,
      title: "Health & Well-being",
      description: "Promoting health awareness and providing essential medical support to underserved communities.",
      items: ["Mobile health clinics", "Nutrition programs for children", "Mental health support services"],
    },
  ]

  return (
    <div className="scroll-smooth text-gray-800">
            <div className="fullContainer banneri" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container space-y-10">
                    <h1>Our Impact</h1>
                    <p className="text-lg">
                    </p>
                </div>
            </div>

      <section className="py-20 bg-gray-50" id="impactSection">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {impactAreas.map((area, index) => (
              <ImpactArea key={index} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="impactStorySection">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="md:w-1/2">
              <Image
                src={educationImage}
                alt="Impact Story"
                className="rounded-lg shadow-xl"
                width={500}
                height={500}
                objectFit="cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Impact</h2>
              <p className="text-gray-600 mb-6">
                Through our dedicated efforts and the support of our community, we've made significant strides in
                transforming lives. Our programs have:
              </p>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>We target to eliminate poverty</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Build community</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Advance education</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Promote well being</span>
                </li>
              </ul>
              {/* <Link href="/impact-stories">
                <button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300">
                  Read More Impact Stories
                </button>
              </Link> */}
            </div>
          </motion.div>
        </div>
      </section>

      <Sponsor />

      <FooterSection />
    </div>
  )
}

