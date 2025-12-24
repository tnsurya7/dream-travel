'use client'

import { motion } from 'framer-motion'
import { FiShield, FiHeart, FiUsers, FiMapPin, FiClock, FiAward } from 'react-icons/fi'

const WhyChooseUs = () => {
  const features = [
    {
      icon: FiShield,
      title: 'Trusted & Secure',
      description: 'Your safety and security are our top priorities. We ensure all bookings are protected and verified.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiHeart,
      title: 'Personalized Experience',
      description: 'Every journey is crafted with care to match your preferences and create unforgettable memories.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiUsers,
      title: 'Expert Team',
      description: 'Our experienced travel consultants provide 24/7 support to make your trip seamless and enjoyable.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMapPin,
      title: 'Best Destinations',
      description: 'Carefully selected destinations that offer the perfect blend of adventure, culture, and relaxation.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiClock,
      title: 'Flexible Booking',
      description: 'Easy booking process with flexible payment options and hassle-free cancellation policies.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiAward,
      title: 'Award Winning',
      description: 'Recognized for excellence in travel services with numerous awards and satisfied customers.',
      color: 'from-gold-500 to-yellow-500'
    }
  ]

  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: '😊' },
    { number: '50+', label: 'Destinations', icon: '🌍' },
    { number: '100+', label: 'Tour Packages', icon: '📦' },
    { number: '5★', label: 'Average Rating', icon: '⭐' }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-gold-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-gray-800 mb-6">
            Why Choose Dream Travel Agency?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just a travel agency - we're your partners in creating extraordinary experiences that last a lifetime
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-gold-500 mx-auto mt-8"></div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-luxury font-bold text-white mb-4">
              Our Journey in Numbers
            </h3>
            <p className="text-primary-100 text-lg">
              These numbers reflect our commitment to excellence and customer satisfaction
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="flex items-center space-x-2">
              <FiShield className="w-5 h-5 text-green-600" />
              <span className="text-gray-600 font-medium">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiAward className="w-5 h-5 text-gold-600" />
              <span className="text-gray-600 font-medium">Award Winning</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiUsers className="w-5 h-5 text-blue-600" />
              <span className="text-gray-600 font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <FiHeart className="w-5 h-5 text-red-600" />
              <span className="text-gray-600 font-medium">Customer First</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs