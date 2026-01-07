'use client'

import { motion } from 'framer-motion'
import { FiStar, FiArrowRight } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Rajesh & Priya Sharma',
      location: 'Mumbai, Maharashtra',
      package: 'Kashmir Tour Package',
      packageId: '1',
      rating: 4.9,
      badge: 'Adventure • Nature',
      image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Kashmir was absolutely breathtaking! The houseboat stay on Dal Lake and the snow activities in Gulmarg exceeded our expectations. Dream Travel Agency handled everything perfectly - from airport pickup to the Shikara rides. The Gondola experience was unforgettable!',
      date: 'March 2024',
      verified: true
    },
    {
      id: 2,
      name: 'Amit Patel Family',
      location: 'Ahmedabad, Gujarat',
      package: 'Kerala – Discover God\'s Own Country',
      packageId: '6',
      rating: 5.0,
      badge: 'Nature • Family',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Perfect family trip to Kerala! The 3-night package was well-planned with beautiful tea gardens in Munnar and an amazing houseboat experience in Alleppey. Our kids loved the backwater cruise and the food was delicious. Great value for money at ₹13,750 per person.',
      date: 'February 2024',
      verified: true
    },
    {
      id: 3,
      name: 'Meera & Vikram',
      location: 'Bangalore, Karnataka',
      package: 'Mathura - Vrindavan Tour',
      packageId: '5',
      rating: 4.8,
      badge: 'Spiritual • Heritage',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Our spiritual journey to Mathura-Vrindavan was deeply fulfilling. The darshan arrangements at all major temples were seamless, and our guide was very knowledgeable about the religious significance. The 4-day itinerary covered all important sites perfectly.',
      date: 'January 2024',
      verified: true
    },
    {
      id: 4,
      name: 'College Group - NIT Trichy',
      location: 'Tiruchirappalli, Tamil Nadu',
      package: 'Winter Special - Gangtok & Darjeeling',
      packageId: '4',
      rating: 4.9,
      badge: 'Adventure • Group',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Amazing winter trip to Darjeeling and Gangtok! The Tiger Hill sunrise was spectacular, and the snow experience was perfect for our group of 15 students. At ₹16,699 per person, it was excellent value. The coordination was flawless throughout the 5-day trip.',
      date: 'December 2023',
      verified: true
    },
    {
      id: 5,
      name: 'Sunita & Ramesh Gupta',
      location: 'Delhi, India',
      package: 'Kerala Holiday Package',
      packageId: '2',
      rating: 5.0,
      badge: 'Premium • Nature',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'The 7-day Kerala premium package was worth every penny! From Kochi to Kovalam, every destination was beautiful. The luxury houseboat in Alleppey and the spice plantation visit in Thekkady were highlights. Professional service throughout our honeymoon trip.',
      date: 'November 2023',
      verified: true
    },
    {
      id: 6,
      name: 'Ravi Kumar & Friends',
      location: 'Pune, Maharashtra',
      package: 'Pushkar – Khatu Shyam Ji – Jaipur Tour',
      packageId: '7',
      rating: 4.8,
      badge: 'Spiritual • Budget',
      image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Excellent spiritual tour covering Pushkar, Khatu Shyam Ji, and Jaipur in just 3 days. The temple darshan arrangements were perfect, and we also got to see Jaipur\'s heritage sites. At ₹3,200 per person, this was incredibly affordable for such a comprehensive trip.',
      date: 'October 2023',
      verified: true
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0
    
    return (
      <div className="flex items-center space-x-1">
        {Array.from({ length: fullStars }, (_, i) => (
          <FiStar key={i} className="w-5 h-5 text-gold-400 fill-current" />
        ))}
        {hasHalfStar && (
          <div className="relative">
            <FiStar className="w-5 h-5 text-gray-300" />
            <div className="absolute inset-0 overflow-hidden w-1/2">
              <FiStar className="w-5 h-5 text-gold-400 fill-current" />
            </div>
          </div>
        )}
        {Array.from({ length: 5 - Math.ceil(rating) }, (_, i) => (
          <FiStar key={i + fullStars} className="w-5 h-5 text-gray-300" />
        ))}
        <span className="ml-2 text-gold-400 font-semibold text-sm">{rating.toFixed(1)}</span>
      </div>
    )
  }

  const getBadgeColor = (badge: string) => {
    if (badge.includes('Adventure')) return 'from-orange-500 to-red-500'
    if (badge.includes('Nature')) return 'from-green-500 to-emerald-500'
    if (badge.includes('Spiritual')) return 'from-purple-500 to-indigo-500'
    if (badge.includes('Premium')) return 'from-gold-500 to-yellow-500'
    if (badge.includes('Family')) return 'from-blue-500 to-cyan-500'
    if (badge.includes('Group')) return 'from-pink-500 to-rose-500'
    return 'from-gray-500 to-gray-600'
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-6">
            Real Stories from Real Travelers
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover authentic experiences from our customers who have explored amazing destinations with our carefully crafted travel packages
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 mx-4"
                  >
                    <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full flex items-center justify-center">
                          <div className="text-2xl">💬</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center md:text-left">
                        {/* Rating */}
                        <div className="flex justify-center md:justify-start space-x-1 mb-4">
                          {renderStars(testimonial.rating)}
                        </div>

                        {/* Package Badge */}
                        <div className={`inline-block bg-gradient-to-r ${getBadgeColor(testimonial.badge)} text-white px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                          {testimonial.badge}
                        </div>

                        {/* Review */}
                        <blockquote className="text-lg md:text-xl text-gray-100 leading-relaxed mb-6 italic">
                          "{testimonial.review}"
                        </blockquote>

                        {/* Customer Info */}
                        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-4 border-white/20"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(testimonial.name.replace('&', 'and'))}&background=667eea&color=fff&size=150&font-size=0.4&bold=true`;
                            }}
                          />
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-300 text-sm mb-1">
                              {testimonial.location}
                            </p>
                            <p className="text-gold-400 text-sm font-medium mb-1">
                              {testimonial.package}
                            </p>
                            <p className="text-gray-400 text-xs mb-3">
                              Traveled in {testimonial.date}
                            </p>
                            
                            {/* View Package Button */}
                            <Link
                              href={`/packages/${testimonial.packageId}`}
                              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 group"
                            >
                              <span>View Package</span>
                              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gold-400 w-8'
                    : 'bg-white/30 hover:bg-white/50 w-3'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            →
          </button>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">800+</div>
              <div className="text-gray-300 text-sm">Happy Travelers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">4.9★</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Customer Support</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials