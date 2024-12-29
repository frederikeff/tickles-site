// app/events/central-park-walk/page.tsx
import React from 'react';
import { MapPin, Calendar, Users, ExternalLink } from 'lucide-react';

const CentralParkEvent = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-50/30 mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <span className="inline-block text-rose-500 font-medium mb-4">
            Join Our Next Event
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tickles Central Park
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Where Love Blooms in Nature
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/80 rounded-full py-3 px-6 shadow-sm">
              <MapPin className="w-5 h-5 text-rose-500" />
              <span>Central Park, NYC</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/80 rounded-full py-3 px-6 shadow-sm">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span>Every Sunday</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600 bg-white/80 rounded-full py-3 px-6 shadow-sm">
              <Users className="w-5 h-5 text-rose-500" />
              <span>Limited to 20 people</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Next Adventure
            </h3>
            <p className="text-gray-600 mb-8">
              Experience the magic of connecting while exploring the most iconic park in NYC.
            </p>
            <a
              href="https://lu.ma/tickles-central-park"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 text-white rounded-full font-medium hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-transform"
            >
              Reserve Your Spot
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md transform hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Natural Romance</h3>
              <p className="text-gray-600">Experience meaningful connections in the most beautiful setting</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md transform hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Guided Activities</h3>
              <p className="text-gray-600">Fun ice-breakers and engaging group activities</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-md transform hover:-translate-y-1 transition-transform">
              <div className="h-12 w-12 bg-rose-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-rose-500 text-2xl">✨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Real Connections</h3>
              <p className="text-gray-600">Share stories and create memories in a relaxed atmosphere</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CentralParkEvent;