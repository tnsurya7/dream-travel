'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do you provide tour packages from Madhya Pradesh?",
      answer: "Yes, we provide tour packages from Damoh and across Madhya Pradesh to destinations all over India. Our travel agency is based in Damoh, MP, and we specialize in organizing trips to Kashmir, Kerala, spiritual destinations, hill stations, and other popular tourist places across the country."
    },
    {
      question: "How do I book a package?",
      answer: "You can enquire through email at dreamtravelagency395@gmail.com or WhatsApp at +91 9109455317 and our team will contact you directly. We use an email-based booking system where our travel experts will provide detailed itineraries, pricing, and help you customize your trip according to your preferences."
    },
    {
      question: "Are your packages suitable for families and groups?",
      answer: "Yes, we offer customized packages for families, groups, couples, and pilgrims. Our tour packages are designed to cater to different types of travelers including family holidays, group tours, honeymoon packages, spiritual journeys, and adventure trips. We can customize itineraries based on group size and preferences."
    },
    {
      question: "What destinations do you cover?",
      answer: "We offer tour packages to popular destinations across India including Kashmir (Srinagar, Gulmarg, Pahalgam), Kerala (Munnar, Alleppey, Kochi), spiritual places (Mathura-Vrindavan, Pushkar, Varanasi-Ayodhya), hill stations (Gangtok, Darjeeling), and many other tourist destinations. All packages include accommodation, transportation, and sightseeing."
    },
    {
      question: "What is included in your tour packages?",
      answer: "Our tour packages typically include accommodation, daily breakfast, all transfers and transportation, professional tour guide, and all applicable taxes. Specific inclusions vary by package - some include all meals, special activities like houseboat stays, Shikara rides, or temple darshan arrangements depending on the destination."
    },
    {
      question: "Do you provide 24/7 customer support?",
      answer: "Yes, we provide 24/7 customer support throughout your journey. Our team is available round the clock to assist with any queries, emergency situations, or travel-related assistance. You can reach us anytime via phone or WhatsApp for immediate support."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-gray-800 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our tour packages, booking process, and travel services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-gold-500 mx-auto mt-8"></div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <FiMinus className="w-6 h-6 text-primary-600" />
                  ) : (
                    <FiPlus className="w-6 h-6 text-primary-600" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 text-center bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-primary-100 mb-6">
            Our travel experts are here to help you plan your perfect trip
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="tel:+919109455317"
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              📞 Call +91 9109455317
            </a>
            <a
              href="https://wa.me/919109455317"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              💬 WhatsApp Chat
            </a>
            <a
              href="mailto:dreamtravelagency395@gmail.com"
              className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
            >
              ✉️ Email Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ