import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

function BlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const foundBlog = data.find((b) => b.id === parseInt(id));
        setBlog(foundBlog);
      })
      .catch((err) => console.error("Error loading blog:", err));
  }, [id]);

  if (!blog) {
    return <p className="p-6 text-center text-gray-500">Blog not found.</p>;
  }

  return (
    <>
      <Header />
      <section className=" mx-auto my-10 p-6">

        <div className="container">
          <div className="">
            <Card className="mx-auto flex gap-5 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader className="p-0">
                <img src={blog.image} alt={blog.title} className="rounded-t-lg p-4" />

              </CardHeader>
              <CardContent className="pt-6 pr-0 grid ">
                <CardContent className="p-0">
                  <CardTitle className="mb-4">{blog.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">{blog.excerpt}</CardDescription>
                  <p className="text-sm text-muted-foreground">{blog.content}</p>
                </CardContent>
                <CardFooter className="p-0 mt-4 items-end justify-end">
                  <button
                    className="text-blue-500"
                    onClick={() => navigate("/blog")}
                  >
                    ← Back to Blogs
                  </button>
                </CardFooter>
              </CardContent>
            </Card>
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
}

export default BlogDetails;
