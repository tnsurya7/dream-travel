'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FiCheck, FiX } from 'react-icons/fi'
import { useEffect } from 'react'

interface SuccessNotificationProps {
  show: boolean
  message: string
  onClose: () => void
  type?: 'success' | 'error'
}

const SuccessNotification = ({ show, message, onClose, type = 'success' }: SuccessNotificationProps) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose()
      }, 5000) // Auto close after 5 seconds
      
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-4 right-4 z-50 max-w-sm w-full"
        >
          <div className={`rounded-lg shadow-lg p-4 flex items-center space-x-3 ${
            type === 'success' 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              type === 'success' 
                ? 'bg-green-600' 
                : 'bg-red-600'
            }`}>
              <FiCheck className="w-5 h-5" />
            </div>
            
            <div className="flex-1">
              <p className="font-medium text-sm">{message}</p>
            </div>
            
            <button
              onClick={onClose}
              className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default SuccessNotification