
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ServicesPage() {
    const [expandedService, setExpandedService] = useState<number | null>(null);

    const services = [
        {
            id: 1,
            title: 'Asphalt Paving',
            description: 'Professional asphalt paving for driveways, parking lots, and roads',
            details: 'We provide high-quality asphalt paving services using premium materials and modern equipment. Our experienced team ensures a smooth, durable finish that lasts for years.'
        },
        {
            id: 2,
            title: 'Asphalt Repair',
            description: 'Expert repair services for damaged or worn asphalt surfaces',
            details: 'From pothole repairs to crack filling, we address all types of asphalt damage. Our repairs extend the life of your pavement and prevent costly future damage.'
        },
        {
            id: 3,
            title: 'Sealcoating',
            description: 'Protective sealcoat application to preserve asphalt surfaces',
            details: 'Our sealcoating protects your asphalt from UV damage, water infiltration, and harsh chemicals. Regular sealcoating maintenance keeps your surface looking new.'
        },
        {
            id: 4,
            title: 'Line Striping',
            description: 'Parking lot and road marking services',
            details: 'We provide professional line striping for parking lots, roads, and athletic facilities. Our precise markings improve safety and organization.'
        },
        {
            id: 5,
            title: 'Resurfacing',
            description: 'Complete asphalt resurfacing for aging surfaces',
            details: 'When repair is no longer sufficient, we offer full resurfacing services to restore your asphalt to like-new condition at a fraction of replacement cost.'
        },
        {
            id: 6,
            title: 'Parking Lot Maintenance',
            description: 'Comprehensive maintenance programs for commercial properties',
            details: 'We offer customized maintenance plans to keep your parking lot in pristine condition year-round, including cleaning, repairs, and seasonal care.'
        }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800">
            {/* Header */}
            <div className="bg-amber-600 py-12">
                <div className="max-w-6xl mx-auto px-4">
                    <h1 className="text-4xl font-bold text-white mb-2">Our Services</h1>
                    <p className="text-lg text-amber-100">Professional asphalt paving solutions for residential and commercial properties</p>
                </div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
                            className="bg-slate-700 border border-amber-500 rounded-lg p-6 cursor-pointer transition-all duration-300 ease-in-out hover:shadow-lg hover:border-amber-400"
                        >
                            <h3 className="text-xl font-bold text-amber-400 mb-2">{service.title}</h3>
                            <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                            <div
                                className="overflow-hidden transition-all duration-300 ease-in-out"
                                style={{
                                    maxHeight: expandedService === service.id ? '500px' : '0px',
                                    opacity: expandedService === service.id ? 1 : 0,
                                }}
                            >
                                <p className="text-slate-200 text-sm border-t border-amber-500 pt-4 mt-4">{service.details}</p>
                            </div>
                            <div className="text-amber-400 text-sm font-semibold mt-4 transition-opacity duration-300">
                                {expandedService === service.id ? '- Click to collapse' : '+ Click to learn more'}
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="bg-slate-700 border border-amber-500 rounded-lg p-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to get started?</h2>
                    <p className="text-slate-300 mb-6">Contact us today for a free quote on your asphalt paving project</p>
                    <Link
                        href="/contact"
                        className="inline-block bg-amber-600 hover:bg-amber-500 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                    >
                        Request a Quote
                    </Link>
                </div>
            </div>
        </main>
    );
}