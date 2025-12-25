'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PackageCard from '../components/packages/PackageCard'
import CategoryFilter from '../components/packages/CategoryFilter'
import { getAllPackages, trackUserBehavior } from '../utils/recommendations'
import type { Metadata } from 'next'

const PackagesPage = () => {
  const [packages, setPackages] = useState<any[]>([])
  const [filteredPackages, setFilteredPackages] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([])
  const [selectedDurations, setSelectedDurations] = useState<string[]>([])

  const initialCategories = [
    { id: 'all', name: 'All Packages', count: 0 },
    { id: 'adventure', name: 'Adventure Tours', count: 0 },
    { id: 'nature', name: 'Nature & Wildlife', count: 0 },
    { id: 'group', name: 'Group Tours', count: 0 },
    { id: 'family', name: 'Family Tours', count: 0 },
    { id: 'spiritual', name: 'Spiritual Tours', count: 0 },
    { id: 'heritage', name: 'Heritage Tours', count: 0 },
    { id: 'beach', name: 'Beach Holidays', count: 0 },
  ]

  useEffect(() => {
    // Track page view
    trackUserBehavior('page_view', { page: 'packages' })
    
    // Load packages
    const allPackages = getAllPackages()
    setPackages(allPackages)
    setFilteredPackages(allPackages)

    // Update category counts based on actual available packages and their tags
    const availablePackages = allPackages.filter(pkg => pkg.price > 0) // Only count available packages
    
    initialCategories.forEach(category => {
      if (category.id === 'all') {
        category.count = availablePackages.length // 5 available packages
      } else {
        // Count packages that have the category as a tag or primary category
        category.count = availablePackages.filter(pkg => {
          const categoryMap: { [key: string]: string } = {
            'adventure': 'adventure',
            'nature': 'nature', 
            'group': 'group',
            'family': 'family',
            'spiritual': 'spiritual',
            'heritage': 'heritage',
            'beach': 'beach'
          }
          
          const tagToMatch = categoryMap[category.id]
          return pkg.tags.includes(tagToMatch) || pkg.category === category.id
        }).length
      }
    })
    
    // Filter out categories with 0 count
    const filteredCategories = initialCategories.filter(cat => cat.count > 0)
    setCategories(filteredCategories)
  }, [])

  useEffect(() => {
    let filtered = packages.filter(pkg => pkg.price > 0) // Only show available packages

    // Filter by category (using tags)
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(pkg => {
        const categoryMap: { [key: string]: string } = {
          'adventure': 'adventure',
          'nature': 'nature', 
          'group': 'group',
          'family': 'family',
          'spiritual': 'spiritual',
          'heritage': 'heritage',
          'beach': 'beach'
        }
        
        const tagToMatch = categoryMap[selectedCategory]
        return pkg.tags.includes(tagToMatch) || pkg.category === selectedCategory
      })
    }

    // Filter by price range
    if (selectedPriceRanges.length > 0) {
      filtered = filtered.filter(pkg => {
        return selectedPriceRanges.some(range => {
          switch (range) {
            case 'under-10k':
              return pkg.price < 10000 // Mathura (₹5,999)
            case '10k-50k':
              return pkg.price >= 10000 && pkg.price <= 50000 // Kashmir (₹22,500), Darjeeling (₹16,699)
            case '50k-100k':
              return pkg.price >= 50000 && pkg.price <= 100000 // Kerala (₹72,500), Sikkim (₹56,800)
            default:
              return true
          }
        })
      })
    }

    // Filter by duration
    if (selectedDurations.length > 0) {
      filtered = filtered.filter(pkg => {
        const days = parseInt(pkg.duration.split(' ')[0])
        return selectedDurations.some(duration => {
          switch (duration) {
            case '4-7':
              return days >= 4 && days <= 7
            default:
              return true
          }
        })
      })
    }

    // Sort packages
    switch (sortBy) {
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price)
        break
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price)
        break
      case 'duration':
        filtered = [...filtered].sort((a, b) => {
          const aDays = parseInt(a.duration.split(' ')[0])
          const bDays = parseInt(b.duration.split(' ')[0])
          return aDays - bDays
        })
        break
      default:
        // Keep original order for 'popular'
        break
    }

    setFilteredPackages(filtered)
  }, [selectedCategory, sortBy, packages, selectedPriceRanges, selectedDurations])

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId)
    trackUserBehavior('category_click', { category: categoryId })
  }

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
              Explore Our Travel Packages
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed">
              Discover amazing destinations with our carefully curated travel packages designed for every type of traveler
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={handleCategoryChange}
              selectedPriceRanges={selectedPriceRanges}
              onPriceRangeChange={setSelectedPriceRanges}
              selectedDurations={selectedDurations}
              onDurationChange={setSelectedDurations}
            />
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Sort and Results Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  {selectedCategory === 'all' 
                    ? 'All Packages' 
                    : categories.find(cat => cat.id === selectedCategory)?.name
                  }
                </h2>
                <p className="text-gray-600">
                  {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''} found
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="duration">Duration</option>
                </select>
              </div>
            </div>

            {/* Packages Grid */}
            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <PackageCard package={pkg} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No packages found
                </h3>
                <p className="text-gray-600">
                  Try selecting a different category or check back later for new packages.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PackagesPage