// src/components/BlogDetails.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header.tsx";
import Footer from "@/components/Footer.tsx";
import { Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";

function BlogDetails() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const res = await fetch("/blogs.json");
        const data = await res.json();
        const foundBlog = data.find(
          (b) =>
            b.slug === slug ||
            b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-") === slug
        );
        setBlog(foundBlog);
      } catch (err) {
        console.error("Error loading blog:", err);
      }
    };

    loadBlog();
  }, [slug]);

  if (!blog) return <p className="text-center mt-20">Loading...</p>;

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // ✅ BlogPosting Schema for SEO
  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.description || blog.content?.[0]?.body1?.slice(0, 160) || "Expert mental health insights from Insight Mind Clinic",
    image: blog.image || "https://insightmind.in/default-blog.jpg",
    author: {
      "@type": "Person",
      name: blog.author || "Dr Hamza Hussain",
    },
    publisher: {
      "@type": "Organization",
      name: "Insight – The Mind Clinic",
      logo: {
        "@type": "ImageObject",
        url: "https://insightmind.in/logo.png",
      },
    },
    datePublished: blog.datePublished,
    dateModified: blog.dateModified || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://insightmind.in/blog/${blog.slug}`,
    },
    keywords: blog.keywords?.join(", ") || "",
  };

  return (
    <>
      {/* ✅ SEO + Structured Data */}
      <Helmet>
        <title>{blog.title} | Insight Mind Clinic</title>
        <meta
          name="description"
          content={
            blog.description ||
            blog.content?.[0]?.body1?.slice(0, 160) ||
            "Explore insights on mental health from Insight Mind Clinic."
          }
        />
        <meta
          name="keywords"
          content={
            blog.keywords?.join(", ") ||
            "best psychiatric clinic Pune, mental health Pune, anxiety treatment, depression therapy"
          }
        />
        <meta name="author" content={blog.author || "Dr Hamza Hussain"} />
        <link rel="canonical" href={`https://insightmind.in/blog/${blog.slug}`} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={blog.title} />
        <meta 
          property="og:description" 
          content={blog.description || blog.content?.[0]?.body1?.slice(0, 160) || "Explore insights on mental health from Insight Mind Clinic."} 
        />
        <meta
          property="og:image"
          content={blog.image || "https://insightmind.in/default-blog.jpg"}
        />
        <meta
          property="og:url"
          content={`https://insightmind.in/blog/${blog.slug}`}
        />
        <meta property="og:site_name" content="Insight – The Mind Clinic" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta 
          name="twitter:description" 
          content={blog.description || blog.content?.[0]?.body1?.slice(0, 160) || "Explore insights on mental health from Insight Mind Clinic."} 
        />
        <meta
          name="twitter:image"
          content={blog.image || "https://insightmind.in/default-blog.jpg"}
        />
        <meta name="twitter:site" content="@insightclinic" />
        <meta name="twitter:creator" content="@drhamzahussain" />

        {/* Article Dates */}
        {blog.datePublished && (
          <meta property="article:published_time" content={blog.datePublished} />
        )}
        {blog.dateModified && (
          <meta property="article:modified_time" content={blog.dateModified} />
        )}
        <meta property="article:author" content={blog.author || "Dr Hamza Hussain"} />
        
        {/* Article Tags */}
        {blog.keywords && blog.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}

        {/* JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(blogPostingSchema)}
        </script>
      </Helmet>

      {/* ✅ Blog Page UI */}
      <Header />
      <section>
        <div className="container max-w-7xl mx-auto mt-20 mb-20 px-4 md:px-0">
          {/* Blog Header */}
          <div className="container py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 mb-6">
              <div className="border-l-4 border-primary">
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full rounded-2xl mb-6 object-cover"
                  />
                )}
              </div>
              <div className="pl-4 md:pl-10">
                <h1 className="text-2xl font-bold mb-4 text-primary">
                  {blog.title}
                </h1>
                <p className="text-sm text-muted-foreground mb-3">
                  {blog.author || "Insight Mind Clinic"} • {blog.datePublished}
                </p>
                {blog.content?.map((section, idx) => (
                  <div key={idx} className="mb-6">
                    <p className="mt-4 text-lg text-muted-foreground  mx-auto">{section.body1}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {blog.content?.map((section, idx) => (
                <div key={idx} className="mb-6">
                  {section.heading && (
                    <h2 className="text-2xl font-semibold mt-4 mb-2">
                      {section.heading}
                    </h2>
                  )}

                  {/* Paragraph */}
                  {section.body && (
                    <p className="mt-4 text-lg text-muted-foreground  mx-auto mb-4">{section.body}</p>
                  )}

                  {/* ✅ Normal List */}
                  {section.list && section.heading !== "FAQs" && (
                    <ul className="list-disc list-inside space-y-2 text-base text-gray-700">
                      {section.list.map((item, index) => (
                        <li key={index} className="mt-4 text-lg text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  )}

                  {/* ✅ FAQ Section */}
                  {section.heading === "FAQs" && section.list && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                      {section.list.map((qa, index) => {
                        const [q, a] = qa.split("A:");
                        const question = q ? q.replace("Q:", "").trim() : "Question missing";
                        const answer = a ? a.trim() : "Answer missing";

                        return (
                          <div
                            key={index}
                            className="border rounded-lg p-4 shadow-sm m-0"
                          >
                            <button
                              onClick={() => toggleFAQ(index)}
                              className="flex justify-between items-center w-full text-left font-medium"
                            >
                              {question}
                              <span>{openFAQ === index ? "➖" : "➕"}</span>
                            </button>
                            {openFAQ === index && (
                              <p className="mt-2 mt-4 text-lg text-muted-foreground">{answer}</p>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                </div>
              ))}
            </div>

            {/* Clinic Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              {/* YouTube Video with Thumbnail */}
              <div className="w-full  aspect-video rounded-2xl shadow-lg overflow-hidden relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/8fuZZQYWI7s?si=PFRIUP1MMtQzbhnr"
                  title="YouTube Channel Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Contact Card */}
              <Card className="h-auto p-6 flex flex-col justify-center hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <div className="text-center space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Insight – The Mind Clinic
                  </h2>

                  {/* Contact Info */}
                  <div className="space-y-2 text-gray-700">
                    <p>
                      📞{" "}
                      <a
                        href="tel:+919390442784"
                        className="text-primary font-medium hover:underline"
                      >
                        +91 9390442784
                      </a>
                    </p>
                    <p>
                      📧{" "}
                      <a
                        href="mailto:help@insightmind.in"
                        className="text-primary font-medium hover:underline"
                      >
                        help@insightmind.in
                      </a>
                    </p>
                    <p>
                      🌐{" "}
                      <a
                        href="https://www.insightmind.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary font-medium hover:underline"
                      >
                        www.insightmind.in
                      </a>
                    </p>
                    <p>📍 Pune, India</p>
                  </div>

                  {/* Appointment Button */}
                  <button
                    className="mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary/90 transition"
                    onClick={() =>
                      window.open(
                        "https://web.docterz.in/#/clinics/4849/book_online_appointment",
                        "_blank"
                      )
                    }
                  >
                    Book Appointment
                  </button>
                </div>
              </Card>
            </div>
            <div style={{ marginTop: "40px" }}>
              <div class="elfsight-app-285078a4-407b-451b-8643-bc0eff1fad62" data-elfsight-app-lazy></div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default BlogDetails;
