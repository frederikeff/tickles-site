import React from 'react';
import NewsletterSignup from '@/components/NewsletterSignup';
import { MapPin, Calendar, Users } from 'lucide-react';

const ChelseaWalk = () => {
  return (
    // Changed the padding-top to mt-24 for more space and added relative positioning
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white mt-24">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Tickles Chelsea Walk
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Meet your next love doing what you love
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5 text-rose-500" />
              <span>Chelsea, NYC</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Calendar className="w-5 h-5 text-rose-500" />
              <span>Every Saturday</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Users className="w-5 h-5 text-rose-500" />
              <span>Limited to 20 people</span>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-12">
            <NewsletterSignup 
              signupType="EVENTS"
              buttonText="Take part"
              description="Join us for a guided walk through Chelsea's most charming spots"
              className="bg-white/50 p-6 rounded-xl"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Natural Connections</h3>
              <p className="text-gray-600">Meet like-minded people in a relaxed, authentic setting</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Guided Experience</h3>
              <p className="text-gray-600">Professional facilitators to help break the ice</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Genuine Matches</h3>
              <p className="text-gray-600">Connect over shared interests and authentic conversations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChelseaWalk;