
import React from "react";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";

const ClientShowcase = () => {
  const clients = [
    {
      name: "SVN Bay Park",
      logo: "/lovable-uploads/7ad0993b-86cd-4ede-a21e-bdeafffe8b3a.png",
      testimonial: "Furi Media has transformed our online presence completely. Their AI-powered SEO strategies boosted our visibility significantly."
    },
    {
      name: "Z-Lyrics",
      logo: "/lovable-uploads/faad5112-e65f-4b93-8a06-1b04d352083a.png",
      testimonial: "The WhatsApp automation solution from Furi Media has streamlined our customer service and significantly improved response times."
    },
    {
      name: "Hira Panna Jewellers",
      logo: "/lovable-uploads/f9d40fda-658d-4522-a537-3ec4abde9d51.png",
      testimonial: "Working with Furi Media has been a game-changer for our brand's digital marketing strategy. Highly recommended!"
    },
    {
      name: "Pollocks School",
      logo: "/lovable-uploads/cb104998-9680-4726-8469-861defb3bb21.png",
      testimonial: "The social media campaigns designed by Furi Media helped us reach a wider audience and engage with our community more effectively."
    }
  ];

  // Clone clients array to create a seamless loop effect
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="section-padding" id="clients">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Trusted by Leading Brands</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We've helped businesses across various industries achieve their marketing goals with our innovative solutions.
          </p>
        </div>

        <div className="mb-16 overflow-hidden">
          <div className="w-full relative">
            <div className="animate-marquee flex space-x-12">
              {duplicatedClients.map((client, index) => (
                <div 
                  key={`logo-${index}`} 
                  className="flex justify-center items-center min-w-[150px] transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`} 
                    className="max-h-24"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-12 bg-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {clients.map((client, index) => (
            <div key={`testimonial-${index}`} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"{client.testimonial}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-primary-800 font-bold mr-3">
                  {client.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold">{client.name}</p>
                  <p className="text-sm text-gray-500">Client</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
