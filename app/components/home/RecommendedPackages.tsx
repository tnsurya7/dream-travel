'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiMapPin, FiArrowRight, FiStar } from 'react-icons/fi'

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

interface RecommendedPackagesProps {
  packages: Package[]
}

const RecommendedPackages = ({ packages }: RecommendedPackagesProps) => {
  if (!packages || packages.length === 0) return null

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-gold-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <FiStar className="w-4 h-4" />
            <span>Recommended for You</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-gray-800 mb-6">
            Packages You'll Love
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Based on your interests, we've curated these special packages just for you
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-gold-500 mx-auto mt-8"></div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Recommended Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                    <FiStar className="w-3 h-3" />
                    <span>Recommended</span>
                  </span>
                </div>

                {/* Budget Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    pkg.budget === 'affordable' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-purple-500 text-white'
                  }`}>
                    {pkg.budget === 'affordable' ? 'Budget Friendly' : 'Premium'}
                  </span>
                </div>

                {/* Price */}
                <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">₹{pkg.price.toLocaleString()}</div>
                    <div className="text-xs text-gray-600">per person</div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs text-primary-600 font-medium uppercase tracking-wide">
                    {pkg.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 group-hover:text-primary-600 transition-colors mb-2">
                  {pkg.title}
                </h3>

                <div className="flex items-center space-x-3 text-sm text-gray-600 mb-3">
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="w-4 h-4" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                  {pkg.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {pkg.tags.slice(0, 2).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={`/packages/${pkg.id}`}
                  className="group/btn w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-2 px-4 rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <span>View Details</span>
                  <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Recommended */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Why These Packages?
            </h3>
            <p className="text-gray-600 text-sm">
              Our smart recommendation system analyzed your browsing behavior and interests to suggest these perfect matches for your next adventure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RecommendedPackages