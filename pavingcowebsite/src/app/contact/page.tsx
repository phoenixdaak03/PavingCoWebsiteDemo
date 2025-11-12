
'use client';
import { useState } from 'react';

const services = [
    'Asphalt Paving',
    'Concrete Work',
    'Sealcoating',
    'Pothole Repair',
    'Parking Lot Maintenance',
    'Driveway Installation',
    'Other',
];

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        services: [] as string[],
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleServiceToggle = (service: string) => {
        setFormData((prev) => ({
            ...prev,
            services: prev.services.includes(service)
                ? prev.services.filter((s) => s !== service)
                : [...prev.services, service],
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
                    <p className="text-gray-600 mb-8">
                        Get in touch with our team to discuss your paving needs.
                    </p>

                    {submitted && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                            <p className="text-green-800 font-medium">Thank you! We'll be in touch soon.</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
                        {/* Contact Information */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Information</h2>
                            
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                                        Phone *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
                                    Project Address
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    placeholder="123 Main St, City, State"
                                />
                            </div>
                        </div>

                        {/* Services */}
                        <div className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Services Needed *</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {services.map((service) => (
                                    <label key={service} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={formData.services.includes(service)}
                                            onChange={() => handleServiceToggle(service)}
                                            className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-600"
                                        />
                                        <span className="ml-3 text-gray-700">{service}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message */}
                        <div className="mb-8">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Additional Details
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={5}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                placeholder="Tell us more about your project..."
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition duration-200"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Contact Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                            <p className="text-gray-600">(555) 123-4567</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                            <p className="text-gray-600">info@pavingco.com</p>
                        </div>
                        <div className="bg-white rounded-lg shadow p-6 text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Hours</h3>
                            <p className="text-gray-600">Mon-Fri: 8am-5pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}