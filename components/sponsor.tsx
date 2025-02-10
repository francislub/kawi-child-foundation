"use client"
import Link from "next/link"
import { useState } from "react"

export default function Sponsor() {
    const [activeTab, setActiveTab] = useState("monthly")

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-8">SPONSOR A CHILD</h2>
                <p className="text-lg text-center mb-12 max-w-2xl mx-auto">
                    Kawi Child Foundation is a family-based, non-profit organization established in 2023 in Mbale, Uganda. We are
                    dedicated to improving the lives of underprivileged children through education, healthcare, and community
                    support.
                </p>

                <div className="flex justify-center mb-8">
                    <button
                        className={`px-6 py-2 rounded-l-md ${activeTab === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setActiveTab("monthly")}
                    >
                        Monthly Sponsorship
                    </button>
                    <button
                        className={`px-6 py-2 rounded-r-md ${activeTab === "onetime" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
                        onClick={() => setActiveTab("onetime")}
                    >
                        One-time Donation
                    </button>
                </div>

                {activeTab === "monthly" && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[30, 50, 100].map((amount) => (
                            <div key={amount} className="bg-white p-6 rounded-lg shadow-md text-center">
                                <h3 className="text-2xl font-semibold mb-4">${amount}/month</h3>
                                <p className="mb-6">Provide essential support for a child's education and well-being</p>
                                <Link
                                    href={`/sponsor?amount=${amount}`}
                                    className="bg-blue-600 text-white px-6 py-2 rounded-md inline-block hover:bg-blue-700 transition duration-300"
                                >
                                    Sponsor Now
                                </Link>
                            </div>
                        ))}
                    </div>
                )}

                {activeTab === "onetime" && (
                    <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
                        <h3 className="text-2xl font-semibold mb-4">Make a One-time Donation</h3>
                        <input
                            type="number"
                            placeholder="Enter amount"
                            className="w-full px-4 py-2 mb-4 border rounded-md"
                            min="1"
                        />
                        <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                            Donate Now
                        </button>
                    </div>
                )}

                <div className="mt-12 text-center">
                    <Link
                        href="/joinus"
                        className="bg-green-600 text-white px-8 py-3 rounded-md inline-block hover:bg-green-700 transition duration-300 mr-4"
                    >
                        JOIN US
                    </Link>
                    <Link
                        href="/sponsor"
                        className="bg-yellow-600 text-white px-8 py-3 rounded-md inline-block hover:bg-yellow-700 transition duration-300"
                    >
                        Learn More About Sponsorship
                    </Link>
                </div>
            </div>
        </section>
    )
}

