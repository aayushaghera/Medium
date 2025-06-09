
import { useState, useEffect } from "react";
import axios from "axios";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BACKEND_URL } from "../config";

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Technology", "Design", "Development", "Writing", "AI", "Productivity"];

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
          headers: {
            Authorization: token,
          },
        });

        setBlogPosts(response.data.blogs); // Adjust based on your API response structure
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/50">
      <BlogHeader />

      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover insightful articles, tutorials, and stories from our community of passionate writers 
              covering technology, design, development, and more.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
        

            {/* Category filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <Badge
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  className={`px-4 py-2 text-sm font-medium cursor-pointer transition-all duration-300 ${
                    index === 0
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "border-gray-200 hover:border-blue-400 hover:bg-blue-50"
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Blog Grid */}
          {loading ? (
            <div className="text-center text-gray-500">Loading blogs...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.map((post, index) => (
                <div
                  // key={post.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          )}

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg" className="border-gray-200 hover:bg-gray-50">
              Load More Articles
            </Button>
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

export default Blogs;
