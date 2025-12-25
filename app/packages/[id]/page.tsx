'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FiCalendar, FiMapPin, FiUsers, FiStar, FiCheck, FiX, FiArrowLeft, FiShare2, FiHeart } from 'react-icons/fi'
import { getPackageById, getSimilarPackages, trackUserBehavior } from '../../utils/recommendations'
import PackageCard from '../../components/packages/PackageCard'
import EnquiryForm from '../../components/EnquiryForm'

const PackageDetailsPage = () => {
  const params = useParams()
  const [packageData, setPackageData] = useState<any>(null)
  const [similarPackages, setSimilarPackages] = useState<any[]>([])
  const [showEnquiryForm, setShowEnquiryForm] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (params.id) {
      const pkg = getPackageById(params.id as string)
      if (pkg) {
        setPackageData(pkg)
        trackUserBehavior('package_view', { packageId: pkg.id })
        
        const similar = getSimilarPackages(pkg.id)
        setSimilarPackages(similar)
      }
    }
  }, [params.id])

  if (!packageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📦</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Package Not Found</h2>
          <p className="text-gray-600 mb-6">The package you're looking for doesn't exist.</p>
          <Link
            href="/packages"
            className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
          >
            View All Packages
          </Link>
        </div>
      </div>
    )
  }

  const images = [
    packageData.image,
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
  ]

  const itinerary = [
    {
      day: 1,
      title: 'Arrival & Check-in',
      description: 'Arrive at destination, check into hotel, welcome dinner and briefing about the tour.',
      activities: ['Airport pickup', 'Hotel check-in', 'Welcome dinner', 'Tour briefing']
    },
    {
      day: 2,
      title: 'City Exploration',
      description: 'Full day city tour covering major attractions, local markets, and cultural sites.',
      activities: ['Breakfast', 'City tour', 'Local market visit', 'Cultural show']
    },
    {
      day: 3,
      title: 'Adventure Activities',
      description: 'Exciting adventure activities and outdoor experiences based on the destination.',
      activities: ['Adventure sports', 'Nature walk', 'Photography session', 'Local cuisine']
    },
    {
      day: 4,
      title: 'Departure',
      description: 'Check out from hotel, last-minute shopping, and departure to airport.',
      activities: ['Check out', 'Shopping', 'Airport transfer', 'Departure']
    }
  ]

  const inclusions = [
    'Accommodation in premium hotels',
    'Daily breakfast and dinner',
    'All transfers and transportation',
    'Professional tour guide',
    'Entry tickets to attractions',
    'Travel insurance',
    '24/7 customer support'
  ]

  const exclusions = [
    'International/domestic flights',
    'Personal expenses',
    'Lunch (unless specified)',
    'Tips and gratuities',
    'Additional activities not mentioned',
    'Visa fees',
    'Medical expenses'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Button */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/packages"
            className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors"
          >
            <FiArrowLeft className="w-5 h-5" />
            <span>Back to Packages</span>
          </Link>
        </div>
      </div>

      {/* Image Gallery */}
      <section className="relative">
        <div className="h-96 md:h-[500px] overflow-hidden">
          <img
            src={images[currentImageIndex]}
            alt={packageData.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>

        {/* Image Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Package Info Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-luxury font-bold text-gray-800 mb-2">
                  {packageData.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FiCalendar className="w-5 h-5" />
                    <span>{packageData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-5 h-5 text-gold-500 fill-current" />
                    <span>4.8 (124 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary-600">
                  ₹{packageData.price.toLocaleString()}
                </div>
                <div className="text-gray-600">per person</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Package Overview</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {packageData.description} This carefully crafted package offers the perfect blend of adventure, 
                relaxation, and cultural immersion. Experience the best of the destination with our expert guides 
                and premium accommodations.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FiCalendar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">{packageData.duration}</div>
                  <div className="text-sm text-gray-600">Duration</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FiUsers className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">2-8 People</div>
                  <div className="text-sm text-gray-600">Group Size</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FiMapPin className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">Multiple</div>
                  <div className="text-sm text-gray-600">Locations</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FiStar className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="font-semibold text-gray-800">4.8/5</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
              </div>
            </motion.div>

            {/* Itinerary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Day-wise Itinerary</h2>
              <div className="space-y-6">
                {itinerary.map((day, index) => (
                  <div key={day.day} className="flex space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                        {day.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-gray-600 mb-3">{day.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {day.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Inclusions & Exclusions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">What's Included & Excluded</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                    <FiCheck className="w-5 h-5 mr-2" />
                    Inclusions
                  </h3>
                  <ul className="space-y-2">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FiCheck className="w-4 h-4 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                    <FiX className="w-5 h-5 mr-2" />
                    Exclusions
                  </h3>
                  <ul className="space-y-2">
                    {exclusions.map((item, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <FiX className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  ₹{packageData.price.toLocaleString()}
                </div>
                <div className="text-gray-600">per person</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{packageData.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium capitalize">{packageData.category}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Budget</span>
                  <span className={`font-medium capitalize ${
                    packageData.budget === 'affordable' ? 'text-green-600' : 'text-purple-600'
                  }`}>
                    {packageData.budget}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => setShowEnquiryForm(true)}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Book Now / Enquire
                </button>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-base">✅</span>
                    <span className="font-medium">Free cancellation up to 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-base">✅</span>
                    <span className="font-medium">Best price guarantee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-green-500 text-base">✅</span>
                    <span className="font-medium">24/7 customer support</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Similar Packages */}
        {similarPackages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Similar Packages You Might Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {similarPackages.map((pkg) => (
                <PackageCard key={pkg.id} package={pkg} />
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* Enquiry Form Modal */}
      {showEnquiryForm && (
        <EnquiryForm
          packageData={packageData}
          onClose={() => setShowEnquiryForm(false)}
        />
      )}
    </div>
  )
}

export default PackageDetailsPage