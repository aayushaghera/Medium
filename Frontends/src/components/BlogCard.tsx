

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: {
    name: string | null;
  }
  createdAt: string;
  readTime: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
      <Link to={`/blog/${post.id}`}>
    <Card className="group overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white rounded-2xl">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
          alt="Blog post"
          className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 z-20">
          <Badge className="bg-white/90 text-slate-700 border-0 shadow-md hover:bg-white">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6 relative">
        <h3 className="text-xl font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
          {post.title}
        </h3>
        <p className="text-slate-600 mb-6 line-clamp-3 leading-relaxed">
          {post.content}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
              {post.author?.name
                ? post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                : "NA"}
            </div>
            <div>
              <div className="font-medium text-slate-800 text-sm">{post.author.name}</div>
              <div className="text-xs text-slate-500">{new Date(post.createdAt).toLocaleDateString()}
 • {post.readTime}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-2 rounded-full hover:bg-purple-50 transition-colors group/btn">
              <Heart className="h-4 w-4 text-slate-400 group-hover/btn:text-red-500 transition-colors" />
            </button>
            <button className="p-2 rounded-full hover:bg-purple-50 transition-colors group/btn">
              <MessageCircle className="h-4 w-4 text-slate-400 group-hover/btn:text-blue-500 transition-colors" />
            </button>
            <button className="p-2 rounded-full hover:bg-purple-50 transition-colors group/btn">
              <Share2 className="h-4 w-4 text-slate-400 group-hover/btn:text-green-500 transition-colors" />
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};
