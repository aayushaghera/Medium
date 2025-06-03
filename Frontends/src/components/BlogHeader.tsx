
import { Button } from "@/components/ui/button";
import { PencilLine, BookOpen, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import AuthHandler from "./ui/Auth";

import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export const BlogHeader = () => {
  return (
    <header className="bg-white/95 backdrop-blur-xl border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900">
              Medium
            </h1>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/blogs" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            {/* Show SignIn if not logged in */}
            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:inline-flex border-gray-200 hover:bg-gray-50"
                >
                  Sign In
                </Button>
              </SignInButton>
            </SignedOut>

            {/* Show user profile if signed in */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            
          <AuthHandler></AuthHandler>
            <Link to="/write">
              <Button 
                size="sm" 
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <PencilLine className="h-4 w-4 mr-2" />
                Write
              </Button>
            </Link>

            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
