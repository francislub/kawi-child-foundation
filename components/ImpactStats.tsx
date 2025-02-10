export default function ImpactStats() {
    const stats = [
        { number: "500+", description: "Children Sponsored" },
        { number: "10", description: "Schools Supported" },
        { number: "5,000+", description: "Lives Impacted" },
        { number: "3", description: "Community Programs" },
    ]

    return (
        <section className="bg-blue-600 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl font-bold mb-2">{stat.number}</div>
                            <div>{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

