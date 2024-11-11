

'use client'
import React from 'react';
import Image from 'next/image';
import { UserPlus, Search, MessageCircle, Calendar } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description: "Join your college community in seconds with your student email.",
      icon: <UserPlus className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-teal-300 to-cyan-200 hover:from-teal-400 hover:to-cyan-300",
      
    },
    {
      number: "02",
      title: "Browse & List Items",
      description: "Discover essentials or list your items easily.",
      icon: <Search className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-indigo-300 to-blue-200 hover:from-indigo-400 hover:to-blue-300",
    },
    {
      number: "03",
      title: "Connect With Peers",
      description: "Chat securely and build your college network.",
      icon: <MessageCircle className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-purple-300 to-pink-200 hover:from-puple-400 hover:to-pink-300",
    },
    {
      number: "04",
      title: "Join Events",
      description: "Stay updated with campus events and opportunities.",
      icon: <Calendar className="w-5 h-5 text-white" />,
      color: "bg-gradient-to-r from-rose-300 to-orange-200 hover:from-rose-400 hover:to-orange-300",
    }
  ];

  return (
    <section className="pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-4 top-1/4 w-24 h-24 bg-teal-100 rounded-full mix-blend-multiply animate-float opacity-70"></div>
        <div className="absolute right-1/4 top-1/3 w-16 h-16 bg-teal-200 rounded-full mix-blend-multiply animate-float-delayed opacity-60"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className=" text-xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Join your college marketplace in just a few simple steps. Buy, sell, rent, and connect with your college community.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative w-64 md:w-80 h-64 md:h-80">
              <Image
                src="/girl2.png"
                fill
                alt="Student using platform"
                className="object-contain"
              />
              <div className="absolute -top-8 -right-4 md:-right-8 w-16 md:w-20 h-16 md:h-20 animate-bounce">
                <Image
                  src="/question-mark.png"
                  fill
                  alt="Question mark"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="grid gap-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className="transform transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow">
                    <div className={`${step.color} p-3 rounded-xl transition-colors duration-300`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-teal-600 opacity-50">
                          {step.number}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
