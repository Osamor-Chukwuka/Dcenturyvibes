import { motion } from 'framer-motion';
import { HeartIcon, ShieldExclamationIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function LandingPage() {
    const stats = [
        { label: 'Survivors Supported', value: '1k+' },
        { label: 'Community Programs', value: '5+' },
        { label: 'Years of Service', value: '4' },
        { label: 'Success Rate', value: '93%' },
    ];

    return (
        <div className="bg-gradient-to-b from-purple-50 to-pink-50 min-h-screen">
            <NavBar />

            {/* Hero Section */}
            <header className="relative bg-gradient-to-r from-purple-600 to-pink-500 px-4 py-20 pt-[12rem] text-white">
                <div className="mx-auto max-w-6xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-6 font-bold text-5xl leading-tight"
                    >
                        Empowering Women to Heal, Rebuild & Thrive
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mx-auto mb-8 max-w-2xl text-xl"
                    >
                        Supporting GBV survivors on their journey to resilience and hope
                    </motion.p>
                    <a href="donate" className='cursor-pointer'>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white shadow-lg hover:shadow-xl px-8 py-3 rounded-full font-semibold text-purple-600 transition-all cursor-pointer"
                        >
                            Join Our Movement
                        </motion.button>
                    </a>
                </div>
                <div className="right-0 bottom-0 left-0 absolute bg-white/10 backdrop-blur-sm h-12" />
            </header>

            {/* Mission Section */}
            <section className="px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="bg-white shadow-lg p-8 md:p-12 rounded-3xl">
                        <div className="flex items-center gap-4 mb-8">
                            <HeartIcon className="w-12 h-12 text-pink-500" />
                            <h2 className="font-bold text-gray-800 text-3xl">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 text-xl leading-relaxed">
                            At Dcenturyvibes Global International Foundation, we provide comprehensive support
                            and resources to help survivors of gender-based violence heal emotionally, rebuild
                            their lives, and ultimately thrive in their communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Programs Section */}
            <section className="bg-purple-50 px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <h2 className="mb-12 font-bold text-gray-800 text-3xl text-center">Our Programs</h2>
                    <div className="gap-8 grid md:grid-cols-3">
                        {['Trauma Counseling', 'Skill Development', 'Legal Support'].map((program, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="bg-white shadow-md hover:shadow-lg p-6 rounded-xl transition-all"
                            >
                                <div className="flex justify-center items-center bg-purple-100 mb-4 rounded-lg w-14 h-14">
                                    <ShieldExclamationIcon className="w-8 h-8 text-purple-600" />
                                </div>
                                <h3 className="mb-2 font-semibold text-gray-800 text-xl">{program}</h3>
                                <p className="text-gray-600">Comprehensive support program tailored to individual needs and recovery journey.</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="px-4 py-16">
                <div className="mx-auto max-w-6xl">
                    <div className="gap-8 grid md:grid-cols-4 text-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="bg-white shadow-sm p-6 rounded-xl">
                                <div className="mb-2 font-bold text-purple-600 text-4xl">{stat.value}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-purple-600 px-4 py-16 text-white">
                <div className="mx-auto max-w-4xl text-center">
                    <HandRaisedIcon className="mx-auto mb-6 w-16 h-16" />
                    <h2 className="mb-6 font-bold text-3xl">Ready to Make a Difference?</h2>
                    <p className="mx-auto mb-8 max-w-2xl text-xl">
                        Whether you need support or want to help others, we're here to walk with you every step of the way.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a href="contact-us" className='cursor-pointer'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-white px-6 py-3 rounded-full font-semibold text-purple-600 cursor-pointer"
                            >
                                Get Help
                            </motion.button>
                        </a>
                        <a href="contact-us" className='cursor-pointer'>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 border-2 border-white rounded-full font-semibold cursor-pointer"
                            >
                                Volunteer
                            </motion.button>
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}