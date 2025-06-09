
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import {Image, Link, Bold, Italic, List } from "lucide-react";

// export const WriteEditor = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   return (
//     <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8">
//         {/* Title Section */}
//         <div className="mb-8">
//           <Label htmlFor="title" className="text-lg font-semibold text-slate-700 mb-3 block">
//             Story Title
//           </Label>
//           <Input
//             id="title"
//             placeholder="Give your story a compelling title..."
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             className="text-2xl font-bold border-0 border-b-2 border-slate-200 rounded-none px-0 py-4 focus:border-purple-500 focus:ring-0 bg-transparent placeholder:text-slate-400"
//           />
//         </div>

//         {/* Formatting Toolbar */}
//         <div className="flex items-center space-x-2 mb-6 p-3 bg-slate-50 rounded-lg border">
//           <Button variant="ghost" size="sm" className="hover:bg-purple-100">
//             <Bold className="h-4 w-4" />
//           </Button>
//           <Button variant="ghost" size="sm" className="hover:bg-purple-100">
//             <Italic className="h-4 w-4" />
//           </Button>
//           <Button variant="ghost" size="sm" className="hover:bg-purple-100">
//             <List className="h-4 w-4" />
//           </Button>
//           <div className="w-px h-6 bg-slate-300 mx-2"></div>
//           <Button variant="ghost" size="sm" className="hover:bg-purple-100">
//             <Image className="h-4 w-4 mr-2" />
//             Image
//           </Button>
//           <Button variant="ghost" size="sm" className="hover:bg-purple-100">
//             <Link className="h-4 w-4 mr-2" />
//             Link
//           </Button>
//         </div>

//         {/* Content Editor */}
//         <div className="mb-8">
//           <Label htmlFor="content" className="text-lg font-semibold text-slate-700 mb-3 block">
//             Tell Your Story
//           </Label>
//           <Textarea
//             id="content"
//             placeholder="Start writing your amazing story here... Let your creativity flow!"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             className="min-h-[400px] text-lg leading-relaxed border-2 border-slate-200 rounded-xl p-6 focus:border-purple-400 resize-none placeholder:text-slate-400"
//           />
//         </div>

       

//         {/* Publishing Options */}
//         <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
//           <h3 className="text-lg font-semibold text-slate-700 mb-4">Publishing Options</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <Label className="text-sm font-medium text-slate-600 mb-2 block">
//                 Category
//               </Label>
//               <select className="w-full p-2 border border-slate-200 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400">
//                 <option>Technology</option>
//                 <option>Lifestyle</option>
//                 <option>Travel</option>
//                 <option>Food</option>
//                 <option>Science</option>
//                 <option>Art</option>
//               </select>
//             </div>
//             <div>
//               <Label className="text-sm font-medium text-slate-600 mb-2 block">
//                 Reading Time
//               </Label>
//               <Input
//                 placeholder="5 min read"
//                 className="border-slate-200 focus:border-purple-400"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Image, Link, Bold, Italic, List } from "lucide-react";
import { BACKEND_URL } from "@/config";

export const WriteEditor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [category, setCategory] = useState("Technology");
  // const [readTime, setReadTime] = useState("");

  const handlePublish = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          content,
          // category,
          // readTime,
        },
        {
          headers: {
            Authorization: token || "",
          },
        }
      );

      console.log("Blog published:", response.data);
      alert("Blog published successfully!");
    } catch (error) {
      console.error("Error publishing blog:", error);
      alert("Failed to publish blog.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-purple-100 p-8">
        {/* Title Section */}
        <div className="mb-8">
          <Label htmlFor="title" className="text-lg font-semibold text-slate-700 mb-3 block">
            Story Title
          </Label>
          <Input
            id="title"
            placeholder="Give your story a compelling title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="text-2xl font-bold border-0 border-b-2 border-slate-200 rounded-none px-0 py-4 focus:border-purple-500 focus:ring-0 bg-transparent placeholder:text-slate-400"
          />
        </div>

        {/* Formatting Toolbar */}
        <div className="flex items-center space-x-2 mb-6 p-3 bg-slate-50 rounded-lg border">
          <Button variant="ghost" size="sm" className="hover:bg-purple-100">
            <Bold className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-purple-100">
            <Italic className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-purple-100">
            <List className="h-4 w-4" />
          </Button>
          <div className="w-px h-6 bg-slate-300 mx-2"></div>
          <Button variant="ghost" size="sm" className="hover:bg-purple-100">
            <Image className="h-4 w-4 mr-2" />
            Image
          </Button>
          <Button variant="ghost" size="sm" className="hover:bg-purple-100">
            <Link className="h-4 w-4 mr-2" />
            Link
          </Button>
        </div>

        {/* Content Editor */}
        <div className="mb-8">
          <Label htmlFor="content" className="text-lg font-semibold text-slate-700 mb-3 block">
            Tell Your Story
          </Label>
          <Textarea
            id="content"
            placeholder="Start writing your amazing story here... Let your creativity flow!"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="min-h-[400px] text-lg leading-relaxed border-2 border-slate-200 rounded-xl p-6 focus:border-purple-400 resize-none placeholder:text-slate-400"
          />
        </div>

        {/* Publishing Options */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Publishing Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="text-sm font-medium text-slate-600 mb-2 block">
                Category
              </Label>
              <select
                // value={category}
                // onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border border-slate-200 rounded-lg focus:border-purple-400 focus:ring-1 focus:ring-purple-400"
              >
                <option>Technology</option>
                <option>Lifestyle</option>
                <option>Travel</option>
                <option>Food</option>
                <option>Science</option>
                <option>Art</option>
              </select>
            </div>
            <div>
              <Label className="text-sm font-medium text-slate-600 mb-2 block">
                Reading Time
              </Label>
              <Input
                placeholder="5 min read"
                // value={readTime}
                // onChange={(e) => setReadTime(e.target.value)}
                className="border-slate-200 focus:border-purple-400"
              />
            </div>
          </div>

          {/* Publish Button */}
          <div className="mt-6">
            <Button
              onClick={handlePublish}
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg text-white"
            >
              Publish
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
