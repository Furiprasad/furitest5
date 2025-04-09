
import React, { useEffect } from "react";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ClientShowcase from "@/components/home/ClientShowcase";
import CallToAction from "@/components/home/CallToAction";

const HomePage = () => {
  // Add IDs to each section for smooth scrolling
  useEffect(() => {
    // This can be used for any additional homepage initialization
  }, []);

  return (
    <main>
      <Hero />
      <ServicesOverview />
      <ClientShowcase />
      <CallToAction />
    </main>
  );
};

export default HomePage;
