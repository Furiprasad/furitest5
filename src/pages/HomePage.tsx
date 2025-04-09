
import React from "react";
import Hero from "@/components/home/Hero";
import ServicesOverview from "@/components/home/ServicesOverview";
import ClientShowcase from "@/components/home/ClientShowcase";
import CallToAction from "@/components/home/CallToAction";

const HomePage = () => {
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
