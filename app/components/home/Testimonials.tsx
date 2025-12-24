'use client'

import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import { useState, useEffect } from 'react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: 'Priya & Rahul Sharma',
      location: 'Mumbai, India',
      package: 'Goa Honeymoon Package',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Our honeymoon in Goa was absolutely magical! Dream Travel Agency took care of every detail, from the beachfront resort to the romantic candlelight dinner. The sunset cruise was the highlight of our trip. Highly recommended!',
      date: 'December 2023'
    },
    {
      id: 2,
      name: 'Amit Patel Family',
      location: 'Delhi, India',
      package: 'Kerala Backwaters Tour',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'The Kerala backwaters experience was beyond our expectations. The houseboat was comfortable, the food was delicious, and our kids loved the nature walks. The team was very professional and accommodating.',
      date: 'November 2023'
    },
    {
      id: 3,
      name: 'Sneha & Vikram Wedding',
      location: 'Bangalore, India',
      package: 'Rajasthan Royal Wedding',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Our royal wedding in Rajasthan was like a fairy tale! The palace venue, traditional ceremonies, and royal treatment made our special day unforgettable. Thank you Dream Travel Agency for making our dreams come true!',
      date: 'October 2023'
    },
    {
      id: 4,
      name: 'College Group - IIT Delhi',
      location: 'Delhi, India',
      package: 'Manali Adventure Tour',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      review: 'Amazing group tour to Manali! The adventure activities, comfortable accommodation, and well-planned itinerary made it perfect for our college group. Great value for money and excellent service.',
      date: 'September 2023'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FiStar
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-gold-400 fill-current' : 'text-gray-300'
        }`}
      />
    ))
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
            What Our Travelers Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from our satisfied customers who have experienced the magic of traveling with us
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-gold-400 to-gold-600 mx-auto mt-8"></div>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
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
                            <p className="text-gray-400 text-xs">
                              {testimonial.date}
                            </p>
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
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gold-400 w-8'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
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
              <div className="text-3xl font-bold text-gold-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">4.9★</div>
              <div className="text-gray-300 text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400 mb-2">100%</div>
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