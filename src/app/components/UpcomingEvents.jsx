import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: "Campus Tech Fest 2024",
      date: "Dec 15",
      location: "Main Auditorium",
      time: "10:00 AM",
      image: "/Events/One.png",
      category: "Technology"
    },
    {
        id: 2,
        title: "Gaming Tournament",
        date: "Dec 22",
        location: "Student Center",
        time: "4:00 PM",
        image: "/Events/Four.jpg",
              category: "Entertainment"
      },
    {
      id: 3,
      title: "Book Exchange Fair",
      date: "Dec 18",
      location: "Library Plaza",
      time: "2:00 PM",
      image: "/Events/Two.jpg",
      category: "Education"
    },
    {
      id: 4,
      title: "Career Workshop",
      date: "Dec 20",
      location: "Room 301",
      time: "11:30 AM",
      image: "/Events/Three.jpg",
            category: "Career"
    }
  
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className=" text-xl md:text-4xl font-bold text-gray-900 mb-4r text-center my-6 mb-11">Upcoming Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="md:col-span-2 lg:col-span-2 relative group">
          <div className="relative overflow-hidden rounded-xl aspect-video">
            <img
              src={events[0].image}
              alt={events[0].title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 w-full">
              <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-3 inline-block">
                {events[0].category}
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">{events[0].title}</h3>
              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center gap-1">
                  <Calendar size={16} />
                  <span>{events[0].date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{events[0].time}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  <span>{events[0].location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {events.slice(1).map((event) => (
          <div key={event.id} className="relative group">
            <div className="relative overflow-hidden rounded-xl aspect-[4/5]">
              <img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mb-3 inline-block">
                  {event.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <div className="flex flex-col gap-2 text-white/90">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;