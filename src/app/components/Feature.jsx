import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Calendar, MessageSquare } from 'lucide-react';
import Modal from './UnderConstruction';
const BlobBackground = ({ color, children }) => (
  <div className="relative">
    <div 
      className="absolute inset-0 rotate-45 transform -translate-x-1 -translate-y-1 opacity-20"
      style={{ 
        backgroundColor: color,
        borderRadius: '42% 56% 72% 28% / 42% 42% 56% 48%'
      }}
    />
    <div className="relative z-10 w-16 h-16 flex items-center justify-center">
      {children}
    </div>
  </div>
);

const FeatureSection = () => {


  const [isOpenModal , setIsOpenModal] = useState(false)
  const marketplaceFeatures = [
    {
      title: "Student Marketplace",
      description: "Buy, sell, rent, or share college essentials like books, electronics, and furniture with fellow students in your campus community.",
      color: "#6366F1", 
      icon: ShoppingBag
    },
    {
      title: "Events & Walk-In Drives",
      description: "Stay updated with campus events, job fairs, and walk-in drives. Create and share your own events with the student community.",
      color: "#EC4899", 
      icon: Calendar
    },
    {
      title: "Discussion Forums",
      description: "Engage in student discussions, create polls, and share valuable insights about campus life, courses, and opportunities.",
      color: "#2DD4BF", 
      icon: MessageSquare
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Campus Connect Hub
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your all-in-one platform for campus commerce, events, and community discussions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {marketplaceFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center p-6"
            >
              <BlobBackground color={feature.color}>
                <feature.icon 
                  className="w-8 h-8" 
                  style={{ color: feature.color }} 
                />
              </BlobBackground>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 mb-6">
                {feature.description}
              </p>
              
              <button 
                className="px-6 py-2 rounded-full transition-all hover:opacity-80"
                style={{
                  color: feature.color,
                  backgroundColor: `${feature.color}20`
                }}
                onClick={ ()=>setIsOpenModal(true)}
              >
                Explore Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {isOpenModal &&(



  <Modal isOpen={isOpenModal} setIsOpen={setIsOpenModal} />


)}
    </div>

   
  );
};

export default FeatureSection;