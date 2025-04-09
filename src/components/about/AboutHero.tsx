
import React from "react";

const AboutHero = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Story</h1>
          <p className="text-xl text-gray-700 mb-8">
            From our humble beginnings to becoming a leader in AI-powered digital marketing, 
            we've been empowering businesses to achieve digital excellence for over 9 years.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
