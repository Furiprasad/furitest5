
import React from "react";

const BlogHeader = () => {
  return (
    <section className="pt-32 pb-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-transparent -z-10"></div>
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-6">Our Blog</h1>
          <p className="text-xl text-gray-700 mb-8">
            Insights, trends, and expert tips on digital marketing and AI-powered strategies to grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogHeader;
