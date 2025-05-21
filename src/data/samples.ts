import { Place, Activity } from '../types';

// Sample Places data
export const samplePlaces: Place[] = [
  {
    id: 'p1',
    name: 'Parc de la Villette',
    description: 'A large urban park with gardens, playgrounds, and cultural venues including the Cité des Sciences et de l\'Industrie and the Philharmonie de Paris.',
    location: {
      continent: 'Europe',
      country: 'France',
      city: 'Paris',
      neighborhood: 'La Villette',
      coordinates: {
        lat: 48.8938,
        lng: 2.3908
      }
    },
    categories: ['Urban', 'Cultural', 'Outdoor'],
    domains: ['Entertainment', 'Education'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Picnic', 'Museum Visits'],
    media: {
      images: ['https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg']
    }
  },
  {
    id: 'p2',
    name: 'Shibuya Crossing',
    description: 'The famous pedestrian crossing outside Shibuya Station in Tokyo, known as one of the busiest pedestrian intersections in the world.',
    location: {
      continent: 'Asia',
      country: 'Japan',
      city: 'Tokyo',
      neighborhood: 'Shibuya',
      coordinates: {
        lat: 35.6594,
        lng: 139.7005
      }
    },
    categories: ['Urban', 'Cultural'],
    domains: ['Entertainment', 'Business'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['People Watching', 'Photography', 'Shopping'],
    media: {
      images: ['https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg']
    }
  },
  {
    id: 'p3',
    name: 'Central Park',
    description: 'An urban park in Manhattan, New York City. It is the most visited urban park in the United States with an estimated 42 million visitors annually.',
    location: {
      continent: 'North America',
      country: 'USA',
      city: 'New York',
      neighborhood: 'Manhattan',
      coordinates: {
        lat: 40.7829,
        lng: -73.9654
      }
    },
    categories: ['Urban', 'Natural'],
    domains: ['Entertainment', 'Health'],
    accessibility: ['Free', 'Wheelchair Accessible'],
    activities: ['Walking', 'Cycling', 'Boating', 'Picnic', 'Ice Skating'],
    media: {
      images: ['https://images.pexels.com/photos/76969/central-park-new-york-panorama-76969.jpeg']
    }
  },
  {
    id: 'p4',
    name: 'Santorini',
    description: 'A stunning Greek island known for its white-washed buildings, blue-domed churches, and spectacular sunsets over the Aegean Sea.',
    location: {
      continent: 'Europe',
      country: 'Greece',
      city: 'Santorini',
      coordinates: {
        lat: 36.3932,
        lng: 25.4615
      }
    },
    categories: ['Island', 'Cultural', 'Romantic'],
    domains: ['Tourism', 'Entertainment'],
    accessibility: ['Paid', 'Limited Accessibility'],
    activities: ['Sightseeing', 'Photography', 'Wine Tasting', 'Swimming'],
    media: {
      images: ['https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg']
    }
  },
  {
    id: 'p5',
    name: 'Machu Picchu',
    description: 'An ancient Incan city set high in the Andes Mountains, featuring spectacular stone architecture and panoramic views.',
    location: {
      continent: 'South America',
      country: 'Peru',
      city: 'Cusco',
      coordinates: {
        lat: -13.1631,
        lng: -72.5450
      }
    },
    categories: ['Historical', 'Cultural', 'Natural'],
    domains: ['Tourism', 'Education'],
    accessibility: ['Paid', 'Guided Tours'],
    activities: ['Hiking', 'Photography', 'Archaeological Tours'],
    media: {
      images: ['https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg']
    }
  },
  {
    id: 'p6',
    name: 'Great Barrier Reef',
    description: 'The world\'s largest coral reef system, home to diverse marine life and offering incredible diving and snorkeling experiences.',
    location: {
      continent: 'Oceania',
      country: 'Australia',
      city: 'Cairns',
      coordinates: {
        lat: -18.2871,
        lng: 147.6992
      }
    },
    categories: ['Natural', 'Marine', 'Adventure'],
    domains: ['Tourism', 'Environment'],
    accessibility: ['Paid', 'Tour Required'],
    activities: ['Diving', 'Snorkeling', 'Boat Tours', 'Marine Life Watching'],
    media: {
      images: ['https://images.pexels.com/photos/1533720/pexels-photo-1533720.jpeg']
    }
  }
];

// Sample Activities data
export const sampleActivities: Activity[] = [
  {
    id: 'a1',
    name: 'Football Match',
    description: 'Watch or play a football (soccer) match with friends or at a local club.',
    context: ['Outdoor', 'Team'],
    classification: {
      level1: 'Sport',
      level2: 'Team Sports',
      level3: 'Football'
    },
    compatiblePlaces: ['Stadium', 'Sport Complex', 'Park'],
    bestTimes: {
      timeOfDay: ['Afternoon', 'Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 90,
      max: 120,
      unit: 'minutes'
    },
    frequency: 'Weekly',
    media: {
      images: ['https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg']
    }
  },
  {
    id: 'a2',
    name: 'Yoga Session',
    description: 'Practice yoga to improve flexibility, strength, and mental well-being.',
    context: ['Indoor', 'Outdoor', 'Online'],
    classification: {
      level1: 'Wellness',
      level2: 'Yoga'
    },
    compatiblePlaces: ['Yoga Studio', 'Gym', 'Park', 'Beach', 'Home'],
    bestTimes: {
      timeOfDay: ['Morning', 'Evening'],
      dayOfWeek: ['All'],
      season: ['All Year']
    },
    duration: {
      min: 45,
      max: 90,
      unit: 'minutes'
    },
    frequency: 'Daily',
    media: {
      images: ['https://images.pexels.com/photos/917732/pexels-photo-917732.jpeg']
    }
  },
  {
    id: 'a3',
    name: 'Museum Visit',
    description: 'Explore art, history, science, or culture at a local or world-renowned museum.',
    context: ['Indoor', 'Cultural'],
    classification: {
      level1: 'Culture',
      level2: 'Art',
      level3: 'Museum'
    },
    compatiblePlaces: ['Museum', 'Art Gallery', 'Cultural Center'],
    bestTimes: {
      timeOfDay: ['Morning', 'Afternoon'],
      dayOfWeek: ['Weekday'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 4,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg']
    }
  },
  {
    id: 'a4',
    name: 'Cooking Class',
    description: 'Learn new culinary skills and recipes from professional chefs in an interactive setting.',
    context: ['Indoor', 'Educational', 'Social'],
    classification: {
      level1: 'Culinary',
      level2: 'Education',
      level3: 'Cooking'
    },
    compatiblePlaces: ['Cooking School', 'Restaurant', 'Community Center'],
    bestTimes: {
      timeOfDay: ['Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 2,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg']
    }
  },
  {
    id: 'a5',
    name: 'Rock Climbing',
    description: 'Challenge yourself with indoor or outdoor rock climbing, suitable for all skill levels.',
    context: ['Indoor', 'Outdoor', 'Adventure'],
    classification: {
      level1: 'Sport',
      level2: 'Climbing',
      level3: 'Rock Climbing'
    },
    compatiblePlaces: ['Climbing Gym', 'Natural Cliffs', 'Indoor Wall'],
    bestTimes: {
      timeOfDay: ['Any'],
      dayOfWeek: ['Any'],
      season: ['All Year']
    },
    duration: {
      min: 1,
      max: 3,
      unit: 'hours'
    },
    frequency: 'Weekly',
    media: {
      images: ['https://images.pexels.com/photos/1822458/pexels-photo-1822458.jpeg']
    }
  },
  {
    id: 'a6',
    name: 'Photography Workshop',
    description: 'Learn photography techniques and improve your skills with hands-on instruction.',
    context: ['Indoor', 'Outdoor', 'Educational'],
    classification: {
      level1: 'Art',
      level2: 'Photography',
      level3: 'Workshop'
    },
    compatiblePlaces: ['Studio', 'Urban Areas', 'Nature'],
    bestTimes: {
      timeOfDay: ['Morning', 'Evening'],
      dayOfWeek: ['Weekend'],
      season: ['All Year']
    },
    duration: {
      min: 3,
      max: 6,
      unit: 'hours'
    },
    frequency: 'Monthly',
    media: {
      images: ['https://images.pexels.com/photos/1793525/pexels-photo-1793525.jpeg']
    }
  }
];