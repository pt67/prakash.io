import React, { useState } from 'react';
import { Camera, MapPin, Maximize2 } from 'lucide-react';
import { VISITED_PLACES } from '../data/portfolioData';
import { VisitedPlace } from '../types';
import { ImageModal } from './ImageModal';

export const VisitedPlaces: React.FC = () => {
  const [selectedPlace, setSelectedPlace] = useState<VisitedPlace | null>(null);

  return (
    <section id="visited" className="py-24 bg-neutral-950 text-amber-100 px-6 sm:px-12 relative border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-widest border border-amber-500/20">
            <Camera className="w-3.5 h-3.5" />
            <span>Travel Gallery</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            My visited places
          </h2>
          <p className="text-lg text-amber-200/80 font-medium max-w-2xl mx-auto">
            All these following photos are from Different places of Nepal
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto rounded-full" />
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {VISITED_PLACES.map((place) => (
            <div
              key={place.id}
              onClick={() => setSelectedPlace(place)}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden shadow-xl cursor-pointer hover:border-amber-500/50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Image Box */}
              <div className="aspect-square relative bg-neutral-900 overflow-hidden">
                <img
                  src={place.fallbackSrc}
                  alt={place.title}
                  title={place.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-90"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (target.src !== place.fallbackSrc) {
                      target.src = place.fallbackSrc;
                    }
                  }}
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="w-full flex items-center justify-between text-white">
                    <span className="text-xs font-bold uppercase tracking-wider bg-red-600/90 px-2.5 py-1 rounded-md shadow">
                      View Photo
                    </span>
                    <Maximize2 className="w-4 h-4 text-amber-300" />
                  </div>
                </div>
              </div>

              {/* Title Banner */}
              <div className="p-4 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center space-x-1.5 group-hover:text-amber-400 transition-colors">
                  <MapPin className="w-4 h-4 text-red-500" />
                  <span>{place.title}</span>
                </h3>
                <span className="text-xs text-neutral-400 font-medium">Nepal</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
    </section>
  );
};
