"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function NavBar(){
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Contact", href: "/contact" },
    ];

    return(
        <nav className="bg-white shado-md sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-blue-600">
                    Paving Co.
                </Link>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden p-2 text-gray-600" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </button>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className={ `hover:text-blue-600 ${pathname === link.href ? "text-blue-600 font-semibold" : "" }`}>
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    )
}