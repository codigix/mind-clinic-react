import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import BlogList from "@/components/BlogList";       // ✅ no curly braces
import BlogDetails from "@/components/BlogDetails"; // ✅ no curly braces

const Blog = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col">
            <Header />
            <div >
                <BlogList />
            </div>


            <Footer />
        </div>
    );
};

export default Blog;