
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogList = () => {
  const [filter, setFilter] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Digital Marketing in 2024",
      excerpt: "Discover the latest AI trends transforming the marketing landscape and how businesses can leverage them for growth.",
      image: "https://images.unsplash.com/photo-1501389040983-5c22cb186487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "April 2, 2024",
      author: "Alex Morgan",
      category: "AI",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "5 Ways to Enhance Your SEO Strategy with AI Tools",
      excerpt: "Learn how to implement AI-driven SEO techniques that will improve your website's visibility and drive more organic traffic.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 28, 2024",
      author: "Michael Chen",
      category: "SEO",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "The Psychology Behind Effective Social Media Campaigns",
      excerpt: "Understand the psychological principles that make social media campaigns resonate with audiences and drive engagement.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 20, 2024",
      author: "Priya Sharma",
      category: "Social Media",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Measuring ROI: The Ultimate Guide to Marketing Analytics",
      excerpt: "Learn how to effectively measure and analyze your marketing efforts to ensure you're getting the best return on investment.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      date: "March 15, 2024",
      author: "Sarah Williams",
      category: "Analytics",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "WhatsApp Marketing: Building Meaningful Customer Connections",
      excerpt: "Discover strategies for using WhatsApp as a powerful marketing channel to connect with your audience on a personal level.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      date: "March 8, 2024",
      author: "Alex Morgan",
      category: "Messaging",
      readTime: "4 min read"
    },
    {
      id: 6,
      title: "Content Creation in the AI Era: Balancing Automation and Creativity",
      excerpt: "Explore how to effectively combine AI-powered content tools with human creativity for optimal marketing results.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      date: "March 1, 2024",
      author: "Michael Chen",
      category: "AI",
      readTime: "6 min read"
    }
  ];

  const categories = ["all", "AI", "SEO", "Social Media", "Analytics", "Messaging"];
  
  const filteredPosts = filter === "all" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                className={filter === category 
                  ? "bg-primary-800 hover:bg-primary-900" 
                  : "border-gray-300 text-gray-700"}
                onClick={() => setFilter(category)}
              >
                {category === "all" ? "All Posts" : category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-52">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 bg-primary-800 text-white text-xs font-medium px-3 py-1">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-primary-800 transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-700 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">By {post.author}</span>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-primary-800 font-medium flex items-center gap-1 group-hover:underline"
                  >
                    Read More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogList;
