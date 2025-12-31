'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiClock, FiSend, FiCheck } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import SuccessNotification from '../components/SuccessNotification'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [showNotification, setShowNotification] = useState(false)
  const [notificationMessage, setNotificationMessage] = useState('')
  const [notificationType, setNotificationType] = useState<'success' | 'error'>('success')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setNotificationMessage('Message sent successfully! We\'ll get back to you within 24 hours.')
        setNotificationType('success')
        setShowNotification(true)
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        })
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setError('Failed to send message. Please try again or contact us directly.')
      setNotificationMessage('Failed to send message. Please try again.')
      setNotificationType('error')
      setShowNotification(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiPhone,
      title: 'Phone Number',
      details: ['+91 9109455317'],
      action: 'tel:+919109455317',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiMail,
      title: 'Email Address',
      details: ['dreamtravelagency395@gmail.com'],
      action: 'mailto:dreamtravelagency395@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp Chat',
      details: ['+91 9109455317'],
      action: 'https://wa.me/919109455317',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: FiMapPin,
      title: 'Office Address',
      details: ['Damoh, Madhya Pradesh, India'],
      action: 'https://maps.app.goo.gl/AwQgjDwa2ZPMftua7?g_st=aw',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FiInstagram,
      title: 'Follow Us',
      details: ['@dreamtravellers3'],
      action: 'https://www.instagram.com/dreamtravellers3?igsh=MWM1a2I3NndpdXoydQ==',
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const businessHours = [
    { day: 'Customer Support', hours: '24/7 Available' },
    { day: 'Emergency Assistance', hours: 'Round the Clock' },
    { day: 'Online Booking', hours: 'Always Open' }
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
              Get in Touch
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Ready to plan your dream vacation? We're here to help you create unforgettable memories. 
              Contact us today and let's start planning your perfect getaway.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Let's Start Planning Your Journey
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our travel experts are ready to help you discover amazing destinations and create 
                personalized itineraries that match your dreams and budget. Reach out to us through 
                any of the channels below.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  {info.action !== '#' ? (
                    <a
                      href={info.action}
                      target={info.action.startsWith('http') ? '_blank' : undefined}
                      rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex flex-col h-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group min-h-[140px]"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors flex-shrink-0">
                        {info.title}
                      </h3>
                      <div className="space-y-1 flex-grow flex flex-col justify-center">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 group-hover:text-gray-800 transition-colors text-sm leading-relaxed break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </a>
                  ) : (
                    <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 min-h-[140px]">
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center mb-4 flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex-shrink-0">
                        {info.title}
                      </h3>
                      <div className="space-y-1 flex-grow flex flex-col justify-center">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm leading-relaxed break-words">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mr-4">
                  <FiClock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">24/7 Service</h3>
              </div>
              <div className="space-y-2">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="font-medium text-gray-800">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h4>
                <p className="text-gray-600">
                  Thank you for contacting us. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Package Information">Package Information</option>
                      <option value="Booking Assistance">Booking Assistance</option>
                      <option value="Custom Tour Request">Custom Tour Request</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your travel plans, questions, or how we can help you..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                    <p className="text-red-600 text-sm">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  <FiSend className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800">Find Us</h3>
            <p className="text-gray-600 mt-2">
              Visit our office for personalized travel consultation
            </p>
          </div>
          <div className="relative h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29207.31542829707!2d77.4126!3d23.2599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c428f8fd68fbd%3A0x2155716d572d4f8!2sBhopal%2C%20Madhya%20Pradesh%2C%20India!5e0!3m2!1sen!2sus!4v1635784892345!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dream Travel Agency Office Location - Madhya Pradesh, India"
              className="rounded-b-2xl"
            />
            
            {/* Office Info Overlay */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <FiMapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Dream Travel Agency</h4>
                  <a 
                    href="https://maps.app.goo.gl/AwQgjDwa2ZPMftua7?g_st=aw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 leading-relaxed hover:text-primary-600 transition-colors cursor-pointer block"
                  >
                    Damoh, Madhya Pradesh, India
                  </a>
                  <div className="mt-2 flex flex-col space-y-1 text-xs text-gray-500">
                    <a href="tel:+919109455317" className="hover:text-primary-600 transition-colors">
                      📞 +91 9109455317
                    </a>
                    <a href="mailto:dreamtravelagency395@gmail.com" className="hover:text-primary-600 transition-colors">
                      ✉️ dreamtravelagency395@gmail.com
                    </a>
                    <a 
                      href="https://wa.me/919109455317"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 transition-colors"
                    >
                      📱 WhatsApp Chat
                    </a>
                    <a 
                      href="https://www.instagram.com/dreamtravellers3?igsh=MWM1a2I3NndpdXoydQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-600 transition-colors"
                    >
                      📷 @dreamtravellers3
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <div className="absolute bottom-4 right-4">
              <a
                href="https://maps.app.goo.gl/AwQgjDwa2ZPMftua7?g_st=aw"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-sm transition-colors duration-300 flex items-center space-x-2 shadow-lg"
              >
                <FiMapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Success Notification */}
      <SuccessNotification
        show={showNotification}
        message={notificationMessage}
        type={notificationType}
        onClose={() => setShowNotification(false)}
      />
    </div>
  )
}

export default ContactPage