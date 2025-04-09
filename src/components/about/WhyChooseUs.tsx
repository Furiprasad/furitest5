
import React from "react";
import { CheckCircle } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "9 Years of Proven Experience",
      description: "Nearly a decade of successful digital marketing campaigns across diverse industries."
    },
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge AI technology integrated with traditional marketing expertise for superior results."
    },
    {
      title: "Results-Driven Approach",
      description: "Our strategies are designed with clear KPIs and measurable outcomes for your business growth."
    },
    {
      title: "Tailored Strategies",
      description: "Customized marketing plans that align with your specific business goals and target audience."
    },
    {
      title: "Transparent Reporting",
      description: "Regular, detailed reports that keep you informed about your campaign performance."
    },
    {
      title: "Continuous Innovation",
      description: "We constantly evolve our techniques to stay ahead of digital marketing trends."
    }
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="mb-6">Why Choose Us</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Furi Media Services, we combine proven marketing expertise with innovative AI-powered solutions to deliver exceptional results for your business.
            </p>
            
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="text-secondary-800 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-xl font-bold mb-1">{reason.title}</h3>
                    <p className="text-gray-700">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gray-100 rounded-lg p-8 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary-800 mb-2">9+</h3>
                  <p className="text-gray-700">Years of Experience</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-secondary-800 mb-2">100+</h3>
                  <p className="text-gray-700">Clients Served</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-accent-500 mb-2">25+</h3>
                  <p className="text-gray-700">Team Experts</p>
                </div>
                <div className="text-center p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-4xl font-bold text-primary-800 mb-2">500+</h3>
                  <p className="text-gray-700">Successful Projects</p>
                </div>
              </div>
            </div>
            
            <div className="absolute top-6 right-6 w-full h-full bg-primary-100 rounded-lg -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
