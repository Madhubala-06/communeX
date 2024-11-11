'use client'
import { useState } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TestimonialSection = () => {
  const testimonials = [
    [
      [
        {
          body: "This platform made buying and selling college essentials so easy! I quickly found affordable textbooks and even sold my old furniture.",
          author: {
            name: "Ananya Verma",
            handle: "ananyav95",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "Found the perfect laptop to rent for my project here. The entire process was smooth, and the prices are very student-friendly.",
          author: {
            name: "Rohan Kumar",
            handle: "rohank",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "I organized a study group meet-up using the events feature. It was amazing to see how many students RSVP'd!",
          author: {
            name: "Sofia Lee",
            handle: "sofia_lee",
            imageUrl: "/UserIcon.png",
          },
        },
      ],
      [
        {
          body: "The discussions section helped me find friends in my major! It is now my go-to for staying connected with campus events.",
          author: {
            name: "Michael Green",
            handle: "michaelg",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "I love the renting feature. It is way cheaper to rent equipment here than anywhere else I've found. Highly recommend it!",
          author: {
            name: "Emma Chen",
            handle: "emmac",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "From books to dorm decor, this marketplace has everything! It is super easy to post or find what you need.",
          author: {
            name: "Leo Martinez",
            handle: "leom",
            imageUrl: "/UserIcon.png",
          },
        },
      ],
      [
        {
          body: "I was able to find someone to share an internship drive with through the events section. It is great for networking!",
          author: {
            name: "Priya Shah",
            handle: "priyashah",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "The discussions forum has helped me get insights on upcoming exams and study tips. It is like having a study group at all times!",
          author: {
            name: "James Taylor",
            handle: "jamest",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "The best place for students to buy, sell, or rent things! I managed to find a cheap dorm fridge and even sold my bike.",
          author: {
            name: "Chloe Tan",
            handle: "chloet",
            imageUrl: "/UserIcon.png",
          },
        },
      ],
      [
        {
          body: "This website is super helpful! I was able to find textbooks for my courses at a great price and rent furniture for my dorm easily.",
          author: {
            name: "Alex Johnson",
            handle: "alexj",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "I managed to sell my old laptop within a week! The platform is easy to use, and I was able to connect with other students directly.",
          author: {
            name: "Maya Patel",
            handle: "mayapatel",
            imageUrl: "/UserIcon.png",
          },
        },
        {
          body: "The event posting feature is a game-changer! I was able to organize a study group for finals and get a great turnout thanks to the RSVPs.",
          author: {
            name: "James Lee",
            handle: "jameslee",
            imageUrl: "/UserIcon.png",
          },
        },
      ],
    ],
  ];
  

  const [visibleReviewsCount, setVisibleReviewsCount] = useState(2);

  return (
    <section className="relative isolate pt-5 bg-white">
      <div
        className="absolute inset-x-0 top-56 border border-black left-1/4 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
        aria-hidden="true"
      >
        {/* SVG Blob */}
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            fill="url(#gradient)"
            d="M300,50 C400,150 200,250 300,350 C200,250 100,150 300,50 Z"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: "teal", stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: "yellow", stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:mt-32 lg:px-8">
        <div className="flex items-center justify-center self-center px-4">
          <h3 className="z-50 text-center text-xl font-semibold text-gray-700 sm:text-2xl lg:ml-10 lg:mt-0 lg:text-3xl">
            Don&apos;t Just Take Our Word For It
          </h3>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-sm leading-6 text-gray-700 sm:mt-20 xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {testimonials
            .slice(0, visibleReviewsCount)
            .map((columnGroup, columnGroupIdx) => (
              <article key={columnGroupIdx} className="space-y-8 xl:contents">
                {columnGroup.map((testimonial, columnIdx) => (
                  <div
                    key={columnIdx} // Added key here
                    className={`${
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                      (columnGroupIdx === testimonials.length - 1 &&
                        columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1'
                    } space-y-8`}
                  >
                    {testimonial.map((item, itemIdx) => (
                      <figure key={itemIdx} className="mb-4 rounded-2xl p-6 shadow-lg"> {/* Added key here */}
                        <blockquote className="text-gray-600">
                          <p>{`${item.body}`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <Image
                            className="h-10 w-10 rounded-full bg-gray-50"
                            src={item.author.imageUrl}
                            alt={item.author.name}
                            width={1000}
                            height={1000}
                          />
                          <div>
                            <div className="font-semibold">{item.author.name}</div>
                            <div className="text-gray-600">{`@${item.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </article>
            ))}
        </div>

        {visibleReviewsCount < testimonials.length && (
          <div className="mt-4 text-center">
            <button
              className="rounded bg-blue-500 px-4 py-2 font-medium text-white hover:bg-blue-700"
              onClick={() => setVisibleReviewsCount(testimonials.length)}
            >
              Read More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialSection;
