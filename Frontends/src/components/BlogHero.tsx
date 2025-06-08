
import { Button } from "@/components/ui/button";
import { PencilLine, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const BlogHero = () => {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Clean background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gray-50"></div>
      
      {/* Subtle floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      
      <div className="relative w-full px-4 sm:px-6 lg:px-8">

        <div className="max-w-4xl mx-auto text-center">
          {/* Clean badge */}
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium text-blue-700">Welcome to Medium</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8">
            Share Your
            <span className="text-blue-600"> Stories</span>
            <br />
            With The World
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Join our community of writers and readers. Create, publish, and discover 
            amazing content that inspires and educates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/write">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <PencilLine className="h-5 w-5 mr-3" />
                Start Writing
              </Button>
            </Link>
            <Link to="/blogs">
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
              >
                Explore Stories
                <ArrowRight className="h-5 w-5 ml-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
