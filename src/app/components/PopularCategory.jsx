// import React from 'react';
// import { Book, Laptop, Home, ShoppingBag, Ticket, Coffee } from 'lucide-react';

// const AnimatedBackground = () => (
//   <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
//     <div className="absolute -left-4 top-1/4 w-24 h-24 bg-teal-100 rounded-full mix-blend-multiply animate-float opacity-70"></div>
//     <div className="absolute right-1/4 top-1/3 w-16 h-16 bg-teal-200 rounded-full mix-blend-multiply animate-float-delayed opacity-60"></div>
//     <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-teal-50 rounded-full mix-blend-multiply animate-float-slow opacity-50"></div>
//     <div className="absolute right-10 bottom-1/3 w-12 h-12 bg-teal-100 rounded-full mix-blend-multiply animate-float opacity-40"></div>
//   </div>
// );

// const PopularCategories = () => {
//   const categories = [
//     { name: 'Books & Notes', icon: Book, count: '500+ items', color: 'text-teal-600' },
//     { name: 'Electronics', icon: Laptop, count: '300+ items', color: 'text-teal-500' },
//     { name: 'Furniture', icon: Home, count: '200+ items', color: 'text-teal-600' },
//     { name: 'Events', icon: Ticket, count: '50+ upcoming', color: 'text-teal-500' },
//     { name: 'Accessories', icon: ShoppingBag, count: '400+ items', color: 'text-teal-600' },
//     { name: 'Others', icon: Coffee, count: '100+ items', color: 'text-teal-500' }
//   ];

//   return (
//     <section className="py-12 bg-gradient-to-b from-teal-50/50 to-white relative">
//       <AnimatedBackground />
//       <div className="max-w-6xl mx-auto px-4 relative">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold mb-4 text-teal-900">
//             Popular Categories
//           </h2>
//           <p className="text-teal-600">Discover what other students are buying and selling</p>
//         </div>
        
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
//           {categories.map((category, index) => {
//             const IconComponent = category.icon;
//             return (
//               <div 
//                 key={category.name}
//                 className="group p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-teal-100 hover:border-teal-200 backdrop-blur-sm bg-white/80"
//                 style={{
//                   animationDelay: `${index * 100}ms`,
//                   animation: 'fadeInUp 0.5s ease-out forwards'
//                 }}
//               >
//                 <div className="flex flex-col items-center text-center">
//                   <div className={`p-4 rounded-full bg-teal-50 shadow-sm mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${category.color}`}>
//                     <IconComponent size={24} className="group-hover:animate-pulse" />
//                   </div>
//                   <h3 className="font-semibold mb-2 text-teal-900">{category.name}</h3>
//                   <p className="text-sm text-teal-600">{category.count}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// const style = document.createElement('style');
// style.textContent = `
//   @keyframes fadeInUp {
//     from {
//       opacity: 0;
//       transform: translateY(20px);
//     }
//     to {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
  
//   @keyframes float {
//     0%, 100% { transform: translateY(0); }
//     50% { transform: translateY(-20px); }
//   }
  
//   .animate-float {
//     animation: float 6s ease-in-out infinite;
//   }
  
//   .animate-float-delayed {
//     animation: float 8s ease-in-out 1s infinite;
//   }
  
//   .animate-float-slow {
//     animation: float 10s ease-in-out 2s infinite;
//   }
// `;
// document.head.appendChild(style);

// export default PopularCategories;


import React from 'react';
import { Book, Laptop, Home, ShoppingBag, Ticket, Coffee } from 'lucide-react';

const AnimatedBackground = () => (
  <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="absolute -left-4 top-1/4 w-24 h-24 bg-teal-100 rounded-full mix-blend-multiply animate-float opacity-70"></div>
    <div className="absolute right-1/4 top-1/3 w-16 h-16 bg-teal-200 rounded-full mix-blend-multiply animate-float-delayed opacity-60"></div>
    <div className="absolute left-1/3 bottom-1/4 w-20 h-20 bg-teal-50 rounded-full mix-blend-multiply animate-float-slow opacity-50"></div>
    <div className="absolute right-10 bottom-1/3 w-12 h-12 bg-teal-100 rounded-full mix-blend-multiply animate-float opacity-40"></div>
  </div>
);

const PopularCategories = () => {
  const categories = [
    { name: 'Books & Notes', icon: Book, count: '500+ items', color: 'text-teal-600' },
    { name: 'Electronics', icon: Laptop, count: '300+ items', color: 'text-teal-500' },
    { name: 'Furniture', icon: Home, count: '200+ items', color: 'text-teal-600' },
    { name: 'Events', icon: Ticket, count: '50+ upcoming', color: 'text-teal-500' },
    { name: 'Accessories', icon: ShoppingBag, count: '400+ items', color: 'text-teal-600' },
    { name: 'Others', icon: Coffee, count: '100+ items', color: 'text-teal-500' }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-teal-50/50 to-white relative">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4 text-teal-900">
            Popular Categories
          </h2>
          <p className="text-teal-600">Discover what other students are buying and selling</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.name}
                className="group p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-teal-100 hover:border-teal-200 backdrop-blur-sm bg-white/80 animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`p-4 rounded-full bg-teal-50 shadow-sm mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 ${category.color}`}>
                    <IconComponent size={24} className="group-hover:animate-pulse" />
                  </div>
                  <h3 className="font-semibold mb-2 text-teal-900">{category.name}</h3>
                  <p className="text-sm text-teal-600">{category.count}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
