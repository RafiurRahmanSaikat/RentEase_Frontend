import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 pb-8 pt-12 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <div className="mb-4 flex items-center">
              <img className="h-8 w-8" src="/logo.png" alt="" />
              <span className="ml-2 text-xl font-bold">RentEase</span>
            </div>
            <p className="mb-4">
              Find your perfect rental home with ease. We connect property
              owners with tenants looking for their dream space.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="transition-colors hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 border-b border-zinc-700 pb-2 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/houses"
                  className="transition-colors hover:text-white"
                >
                  Houses
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className="transition-colors hover:text-white"
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* User Links */}
          <div>
            <h3 className="mb-4 border-b border-zinc-700 pb-2 text-lg font-semibold">
              User
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/login"
                  className="transition-colors hover:text-white"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="transition-colors hover:text-white"
                >
                  Register
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="transition-colors hover:text-white"
                >
                  My Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/favorites"
                  className="transition-colors hover:text-white"
                >
                  My Favorites
                </Link>
              </li>
              <li>
                <Link
                  to="/rent-requests"
                  className="transition-colors hover:text-white"
                >
                  My Rent Requests
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 border-b border-zinc-700 pb-2 text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 mt-1 flex-shrink-0 text-purple-400"
                />
                <span className="">123 Rental Street, City, Country</span>
              </li>
              <li className="flex items-center">
                <Phone
                  size={20}
                  className="mr-3 flex-shrink-0 text-purple-400"
                />
                <span className="">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail
                  size={20}
                  className="mr-3 flex-shrink-0 text-purple-400"
                />
                <span className="">info@renteaseapp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-800 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} RentEase. All rights reserved.
          </p>
          <div className="mt-2 space-x-4">
            <Link to="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link to="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
