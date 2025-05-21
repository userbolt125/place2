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
  }
];