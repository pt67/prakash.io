import React from 'react';
import { X, MapPin, ExternalLink } from 'lucide-react';
import { VisitedPlace } from '../types';

interface ImageModalProps {
  place: VisitedPlace | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ place, onClose }) => {
  if (!place) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-all duration-200 hover:scale-110"
          aria-label="Close photo preview"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Display */}
        <div className="relative max-h-[70vh] bg-neutral-950 flex items-center justify-center overflow-hidden">
          <img
            src={place.fallbackSrc}
            alt={place.title}
            className="w-full h-auto max-h-[70vh] object-contain"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = place.fallbackSrc;
            }}
          />
        </div>

        {/* Content Details */}
        <div className="p-6 sm:p-8 space-y-3 bg-neutral-900 border-t border-neutral-800">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center space-x-2">
              <MapPin className="w-6 h-6 text-red-500" />
              <span>{place.title}</span>
            </h3>
            {place.region && (
              <span className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-wider border border-red-500/30">
                {place.region}
              </span>
            )}
          </div>

          {place.description && (
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {place.description}
            </p>
          )}

          <div className="pt-2 text-xs text-neutral-500 flex items-center space-x-1">
            <span>Captured during travels in Nepal</span>
          </div>
        </div>
      </div>
    </div>
  );
};
