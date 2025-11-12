import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl text-gray-300">
                        Professional asphalt paving solutions since 1995
                    </p>
                </div>
            </section>

            {/* Company Overview */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-900">Who We Are</h2>
                        <p className="text-gray-700 mb-4">
                            For over 25 years, we've been the trusted name in asphalt paving across the region. 
                            Our commitment to quality, durability, and customer satisfaction has made us the 
                            preferred choice for residential and commercial projects.
                        </p>
                        <p className="text-gray-700">
                            With a team of experienced professionals and state-of-the-art equipment, we deliver 
                            exceptional results on every project, no matter the size or complexity.
                        </p>
                    </div>
                    <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center overflow-hidden">
                        <span className="text-gray-600 w-full"><Image src="/pavingcrew1.png" alt="Professional Paving Work" width={500} height={300} className="object-cover object-center w-full h-full"/></span>
                    </div>
                </div>
            </section>

            {/* Our Mission & Values */}
            <section className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Our Mission & Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Quality</h3>
                            <p className="text-gray-700">
                                We use premium materials and proven techniques to ensure long-lasting results.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Reliability</h3>
                            <p className="text-gray-700">
                                On-time delivery and professional service are the foundation of our reputation.
                            </p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-lg">
                            <h3 className="text-xl font-bold mb-4 text-gray-900">Integrity</h3>
                            <p className="text-gray-700">
                                Transparent pricing and honest communication with every client, every time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <p className="text-4xl font-bold mb-2">25+</p>
                            <p className="text-gray-300">Years in Business</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">500+</p>
                            <p className="text-gray-300">Projects Completed</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">2000+</p>
                            <p className="text-gray-300">Happy Clients</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold mb-2">50+</p>
                            <p className="text-gray-300">Team Members</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="max-w-6xl mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Why Choose Us</h2>
                <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>Licensed and fully insured contractors</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>State-of-the-art equipment and technology</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>Competitive pricing with free estimates</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>Comprehensive warranties on all work</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>Available for emergency repairs</span>
                    </li>
                    <li className="flex items-start">
                        <span className="text-yellow-600 font-bold mr-3">✓</span>
                        <span>Dedicated customer support team</span>
                    </li>
                </ul>
            </section>

            {/* CTA */}
            <section className="bg-yellow-500 py-12">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
                    <Link href="/contact">
                        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-800 transition">
                            Get a Free Quote
                        </button>
                    </Link>
                </div>
            </section>
        </div>
    );
}