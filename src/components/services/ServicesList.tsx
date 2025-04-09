
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const ServicesList = () => {
  const aiServices = [
    {
      title: "Website Automation",
      description: "Streamline your online presence with intelligent website automation.",
      features: [
        "Automated content updates and publishing",
        "Smart chatbots for 24/7 customer support",
        "Personalized user experiences based on AI analysis",
        "Automated form handling and lead qualification"
      ],
      benefits: "Reduce manual work, enhance user experience, and ensure your website is always up-to-date with minimal effort.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 7h10"></path><path d="M7 12h10"></path><path d="M7 17h10"></path></svg>
      )
    },
    {
      title: "AI-Powered SEO Optimization",
      description: "Leverage advanced AI to dominate search engine rankings.",
      features: [
        "AI-driven keyword research and content optimization",
        "Automated technical SEO audits and fixes",
        "Smart content recommendations based on search trends",
        "Predictive analytics for search performance"
      ],
      benefits: "Achieve higher rankings, stay ahead of algorithm changes, and outperform competitors with data-driven SEO strategies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
      )
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational agents that enhance customer experience.",
      features: [
        "Natural language processing for human-like interactions",
        "24/7 customer support automation",
        "Seamless integration with your website and social platforms",
        "Continuous learning to improve responses over time"
      ],
      benefits: "Provide instant support, qualify leads, and enhance customer satisfaction while reducing support costs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3a1 1 0 0 1 1 1"></path><path d="M9 3a1 1 0 0 0-1 1"></path><path d="M14 21a1 1 0 0 0 1-1"></path><path d="M9 21a1 1 0 0 1-1-1"></path><path d="M8 5a2 2 0 0 0-2 2"></path><path d="M16 5a2 2 0 0 1 2 2"></path><path d="M3 11h18"></path><path d="M6 13v.01"></path><path d="M10 13v.01"></path><path d="M14 13v.01"></path><path d="M18 13v.01"></path><path d="M10 17v.01"></path><path d="M14 17v.01"></path><path d="M8 19a2 2 0 0 1-2-2"></path><path d="M16 19a2 2 0 0 0 2-2"></path><rect width="16" height="16" x="4" y="4" rx="2"></rect></svg>
      )
    },
    {
      title: "Content Creation using AI",
      description: "Generate high-quality, engaging content at scale.",
      features: [
        "AI-powered blog post and article creation",
        "SEO-optimized content that ranks well",
        "Automated social media content generation",
        "Personalized email content for marketing campaigns"
      ],
      benefits: "Save time and resources while producing consistent, high-quality content that resonates with your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 10v6"></path><path d="M9 13h6"></path><circle cx="12" cy="6" r="1"></circle><path d="M5 10v6"></path><path d="M19 10v6"></path><path d="M5 16c0 3 7 3 7 0"></path><path d="M19 16c0 3-7 3-7 0"></path><path d="M5 10c0-3 7-3 7 0"></path><path d="M19 10c0-3-7-3-7 0"></path></svg>
      )
    },
    {
      title: "WhatsApp Automation",
      description: "Powerful automation for WhatsApp business communication.",
      features: [
        "Automated customer service via WhatsApp",
        "Personalized marketing campaigns",
        "Appointment reminders and booking confirmations",
        "Lead qualification and nurturing workflows"
      ],
      benefits: "Engage customers on their preferred messaging platform with timely, relevant communications that drive conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2Z"></path><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M10 22v-2"></path><path d="M14 22v-2"></path><path d="M6 10h12"></path><path d="M6 14h12"></path></svg>
      )
    }
  ];

  const traditionalServices = [
    {
      title: "Branding",
      description: "Create a distinctive and memorable brand identity.",
      features: [
        "Brand strategy development",
        "Logo and visual identity design",
        "Brand messaging and tone of voice",
        "Brand guidelines and asset creation"
      ],
      benefits: "Establish a strong, consistent brand that resonates with your target audience and stands out from competitors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
      )
    },
    {
      title: "Social Media Marketing",
      description: "Engage your audience across major social platforms.",
      features: [
        "Platform-specific content strategy",
        "Community management and engagement",
        "Paid social media advertising",
        "Performance analytics and optimization"
      ],
      benefits: "Build a loyal community, increase brand awareness, and drive website traffic through strategic social media management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a10 10 0 0 1-3.46 0"></path></svg>
      )
    },
    {
      title: "Google Adwords",
      description: "Targeted pay-per-click advertising on Google's network.",
      features: [
        "Strategic keyword research and selection",
        "Ad copy creation and optimization",
        "Landing page optimization for conversions",
        "Budget management and ROI tracking"
      ],
      benefits: "Generate immediate traffic, leads, and sales with highly targeted ads that reach customers actively searching for your products or services.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V8"></path><path d="m2 2 20 20"></path><path d="M22 2 2 22"></path></svg>
      )
    },
    {
      title: "Search Engine Marketing",
      description: "Comprehensive search marketing beyond Google Ads.",
      features: [
        "Multi-platform search advertising (Bing, Yahoo)",
        "Local search optimization",
        "Display and remarketing campaigns",
        "Video advertising on search platforms"
      ],
      benefits: "Maximize your search presence across all relevant platforms to capture more traffic and conversions.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 19V5l-6-4-6 4v14l6-4 6 4Z"></path></svg>
      )
    },
    {
      title: "Email Automation",
      description: "Nurture leads and retain customers with automated email sequences.",
      features: [
        "Customer journey mapping and email sequence design",
        "Personalized email content creation",
        "A/B testing and optimization",
        "Performance tracking and analytics"
      ],
      benefits: "Build stronger customer relationships, increase repeat purchases, and nurture leads to conversion through strategic email marketing.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
      )
    }
  ];

  const ServiceCard = ({ service, type }) => (
    <Card className={`${type === 'ai' ? 'border-l-4 border-l-secondary-800' : 'border-l-4 border-l-primary-800'}`}>
      <CardHeader>
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-md ${type === 'ai' ? 'bg-secondary-100 text-secondary-800' : 'bg-primary-100 text-primary-800'}`}>
            {service.icon}
          </div>
          <div>
            <CardTitle>{service.title}</CardTitle>
            <CardDescription className="mt-2">{service.description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">Key Features:</h4>
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <svg className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Separator className="my-4" />
        
        <h4 className="font-semibold mb-2">Benefits:</h4>
        <p className="text-gray-700">{service.benefits}</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-md bg-secondary-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8h12"></path><path d="M6 16h9"></path><path d="M19.5 12H13"></path><path d="M15.5 9.5 13 12l2.5 2.5"></path></svg>
            </div>
            <h2 className="text-3xl font-bold">AI-Powered Marketing Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <ServiceCard key={`ai-${index}`} service={service} type="ai" />
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-md bg-primary-800 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5V2"></path><path d="M15 22v-3"></path><path d="M8 22V5"></path><path d="M2 10h4"></path><path d="M2 15h4"></path><path d="M22 10h-4"></path><path d="M22 15h-4"></path><path d="M15 8.1V14c0 1-1 2-2 2H8"></path></svg>
            </div>
            <h2 className="text-3xl font-bold">Traditional Marketing Excellence</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {traditionalServices.map((service, index) => (
              <ServiceCard key={`trad-${index}`} service={service} type="traditional" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesList;
