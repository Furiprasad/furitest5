
import React from "react";
import { Separator } from "@/components/ui/separator";

const AgencyStory = () => {
  const milestones = [
    {
      year: "2015",
      title: "Our Beginning",
      description: "Furi Media was founded with a vision to help small businesses establish their digital presence."
    },
    {
      year: "2017",
      title: "Growing Fast",
      description: "Expanded our team and services, starting to work with medium-sized businesses across multiple industries."
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description: "Adapted to the changing landscape by helping businesses pivot to digital during global challenges."
    },
    {
      year: "2022",
      title: "AI Integration",
      description: "Began incorporating AI technologies into our service offerings to deliver enhanced results."
    },
    {
      year: "2024",
      title: "AI-Powered Future",
      description: "Launched our comprehensive suite of AI-powered marketing solutions to revolutionize digital strategies."
    },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6">Our Journey</h2>
            <p className="text-gray-700 mb-6">
              Founded in 2015, Furi Media Services began with a simple mission: to help businesses establish a meaningful digital presence. What started as a small team with big ideas has grown into a full-service digital marketing agency at the forefront of innovation.
            </p>
            <p className="text-gray-700 mb-6">
              Over our 9-year journey, we've continuously evolved our strategies and services to stay ahead of industry trends. Today, we're proud to combine our years of marketing expertise with cutting-edge AI technology to deliver exceptional results for our clients.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To empower businesses with innovative digital marketing solutions that drive growth, enhance brand visibility, and create meaningful connections with their audiences.
              </p>
              
              <Separator className="my-6 bg-gray-200" />
              
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To be the leading digital marketing agency that seamlessly blends human expertise with AI technology, setting new standards for what marketing can achieve.
              </p>
            </div>
          </div>
          
          <div>
            <div className="relative pl-8 border-l-2 border-primary-800 space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[41px] bg-white p-1 border-2 border-primary-800 rounded-full">
                    <div className="w-6 h-6 bg-primary-800 rounded-full"></div>
                  </div>
                  <div className="pb-6">
                    <span className="text-sm font-semibold text-primary-800 block mb-1">{milestone.year}</span>
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-700">{milestone.description}</p>
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

export default AgencyStory;
