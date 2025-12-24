'use client'

import { useEffect, useState } from 'react'
import Hero from './components/home/Hero'
import FeaturedPackages from './components/home/FeaturedPackages'
import WhyChooseUs from './components/home/WhyChooseUs'
import Testimonials from './components/home/Testimonials'
import RecommendedPackages from './components/home/RecommendedPackages'
import { trackUserBehavior, getUserRecommendations } from './utils/recommendations'

export default function Home() {
  const [recommendations, setRecommendations] = useState<any[]>([])

  useEffect(() => {
    // Track page view
    trackUserBehavior('page_view', { page: 'home' })

    // Get recommendations after a short delay
    setTimeout(() => {
      const recs = getUserRecommendations()
      setRecommendations(recs)
    }, 2000)
  }, [])

  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      {recommendations.length > 0 && (
        <RecommendedPackages packages={recommendations} />
      )}
      <Testimonials />
    </div>
  )
}