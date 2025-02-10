import { useState } from "react"

const faqs = [
    {
        question: "How does child sponsorship work?",
        answer:
            "Child sponsorship involves making a monthly commitment to support a specific child's education, healthcare, and overall well-being. Your contributions go directly towards programs that benefit your sponsored child and their community.",
    },
    {
        question: "How much does it cost to sponsor a child?",
        answer:
            "We offer sponsorship options starting from $30 per month. You can choose the sponsorship level that best fits your budget and desired impact.",
    },
    {
        question: "Can I communicate with my sponsored child?",
        answer:
            "Yes! We encourage sponsors to write letters to their sponsored children. You'll also receive updates and photos about your sponsored child's progress throughout the year.",
    },
    {
        question: "How long does sponsorship last?",
        answer:
            "Sponsorship typically lasts until the child completes their education or reaches adulthood. However, you can choose to end your sponsorship at any time if your circumstances change.",
    },
]

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-4">
                            <button
                                className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-md"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold">{faq.question}</span>
                                <span>{openIndex === index ? "-" : "+"}</span>
                            </button>
                            {openIndex === index && (
                                <div className="p-4 bg-white border border-gray-200 rounded-b-md">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

