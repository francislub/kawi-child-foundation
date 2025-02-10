"use client"

import { useState } from "react"
import Image from "next/image"

const testimonials = [
    {
        quote:
            "Sponsoring a child through Kawi Child Foundation has been an incredibly rewarding experience. I've seen firsthand how my support is making a real difference in a child's life.",
        author: "Sarah Johnson",
        role: "Monthly Sponsor",
        image: "/images/testimonial1.jpg",
    },
    {
        quote:
            "The transparency and regular updates from Kawi Child Foundation are impressive. I always know how my contributions are being used to help children in need.",
        author: "Michael Lee",
        role: "Volunteer and Donor",
        image: "/images/testimonial2.jpg",
    },
    {
        quote:
            "As a teacher, I've seen the impact of Kawi Child Foundation's work in our local schools. The support they provide is truly transforming lives.",
        author: "Emily Nkwanzi",
        role: "Local Teacher",
        image: "/images/testimonial3.jpg",
    },
]

export default function TestimonialSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Sponsors Say</h2>
                <div className="max-w-3xl mx-auto relative">
                    <div className="bg-white p-8 rounded-lg shadow-md">
                        <p className="text-lg mb-6">"{testimonials[currentIndex].quote}"</p>
                        <div className="flex items-center">
                            <Image
                                src={testimonials[currentIndex].image || "/placeholder.svg"}
                                alt={testimonials[currentIndex].author}
                                width={60}
                                height={60}
                                className="rounded-full mr-4"
                            />
                            <div>
                                <div className="font-semibold">{testimonials[currentIndex].author}</div>
                                <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                            </div>
                        </div>
                    </div>
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                    >
                        &#8594;
                    </button>
                </div>
            </div>
        </section>
    )
}

