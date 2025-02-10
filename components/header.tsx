"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const navItems = [
        {
            title: "ABOUT",
            href: "/about",
            dropdown: [
                { title: "WHO WE ARE", href: "/about" },
                { title: "WHAT WE DO", href: "/wedo" },
                { title: "OUR IMPACT", href: "/impact" },
                { title: "OUR LEADERSHIP", href: "/team" },
                { title: "JOIN OUR TEAM", href: "/joinus" },
                { title: "BENEFICIARIES", href: "/benef" },
            ],
        },
        {
            title: "PROGRAMS",
            href: "/programs",
            dropdown: [
                { title: "EDUCATION", href: "/education" },
                { title: "COMMUNITY ENGAGEMENT", href: "/community" },
            ],
        },
        {
            title: "CHAPTERS",
            href: "/chapters",
            dropdown: [
                { title: "DENMARK", href: "/denmark" },
                { title: "SWITZERLAND", href: "/switzerland" },
                { title: "GERMANY", href: "/germany" },
            ],
        },
        { title: "GALLERY", href: "/gallery" },
    ]

    const isActive = (href: string) => pathname === href

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 w-full border-b bg-white shadow-sm transition-all duration-300 ${
                isScrolled ? "py-2" : "py-4"
            }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <Image src="/images/kawi.jpg" height={40} width={40} alt="Kawi Child Logo" className="rounded-md" />
                    <span className="hidden font-bold sm:inline-block">Kawi Child</span>
                </Link>
                <div className="flex items-center space-x-4">
                    <nav className="hidden lg:flex items-center space-x-6">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <Link
                                    href={item.href}
                                    className={`text-gray-700 hover:text-gray-900 font-medium px-3 py-2 rounded-md transition-colors ${
                                        isActive(item.href) ? "bg-blue-500 text-white" : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                                {item.dropdown && (
                                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                        {item.dropdown.map((dropItem, dropIndex) => (
                                            <Link
                                                key={dropIndex}
                                                href={dropItem.href}
                                                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                                                    isActive(dropItem.href) ? "bg-blue-100" : ""
                                                }`}
                                            >
                                                {dropItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>
                    <form className="hidden lg:block">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                    <Link
                        href="/paypal"
                        className="hidden lg:inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600"
                    >
                        Donate
                    </Link>
                    <button
                        className="lg:hidden text-gray-700 hover:text-gray-900 focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="lg:hidden bg-white">
                    <nav className="px-4 pt-2 pb-4 space-y-2">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                <Link
                                    href={item.href}
                                    className={`block text-gray-700 font-medium hover:text-gray-900 px-3 py-2 rounded-md ${
                                        isActive(item.href) ? "bg-blue-500 text-white" : ""
                                    }`}
                                >
                                    {item.title}
                                </Link>
                                {item.dropdown && (
                                    <div className="pl-4 space-y-2 mt-2">
                                        {item.dropdown.map((dropItem, dropIndex) => (
                                            <Link
                                                key={dropIndex}
                                                href={dropItem.href}
                                                className={`block text-sm text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md ${
                                                    isActive(dropItem.href) ? "bg-blue-100" : ""
                                                }`}
                                            >
                                                {dropItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link
                            href="/paypal"
                            className="block w-full text-center bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 mt-4"
                        >
                            Donate
                        </Link>
                    </nav>
                    <form className="px-4 pb-4">
                        <input
                            type="search"
                            placeholder="Search..."
                            className="w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </form>
                </div>
            )}
        </header>
    )
}

