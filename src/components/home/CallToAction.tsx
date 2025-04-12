
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <section className="py-20 relative overflow-hidden" id="cta">
      <div className="absolute inset-0 gradient-bg opacity-90 -z-10"></div>
      
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-white mb-6">Ready to Transform Your Digital Strategy?</h2>
          <p className="text-xl mb-8 text-white/90">
            Let's leverage the power of AI and 9 years of marketing expertise to take your business to new heights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-primary-800 hover:bg-white/90"
            >
              <Link to="/contact" className="flex items-center gap-2" onClick={scrollToTop}>
                Contact Us Today
                <ArrowRight size={16} />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link to="/services" className="flex items-center gap-2" onClick={scrollToTop}>
                Explore Our Services
                <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
