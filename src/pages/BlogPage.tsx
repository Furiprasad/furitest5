
import React, { useEffect } from "react";
import BlogHeader from "@/components/blog/BlogHeader";
import BlogList from "@/components/blog/BlogList";

const BlogPage = () => {
  useEffect(() => {
    // Add IDs to blog sections for direct linking
  }, []);

  return (
    <main>
      <BlogHeader />
      <BlogList />
    </main>
  );
};

export default BlogPage;
