'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import { 
  FaSearch, 
  FaBook,
  FaLaptop,
  FaHome,
  FaRocket,
  FaLightbulb,
  FaCode,
} from "react-icons/fa";

import FeatureSection from './components/Feature';
import HowItWorksSection from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import PopularCategories from './components/PopularCategory';
import Footer from './components/Footer';
import Header from './components/Header';
import UpcomingEvents from './components/UpcomingEvents';
export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    setIsVisible(true); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const colors = {
    primary: '#0f766e',
    primaryLight: '#14b8a6',
    primaryDark: '#0d9488',
    background: '#f0fdfa',
    text: '#134e4a',
    gradient: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'
  };

      const marketplaceCategories = [
      {
        icon: FaBook,
        title: "Textbooks",
        description: "Buy, sell, and rent academic books",
        color: colors.primary
      },
      {
        icon: FaLaptop,
        title: "Electronics",
        description: "Laptops, accessories, and gadgets",
        color: colors.primaryLight
      },
      {
        icon: FaHome,
        title: "Dorm Essentials",
        description: "Furniture and home items",
        color: colors.primaryDark
      }
    ];

       const upcomingEvents = [
            {
              title: "Tech Career Fair",
              date: "March 15, 2024",
              location: "University Campus",
              icon: FaRocket
            },
            {
              title: "Startup Pitch Competition",
              date: "April 5, 2024",
              location: "Innovation Center",
              icon: FaLightbulb
            },
            {
              title: "Coding Workshop",
              date: "April 20, 2024",
              location: "Computer Science Department",
              icon: FaCode
            }
          ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-teal-100 font-sans text-gray-800">
    

      <Header/>

      {/* Hero Section with CSS Animations */}
      <section className={`relative pt-36 pb-16 container mx-auto px-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-teal-100/50 to-teal-200/50 opacity-20 rounded-3xl" />
        <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-12 text-center overflow-hidden">
          {/* Animated background shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-teal-200/20 to-transparent rounded-full animate-spin-slow" />
          </div>

          <h2 className="text-6xl font-extrabold mt-8 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-teal-800 animate-fade-in">
            Connect, Collaborate, Grow
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-slide-up">
            Your comprehensive platform for campus networking, marketplace, and community engagement
          </p>

          {/* Enhanced Search Bar */}
          <div className="relative max-w-4xl mx-auto group">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full blur-lg opacity-20 transition-opacity duration-300 group-hover:opacity-30" />
            <div className="relative flex items-center bg-white rounded-full shadow-2xl border border-teal-100 transition-transform duration-300 hover:scale-[1.02]">
              <FaSearch className="ml-6 text-teal-600" />
              <input
                type="text"
                placeholder="Search marketplace, events, discussions..."
                className="w-full p-4 pl-4 bg-transparent rounded-full focus:outline-none transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                className="m-2 px-6 py-3 text-white rounded-full bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection></FeatureSection>

    
      <HowItWorksSection/>

      <PopularCategories/>



<UpcomingEvents/>

 <Testimonial/>


 <Footer/>


      <style jsx global>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out forwards;
          animation-delay: 0.2s;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}



