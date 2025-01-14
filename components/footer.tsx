'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaGlobe
} from 'react-icons/fa'
import Link from 'next/link'

const SocialIcon = ({ icon: Icon, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`${color} p-3 rounded-full text-white hover:shadow-lg transition-all duration-300`}
  >
    <Icon className="w-5 h-5" />
  </motion.a>
)

const ContactInfo = ({ icon: Icon, text, href = '' }) => (
  <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
    <Icon className="w-5 h-5" />
    {href ? (
      <a href={href} className="hover:underline">
        {text}
      </a>
    ) : (
      <span>{text}</span>
    )}
  </div>
)

export default function FooterSection() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      // Add newsletter subscription logic here
    }
  }

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Education', href: '/education' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Join Us', href: '/joinus' },
  ]

  const socialLinks = [
    { icon: FaFacebookF, href: '#', color: 'bg-blue-600' },
    { icon: FaTwitter, href: '#', color: 'bg-sky-500' },
    { icon: FaInstagram, href: '#', color: 'bg-pink-600' },
    { icon: FaLinkedinIn, href: '#', color: 'bg-blue-700' },
    { icon: FaYoutube, href: '#', color: 'bg-red-600' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Newsletter Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
            {/* <Link href="/"> */}
              <Image 
                src="/images/kawi.jpg"
                width={120}
                height={120}
                alt="Logo"
                className="rounded-lg"
              />
              {/* <Link /> */}
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Kiwi Child Foundation
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              For 15 years, we have committed to providing access to quality education for vulnerable yet talented refugees. Donate today and help us create more refugee change makers like Ntakamaze Nziyonvira.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="absolute right-2 top-2 px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Subscribe
                </motion.button>
              </div>
              <AnimatePresence>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-green-600 text-sm"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  className="text-gray-600 dark:text-gray-300"
                >
                  <Link 
                    href={link.href}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Contact Us
            </h3>
            <div className="space-y-4">
              <ContactInfo 
                icon={FaMapMarkerAlt} 
                text="Vvumba, Uganda" 
              />
              <ContactInfo 
                icon={FaPhone} 
                text="+256-XXX-XXX-XXX"
                href="tel:+256XXXXXXX" 
              />
              <ContactInfo 
                icon={FaEnvelope} 
                text="info@kawi.ac.ug"
                href="mailto:info@kawi.ac.ug" 
              />
              <ContactInfo 
                icon={FaGlobe} 
                text="www.kawi.ac.ug"
                href="https://www.kawi.ac.ug" 
              />
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                International Offices
              </h4>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <p>Denmark Office</p>
                <p>Switzerland Office</p>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
            </div>
            <div className="pt-6">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Download Our App
              </h4>
              <div className="flex gap-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/app-store.png"
                  alt="App Store"
                  className="h-10 cursor-pointer"
                />
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src="/google-play.png"
                  alt="Google Play"
                  className="h-10 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Kawi Child Foundation. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-300">
            <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
                Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">
                Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-blue-600 dark:hover:text-blue-400">
                Cookie Policy
            </Link>
            <Link 
                href="https://francislub.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-600 dark:hover:text-blue-400"
            >
                Developed by Lubanjwa Francis
            </Link>
            </div>
        </div>
        </div>

      </div>
    </footer>
  )
}

