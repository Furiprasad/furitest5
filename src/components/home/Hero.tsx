
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-balance font-extrabold !leading-tight">
              Empowering Businesses with{" "}
              <span className="gradient-text">9 Years</span> of Digital Marketing Excellence
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto lg:mx-0">
              Now Introducing AI-Powered Digital Marketing Services to Revolutionize Your Brand
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-primary-800 hover:bg-primary-900 shadow-lg group"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Explore Our Services
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-800 text-primary-800 hover:bg-primary-50"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Digital Marketing Team"
                className="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-secondary-800 text-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"></path><path d="m4.93 10.93 1.41 1.41"></path><path d="M2 18h2"></path><path d="M20 18h2"></path><path d="m19.07 10.93-1.41 1.41"></path><path d="M22 22H2"></path><path d="m8 22 4-10 4 10"></path></svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-800">AI-Powered</p>
                  <p className="text-sm text-gray-600">Marketing Solutions</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-accent-500 text-white p-3 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 13V2l8 4-8 4"></path><path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path><path d="M8 10a5 5 0 1 0 8.9 2.02"></path></svg>
                </div>
                <div>
                  <p className="font-semibold text-primary-800">9+ Years</p>
                  <p className="text-sm text-gray-600">Of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
