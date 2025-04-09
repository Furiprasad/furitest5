
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  type: "ai" | "traditional";
};

const ServiceCard = ({ title, description, icon, type }: ServiceCardProps) => {
  return (
    <div 
      className={`
        ${type === "ai" ? "ai-service-card" : "traditional-service-card"}
        flex flex-col items-center text-center group
      `}
    >
      <div className={`
        p-4 rounded-full mb-5 
        ${type === "ai" ? "bg-secondary-100 text-secondary-800" : "bg-primary-100 text-primary-800"}
      `}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link 
        to="/services" 
        className={`
          mt-auto inline-flex items-center text-sm font-medium
          ${type === "ai" ? "text-secondary-800" : "text-primary-800"}
        `}
      >
        Learn More <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

const ServicesOverview = () => {
  const aiServices = [
    {
      title: "Website Automation",
      description: "Streamline your website operations with our AI-powered automation solutions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
      )
    },
    {
      title: "AI-Powered SEO",
      description: "Leverage the power of AI to optimize your search engine rankings and visibility.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      )
    },
    {
      title: "AI Chatbots",
      description: "Enhance customer experience with intelligent chatbots that learn and improve over time.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3a1 1 0 0 1 1 1"></path><path d="M9 3a1 1 0 0 0-1 1"></path><path d="M14 21a1 1 0 0 0 1-1"></path><path d="M9 21a1 1 0 0 1-1-1"></path><path d="M8 5a2 2 0 0 0-2 2"></path><path d="M16 5a2 2 0 0 1 2 2"></path><path d="M3 11h18"></path><path d="M6 13v.01"></path><path d="M10 13v.01"></path><path d="M14 13v.01"></path><path d="M18 13v.01"></path><path d="M10 17v.01"></path><path d="M14 17v.01"></path><path d="M8 19a2 2 0 0 1-2-2"></path><path d="M16 19a2 2 0 0 0 2-2"></path><rect width="16" height="16" x="4" y="4" rx="2"></rect></svg>
      )
    },
    {
      title: "AI Content Creation",
      description: "Create engaging, SEO-optimized content using advanced AI writing assistants.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10v6"></path><path d="M9 13h6"></path><circle cx="12" cy="6" r="1"></circle><path d="M5 10v6"></path><path d="M19 10v6"></path><path d="M5 16c0 3 7 3 7 0"></path><path d="M19 16c0 3-7 3-7 0"></path><path d="M5 10c0-3 7-3 7 0"></path><path d="M19 10c0-3-7-3-7 0"></path></svg>
      )
    },
    {
      title: "WhatsApp Automation",
      description: "Automate your WhatsApp marketing with AI-driven campaigns and customer service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z"></path><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M10 22v-2"></path><path d="M14 22v-2"></path><path d="M6 10h12"></path><path d="M6 14h12"></path></svg>
      )
    }
  ];

  const traditionalServices = [
    {
      title: "Branding",
      description: "Develop a strong brand identity that resonates with your target audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
      )
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience with strategic social media campaigns that drive results.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a10 10 0 0 1-3.46 0"></path></svg>
      )
    },
    {
      title: "Google Adwords",
      description: "Maximize your ROI with targeted Google Ads campaigns managed by our experts.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"></path><path d="m2 2 20 20"></path><path d="M22 2 2 22"></path></svg>
      )
    },
    {
      title: "Search Engine Marketing",
      description: "Improve visibility and drive high-quality traffic with comprehensive SEM strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 19V5l-6-4-6 4v14l6-4 6 4Z"></path></svg>
      )
    },
    {
      title: "Email Automation",
      description: "Nurture leads and drive conversions with intelligent email marketing automation.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      )
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Our Services</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We combine 9 years of marketing expertise with cutting-edge AI technology to deliver exceptional results for your business.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-center text-2xl font-bold mb-12 flex items-center justify-center gap-3">
            <span className="bg-secondary-800 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12"></path><path d="M6 16h9"></path><path d="M19.5 12H13"></path><path d="M15.5 9.5 13 12l2.5 2.5"></path></svg>
            </span>
            AI-Powered Marketing Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard
                key={`ai-${index}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                type="ai"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-center text-2xl font-bold mb-12 flex items-center justify-center gap-3">
            <span className="bg-primary-800 text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5V2"></path><path d="M15 22v-3"></path><path d="M8 22V5"></path><path d="M2 10h4"></path><path d="M2 15h4"></path><path d="M22 10h-4"></path><path d="M22 15h-4"></path><path d="M15 8.1V14c0 1-1 2-2 2H8"></path></svg>
            </span>
            Traditional Marketing Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {traditionalServices.map((service, index) => (
              <ServiceCard
                key={`trad-${index}`}
                title={service.title}
                description={service.description}
                icon={service.icon}
                type="traditional"
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-primary-800 hover:bg-primary-900">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
