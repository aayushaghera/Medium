
import { BlogCard } from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";


export const BlogGrid = () => {
    const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);


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
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Latest
            <span className="text-blue-600"> Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most recent articles from passionate writers covering technology, 
            design, productivity, and personal growth.
          </p>
        </div>
        
       {/* Blog Grid */}
          {loading ? (
            <div className="text-center text-gray-500">Loading blogs...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {blogPosts.slice(0, 4).map((post, index) => (
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

        <div className="text-center">
          <Link to="/blogs">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
            >
              View All Stories
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};