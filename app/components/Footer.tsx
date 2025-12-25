'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiHeart } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Packages', href: '/packages' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const packageCategories = [
    'Adventure Tours',
    'Nature & Wildlife',
    'Group Tours',
    'Family Tours',
    'Spiritual Tours',
    'Heritage Tours',
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/header-logo.png"
                  alt="Dream Travel Agency Logo"
                  width={200}
                  height={200}
                  className="object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner for unforgettable travel experiences. We create memories that last a lifetime with our premium travel packages.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/919109455317"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <FaWhatsapp className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/__.jaruriyaji.__00?igsh=MXExY3FqOTU1cnNueA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-gold-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Package Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-gold-400">Our Packages</h4>
            <ul className="space-y-2">
              {packageCategories.slice(0, 6).map((category) => (
                <li key={category}>
                  <Link
                    href="/packages"
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg text-gold-400">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="tel:+919109455317"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <FiPhone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0 group-hover:text-primary-300" />
                <div className="text-sm">
                  <p className="group-hover:underline">+91 9109455317</p>
                </div>
              </a>
              
              <a 
                href="mailto:nikhiljatav5588@gmail.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <FiMail className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:text-primary-300" />
                <p className="text-sm group-hover:underline">nikhiljatav5588@gmail.com</p>
              </a>
              
              <a 
                href="https://wa.me/919109455317"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <FaWhatsapp className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:text-primary-300" />
                <p className="text-sm group-hover:underline">WhatsApp Chat</p>
              </a>
              
              <a 
                href="https://www.instagram.com/__.jaruriyaji.__00?igsh=MXExY3FqOTU1cnNueA=="
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <FiInstagram className="w-5 h-5 text-primary-400 flex-shrink-0 group-hover:text-primary-300" />
                <p className="text-sm group-hover:underline">@__.jaruriyaji.__00</p>
              </a>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Pathriya+Fatak,+Mangaj+Ward+No.+6,+Madhya+Pradesh,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start space-x-3 text-gray-300 hover:text-white transition-colors group cursor-pointer"
              >
                <FiMapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0 group-hover:text-primary-300" />
                <p className="text-sm group-hover:underline">
                  Pathriya Fatak, Mangaj Ward No. 6,<br />
                  Madhya Pradesh, India
                </p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 Dream Travel Agency. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Developed by</span>
              <a 
                href="https://suryakumar-portfolio-777.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 font-medium transition-colors duration-200 hover:underline"
              >
                SURYA KUMAR M
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer