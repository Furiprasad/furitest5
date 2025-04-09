
import React from "react";
import { Linkedin, Twitter } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Morgan",
      position: "Founder & CEO",
      bio: "With over 15 years in digital marketing, Alex founded Furi Media with a vision to help businesses thrive in the digital world.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Sarah Williams",
      position: "AI Solutions Director",
      bio: "Sarah leads our AI initiatives, bringing her expertise in machine learning and marketing automation to deliver innovative solutions.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
    },
    {
      name: "Michael Chen",
      position: "Head of SEO & Content",
      bio: "Michael specializes in creating SEO strategies that combine technical expertise with compelling content to drive organic growth.",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
    },
    {
      name: "Priya Sharma",
      position: "Creative Director",
      bio: "Priya brings brands to life through strategic design thinking and creative execution across digital and traditional channels.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team of digital marketing experts combines years of experience with a passion for innovation and results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md group">
              <div className="relative overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-accent-400 transition-colors p-2 bg-black/20 rounded-full">
                      <Linkedin size={20} />
                    </a>
                    <a href="#" className="text-white hover:text-accent-400 transition-colors p-2 bg-black/20 rounded-full">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-secondary-800 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
