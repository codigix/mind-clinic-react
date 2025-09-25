// src/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const res = await fetch("/blogs.json");
        if (!res.ok) throw new Error(`Failed to load blogs.json: ${res.status}`);
        const data = await res.json();

        const blogsWithSlug = data.map((b, index) => ({
          id: b.id || index + 1,
          slug: b.slug || (b.title ? b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") : `blog-${index + 1}`),
          ...b,
        }));

        setBlogs(blogsWithSlug);
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    };

    loadBlogs();
  }, []);

  return (
    <div className="container mx-auto  px-4 md:px-0" >
      <SEO
        title="Blog | Insight - The Mind Clinic"
        description="Read expert blogs on psychiatry, psychology, gut-brain connection, and holistic wellness by Insight - The Mind Clinic, Pune."
        type="website"
      />

      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: "80px", marginBottom: "40px" }}>
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              {/* Blog Image */}
              {blog.image && (
                <CardHeader className="p-0">
                  <img
                    src={blog.image}
                    alt={blog.title || "Blog image"}
                    className="rounded-t-lg w-full h-48 object-cover"
                  />
                </CardHeader>
              )}

              {/* Blog Content */}
              <CardContent className="p-6">
                <CardTitle className="text-lg  mb-2">
                  {blog?.title ? blog.title.substring(0, 50) : ""} ...
                  {/* {blog.title} */}
                </CardTitle>
                <p className="text-sm text-primary mb-2">
                  {blog.author || "Unknown"} • {blog.datePublished || "Unknown Date"}
                </p>
                <CardDescription className="text-sm text-muted-foreground mb-4">
                  {(blog.content?.[0]?.body1 || "No description available").substring(0, 160)}
                  ...
                </CardDescription>
              </CardContent>

              <CardFooter>
                <Button
                  className="text-white"
                  onClick={() => navigate(`/blog/${blog.slug}`)}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
