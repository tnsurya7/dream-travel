'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiCalendar, FiMapPin, FiUsers, FiStar, FiArrowRight } from 'react-icons/fi'
import { trackUserBehavior } from '../../utils/recommendations'

interface Package {
  id: string
  title: string
  category: string
  price: number
  duration: string
  image: string
  description: string
  budget: 'affordable' | 'premium'
  tags: string[]
}

interface PackageCardProps {
  package: Package
}

const PackageCard = ({ package: pkg }: PackageCardProps) => {
  const handleCardClick = () => {
    trackUserBehavior('package_view', { packageId: pkg.id })
    trackUserBehavior('category_click', { category: pkg.category })
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'honeymoon':
        return 'from-pink-500 to-red-500'
      case 'wedding':
        return 'from-purple-500 to-pink-500'
      case 'family':
        return 'from-blue-500 to-cyan-500'
      case 'group':
        return 'from-green-500 to-emerald-500'
      case 'educational':
        return 'from-orange-500 to-yellow-500'
      case 'international':
        return 'from-indigo-500 to-purple-500'
      default:
        return 'from-primary-500 to-primary-600'
    }
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`bg-gradient-to-r ${getCategoryColor(pkg.category)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize`}>
            {pkg.category}
          </span>
        </div>

        {/* Budget Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            pkg.budget === 'affordable' 
              ? 'bg-green-500 text-white' 
              : 'bg-purple-500 text-white'
          }`}>
            {pkg.budget === 'affordable' ? 'Budget Friendly' : 'Premium'}
          </span>
        </div>

        {/* Rating */}
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
          <FiStar className="w-4 h-4 text-gold-500 fill-current" />
          <span className="text-sm font-medium text-gray-800">4.8</span>
        </div>

        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
          <div className="text-right">
            <div className="text-xl font-bold text-primary-600">₹{pkg.price.toLocaleString()}</div>
            <div className="text-xs text-gray-600">per person</div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-3">
          {pkg.title}
        </h3>

        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center space-x-1">
            <FiCalendar className="w-4 h-4" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiUsers className="w-4 h-4" />
            <span>All Ages</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
          {pkg.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {pkg.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs capitalize"
            >
              {tag}
            </span>
          ))}
          {pkg.tags.length > 3 && (
            <span className="text-primary-600 text-xs font-medium">
              +{pkg.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Free Cancellation</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span>Best Price Guarantee</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-3">
          <Link
            href={`/packages/${pkg.id}`}
            onClick={handleCardClick}
            className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <span>View Details</span>
            <FiArrowRight className="w-4 h-4" />
          </Link>
          
          <Link
            href="/contact"
            className="px-4 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
          >
            <span>Enquire</span>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default PackageCard