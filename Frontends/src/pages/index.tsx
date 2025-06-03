import { BlogHeader } from "@/components/BlogHeader";
import { BlogHero } from "@/components/BlogHero";
import { BlogGrid } from "@/components/BlogGrid";
import { BlogFooter } from "@/components/BlogFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50">
      <BlogHeader />
      <BlogHero />
      <BlogGrid />
      <BlogFooter />
    </div>
  );
};

export default Index;
