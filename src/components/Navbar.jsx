import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    HeartIcon,
    ShieldExclamationIcon,
    HandRaisedIcon,
    EnvelopeIcon,
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon
} from '@heroicons/react/24/outline';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="z-50 fixed bg-white shadow-sm w-full">
            <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex justify-between h-16">
                    {/* Logo */}
                    <div className="flex flex-shrink-0 items-center">
                        <HeartIcon className="w-8 h-8 text-purple-600" />
                        <span className="ml-2 font-bold text-gray-800 text-xl">
                            Dcenturyvibes
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="/" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Home
                        </a>
                        <a href="about-us" className="text-gray-600 hover:text-purple-600 transition-colors">
                            About Us
                        </a>
                        <a href="results" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Our Results
                        </a>

                        {/* Dropdown */}
                        <div
                            className="group relative"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            // onMouseEnter={() => setDropdownOpen(true)}
                            // onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button className="flex items-center text-gray-600 hover:text-purple-600 transition-colors">
                                Get Involved
                                <ChevronDownIcon className="ml-1 w-4 h-4" />
                            </button>

                            {dropdownOpen && (
                                <div className="right-0 absolute bg-white shadow-lg mt-2 py-1 rounded-md w-48">
                                    <a
                                        href="donate"
                                        className="block hover:bg-purple-50 px-4 py-2 text-gray-600 hover:text-purple-600"
                                    >
                                        Donate
                                    </a>
                                    <a
                                        href="events"
                                        className="block hover:bg-purple-50 px-4 py-2 text-gray-600 hover:text-purple-600"
                                    >
                                        Events
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="contact-us" className="text-gray-600 hover:text-purple-600 transition-colors">
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex justify-center items-center p-2 rounded-md text-gray-600 hover:text-purple-600"
                        >
                            {isOpen ? (
                                <XMarkIcon className="w-6 h-6" />
                            ) : (
                                <Bars3Icon className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t">
                    <div className="space-y-1 px-4 pt-2 pb-3">
                        <a href="#about" className="block hover:bg-purple-50 px-3 py-2 text-gray-600">
                            About Us
                        </a>
                        <a href="#results" className="block hover:bg-purple-50 px-3 py-2 text-gray-600">
                            Our Results
                        </a>

                        <div className="relative">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex justify-between items-center hover:bg-purple-50 px-3 py-2 w-full text-gray-600"
                            >
                                Get Involved
                                <ChevronDownIcon className={`h-4 w-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {dropdownOpen && (
                                <div className="pl-4">
                                    <a href="#donate" className="block hover:bg-purple-50 px-3 py-2 text-gray-600">
                                        Donate
                                    </a>
                                    <a href="#events" className="block hover:bg-purple-50 px-3 py-2 text-gray-600">
                                        Events
                                    </a>
                                </div>
                            )}
                        </div>

                        <a href="#contact" className="block hover:bg-purple-50 px-3 py-2 text-gray-600">
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}