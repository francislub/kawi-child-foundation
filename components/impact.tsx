'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import Link from 'next/link'

interface ImpactStatProps {
  number: string
  text: string
  delay: number
  href: string
}

const ImpactStat = ({ number, text, delay, href }: ImpactStatProps) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  return (
    <Link href={href} className="group">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
        transition={{ duration: 0.5, delay }}
        className="flex flex-col items-center justify-center p-4 cursor-pointer"
      >
        <div className="relative w-48 h-48 mb-4 transform transition-transform duration-300 group-hover:scale-105">
          {/* Circular border with gradient */}
          <svg
            className="w-full h-full transform -rotate-90"
            viewBox="0 0 100 100"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="2"
              strokeDasharray="283"
              strokeDashoffset="0"
              className="transition-all duration-500 group-hover:stroke-[3]"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#FFD700" />
                <stop offset="50%" stopColor="#0066CC" />
                <stop offset="100%" stopColor="#0066CC" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Number and text inside circle */}
          <div className="absolute inset-0 flex flex-col items-center justify-center transition-transform duration-300">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: delay + 0.5 }}
              className="text-3xl md:text-4xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors duration-300"
            >
              {number}
            </motion.span>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: delay + 0.7 }}
              className="text-center text-sm md:text-base mt-2 px-4 group-hover:text-blue-600 transition-colors duration-300"
            >
              {text}
            </motion.p>
          </div>
        </div>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "0%" }}
          whileHover={{ width: "100%" }}
          className="h-0.5 bg-blue-600 mt-2"
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </Link>
  )
}

export default function Impact() {
  const impactData = [
    {
      number: '5,838',
      text: 'Young people who received primary education',
      delay: 0,
      href: '/impact/primary-education'
    },
    {
      number: '1,171',
      text: 'Young people who received secondary education',
      delay: 0.2,
      href: '/impact'
    },
    {
      number: '+92',
      text: 'University Scholarships',
      delay: 0.4,
      href: '/impact'
    },
    {
      number: '+90,000',
      text: 'Our reach via community engagement',
      delay: 0.6,
      href: "/impact"
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12"
        >
          OUR IMPACT
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {impactData.map((stat, index) => (
            <ImpactStat
              key={index}
              number={stat.number}
              text={stat.text}
              delay={stat.delay}
              href={stat.href}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

