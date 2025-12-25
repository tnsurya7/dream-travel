'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiUsers, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { trackUserBehavior } from '../../utils/recommendations'

const FeaturedPackages = () => {
  const featuredPackages = [
    {
      id: '1',
      title: 'Kashmir Tour Package',
      category: 'Adventure Package',
      price: '₹22,500',
      duration: '5 Nights 6 Days',
      image: '/KASHMIR TOUR PACKAGE.png',
      description: 'Enjoy scenic valleys, houseboat stay, and snow-covered mountains in Kashmir with complete sightseeing and adventure activities.',
      features: ['Deluxe Houseboat', 'Shikara Ride', 'Snow Valleys', '3★ Hotels'],
      badge: 'Popular Choice'
    },
    {
      id: '2',
      title: 'Kerala Holiday Package',
      category: 'Nature Package',
      price: '₹72,500',
      duration: '6 Nights 7 Days',
      image: '/KERALA HOLIDAY PACKAGE.png',
      description: 'Discover Kerala backwaters, pristine beaches, and lush hill stations with luxury houseboat experience and nature exploration.',
      features: ['Luxury Houseboat', 'Backwaters', 'Nature Experience', 'Premium Hotels'],
      badge: 'Highly Rated'
    },
    {
      id: '5',
      title: 'Mathura - Vrindavan Tour',
      category: 'Spiritual Package',
      price: '₹5,999',
      duration: '3 Nights 4 Days',
      image: '/MATHURA.png',
      description: 'Embark on a spiritual journey to the holy cities of Mathura and Vrindavan with complete darshan experience and comfortable accommodations.',
      features: ['Spiritual Tour', 'Complete Darshan', 'Hotel + Transport', 'Pilgrimage Experience'],
      badge: 'Best Value'
    }
  ]

  const handlePackageClick = (packageData: any) => {
    trackUserBehavior('package_view', { packageId: packageData.id })
    trackUserBehavior('category_click', { category: packageData.category.toLowerCase().split(' ')[0] })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-gray-800 mb-6">
            Featured Travel Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our handpicked selection of premium travel experiences designed to create unforgettable memories
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-gold-500 mx-auto mt-8"></div>
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPackages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Link href={`/packages/${pkg.id}`} onClick={() => handlePackageClick(pkg)}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 h-full flex flex-col cursor-pointer">
                  {/* Image */}
                  <div className="relative overflow-hidden h-64 flex-shrink-0">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {pkg.category}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1">
                      <span className="text-gold-500">★</span>
                      <span className="text-sm font-medium text-gray-800">{pkg.badge}</span>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2">
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-600">{pkg.price}</div>
                        <div className="text-xs text-gray-600">per person</div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-2">
                      <span className="text-xs text-green-600 font-semibold uppercase tracking-wide bg-green-50 px-2 py-1 rounded-full">
                        {pkg.category}
                      </span>
                    </div>

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

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-6 min-h-[2rem]">
                      {pkg.features.slice(0, 3).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                      {pkg.features.length > 3 && (
                        <span className="text-primary-600 text-xs font-medium">
                          +{pkg.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* CTA Button */}
                    <div className="group/btn w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 mt-auto">
                      <span>View Details</span>
                      <FiArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/packages"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <span>View All Packages</span>
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedPackages