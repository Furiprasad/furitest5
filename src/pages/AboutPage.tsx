
import React from "react";
import AboutHero from "@/components/about/AboutHero";
import AgencyStory from "@/components/about/AgencyStory";
import TeamSection from "@/components/about/TeamSection";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";

const AboutPage = () => {
  return (
    <main>
      <AboutHero />
      <AgencyStory />
      <TeamSection />
      <WhyChooseUs />
      <CallToAction />
    </main>
  );
};

export default AboutPage;
