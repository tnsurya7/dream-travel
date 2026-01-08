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

  const getImageAltText = (pkg: Package) => {
    const baseLocation = "from Damoh Madhya Pradesh"
    switch (pkg.id) {
      case '1':
        return `Kashmir tour package ${baseLocation} - Dal Lake houseboat and Gulmarg snow activities`
      case '2':
        return `Kerala holiday package ${baseLocation} - backwaters houseboat and hill stations`
      case '3':
        return `Sikkim group tour package ${baseLocation} - Gangtok Pelling Darjeeling sightseeing`
      case '4':
        return `Gangtok Darjeeling winter tour package ${baseLocation} - snow activities and mountain views`
      case '5':
        return `Mathura Vrindavan spiritual tour package ${baseLocation} - Krishna temples pilgrimage`
      case '6':
        return `Kerala backwaters tour package ${baseLocation} - Munnar tea gardens and Alleppey houseboat`
      case '7':
        return `Pushkar Khatu Shyam Jaipur spiritual tour package ${baseLocation} - temples and heritage sites`
      case '8':
        return `Varanasi Ayodhya Chitrakoot Prayagraj pilgrimage tour package ${baseLocation} - spiritual journey`
      default:
        return `${pkg.title} tour package ${baseLocation} - ${pkg.category} travel India`
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'adventure':
        return 'from-orange-500 to-red-500'
      case 'nature':
        return 'from-green-500 to-emerald-500'
      case 'group':
        return 'from-blue-500 to-cyan-500'
      case 'family':
        return 'from-purple-500 to-pink-500'
      case 'spiritual':
        return 'from-yellow-500 to-orange-500'
      case 'heritage':
        return 'from-amber-500 to-yellow-500'
      case 'beach':
        return 'from-cyan-500 to-blue-500'
      default:
        return 'from-primary-500 to-primary-600'
    }
  }

  if (pkg.price === 0) {
    // Coming Soon packages - not clickable
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56 flex-shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`bg-gradient-to-r ${getCategoryColor(pkg.category)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize shadow-lg`}>
              {pkg.category}
            </span>
          </div>

          {/* Coming Soon Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-sm font-medium bg-orange-500 text-white">
              Coming Soon
            </span>
          </div>

          {/* Price */}
          <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
            <div className="text-right">
              <div className="text-lg font-bold text-orange-600">Coming Soon</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 min-h-[3.5rem]">
            {pkg.title}
          </h3>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <FiCalendar className="w-4 h-4" />
              <span className="text-blue-600 font-medium">{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiUsers className="w-4 h-4" />
              <span>All Ages</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1 min-h-[4.5rem]">
            {pkg.description}
          </p>

          {/* Coming Soon Button */}
          <div className="mt-auto">
            <div className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 px-4 rounded-xl font-semibold text-center flex items-center justify-center">
              <span>Coming Soon</span>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

  // Available packages - entire card clickable
  return (
    <Link href={`/packages/${pkg.id}`} onClick={handleCardClick}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full flex flex-col cursor-pointer"
      >
        {/* Image */}
        <div className="relative overflow-hidden h-56 flex-shrink-0">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className={`bg-gradient-to-r ${getCategoryColor(pkg.category)} text-white px-3 py-1 rounded-full text-sm font-medium capitalize shadow-lg`}>
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

          {/* Popular Choice Badge */}
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
            <FiStar className="w-4 h-4 text-gold-500 fill-current" />
            <span className="text-sm font-medium text-gray-800">Popular Choice</span>
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
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-3 line-clamp-2 min-h-[3.5rem]">
            {pkg.title}
          </h3>

          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center space-x-1">
              <FiCalendar className="w-4 h-4" />
              <span className="text-blue-600 font-medium">{pkg.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiUsers className="w-4 h-4" />
              <span>All Ages</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 flex-1 min-h-[4.5rem]">
            {pkg.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
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
          <div className="space-y-2 mb-6 min-h-[4.5rem]">
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
          <div className="flex space-x-3 mt-auto">
            <div className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
              <span>View Details</span>
              <FiArrowRight className="w-4 h-4" />
            </div>
            
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open('/contact', '_blank')
              }}
              className="px-4 py-3 border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white rounded-xl font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <span>Enquire</span>
            </button>
          </div>
        </div>
      </motion.div>
    </Link>
  )
}

export default PackageCard