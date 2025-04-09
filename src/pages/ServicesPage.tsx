
import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesList from "@/components/services/ServicesList";
import AIBenefits from "@/components/services/AIBenefits";
import CallToAction from "@/components/home/CallToAction";

const ServicesPage = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesList />
      <AIBenefits />
      <CallToAction />
    </main>
  );
};

export default ServicesPage;
