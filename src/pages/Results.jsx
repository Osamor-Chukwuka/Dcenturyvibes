import { motion } from 'framer-motion';
import { ChartBarIcon, UsersIcon, HeartIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';
import enicVisit from '/images/enicVisit.jpg';
import enicVisitTwo from '/images/enicVisitTwo.jpg';
import enicVisitThree from '/images/enicVisitThree.jpg';

import marketImage from '/images/marketImage.jpg';
import marketImageTwo from '/images/marketImageTwo.jpg';
import marketImageThree from '/images/marketImageThree.jpg';




export default function ResultsPage() {
    const accomplishments = [
        {
            title: "Education & Empowerment",
            description: "As part of our commitment to empowering young girls, Dcenturyvibes Global International Foundation organized a Girls’ Sensitization Program at a local school. During the event, we emphasized the importance of every girl child, reminding them that they are the future women, the future leaders of our world. Through inspiring talks and interactive sessions, we encouraged the girls to believe in their potential, value their voices, and dream boldly.",
            stats: [
                { value: '30+', label: 'Attendes' },
                { value: '90%', label: 'Participation' },
            ],
            images: [
                enicVisit,
                enicVisitTwo,
                enicVisitThree
            ]
        },
        {
            title: "Healing Communities",
            description: "In celebration of International Women's Day 2025, Dcenturyvibes Global International Foundation organized a Market Women Sensitization Program to honor and uplift women at the grassroots. As a proud UN Women Commitment Maker, we reaffirm our pledge to support SDG 5 — achieving gender equality and empowering all women and girls. Together, we continue to build a world where every woman’s voice is heard and valued. Happy International Women's Day 2025!",
            stats: [
                { value: '20+', label: 'Attendes' },
                { value: '85%', label: 'Participation' },
            ],
            images: [
                marketImageThree, marketImageTwo, marketImage
            ]
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <NavBar/>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-500 px-4 pt-[12rem] pb-20 text-white">
                <div className="mx-auto max-w-6xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-4 font-bold text-4xl"
                    >
                        Our Impact & Results
                    </motion.h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        Measurable change through dedicated support and community programs
                    </p>
                </div>
            </section>

            {/* Accomplishments Sections */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                {accomplishments.map((accomp, index) => (
                    <section key={index} className="mb-20">
                        {/* Content Section */}
                        <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 mb-12`}>
                            {/* Text Content */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 md:w-1/2"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <ChartBarIcon className="w-12 h-12 text-purple-600" />
                                    <h2 className="font-bold text-gray-800 text-3xl">{accomp.title}</h2>
                                </div>
                                <p className="text-gray-600 text-lg">{accomp.description}</p>

                                <div className="gap-4 grid grid-cols-2">
                                    {accomp.stats.map((stat, statIndex) => (
                                        <div key={statIndex} className="bg-purple-50 p-4 rounded-xl">
                                            <div className="font-bold text-purple-600 text-2xl">{stat.value}</div>
                                            <div className="text-gray-600 text-sm">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Image Grid */}
                            <motion.div
                                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="md:w-1/2"
                            >
                                <div className="gap-4 grid grid-cols-2">
                                    {accomp.images.map((img, imgIndex) => (
                                        <div
                                            key={imgIndex}
                                            className={`relative h-64 rounded-xl overflow-hidden ${imgIndex === 0 ? 'col-span-2' : ''}`}
                                        >
                                            <img
                                                src={`${img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80`}
                                                alt="Accomplishment"
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-purple-600/20 hover:opacity-0 transition-opacity" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Milestones
                        <div className="bg-purple-50 p-8 rounded-xl">
                            <h3 className="flex items-center gap-2 mb-4 font-semibold text-xl">
                                <BookOpenIcon className="w-6 h-6 text-purple-600" />
                                Key Milestones Achieved
                            </h3>
                            <div className="gap-4 grid md:grid-cols-3">
                                {['Trauma-informed care certification', '10+ community partnerships', 'National recognition award 2023'].map((milestone, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <HeartIcon className="flex-shrink-0 mt-1 w-5 h-5 text-pink-500" />
                                        <span className="text-gray-600">{milestone}</span>
                                    </div>
                                ))}
                            </div>
                        </div> */}
                    </section>
                ))}

                {/* Annual Impact Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 p-8 md:p-12 rounded-2xl text-white"
                >
                    <h2 className="mb-6 font-bold text-3xl">Result in Summary</h2>
                    <div className="gap-8 grid md:grid-cols-3 text-center">
                        {[
                            { value: '1k+', label: 'Lives Touched' },
                            { value: '5+', label: 'Workshops Held' },
                            // { value: '45', label: 'Trained Specialists' },
                            { value: '93%', label: 'Satisfaction Rate' },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4">
                                <div className="mb-2 font-bold text-3xl">{stat.value}</div>
                                <div className="opacity-90 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.section>
            </div>

            {/* footer */}
            <Footer/>
        </div>
    );
}