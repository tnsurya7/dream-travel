// Client-side recommendation system (no database storage)
interface UserBehavior {
  pageViews: string[]
  categoryClicks: string[]
  packageViews: string[]
  scrollDepth: { [key: string]: number }
  timeSpent: { [key: string]: number }
  interests: string[]
}

interface Package {
  id: string
  title: string
  category: string
  price: number
  duration: string
  image: string
  description: string
  budget: 'affordable' | 'premium'
  tags: string[]
}

// Session storage for user behavior (resets on browser close)
let userBehavior: UserBehavior = {
  pageViews: [],
  categoryClicks: [],
  packageViews: [],
  scrollDepth: {},
  timeSpent: {},
  interests: []
}

// Sample packages data
const samplePackages: Package[] = [
  {
    id: '1',
    title: 'Romantic Goa Honeymoon',
    category: 'honeymoon',
    price: 25000,
    duration: '4 Days 3 Nights',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Perfect romantic getaway with beach resorts and candlelight dinners',
    budget: 'affordable',
    tags: ['beach', 'romantic', 'couple', 'sunset']
  },
  {
    id: '2',
    title: 'Kerala Backwaters Family Tour',
    category: 'family',
    price: 35000,
    duration: '5 Days 4 Nights',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Explore the serene backwaters with houseboat stays',
    budget: 'premium',
    tags: ['nature', 'family', 'houseboat', 'peaceful']
  },
  {
    id: '3',
    title: 'Rajasthan Heritage Wedding Tour',
    category: 'wedding',
    price: 150000,
    duration: '7 Days 6 Nights',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Royal wedding experience in majestic palaces',
    budget: 'premium',
    tags: ['wedding', 'royal', 'heritage', 'luxury']
  },
  {
    id: '4',
    title: 'Budget Delhi-Agra Tour',
    category: 'educational',
    price: 8000,
    duration: '3 Days 2 Nights',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Explore historical monuments and Mughal architecture',
    budget: 'affordable',
    tags: ['history', 'monuments', 'budget', 'educational']
  },
  {
    id: '5',
    title: 'Switzerland Alps Adventure',
    category: 'international',
    price: 180000,
    duration: '8 Days 7 Nights',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Experience the breathtaking Swiss Alps and pristine lakes',
    budget: 'premium',
    tags: ['mountains', 'adventure', 'international', 'scenic']
  },
  {
    id: '6',
    title: 'Group Manali Adventure',
    category: 'group',
    price: 15000,
    duration: '4 Days 3 Nights',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
    description: 'Thrilling group adventure in the Himalayas',
    budget: 'affordable',
    tags: ['adventure', 'group', 'mountains', 'trekking']
  }
]

// Track user behavior
export const trackUserBehavior = (action: string, data: any) => {
  const timestamp = Date.now()
  
  switch (action) {
    case 'page_view':
      userBehavior.pageViews.push(data.page)
      userBehavior.timeSpent[data.page] = timestamp
      break
      
    case 'category_click':
      userBehavior.categoryClicks.push(data.category)
      // Infer interests from category clicks
      if (data.category === 'honeymoon') {
        userBehavior.interests.push('romantic', 'couple')
      } else if (data.category === 'family') {
        userBehavior.interests.push('family-friendly', 'safe')
      } else if (data.category === 'budget') {
        userBehavior.interests.push('affordable', 'budget')
      } else if (data.category === 'international') {
        userBehavior.interests.push('adventure', 'premium')
      }
      break
      
    case 'package_view':
      userBehavior.packageViews.push(data.packageId)
      break
      
    case 'scroll_depth':
      userBehavior.scrollDepth[data.page] = Math.max(
        userBehavior.scrollDepth[data.page] || 0,
        data.depth
      )
      break
      
    case 'time_spent':
      if (userBehavior.timeSpent[data.page]) {
        const timeSpent = timestamp - userBehavior.timeSpent[data.page]
        userBehavior.timeSpent[data.page] = timeSpent
      }
      break
  }
}

// Get personalized recommendations
export const getUserRecommendations = (): Package[] => {
  const recommendations: Package[] = []
  const maxRecommendations = 4
  
  // Score packages based on user behavior
  const packageScores = samplePackages.map(pkg => {
    let score = 0
    
    // Category preference scoring
    const categoryCount = userBehavior.categoryClicks.filter(cat => cat === pkg.category).length
    score += categoryCount * 10
    
    // Interest matching
    const matchingInterests = pkg.tags.filter(tag => 
      userBehavior.interests.includes(tag)
    ).length
    score += matchingInterests * 5
    
    // Budget preference (infer from previous views)
    const budgetClicks = userBehavior.categoryClicks.filter(cat => 
      cat.includes('budget') || cat.includes('affordable')
    ).length
    if (budgetClicks > 0 && pkg.budget === 'affordable') {
      score += 8
    }
    
    // Honeymoon preference
    const honeymoonClicks = userBehavior.categoryClicks.filter(cat => 
      cat === 'honeymoon'
    ).length
    if (honeymoonClicks > 0 && pkg.category === 'honeymoon') {
      score += 15
    }
    
    // International preference
    const internationalInterest = userBehavior.interests.includes('adventure') || 
                                 userBehavior.interests.includes('premium')
    if (internationalInterest && pkg.category === 'international') {
      score += 12
    }
    
    return { package: pkg, score }
  })
  
  // Sort by score and return top recommendations
  const sortedPackages = packageScores
    .sort((a, b) => b.score - a.score)
    .slice(0, maxRecommendations)
    .map(item => item.package)
  
  // If no strong preferences, return diverse selection
  if (sortedPackages.every(pkg => packageScores.find(p => p.package.id === pkg.id)?.score === 0)) {
    return [
      samplePackages[0], // Honeymoon
      samplePackages[1], // Family
      samplePackages[3], // Budget
      samplePackages[4]  // International
    ]
  }
  
  return sortedPackages
}

// Get all packages for packages page
export const getAllPackages = (): Package[] => {
  return samplePackages
}

// Get packages by category
export const getPackagesByCategory = (category: string): Package[] => {
  return samplePackages.filter(pkg => pkg.category === category)
}

// Get package by ID
export const getPackageById = (id: string): Package | undefined => {
  return samplePackages.find(pkg => pkg.id === id)
}

// Get similar packages
export const getSimilarPackages = (packageId: string, limit: number = 3): Package[] => {
  const currentPackage = getPackageById(packageId)
  if (!currentPackage) return []
  
  return samplePackages
    .filter(pkg => pkg.id !== packageId)
    .filter(pkg => 
      pkg.category === currentPackage.category || 
      pkg.budget === currentPackage.budget ||
      pkg.tags.some(tag => currentPackage.tags.includes(tag))
    )
    .slice(0, limit)
}

// Reset user behavior (for testing)
export const resetUserBehavior = () => {
  userBehavior = {
    pageViews: [],
    categoryClicks: [],
    packageViews: [],
    scrollDepth: {},
    timeSpent: {},
    interests: []
  }
}

// Get current user behavior (for debugging)
export const getUserBehavior = () => {
  return userBehavior
}