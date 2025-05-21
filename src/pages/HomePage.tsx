import React, { useState } from 'react';
import { MapPin, Activity } from 'lucide-react';
import { ExplorationMode } from '../types';
import { samplePlaces, sampleActivities } from '../data/samples';

const HomePage: React.FC = () => {
  const [mode, setMode] = useState<ExplorationMode>('place');

  return (
    <div className="flex flex-col">
      {/* Mode Selection */}
      <div className="container mx-auto px-4 py-6 flex justify-center space-x-4">
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'place' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('place')}
        >
          <MapPin size={20} className="mr-2" />
          <span>Explore Places</span>
        </button>
        <button 
          className={`flex items-center px-6 py-3 rounded-md transition-colors ${
            mode === 'activity' 
              ? 'bg-blue-600 text-white' 
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
          onClick={() => setMode('activity')}
        >
          <Activity size={20} className="mr-2" />
          <span>Find Activities</span>
        </button>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">
          {mode === 'place' ? 'Featured Places' : 'Featured Activities'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mode === 'place' ? (
            // Places Grid
            samplePlaces.map(place => (
              <div key={place.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={place.media?.images[0]}
                    alt={place.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{place.name}</h3>
                    <p className="text-white/90 text-sm">
                      {place.location.city}, {place.location.country}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-slate-600 text-sm mb-3">
                    {place.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {place.categories.map((category, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Activities Grid
            sampleActivities.map(activity => (
              <div key={activity.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={activity.media?.images[0]}
                    alt={activity.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-semibold text-lg">{activity.name}</h3>
                    <p className="text-white/90 text-sm">
                      {activity.classification.level1}
                      {activity.classification.level2 && ` > ${activity.classification.level2}`}
                    </p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-slate-600 text-sm mb-3">
                    {activity.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {activity.context.map((ctx, index) => (
                      <span 
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-teal-100 text-teal-800"
                      >
                        {ctx}
                      </span>
                    ))}
                  </div>
                  <div className="text-sm text-slate-500">
                    <p>Duration: {activity.duration?.min}-{activity.duration?.max} {activity.duration?.unit}</p>
                    <p>Frequency: {activity.frequency}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;