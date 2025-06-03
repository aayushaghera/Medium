
import { BlogHeader } from "@/components/BlogHeader";
import { BlogFooter } from "@/components/BlogFooter";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of writers sharing their stories and experiences with a global audience."
    },
    {
      icon: Target,
      title: "Quality Content",
      description: "We focus on delivering high-quality, engaging content that matters to our readers."
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Get recognized for your writing skills and build your reputation in the writing community."
    },
    {
      icon: Heart,
      title: "Passion for Writing",
      description: "We believe in the power of words to inspire, educate, and connect people worldwide."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-gray-50/50">
      <BlogHeader />
      
      <div className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Medium</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Medium is a platform where passionate writers come together to share their stories, 
              insights, and expertise with the world. We believe every voice matters and every story deserves to be heard.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-20">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl border-0">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      To democratize content creation and provide a platform where writers of all backgrounds 
                      can share their unique perspectives, connect with like-minded individuals, and grow their audience.
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      We're committed to fostering a supportive community that encourages creativity, 
                      authenticity, and meaningful conversations through the written word.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-8 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                    <div className="text-gray-600 mb-4">Active Writers</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
                    <div className="text-gray-600 mb-4">Stories Published</div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                    <div className="text-gray-600">Monthly Readers</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg border-0 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <BlogFooter />
    </div>
  );
};

export default About;
