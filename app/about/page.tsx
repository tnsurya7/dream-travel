'use client'

import { motion } from 'framer-motion'
import { FiAward, FiUsers, FiHeart, FiGlobe, FiShield, FiStar } from 'react-icons/fi'

const AboutPage = () => {
  const stats = [
    { number: '500+', label: 'Happy Travelers', icon: '😊' },
    { number: '50+', label: 'Destinations Covered', icon: '🌍' },
    { number: '100+', label: 'Tour Packages', icon: '📦' },
    { number: '5★', label: 'Average Rating', icon: '⭐' },
    { number: '24/7', label: 'Customer Support', icon: '🎧' },
    { number: '100%', label: 'Satisfaction Rate', icon: '✅' }
  ]

  const values = [
    {
      icon: FiHeart,
      title: 'Passion for Travel',
      description: 'We believe travel transforms lives and creates lasting memories. Our passion drives us to craft exceptional experiences.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiShield,
      title: 'Trust & Safety',
      description: 'Your safety and security are our top priorities. We ensure all our packages meet the highest safety standards.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUsers,
      title: 'Customer First',
      description: 'Every decision we make is centered around providing the best possible experience for our valued customers.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiGlobe,
      title: 'Global Expertise',
      description: 'With extensive knowledge of destinations worldwide, we bring you authentic and immersive travel experiences.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our service, from planning to execution of your perfect trip.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: FiStar,
      title: 'Quality Assurance',
      description: 'We maintain the highest quality standards in accommodations, transportation, and all travel services.',
      color: 'from-indigo-500 to-purple-500'
    }
  ]

  const team = [
    {
      name: 'Nikhil Jatav',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'With over 10 years in the travel industry, Nikhil founded Dream Travel Agency with a vision to make travel accessible and memorable for everyone.'
    },
    {
      name: 'Travel Expert',
      role: 'Senior Travel Consultant',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Our experienced travel consultant specializes in creating personalized itineraries and ensuring every detail of your journey is perfect.'
    },
    {
      name: 'Customer Care',
      role: 'Customer Support Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      description: 'Dedicated to providing exceptional customer service and support throughout your travel experience, available 24/7.'
    }
  ]

  const milestones = [
    {
      year: '2020',
      title: 'Dream Travel Agency Founded',
      description: 'Started with a vision to make travel dreams come true for everyone.'
    },
    {
      year: '2021',
      title: 'First 100 Happy Customers',
      description: 'Reached our first milestone of serving 100 satisfied travelers.'
    },
    {
      year: '2022',
      title: 'Expanded to International Tours',
      description: 'Added international destinations to our portfolio.'
    },
    {
      year: '2023',
      title: 'Award for Excellence',
      description: 'Recognized for outstanding service in the travel industry.'
    },
    {
      year: '2024',
      title: '500+ Happy Travelers',
      description: 'Celebrating over 500 successful trips and countless memories created.'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-luxury font-bold text-white mb-6">
              About Dream Travel Agency
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              We're passionate about creating unforgettable travel experiences that connect you with the world's most beautiful destinations and cultures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-luxury font-bold text-gray-800 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Dream Travel Agency was born from a simple belief: everyone deserves to explore the world and create memories that last a lifetime. Founded in 2020, we started as a small team of travel enthusiasts who wanted to share our passion for discovery with others.
                </p>
                <p>
                  What began as a local travel service has grown into a trusted agency serving hundreds of happy travelers. We specialize in creating personalized experiences that go beyond typical tourist attractions, connecting you with authentic local cultures and breathtaking destinations.
                </p>
                <p>
                  Today, we're proud to offer a wide range of travel packages, from romantic honeymoon getaways to adventurous group expeditions, all designed with the same attention to detail and commitment to excellence that has defined us from the beginning.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Travel Adventure"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-gray-600">Happy Travelers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-luxury font-bold text-white mb-6">
              Our Journey in Numbers
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              These numbers represent the trust our customers place in us and the memories we've helped create
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
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
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-primary-100 font-medium text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-luxury font-bold text-gray-800 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape every experience we create for our travelers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-luxury font-bold text-gray-800 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our dedicated team of travel experts is committed to making your dream vacation a reality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-luxury font-bold text-gray-800 mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From humble beginnings to becoming a trusted travel partner - here's our story
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-gold-500 hidden md:block"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:space-x-8`}
                >
                  <div className="flex-1 bg-white rounded-2xl shadow-lg p-6 mb-4 md:mb-0">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="w-4 h-4 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full hidden md:block flex-shrink-0"></div>
                  
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-luxury font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
              Let us help you create memories that will last a lifetime. Contact us today to start planning your dream vacation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/packages"
                className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Explore Packages
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted Travel Agency in Madhya Pradesh
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dream Travel Agency is a trusted travel agency based in Damoh, Madhya Pradesh, specializing in domestic tour packages including Kashmir, Kerala, spiritual tours, and family holidays across India. We provide comprehensive travel services with professional planning, competitive pricing, and personalized customer care to ensure memorable travel experiences for families, couples, groups, and individual travelers throughout the country.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage