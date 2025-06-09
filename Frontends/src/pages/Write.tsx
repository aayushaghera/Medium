import { WriteEditor } from "@/components/WriteEditor";
import { WriteHeader } from "@/components/WriteHeader";

const Write = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/50">
      <WriteHeader />
      <WriteEditor />
    </div>
  );
};

export default Write;
