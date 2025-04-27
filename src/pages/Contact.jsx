import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';


export default function ContactPage() {

    const socialLinks = [
        { name: 'Facebook', icon: <FaFacebook className="w-6 h-6 text-blue-600" /> },
        { name: 'Twitter', icon: <FaXTwitter className="w-6 h-6 text-gray-600" /> },
        { name: 'Instagram', icon: <FaInstagram className="w-6 h-6 text-pink-600" /> },
    ]

    return (
        <div className="bg-white min-h-screen">
            <NavBar />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 pt-[12rem] pb-20 text-white">
                <div className="mx-auto max-w-6xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 font-bold text-4xl"
                    >
                        Reach Out & Make an Impact
                    </motion.h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        Whether you need support or want to collaborate, we're here to listen
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div className="gap-12 grid md:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-xl p-8 border border-purple-100 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <ChatBubbleLeftRightIcon className="w-10 h-10 text-purple-600" />
                            <h2 className="font-bold text-gray-800 text-2xl">Send Us a Message</h2>
                        </div>

                        <form className="space-y-6">
                            <div>
                                <label className="block mb-2 text-gray-700">Your Name</label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border border-purple-100 focus:border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-200 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    className="px-4 py-3 border border-purple-100 focus:border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-200 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700">Subject</label>
                                <input
                                    type="text"
                                    className="px-4 py-3 border border-purple-100 focus:border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-200 w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block mb-2 text-gray-700">Message</label>
                                <textarea
                                    rows="5"
                                    className="px-4 py-3 border border-purple-100 focus:border-purple-500 rounded-lg focus:ring-2 focus:ring-purple-200 w-full"
                                    required
                                ></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-purple-600 px-6 py-3 rounded-lg w-full font-semibold text-white"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        {/* Info Cards */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-purple-50 p-8 rounded-2xl"
                        >
                            <h3 className="mb-6 font-semibold text-gray-800 text-xl">Contact Information</h3>
                            <div className="space-y-5">
                                <div className="flex items-start gap-4">
                                    <MapPinIcon className="mt-1 w-6 h-6 text-purple-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">Headquarters</p>
                                        <p className="text-gray-600">123 Empowerment Street<br />Women's City, WC 45678</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <PhoneIcon className="mt-1 w-6 h-6 text-purple-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">24/7 Support Line</p>
                                        <p className="text-gray-600">+1 (234) 567-8910</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <EnvelopeIcon className="mt-1 w-6 h-6 text-purple-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">General Inquiries</p>
                                        <p className="text-gray-600">contact@dcenturyvibes.org</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <ClockIcon className="mt-1 w-6 h-6 text-purple-600" />
                                    <div>
                                        <p className="font-medium text-gray-800">Office Hours</p>
                                        <p className="text-gray-600">Mon-Fri: 9AM - 5PM<br />Sat: 10AM - 2PM</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="shadow-xl rounded-2xl overflow-hidden"
                        >
                            <iframe
                                title="Office Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317715.7119263355!2d-0.38177618572055124!3d51.52873564556655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1689958532042!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                className="rounded-2xl"
                            ></iframe>
                        </motion.div> */}

                        {/* Social Links */}
                        <div className="flex justify-center gap-4">
                            {socialLinks.map((platform, id) => (
                                <motion.a
                                    key={id}
                                    whileHover={{ y: -5 }}
                                    href="#"
                                    className="bg-purple-100 hover:bg-purple-200 p-3 rounded-full transition-colors"
                                >
                                    {platform.icon ? (
                                        platform.icon
                                    ) : (
                                        <span className="text-gray-600">{platform.name}</span>
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Emergency Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-red-100 mt-16 p-8 border border-red-200 rounded-2xl text-center"
                >
                    <h3 className="mb-3 font-semibold text-red-800 text-xl">Emergency Support</h3>
                    <p className="mb-4 text-red-700">
                        If you're in immediate danger, please contact local authorities first
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="tel:911" className="font-semibold text-red-700 hover:text-red-800">
                            <PhoneIcon className="inline mr-2 w-5 h-5" />
                            Emergency Services: 112
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}