
import { Button } from "@/components/ui/button";
import { ArrowLeft} from "lucide-react";
import { Link } from "react-router-dom";

export const WriteHeader = () => {
  return (
    <header className="bg-white/90 backdrop-blur-xl border-b border-purple-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-slate-600 hover:text-purple-600">
              <ArrowLeft className="h-4 w-4 mr-2" />
              <Link to = "/blogs">
              Back to Blog
              </Link>
            </Button>
          </div>
          
          <div className="flex items-center space-x-3">
          </div>
        </div>
      </div>
    </header>
  );
};
