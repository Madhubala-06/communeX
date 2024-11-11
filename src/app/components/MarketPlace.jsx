// import React, { useState, useRef } from 'react';
// import Link from 'next/link';

// const MarketplaceSection = () => {
//   const marketplaceCategories = [
//     {
//       title: "Free Components",
//       description: "Hundreds of component examples for all your website needs that meet accessibility criteria.",
//       count: "78+",
//       preview: <div className="grid grid-cols-3 gap-2">
//         {/* Add small component previews here */}
//       </div>
//     },
//     {


      
//       title: "Universal Framework Compatibility",
//       description: "Fully compatible wherever Tailwind CSS is in action, from React to Vue and beyond.",
//       icon: "💎",
//       logos: ["React", "Vue", "Angular"]
//     },
//     {
//       title: "Unstyled & Accessible Plugins",
//       description: "Seamlessly add unstyled, accessible plugins for functionality without sacrificing design.",
//       icon: "🎨"
//     },
//   ];

//   return (
//     <section className="py-16 container mx-auto px-4">
//       <div className="grid md:grid-cols-3 gap-8">
//         {marketplaceCategories.map((category, index) => (
//           <CategoryCard key={index} category={category} />
//         ))}
//       </div>
//     </section>
//   );
// };

// const CategoryCard = ({ category }) => {
//   const cardRef = useRef(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseMove = (e) => {
//     if (!cardRef.current) return;
//     const rect = cardRef.current.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;
//     setMousePosition({ x, y });
//   };

//   return (
//     <div
//       ref={cardRef}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1"
//     >
//       {/* Cursor following gradient */}
//       <div
//         className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{
//           background: isHovered
//             ? `radial-gradient(circle 100px at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.07), transparent)`
//             : ''
//         }}
//       />

//       {/* Shining border effect */}
//       <div 
//         className="absolute inset-0 rounded-3xl pointer-events-none"
//         style={{
//           background: isHovered ? `
//             linear-gradient(90deg, 
//               transparent 0%, 
//               rgba(99, 102, 241, 0.1) ${(mousePosition.x / cardRef.current?.offsetWidth || 0) * 100}%, 
//               transparent 100%
//             ),
//             linear-gradient(180deg, 
//               transparent 0%, 
//               rgba(99, 102, 241, 0.1) ${(mousePosition.y / cardRef.current?.offsetHeight || 0) * 100}%, 
//               transparent 100%
//             )
//           ` : 'none',
//           opacity: isHovered ? 1 : 0,
//           transition: 'opacity 0.3s ease'
//         }}
//       />

//       <div className="relative z-10">
//         {category.count ? (
//           <>
//             <h2 className="text-6xl font-bold text-indigo-600 mb-4">{category.count}</h2>
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
//           </>
//         ) : (
//           <>
//             {/* Icon container with gradient background */}
//             <div className="inline-block rounded-xl p-3 mb-4 bg-gradient-to-br from-indigo-50 to-indigo-100">
//               <div className="text-2xl">{category.icon}</div>
//             </div>
//             <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
//           </>
//         )}

//         <p className="text-gray-600 mb-4">{category.description}</p>

//         {category.logos && (
//           <div className="mt-8 grid grid-cols-3 gap-4">
//             {category.logos.map((logo, index) => (
//               <div key={index} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
//                 {logo[0]}
//               </div>
//             ))}
//           </div>
//         )}

//         {category.preview && (
//           <div className="mt-8">
//             {category.preview}
//           </div>
//         )}



// <svg xmlns="http://www.w3.org/2000/svg" width="78" height="78" viewBox="0 0 78 78" fill="none"><path d="M12.333.5h54c6.3513.0 11.5 5.14873 11.5 11.5V66C77.833 72.3513 72.6843 77.5 66.333 77.5h-54C5.98173 77.5.833008 72.3513.833008 66V12C.833008 5.64873 5.98173.5 12.333.5z" stroke="url(#paint0_linear_7153_54222)"></path><rect x="21.333" y="21" width="13.5" height="13.5" rx="1" stroke="oklch(var(--p))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="43.833" y="21" width="13.5" height="13.5" rx="1" stroke="oklch(var(--p))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><rect x="21.333" y="43.5" width="13.5" height="13.5" rx="1" stroke="oklch(var(--p))" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></rect><path d="M43.833 51.25h-1c0 .552300000000003.447700000000005 1 1 1v-1zm13.5.0v1C57.8853 52.25 58.333 51.8023 58.333 51.25h-1zm-13.5-2v-1C43.2807 48.25 42.833 48.6977 42.833 49.25h1zm13.5.0h1C58.333 48.6977 57.8853 48.25 57.333 48.25v1zm-7.75-5.75v-1C49.0307 42.5 48.583 42.9477 48.583 43.5h1zm0 13.5h-1C48.583 57.5523 49.0307 58 49.583 58V57zm2-13.5h1C52.583 42.9477 52.1353 42.5 51.583 42.5v1zm0 13.5v1C52.1353 58 52.583 57.5523 52.583 57h-1zm-7.75-4.75h13.5v-2h-13.5v2zm-1-3v2h2v-2h-2zm14.5-1h-13.5v2h13.5v-2zm1 3v-2h-2v2h2zm-9.75-7.75V57h2V43.5h-2zm3-1h-2v2h2v-2zm1 14.5V43.5h-2V57h2zm-3 1h2V56h-2v2z" fill="oklch(var(--p))"></path><defs><linearGradient id="paint0_linear_7153_54222" x1="39.333" y1="1.5" x2="39.333" y2="78" gradientUnits="userSpaceOnUse"><stop offset=".145" stop-color="oklch(var(--s))" stop-opacity="0"></stop><stop offset="1" stop-color="oklch(var(--p))"></stop></linearGradient></defs></svg>

        
//       </div>
//     </div>

//   );
// };

// export default MarketplaceSection;


// from-primary absolute bottom-1 start-0.5 -z-[1] h-0.5 w-full bg-gradient-to-r to-transparent to-80%

// blob bg-primary/70 absolute left-0 top-0 -z-[1] h-[350px] w-[350px] rounded-full blur-2xl



import React, { useState, useRef } from 'react';
import Link from 'next/link';

const MarketplaceSection = () => {
  const marketplaceCategories = [
    {
      title: "Free Components",
      description: "Hundreds of component examples for all your website needs that meet accessibility criteria.",
      count: "78+",
      preview: <div className="grid grid-cols-3 gap-2">
        {/* Add small component previews here */}
      </div>
    },
    {
      title: "Universal Framework Compatibility",
      description: "Fully compatible wherever Tailwind CSS is in action, from React to Vue and beyond.",
      icon: "💎",
      logos: ["React", "Vue", "Angular"]
    },
    {
      title: "Unstyled & Accessible Plugins",
      description: "Seamlessly add unstyled, accessible plugins for functionality without sacrificing design.",
      icon: "🎨"
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        {marketplaceCategories.map((category, index) => (
          <CategoryCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

const CategoryCard = ({ category }) => {
  const cardRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
    >
      {/* Internal blob effect */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(45, 212, 191, 0.15), transparent 100%)`,
          inset: 0,
        }}
      />

      <div className="relative z-10">
        {category.count ? (
          <>
            <h2 className="text-6xl font-bold text-indigo-600 mb-4">{category.count}</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
          </>
        ) : (
          <>
            <div className="inline-block rounded-xl p-3 mb-4 bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="text-2xl">{category.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">{category.title}</h3>
          </>
        )}

        <p className="text-gray-600 mb-4">{category.description}</p>

        {category.logos && (
          <div className="mt-8 grid grid-cols-3 gap-4">
            {category.logos.map((logo, index) => (
              <div key={index} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                {logo[0]}
              </div>
            ))}
          </div>
        )}

        {category.preview && (
          <div className="mt-8">
            {category.preview}
          </div>
        )}
      </div>
    </div>
  );
};

export default MarketplaceSection;