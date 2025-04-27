import { motion } from 'framer-motion';
import { CalendarIcon, MapPinIcon, UserGroupIcon, TicketIcon } from '@heroicons/react/24/outline';
import NavBar from '../components/Navbar';
import Footer from '../components/Footer';

export default function EventsPage() {
    const upcomingEvents = [
        {
            id: 1,
            title: "Healing Through Art Workshop",
            date: "2024-03-15",
            location: "Community Center, Women's City",
            image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb",
            description: "Expressive arts therapy session for survivors to explore creative healing",
            seats: 30
        },
        {
            id: 2,
            title: "Empowerment Conference 2024",
            date: "2024-04-22",
            location: "City Convention Hall",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
            description: "Annual gathering featuring keynote speakers and skill-building workshops",
            seats: 200
        },
        {
            id: 3,
            title: "Self-Defense Training Camp",
            date: "2024-05-10",
            location: "Central Park Pavilion",
            image: "https://images.unsplash.com/photo-1542037104857-ffbb0b9155fb",
            description: "Practical self-defense techniques and situational awareness training",
            seats: 50
        }
    ];

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
                        Upcoming Events & Workshops
                    </motion.h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        Join our transformative programs and connect with a supportive community
                    </p>
                </div>
            </section>

            {/* Events Grid */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div className="gap-8 grid md:grid-cols-2 lg:grid-cols-3">
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={event.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white shadow-lg hover:shadow-xl rounded-2xl transition-shadow"
                        >
                            <div className="relative h-48">
                                <img
                                    src={`${event.image}?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80`}
                                    alt={event.title}
                                    className="rounded-t-2xl w-full h-full object-cover"
                                />
                                <div className="right-0 bottom-0 left-0 absolute bg-gradient-to-t from-purple-600/60 p-4">
                                    <h3 className="font-bold text-white text-xl">{event.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <CalendarIcon className="w-5 h-5 text-purple-600" />
                                    <span className="font-medium">
                                        {new Date(event.date).toLocaleDateString('en-US', {
                                            weekday: 'long',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 mb-4">
                                    <MapPinIcon className="w-5 h-5 text-purple-600" />
                                    <span className="text-gray-600">{event.location}</span>
                                </div>

                                <p className="mb-4 text-gray-600">{event.description}</p>

                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                        <UserGroupIcon className="w-5 h-5 text-purple-600" />
                                        <span className="text-gray-600 text-sm">
                                            {event.seats} seats available
                                        </span>
                                    </div>

                                    <a href="contact-us" className='cursor-pointer'>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            className="flex items-center gap-2 bg-purple-600 px-4 py-2 rounded-lg text-white cursor-pointer"
                                        >
                                            <TicketIcon className="w-5 h-5" />
                                            Register Now
                                        </motion.button>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-purple-600 to-pink-500 mt-16 p-8 rounded-2xl text-white"
                >
                    <div className="gap-8 grid md:grid-cols-3 text-center">
                        <div>
                            <div className="mb-2 font-bold text-3xl">5+</div>
                            <div className="text-sm">Events Hosted</div>
                        </div>
                        <div>
                            <div className="mb-2 font-bold text-3xl">93%</div>
                            <div className="text-sm">Participant Satisfaction</div>
                        </div>
                        <div>
                            <div className="mb-2 font-bold text-3xl">1k+</div>
                            <div className="text-sm">Lives Impacted</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <Footer />
        </div>
    );
}