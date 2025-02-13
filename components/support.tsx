'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import React from "react";

const StatisticPanel = ({ number, text, isPercentage = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg"
  >
    <motion.span 
      className="text-4xl md:text-5xl font-bold text-blue-600 mb-3"
      initial={{ scale: 0.5 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {isPercentage ? `${number}%` : number}
    </motion.span>
    <p className="text-gray-700 text-sm md:text-base lg:text-lg">{text}</p>
  </motion.div>
)

export default function Support() {
  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4">
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6">
            <StatisticPanel
              number="3.7 Million"
              text="Children are out of school (UNHCR)"
            />
            <p className="text-center text-gray-600">
              Help us educate children by sponsoring a child today!
            </p>
            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg"
                  onClick={() => window.location.href = '/sponsor'}
                >
                  Sponsor A Child
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-4">
              <StatisticPanel
                number="86"
                text="of children in primary schools"
                isPercentage={true}
              />
              <StatisticPanel
                number="25"
                text="of primary school children in Uganda remain out-of-school"
                isPercentage={true}
              />
            </div>
          </div>
        </div>

        {/* Video and Support Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden shadow-xl">

              <img
                  src="/images/pay.jpg"
                  alt="About Kawi Child Foundation"
                  className="rounded-lg shadow-lg w-full object-cover"
              />
            {/*<iframe*/}
            {/*  src="https://www.youtube.com/embed/5rsgHbyl02Y?si=tp-F34eVxdf-RQ2v"*/}
            {/*  title="Kawi Child Organization "*/}
            {/*  className="absolute inset-0 w-full h-full"*/}
            {/*  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*  allowFullScreen*/}
            {/*/>*/}
          </div>

          <motion.div
              initial={{opacity: 0, x: 50}}
              whileInView={{opacity: 1, x: 0}}
              viewport={{once: true}}
              transition={{duration: 0.6}}
              className="space-y-6 p-6 lg:p-8 bg-blue-600 text-white rounded-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              Your support means education for more children
            </h2>
            <p className="text-lg text-blue-100">
              Kawi Child Foundation is a family-based, non-profit organization established in 2023 in Vvumba - Luwero, Uganda.
            Dedicated to improving the lives of underprivileged children
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center lg:justify-start"
            >
              <Button 
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-8 py-3 rounded-full text-lg font-semibold"
                onClick={() => window.location.href = '/sponsor'}
              >
                Sponsor A Child Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

