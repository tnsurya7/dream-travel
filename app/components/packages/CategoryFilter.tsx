'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiUsers, FiGlobe, FiDollarSign, FiBookOpen, FiGift } from 'react-icons/fi'

interface Category {
  id: string
  name: string
  count: number
}

interface CategoryFilterProps {
  categories: Category[]
  selectedCategory: string
  onCategoryChange: (categoryId: string) => void
  selectedPriceRanges: string[]
  onPriceRangeChange: (ranges: string[]) => void
  selectedDurations: string[]
  onDurationChange: (durations: string[]) => void
}

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange,
  selectedPriceRanges,
  onPriceRangeChange,
  selectedDurations,
  onDurationChange
}: CategoryFilterProps) => {
  const handlePriceRangeChange = (range: string, checked: boolean) => {
    if (checked) {
      onPriceRangeChange([...selectedPriceRanges, range])
    } else {
      onPriceRangeChange(selectedPriceRanges.filter(r => r !== range))
    }
  }

  const handleDurationChange = (duration: string, checked: boolean) => {
    if (checked) {
      onDurationChange([...selectedDurations, duration])
    } else {
      onDurationChange(selectedDurations.filter(d => d !== duration))
    }
  }

  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'adventure':
        return FiGlobe
      case 'nature':
        return FiUsers
      case 'group':
        return FiUsers
      case 'family':
        return FiUsers
      case 'spiritual':
        return FiBookOpen
      case 'heritage':
        return FiGift
      case 'beach':
        return FiHeart
      default:
        return FiGlobe
    }
  }

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'adventure':
        return 'from-orange-500 to-red-500'
      case 'nature':
        return 'from-green-500 to-emerald-500'
      case 'group':
        return 'from-blue-500 to-cyan-500'
      case 'family':
        return 'from-purple-500 to-pink-500'
      case 'spiritual':
        return 'from-yellow-500 to-orange-500'
      case 'heritage':
        return 'from-amber-500 to-yellow-500'
      case 'beach':
        return 'from-cyan-500 to-blue-500'
      default:
        return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Filter by Category</h3>
      
      <div className="space-y-3">
        {categories.map((category, index) => {
          const Icon = getCategoryIcon(category.id)
          const isSelected = selectedCategory === category.id
          
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              onClick={() => onCategoryChange(category.id)}
              className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                isSelected
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 hover:shadow-md'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isSelected
                    ? 'bg-white/20'
                    : `bg-gradient-to-r ${getCategoryColor(category.id)}`
                }`}>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-white'}`} />
                </div>
                <div className="text-left">
                  <div className={`font-medium ${isSelected ? 'text-white' : 'text-gray-800'}`}>
                    {category.name}
                  </div>
                </div>
              </div>
              
              <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                isSelected
                  ? 'bg-white/20 text-white'
                  : 'bg-primary-100 text-primary-600'
              }`}>
                {category.count}
              </div>
            </motion.button>
          )
        })}
      </div>

      {/* Price Range Filter */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Price Range</h4>
        <div className="space-y-3">
          <label className="flex items-center justify-between space-x-3 cursor-pointer">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-primary-600 rounded"
                checked={selectedPriceRanges.includes('under-10k')}
                onChange={(e) => handlePriceRangeChange('under-10k', e.target.checked)}
              />
              <span className="text-gray-700">Under ₹10,000</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">1</span>
          </label>
          <label className="flex items-center justify-between space-x-3 cursor-pointer">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-primary-600 rounded"
                checked={selectedPriceRanges.includes('10k-50k')}
                onChange={(e) => handlePriceRangeChange('10k-50k', e.target.checked)}
              />
              <span className="text-gray-700">₹10,000 - ₹50,000</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2</span>
          </label>
          <label className="flex items-center justify-between space-x-3 cursor-pointer">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-primary-600 rounded"
                checked={selectedPriceRanges.includes('50k-100k')}
                onChange={(e) => handlePriceRangeChange('50k-100k', e.target.checked)}
              />
              <span className="text-gray-700">₹50,000 - ₹1,00,000</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">2</span>
          </label>
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Duration</h4>
        <div className="space-y-3">
          <label className="flex items-center justify-between space-x-3 cursor-pointer">
            <div className="flex items-center space-x-3">
              <input 
                type="checkbox" 
                className="w-4 h-4 text-primary-600 rounded"
                checked={selectedDurations.includes('4-7')}
                onChange={(e) => handleDurationChange('4-7', e.target.checked)}
              />
              <span className="text-gray-700">4-7 Days</span>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">5</span>
          </label>
        </div>
      </div>

      {/* Clear Filters Button */}
      {(selectedPriceRanges.length > 0 || selectedDurations.length > 0) && (
        <div className="mt-8 pt-6 border-t border-gray-200">
          <button
            onClick={() => {
              onPriceRangeChange([])
              onDurationChange([])
            }}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default CategoryFilter