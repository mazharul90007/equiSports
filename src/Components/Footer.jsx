import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaPhone, FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-200">
            <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div className="flex flex-col gap-4">
                    <h3 className="text-3xl font-bold text-green-400 mb-4">equiSports</h3>
                    <div className="flex items-center gap-3">
                        <FaLocationDot />
                        <p>Address: <span className="italic">47 SandGate Rd, Newcastle, Australia</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaPhone />
                        <p>TelePhone: <span className="italic">+61414343169</span></p>
                    </div>
                    <div className="flex items-center gap-3">
                        <FaClock />
                        <p>Opening: <span className="italic">Mon-Thu(9:00Am-10:00Pm)</span></p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="/" className="hover:text-green-400 transition">Home</a></li>
                        <li><a href="/shop" className="hover:text-green-400 transition">Shop</a></li>
                        <li><a href="/about" className="hover:text-green-400 transition">About Us</a></li>
                        <li><a href="/contact" className="hover:text-green-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Customer Support</h4>
                    <ul className="space-y-2">
                        <li><a href="/faqs" className="hover:text-green-400 transition">FAQs</a></li>
                        <li><a href="/shipping" className="hover:text-green-400 transition">Shipping & Returns</a></li>
                        <li><a href="/privacy" className="hover:text-green-400 transition">Privacy Policy</a></li>
                        <li><a href="/terms" className="hover:text-green-400 transition">Terms of Service</a></li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Stay Connected</h4>
                    <p className="text-gray-400 text-sm mb-4">
                        Subscribe to our newsletter for the latest updates and exclusive deals.
                    </p>
                    <form className="flex items-center">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-3 py-2 text-gray-800 rounded-l-md focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="bg-green-400 hover:bg-green-500 px-4 py-2 text-white rounded-r-md transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-700 mt-4 py-4 text-center">
                <p className="text-sm text-gray-500">© 2024 equiSports. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-4 text-2xl">
                    <Link className="hover:text-green-400 transition">
                        <FaFacebookF />
                    </Link>
                    <Link href="#" className="hover:text-green-400 transition">
                        <FaTwitter />
                    </Link>
                    <Link href="#" className="hover:text-green-400 transition">
                        <FaInstagram />
                    </Link>
                    <Link href="#" className="hover:text-green-400 transition">
                        <FaLinkedin />
                    </Link>
                </div>
            </div>
        </footer>

    );
};

export default Footer;