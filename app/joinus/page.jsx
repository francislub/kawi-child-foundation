"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaHandsHelping, FaBook, FaMoneyBillWave, FaTools } from "react-icons/fa"

import HeaderSection from "../../components/header"
import FooterSection from "../../components/footer"
import Sponsor from "../../components/sponsor"

const PartnershipWay = ({ icon: Icon, text }) => (
  <motion.li
    className="flex items-center space-x-3 text-lg mb-4"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Icon className="text-blue-600 text-2xl" />
    <span>{text}</span>
  </motion.li>
)

export default function JoinUsPage() {
  const partnershipWays = [
    { icon: FaBook, text: "Buy scholastic materials." },
    { icon: FaHandsHelping, text: "Give some upkeep to the children." },
    { icon: FaBook, text: "Donate books and other educational materials." },
    { icon: FaMoneyBillWave, text: "Financial support in starting and operating a vocational school." },
    { icon: FaTools, text: "Technical support in starting and operating a vocational school." },
  ]

  return (
    <div className="scroll-smooth text-gray-800">
            <div className="fullContainer bannerj" id="homeSection">
                <HeaderSection />
                {/* Header ends here */}

                <div className="container">
                <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Join Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/*Our foundation is committed to paying particular attention to children and youth within their programs who*/}
            {/*have suffered from violence and trauma, and aspires to sustain support for young people who have suffered*/}
            {/*trauma. Kawi Child Foundation also recognizes the power of functional education as a critical part of*/}
            {/*healing conflict and creating social cohesion in communities.*/}
          </motion.p>
          <Link href="#joinusSection">
            <motion.button
              className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN US NOW
            </motion.button>
          </Link>
                </div>
            </div>

      <section className="py-20 bg-gray-50" id="joinusSection">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            JOIN OUR TEAM
          </motion.h2>
          <motion.p
            className="text-xl text-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Kawi Child Foundation is a family-based, non-profit organization established in 2023 in Mbale, Uganda. 
            Dedicated to improving the lives of underprivileged children.
          </motion.p>
          <motion.h3
            className="text-2xl font-semibold mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            You can partner with us in the following ways:
          </motion.h3>
          <ul className="max-w-2xl mx-auto mb-16">
            {partnershipWays.map((way, index) => (
              <PartnershipWay key={index} {...way} />
            ))}
          </ul>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Open Positions:</h3>
            <p className="text-lg text-gray-700">
              There are currently no open positions. Follow us on our social media channels or subscribe to our
              newsletter to stay up to date for new job opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      <Sponsor />

      <FooterSection />
    </div>
  )
}

