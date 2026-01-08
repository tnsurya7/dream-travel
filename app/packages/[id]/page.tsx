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
    packageData.image, // This will now be the local image from public folder
    // Additional images for gallery - mix of local and external for variety
    packageData.id === '1' ? '/KASHMIR TOUR PACKAGE.png' :
    packageData.id === '2' ? '/KERALA HOLIDAY PACKAGE.png' :
    packageData.id === '3' ? '/ SIKKIM GROUP DEPARTURE.png' :
    packageData.id === '4' ? '/GANGTOK & DARJEELING WINTER SPECIAL.png' :
    packageData.id === '5' ? '/MATHURA.png' :
    packageData.id === '6' ? '/kerala.png' :
    packageData.id === '7' ? '/puskar.png' :
    '/varnasi.png',
    
    // External images for gallery variety
    packageData.id === '1' ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '2' ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '3' ? 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '4' ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '5' ? 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '6' ? 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    packageData.id === '7' ? 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' :
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    
    // Additional gallery images
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
  ]

  const getPackageItinerary = (packageId: string) => {
    switch (packageId) {
      case '1': // Kashmir Tour Package
        return [
          {
            day: 1,
            title: 'Arrival in Srinagar',
            description: 'Arrive in Srinagar, check into deluxe houseboat on Dal Lake, evening Shikara ride.',
            activities: ['Airport pickup', 'Houseboat check-in', 'Shikara ride', 'Welcome dinner']
          },
          {
            day: 2,
            title: 'Srinagar Sightseeing',
            description: 'Visit Mughal Gardens, Shankaracharya Temple, and local markets.',
            activities: ['Mughal Gardens', 'Shankaracharya Temple', 'Local markets', 'Dal Lake evening']
          },
          {
            day: 3,
            title: 'Gulmarg Excursion',
            description: 'Day trip to Gulmarg, enjoy Gondola ride and snow activities.',
            activities: ['Gulmarg visit', 'Gondola ride', 'Snow activities', 'Return to Srinagar']
          },
          {
            day: 4,
            title: 'Pahalgam Valley',
            description: 'Visit Pahalgam, explore Betaab Valley and Aru Valley.',
            activities: ['Pahalgam sightseeing', 'Betaab Valley', 'Aru Valley', 'River rafting']
          },
          {
            day: 5,
            title: 'Sonmarg/Doodhpathri',
            description: 'Excursion to Sonmarg or Doodhpathri, enjoy meadows and glaciers.',
            activities: ['Sonmarg visit', 'Thajiwas Glacier', 'Meadow walks', 'Photography']
          },
          {
            day: 6,
            title: 'Departure',
            description: 'Check out from houseboat, last-minute shopping, departure from Srinagar.',
            activities: ['Check out', 'Shopping', 'Airport transfer', 'Departure']
          }
        ]
      case '2': // Kerala Holiday Package
        return [
          {
            day: 1,
            title: 'Arrival in Kochi',
            description: 'Arrive in Kochi, check into hotel, explore Fort Kochi and Chinese fishing nets.',
            activities: ['Airport pickup', 'Hotel check-in', 'Fort Kochi', 'Chinese fishing nets']
          },
          {
            day: 2,
            title: 'Kochi to Munnar',
            description: 'Drive to Munnar, check into hill station hotel, evening at leisure.',
            activities: ['Drive to Munnar', 'Hotel check-in', 'Tea gardens', 'Evening leisure']
          },
          {
            day: 3,
            title: 'Munnar Sightseeing',
            description: 'Visit tea plantations, Eravikulam National Park, and Mattupetty Dam.',
            activities: ['Tea plantations', 'Eravikulam Park', 'Mattupetty Dam', 'Echo Point']
          },
          {
            day: 4,
            title: 'Munnar to Thekkady',
            description: 'Drive to Thekkady, spice plantation visit, evening boat ride in Periyar.',
            activities: ['Drive to Thekkady', 'Spice plantation', 'Periyar boat ride', 'Wildlife viewing']
          },
          {
            day: 5,
            title: 'Thekkady to Alleppey',
            description: 'Drive to Alleppey, check into luxury houseboat, backwater cruise.',
            activities: ['Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise', 'Candlelight dinner']
          },
          {
            day: 6,
            title: 'Alleppey to Kovalam',
            description: 'Drive to Kovalam, check into beach resort, relax at the beach.',
            activities: ['Drive to Kovalam', 'Beach resort', 'Beach activities', 'Sunset viewing']
          },
          {
            day: 7,
            title: 'Departure from Trivandrum',
            description: 'Check out, visit Trivandrum city, departure from Trivandrum airport.',
            activities: ['Check out', 'Trivandrum sightseeing', 'Airport transfer', 'Departure']
          }
        ]
      case '3': // Sikkim Group Departure
        return [
          {
            day: 1,
            title: 'Arrival in Gangtok',
            description: 'Arrive in Gangtok, check into premium hotel, evening at leisure to acclimatize.',
            activities: ['Airport pickup', 'Hotel check-in', 'City orientation', 'Welcome dinner']
          },
          {
            day: 2,
            title: 'Gangtok Sightseeing',
            description: 'Full day Gangtok local sightseeing covering major attractions.',
            activities: ['Rumtek Monastery', 'Enchey Monastery', 'Tashi View Point', 'Ganesh Tok']
          },
          {
            day: 3,
            title: 'Tsomgo Lake & Baba Mandir',
            description: 'Excursion to Tsomgo Lake and Baba Harbhajan Singh Mandir.',
            activities: ['Tsomgo Lake', 'Baba Mandir', 'Yak ride', 'Snow activities']
          },
          {
            day: 4,
            title: 'Gangtok to Pelling',
            description: 'Drive to Pelling, check into hotel, visit Pemayangtse Monastery.',
            activities: ['Drive to Pelling', 'Hotel check-in', 'Pemayangtse Monastery', 'Sunset views']
          },
          {
            day: 5,
            title: 'Pelling to Darjeeling',
            description: 'Drive to Darjeeling, check into hotel, evening Mall Road exploration.',
            activities: ['Drive to Darjeeling', 'Hotel check-in', 'Mall Road', 'Local markets']
          },
          {
            day: 6,
            title: 'Darjeeling Sightseeing',
            description: 'Early morning Tiger Hill sunrise, then full day Darjeeling sightseeing.',
            activities: ['Tiger Hill sunrise', 'Batasia Loop', 'Ghoom Monastery', 'Tea gardens']
          },
          {
            day: 7,
            title: 'Departure',
            description: 'Check out from hotel, last-minute shopping, departure from Bagdogra.',
            activities: ['Check out', 'Shopping', 'Airport transfer', 'Departure']
          }
        ]
      case '4': // Winter Special Gangtok & Darjeeling
        return [
          {
            day: 1,
            title: 'Arrival in Gangtok',
            description: 'Arrive in Gangtok, check into hotel, evening winter snow experience.',
            activities: ['Airport pickup', 'Hotel check-in', 'Winter acclimatization', 'Snow viewing']
          },
          {
            day: 2,
            title: 'Tsomgo Lake Winter Special',
            description: 'Visit frozen Tsomgo Lake and Baba Mandir, enjoy winter snow activities.',
            activities: ['Frozen Tsomgo Lake', 'Baba Mandir', 'Snow activities', 'Winter photography']
          },
          {
            day: 3,
            title: 'Gangtok to Darjeeling',
            description: 'Drive to Darjeeling through scenic winter landscapes, check into hotel.',
            activities: ['Scenic winter drive', 'Hotel check-in', 'Mall Road evening', 'Winter shopping']
          },
          {
            day: 4,
            title: 'Darjeeling Winter Sightseeing',
            description: 'Early morning Tiger Hill for winter sunrise, full day sightseeing.',
            activities: ['Tiger Hill winter sunrise', 'Batasia Loop', 'Tea gardens', 'Toy train']
          },
          {
            day: 5,
            title: 'Departure',
            description: 'Check out, last-minute shopping, departure from Bagdogra airport.',
            activities: ['Check out', 'Shopping', 'Airport transfer', 'Departure']
          }
        ]
      case '5': // Mathura Vrindavan Tour
        return [
          {
            day: 1,
            title: 'Arrival in Mathura',
            description: 'Arrive in Mathura, check into hotel, visit Krishna Janmabhoomi Temple.',
            activities: ['Hotel check-in', 'Krishna Janmabhoomi', 'Dwarkadhish Temple', 'Evening aarti']
          },
          {
            day: 2,
            title: 'Vrindavan Darshan',
            description: 'Full day Vrindavan sightseeing covering major temples and holy sites.',
            activities: ['Banke Bihari Temple', 'ISKCON Temple', 'Prem Mandir', 'Radha Raman Temple']
          },
          {
            day: 3,
            title: 'Raman Reti & Nand Gaon',
            description: 'Visit Raman Reti and Nand Gaon, explore Krishna\'s childhood places.',
            activities: ['Raman Reti', 'Nand Gaon', 'Yashoda Maiya Temple', 'Local sightseeing']
          },
          {
            day: 4,
            title: 'Departure',
            description: 'Morning temple visit, check out from hotel, departure.',
            activities: ['Morning darshan', 'Check out', 'Shopping', 'Departure']
          }
        ]
      case '6': // Kerala 3N/4D
        return [
          {
            day: 1,
            title: 'Arrival in Cochin',
            description: 'Arrive in Cochin, check into hotel, drive to Munnar (3 hours). Check into 3★ Premium Hotel with Valley View.',
            activities: ['Cochin pickup', 'Drive to Munnar', 'Hotel check-in', 'Valley view evening']
          },
          {
            day: 2,
            title: 'Munnar Sightseeing',
            description: 'Full day Munnar exploration covering tea gardens, viewpoints, and nature spots.',
            activities: ['Tea plantation visit', 'Echo Point', 'Mattupetty Dam', 'Top Station viewpoint']
          },
          {
            day: 3,
            title: 'Munnar to Alleppey',
            description: 'Drive to Alleppey, check into Deluxe Houseboat with full AC. Enjoy backwater cruise with all meals.',
            activities: ['Drive to Alleppey', 'Houseboat check-in', 'Backwater cruise', 'Traditional Kerala meals']
          },
          {
            day: 4,
            title: 'Departure from Cochin',
            description: 'Check out from houseboat, drive to Cochin for departure.',
            activities: ['Houseboat check-out', 'Drive to Cochin', 'Airport/station drop', 'Departure']
          }
        ]
      case '7': // Pushkar-Khatu Shyam-Jaipur Tour
        return [
          {
            day: 1,
            title: 'Damoh to Pushkar',
            description: 'Depart from Damoh, drive to Pushkar. Visit Pushkar Lake, Brahma Temple, and attend evening aarti.',
            activities: ['Departure from Damoh', 'Drive to Pushkar', 'Pushkar Lake visit', 'Brahma Temple darshan', 'Evening aarti']
          },
          {
            day: 2,
            title: 'Pushkar to Khatu Shyam Ji',
            description: 'Morning Pushkar sightseeing, then drive to Khatu Shyam Ji for darshan and visit Shyam Kund.',
            activities: ['Morning Pushkar tour', 'Drive to Khatu Shyam Ji', 'Khatu Shyam Temple darshan', 'Shyam Kund visit', 'Local temples']
          },
          {
            day: 3,
            title: 'Jaipur Sightseeing & Return',
            description: 'Drive to Jaipur, visit Amber Fort, Hawa Mahal, City Palace, then return journey to Damoh.',
            activities: ['Drive to Jaipur', 'Amber Fort', 'Hawa Mahal', 'City Palace', 'Return journey to Damoh']
          }
        ]
      case '8': // Varanasi-Ayodhya-Chitrakoot-Prayagraj Tour
        return [
          {
            day: 1,
            title: 'Arrival in Varanasi',
            description: 'Arrive in Varanasi, check into hotel, evening Ganga Aarti at Dashashwamedh Ghat.',
            activities: ['Hotel check-in', 'Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Evening Ganga Aarti']
          },
          {
            day: 2,
            title: 'Varanasi Sightseeing',
            description: 'Early morning boat ride on Ganges, visit Sarnath, and explore old Varanasi.',
            activities: ['Morning Ganga boat ride', 'Sarnath visit', 'Banaras Hindu University', 'Old city exploration']
          },
          {
            day: 3,
            title: 'Varanasi to Ayodhya',
            description: 'Drive to Ayodhya, visit Ram Janmabhoomi, Hanuman Garhi, and other sacred sites.',
            activities: ['Drive to Ayodhya', 'Ram Janmabhoomi darshan', 'Hanuman Garhi', 'Kanak Bhawan', 'Sarayu River aarti']
          },
          {
            day: 4,
            title: 'Ayodhya to Chitrakoot',
            description: 'Drive to Chitrakoot, visit Ram Ghat, Kamadgiri, and other places associated with Lord Rama.',
            activities: ['Drive to Chitrakoot', 'Ram Ghat', 'Kamadgiri Parikrama', 'Bharat Milap Temple', 'Sphatik Shila']
          },
          {
            day: 5,
            title: 'Chitrakoot to Prayagraj',
            description: 'Drive to Prayagraj, visit Triveni Sangam, Allahabad Fort, and Anand Bhawan.',
            activities: ['Drive to Prayagraj', 'Triveni Sangam darshan', 'Allahabad Fort', 'Anand Bhawan', 'Hanuman Temple']
          },
          {
            day: 6,
            title: 'Departure from Prayagraj',
            description: 'Morning temple visits, check out from hotel, departure from Prayagraj.',
            activities: ['Morning darshan', 'Check out', 'Local sightseeing', 'Departure']
          }
        ]
      default:
        return [
          {
            day: 1,
            title: 'Arrival & Check-in',
            description: 'Arrive at destination, check into hotel, welcome and tour briefing.',
            activities: ['Airport pickup', 'Hotel check-in', 'Welcome', 'Tour briefing']
          },
          {
            day: 2,
            title: 'Sightseeing',
            description: 'Full day sightseeing covering major attractions and local experiences.',
            activities: ['Major attractions', 'Local experiences', 'Cultural activities', 'Photography']
          }
        ]
    }
  }

  const getPackageInclusions = (packageId: string) => {
    const baseInclusions = [
      'Accommodation as per itinerary',
      'Daily breakfast',
      'All transfers and transportation',
      'Professional tour guide',
      'All applicable taxes'
    ]

    switch (packageId) {
      case '1': // Kashmir
        return [
          ...baseInclusions,
          'Deluxe houseboat stay on Dal Lake',
          'Shikara ride',
          'All sightseeing as per itinerary',
          'Travel insurance'
        ]
      case '2': // Kerala
        return [
          ...baseInclusions,
          'Luxury houseboat stay in Alleppey',
          'Candlelight dinner',
          'All meals during houseboat stay',
          'Backwater cruise',
          'Beach resort accommodation'
        ]
      case '3': // Sikkim Group Departure
        return [
          ...baseInclusions,
          'Premium hotel accommodations',
          'Fixed departure group tour',
          'All sightseeing as per itinerary',
          'Professional tour guide',
          'All permits and entry fees',
          'Group coordination'
        ]
      case '4': // Winter Special Gangtok & Darjeeling
        return [
          ...baseInclusions,
          'Winter special arrangements',
          'Snow activity coordination',
          'Warm clothing assistance',
          'All permits for restricted areas',
          'Flexible group pricing'
        ]
      case '5': // Mathura Vrindavan
        return [
          ...baseInclusions,
          'Temple darshan arrangements',
          'Local guide for spiritual sites',
          'All entry fees to temples',
          'Spiritual tour coordination'
        ]
      case '6': // Kerala 3N/4D
        return [
          ...baseInclusions,
          '3★ Premium Hotel with Valley View in Munnar',
          'Deluxe Houseboat with Full AC in Alleppey',
          'All meals during houseboat stay',
          'Tea plantation visits',
          'Backwater cruise experience',
          'Pickup & drop from Cochin'
        ]
      case '7': // Pushkar-Khatu Shyam-Jaipur
        return [
          ...baseInclusions,
          'Hotel accommodation (2 nights)',
          'All sightseeing as per itinerary',
          'Temple darshan arrangements',
          'Starting point: Damoh, Madhya Pradesh',
          'All transfers included'
        ]
      case '8': // Varanasi-Ayodhya-Chitrakoot-Prayagraj
        return [
          ...baseInclusions,
          'Hotel accommodation (5 nights)',
          'Ganga Aarti arrangements',
          'Boat ride on River Ganges',
          'All temple darshan coordination',
          'Spiritual guide for pilgrimage sites',
          'All sightseeing as per itinerary'
        ]
      default:
        return baseInclusions
    }
  }

  const itinerary = getPackageItinerary(packageData?.id || '')
  const inclusions = getPackageInclusions(packageData?.id || '')

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
                    <span className="text-blue-600 font-medium">{packageData.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FiStar className="w-5 h-5 text-gold-500 fill-current" />
                    <span>Highly Rated Package</span>
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
                  <div className="font-semibold text-blue-600">{packageData.duration}</div>
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
                  <div className="font-semibold text-gray-800">Popular</div>
                  <div className="text-sm text-gray-600">Choice</div>
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

            {/* Why Book This Tour */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Book This Tour</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Trusted Travel Agency</h3>
                    <p className="text-gray-600 text-sm">Based in Madhya Pradesh with years of experience in organizing memorable trips</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Best Price Guarantee</h3>
                    <p className="text-gray-600 text-sm">Competitive pricing with email-based booking and transparent cost structure</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Safe & Reliable</h3>
                    <p className="text-gray-600 text-sm">Professional travel planning with 24/7 support and safety measures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <FiCheck className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Perfect for Everyone</h3>
                    <p className="text-gray-600 text-sm">Suitable for families, couples, groups, and pilgrims with customized itineraries</p>
                  </div>
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
                  <span className="font-medium text-blue-600">{packageData.duration}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Category</span>
                  <span className="font-medium capitalize text-green-600">{packageData.category}</span>
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