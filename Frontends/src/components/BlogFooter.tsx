

export const BlogFooter = () => {
  return (
    <footer className="bg-white  border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
             © copyright 2025 Medium | All rights reserved
          </div>
          
          <div className="flex space-x-8">
            <a href="/" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Home
            </a>
            <a href="/blogs" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Blog
            </a>
            <a href="/About" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-500 hover:text-gray-700 text-sm transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
