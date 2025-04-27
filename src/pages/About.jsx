import { motion } from 'framer-motion';
import { HeartIcon, ShieldExclamationIcon, HandRaisedIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import NavBar from '../components/Navbar';
import hugImage from '/images/hugImage.jpg';
import enicVisit from '/images/enicVisit.jpg';
import marketImage from '/images/marketImage.jpg';
import Footer from '../components/Footer';

export default function AboutPage() {
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
                        About Our Foundation
                    </motion.h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        Learn about our journey, values, and the team behind our mission to empower survivors
                    </p>
                </div>
            </section>

            {/* Reuse the AboutSection component here */}
            <section className="bg-white px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 font-bold text-gray-800 text-3xl text-center">About Us</h2>

                    <div className="items-start gap-12 grid md:grid-cols-2">
                        {/* Image Grid */}
                        <div className="space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative rounded-2xl h-72 overflow-hidden"
                            >
                                <img
                                    src={hugImage}
                                    alt="Support group meeting"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-purple-600/20" />
                            </motion.div>

                            <div className="gap-4 grid grid-cols-2">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl h-48 overflow-hidden"
                                >
                                    <img
                                        src={enicVisit}
                                        alt="Counseling session"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl h-48 overflow-hidden"
                                >
                                    <img
                                        src={marketImage}
                                        alt="Community activity"
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="mb-4 font-bold text-purple-600 text-2xl">
                                    Our Journey of Empowerment
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Founded in 2015, Dcenturyvibes Global International Foundation has been at the
                                    forefront of supporting survivors of gender-based violence. What began as a
                                    small community initiative has blossomed into an international movement
                                    dedicated to women's empowerment and mental health advocacy.

                                    <br />

                                    <p className='pt-3'>
                                        At the heart of our mission is a deep commitment to helping women heal, rebuild,
                                        and thrive. We believe that every survivor deserves a voice, a safe space, and
                                        the opportunity to rewrite their story with dignity and hope. Through
                                        counseling, educational workshops, and community outreach programs, we offer
                                        tailored support designed to meet the unique needs of each woman we serve.
                                    </p>
                                </p>

                                
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-purple-50 p-6 rounded-xl"
                            >
                                <h4 className="mb-3 font-semibold text-purple-600 text-lg">Why Choose Us?</h4>
                                <ul className="space-y-2 text-gray-600">
                                    <li className="flex items-center">
                                        <HeartIcon className="mr-2 w-5 h-5 text-pink-500" />
                                        Trauma-informed care specialists
                                    </li>
                                    <li className="flex items-center">
                                        <ShieldExclamationIcon className="mr-2 w-5 h-5 text-purple-500" />
                                        Safe & confidential environment
                                    </li>
                                    <li className="flex items-center">
                                        <HandRaisedIcon className="mr-2 w-5 h-5 text-blue-500" />
                                        Community-driven programs
                                    </li>
                                </ul>
                            </motion.div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-purple-600 px-6 py-3 rounded-full font-semibold text-white"
                            >
                                Join Our Movement
                            </motion.button>
                        </div>
                    </div>
                </div>
            </section >

            {/* Team Section */}
            < section className="bg-purple-50 px-4 py-16" >
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 font-bold text-gray-800 text-3xl text-center">Our Leadership</h2>
                    <div className="gap-8 grid md:grid-cols-3">
                        {['Founder & CEO', 'Program Director', 'Counseling Lead'].map((role, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white shadow-md p-6 rounded-xl text-center"
                            >
                                <div className="mx-auto mb-4 rounded-full w-32 h-32 overflow-hidden">
                                    <img
                                        src={`https://randomuser.me/api/portraits/women/${idx + 40}.jpg`}
                                        alt={role}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="mb-2 font-semibold text-xl">Jane {['Doe', 'Smith', 'Johnson'][idx]}</h3>
                                <p className="mb-2 text-purple-600">{role}</p>
                                <p className="text-gray-600 text-sm">10+ years experience in women's advocacy</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* footer */}
            <Footer/>
        </div >
    );
}