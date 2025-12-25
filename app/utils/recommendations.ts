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
  destinations?: string[]
  highlights?: string[]
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

// Sample packages data - REAL PACKAGES ONLY
const samplePackages: Package[] = [
  {
    id: '1',
    title: 'Kashmir Tour Package',
    category: 'adventure',
    price: 22500,
    duration: '5 Nights 6 Days',
    image: '/KASHMIR TOUR PACKAGE.png',
    description: 'Enjoy scenic valleys, houseboat stay, and snow-covered mountains in Kashmir with complete sightseeing and adventure activities.',
    budget: 'affordable',
    tags: ['adventure', 'nature', 'family', 'budget'],
    destinations: ['Srinagar', 'Dal Lake', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Doodhpathri'],
    highlights: ['Deluxe Houseboat stay', '3★ Hotels', 'Shikara Ride', 'Snow valleys & mountains']
  },
  {
    id: '2',
    title: 'Kerala Holiday Package',
    category: 'nature',
    price: 72500,
    duration: '6 Nights 7 Days',
    image: '/KERALA HOLIDAY PACKAGE.png',
    description: 'Discover Kerala backwaters, pristine beaches, and lush hill stations with luxury houseboat experience and nature exploration.',
    budget: 'premium',
    tags: ['beach', 'nature', 'family', 'premium'],
    destinations: ['Kochi', 'Munnar', 'Thekkady', 'Alleppey', 'Kovalam', 'Trivandrum'],
    highlights: ['3★ Premium Hotels', 'Luxury Houseboat', 'Backwaters & beaches', 'Nature experience']
  },
  {
    id: '3',
    title: 'Sikkim Group Departure',
    category: 'group',
    price: 56800,
    duration: '6 Nights 7 Days',
    image: '/ SIKKIM GROUP DEPARTURE.png',
    description: 'Join our fixed departure group tour to Sikkim covering Gangtok, Pelling, and Darjeeling with premium accommodations and complete sightseeing.',
    budget: 'premium',
    tags: ['group', 'nature', 'premium'],
    destinations: ['Gangtok', 'Pelling', 'Darjeeling'],
    highlights: ['Group tour', 'Premium hotels', 'Major sightseeing', 'Fixed departure: 23 March 2026']
  },
  {
    id: '4',
    title: 'Winter Special - Gangtok & Darjeeling',
    category: 'family',
    price: 16699,
    duration: '4 Nights 5 Days',
    image: '/GANGTOK & DARJEELING WINTER SPECIAL.png',
    description: 'Experience winter snow activities in the beautiful hill stations of Gangtok and Darjeeling with comfortable accommodations and scenic views.',
    budget: 'affordable',
    tags: ['adventure', 'nature', 'budget', 'family'],
    destinations: ['Gangtok', 'Darjeeling'],
    highlights: ['Winter snow experience', '3★ hotels', 'Sightseeing', 'Family friendly']
  },
  {
    id: '5',
    title: 'Mathura - Vrindavan Tour',
    category: 'spiritual',
    price: 5999,
    duration: '3 Nights 4 Days',
    image: '/MATHURA.png',
    description: 'Embark on a spiritual journey to the holy cities of Mathura and Vrindavan with complete darshan experience and comfortable accommodations.',
    budget: 'affordable',
    tags: ['spiritual', 'heritage', 'budget'],
    destinations: ['Mathura', 'Vrindavan', 'Raman Reti', 'Nand Gaon', 'Janmabhoomi'],
    highlights: ['Spiritual tour', 'Hotel + transport + sightseeing', 'Complete darshan', 'Pilgrimage experience']
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
      if (data.category === 'adventure') {
        userBehavior.interests.push('adventure', 'mountains')
      } else if (data.category === 'nature') {
        userBehavior.interests.push('nature', 'wildlife')
      } else if (data.category === 'family') {
        userBehavior.interests.push('family-friendly', 'safe')
      } else if (data.category === 'spiritual') {
        userBehavior.interests.push('spiritual', 'religious')
      } else if (data.category === 'group') {
        userBehavior.interests.push('group', 'social')
      } else if (data.category === 'heritage') {
        userBehavior.interests.push('heritage', 'culture')
      } else if (data.category === 'beach') {
        userBehavior.interests.push('beach', 'relaxation')
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
    const adventureClicks = userBehavior.categoryClicks.filter(cat => 
      cat === 'adventure'
    ).length
    if (adventureClicks > 0 && pkg.category === 'adventure') {
      score += 15
    }
    
    // Nature preference
    const natureClicks = userBehavior.categoryClicks.filter(cat => 
      cat === 'nature'
    ).length
    if (natureClicks > 0 && pkg.category === 'nature') {
      score += 15
    }
    
    // Spiritual preference
    const spiritualClicks = userBehavior.categoryClicks.filter(cat => 
      cat === 'spiritual'
    ).length
    if (spiritualClicks > 0 && pkg.category === 'spiritual') {
      score += 15
    }
    
    // International preference
    const premiumInterest = userBehavior.interests.includes('adventure') || 
                           userBehavior.interests.includes('premium') ||
                           userBehavior.interests.includes('heritage')
    if (premiumInterest && (pkg.category === 'heritage' || pkg.budget === 'premium')) {
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
      samplePackages[0], // Adventure (Kashmir)
      samplePackages[1], // Nature (Kerala)
      samplePackages[3], // Family (Darjeeling)
      samplePackages[4]  // Spiritual (Mathura)
    ].filter(pkg => pkg.price > 0) // Only show available packages
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