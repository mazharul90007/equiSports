import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="container mx-auto py-5 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and About */}
                <div>
                    <h3 className="text-3xl font-bold text-green-400 mb-4">equiSports</h3>
                    <p className="text-gray-400 text-sm">
                        Your one-stop shop for premium sports equipment. Gear up for your best
                        performance with equiSports.
                    </p>
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