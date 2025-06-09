import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "../config";
import {
  ArrowLeft,
  Heart,
  MessageCircle,
  Share2,
  Calendar,
  Clock,
} from "lucide-react";

// Define blog type
interface Blog {
  id: number;
  title: string;
  content: string;
  category: string;
   author: {
    name: string | null;
  }
  createdAt: string;
  readTime: string;
  image: string;
}


const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token") || "",
        },
      })
      .then((response) => {
        setPost(response.data.blog);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-xl">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/50">
        <BlogHeader />
        <div className="py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Post Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link to="/blogs">
            <Button>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
        <BlogFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/50">
      <BlogHeader />

      <article className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back button */}
          <Link
            to="/blogs"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>

          {/* Article header */}
          <header className="mb-8">
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-4">
                 <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
              {post.author?.name
                ? post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "NA"}
            </div>
                <div>
                  <div className="font-medium text-gray-900">{post.author.name}</div>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4 mr-2" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Comment
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </header>

          {/* Featured image */}
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Article content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <BlogFooter />
    </div>
  );
};

export default BlogPost;
