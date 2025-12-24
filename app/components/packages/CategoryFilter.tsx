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
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const getCategoryIcon = (categoryId: string) => {
    switch (categoryId) {
      case 'honeymoon':
        return FiHeart
      case 'wedding':
        return FiGift
      case 'family':
        return FiUsers
      case 'group':
        return FiUsers
      case 'educational':
        return FiBookOpen
      case 'international':
        return FiGlobe
      case 'affordable':
        return FiDollarSign
      default:
        return FiGlobe
    }
  }

  const getCategoryColor = (categoryId: string) => {
    switch (categoryId) {
      case 'honeymoon':
        return 'from-pink-500 to-red-500'
      case 'wedding':
        return 'from-purple-500 to-pink-500'
      case 'family':
        return 'from-blue-500 to-cyan-500'
      case 'group':
        return 'from-green-500 to-emerald-500'
      case 'educational':
        return 'from-orange-500 to-yellow-500'
      case 'international':
        return 'from-indigo-500 to-purple-500'
      case 'affordable':
        return 'from-emerald-500 to-green-500'
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
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">Under ₹10,000</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">₹10,000 - ₹50,000</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">₹50,000 - ₹1,00,000</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">Above ₹1,00,000</span>
          </label>
        </div>
      </div>

      {/* Duration Filter */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Duration</h4>
        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">1-3 Days</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">4-7 Days</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 text-primary-600 rounded" />
            <span className="text-gray-700">8+ Days</span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default CategoryFilter