import { motion } from 'framer-motion';
import { BanknotesIcon, ShieldCheckIcon, QrCodeIcon, GlobeAltIcon, CreditCardIcon } from '@heroicons/react/24/outline';
import donateImage from '/images/donateImage.jpg';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

export default function DonatePage() {
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
                        Empower Survivors Through Your Support
                    </motion.h1>
                    <p className="mx-auto max-w-2xl text-xl">
                        Your donation helps provide critical resources for healing and empowerment
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-7xl">
                <div className="gap-12 grid md:grid-cols-2">
                    {/* Bank Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white shadow-xl p-8 border border-purple-100 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <BanknotesIcon className="w-12 h-12 text-purple-600" />
                            <h2 className="font-bold text-gray-800 text-2xl">Direct Bank Transfer</h2>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-purple-50 p-6 rounded-xl">
                                <dl className="space-y-4">
                                    <div>
                                        <dt className="font-medium text-purple-600 text-sm">Account Name</dt>
                                        <dd className="mt-1 font-semibold text-gray-800 text-xl">
                                            Dcenturyvibes Global International Foundation
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-purple-600 text-sm">Bank Name</dt>
                                        <dd className="mt-1 font-semibold text-gray-800 text-xl">
                                            International Women's Bank
                                        </dd>
                                    </div>
                                    <div>
                                        <dt className="font-medium text-purple-600 text-sm">Account Number</dt>
                                        <dd className="mt-1 font-bold text-gray-900 text-2xl">
                                            1234 5678 9012 3456
                                        </dd>
                                    </div>

                                </dl>
                            </div>

                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                <ShieldCheckIcon className="w-5 h-5 text-green-500" />
                                <span>Join this Movement</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Support Image and Other Methods */}
                    <div className="space-y-12 h-full">
                        {/* Donation Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative rounded-2xl h-96 overflow-hidden"
                        >
                            <img
                                src={donateImage}
                                alt="Community support"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent" />
                        </motion.div>

                        {/* Alternative Methods
                        <div className="gap-6 grid sm:grid-cols-2">
                            {[
                                {
                                    icon: CreditCardIcon,
                                    title: "Credit/Debit Card",
                                    text: "Secure online payments"
                                },
                                {
                                    icon: QrCodeIcon,
                                    title: "Mobile Payment",
                                    text: "Scan QR code to donate"
                                },
                                {
                                    icon: GlobeAltIcon,
                                    title: "International Transfer",
                                    text: "Multiple currency support"
                                },
                                {
                                    icon: BanknotesIcon,
                                    title: "Check Donations",
                                    text: "Mail to our office"
                                }
                            ].map((method, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-6 border border-purple-50 hover:border-purple-100 rounded-xl transition-all"
                                >
                                    <method.icon className="mb-3 w-8 h-8 text-purple-600" />
                                    <h3 className="mb-1 font-semibold text-lg">{method.title}</h3>
                                    <p className="text-gray-600 text-sm">{method.text}</p>
                                </motion.div>
                            ))} */}
                        {/* </div> */}
                    </div>
                </div>

                {/* Additional Info */}
                <div className="gap-8 grid md:grid-cols-2 mt-20">
                    {/* Tax Benefits */}
                    <div className="bg-purple-50 p-8 rounded-2xl">
                        <h3 className="flex items-center gap-2 mb-4 font-semibold text-xl">
                            <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                            Tax Deductible Donations
                        </h3>
                        <p className="mb-4 text-gray-600">
                            All contributions to Dcenturyvibes Global are tax-exempt under Section 501(c)(3).

                        </p>
                        <ul className="space-y-2 text-gray-600">
                            <li>✓ Registered non-profit organization</li>
                            <li>✓ Financial reports available</li>
                            <li>✓ Annual transparency reports</li>
                        </ul>
                    </div>

                    {/* Transaction Proof */}
                    <div className="bg-white p-8 border border-purple-100 rounded-2xl">
                        <h3 className="flex items-center gap-2 mb-4 font-semibold text-xl">
                            <QrCodeIcon className="w-6 h-6 text-purple-600" />
                            Share Payment Proof
                        </h3>
                        <p className="mb-4 text-gray-600">
                            After making your donation, please email the transaction details to:
                        </p>
                        <div className="bg-purple-50 p-4 rounded-xl">
                            <div className="font-semibold text-purple-600">donations@dcenturyvibes.org</div>
                        </div>
                        <p className="mt-3 text-gray-500 text-sm">
                            Include your name and contact information
                        </p>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    );
}