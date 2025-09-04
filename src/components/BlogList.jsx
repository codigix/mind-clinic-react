// src/components/BlogList.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,

} from "@/components/ui/Card";
import { Button } from '@/components/ui/button';

function BlogList() {
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch("/blogs.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data))
            .catch((err) => console.error("Error loading blogs:", err));
    }, []);

    return (
        <div className="container mx-auto my-30">
            <motion.div
                className="text-center mt-12 mb-12"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
                    Comprehensive Mental Health & Wellness Services
                </h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                    From expert psychiatric care and personalized therapy to innovative neurostimulation and holistic wellness programs — discover the right support designed to help you heal, grow, and thrive.
                </p>
            </motion.div>
            <div className="grid grid-cols-3 gap-6 p-6 ">
                {blogs.map((blog, index) => (
                    
                    <motion.div
  key={index}
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.03 }}
  transition={{ duration: 0.4, ease: "easeOut" }}
>
  <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
    <CardHeader className="p-0">
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-t-lg"
      />
    </CardHeader>
    <CardContent className="p-6">
      <CardTitle className="text-2xl font-semibold leading-none tracking-tight mb-3">
        {blog.title}
      </CardTitle>
      <CardDescription className="text-sm text-muted-foreground">
        {blog.excerpt}
      </CardDescription>
      <p className="text-sm text-muted-foreground">
        {blog.content.substring(0, 700)}...
      </p>
    </CardContent>
    <CardFooter>
      <Button
        className="text-white"
        onClick={() => navigate(`/blog/${index}`)}
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

export default BlogList; // ✅ MUST be here
