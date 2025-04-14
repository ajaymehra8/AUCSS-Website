import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Tag, X, BookOpen } from "lucide-react"; // ✅ Add this line
import SnippetCard from "../HeroSection/StyleCard";
import allStyles from "../../assets/info";
function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("");
  const [showStyles, setShowStyles] = useState([]);
  const [loadCount, setLoadCount] = useState(1);
  let filteredStyles = allStyles?.filter((snippet) => {
    const matchesSearch =
      snippet?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet?.language?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet?.user?.name?.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesLanguage =
      !selectedStyle ||
      snippet.title.toLowerCase() === selectedStyle.toLowerCase();

    return matchesSearch && matchesLanguage;
  });
  // loading more
  const loadMore = () => {
    setLoadCount((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    const temp = filteredStyles.slice(0, 6 * loadCount);
    setShowStyles(temp);
  }, [searchQuery, selectedStyle, loadCount]);

  const popularStyles = ["Padding", "Margin", "Width", "Height"];

  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Filters Section */}
        <div className="relative max-w-5xl mx-auto mb-12 space-y-6">
          {/* Search */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search features by their name and tags"
                className="w-full pl-12 pr-4 py-4 bg-[#1e1e2e]/80 hover:bg-[#1e1e2e] text-white
                rounded-xl border border-[#313244] hover:border-[#414155] transition-all duration-200
                placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              />
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#1e1e2e] rounded-lg ring-1 ring-gray-800">
              <Tag className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Topics:</span>
            </div>

            {popularStyles.map((lang) => (
              <button
                key={lang}
                onClick={() =>
                  setSelectedStyle(lang === selectedStyle ? "" : lang)
                }
                className={`group relative px-3 py-1.5 rounded-lg transition-all duration-200 cursor-pointer
                  ${
                    selectedStyle === lang
                      ? "text-blue-400 bg-blue-500/10 ring-2 ring-blue-500/50"
                      : "text-gray-400 hover:text-gray-300 bg-[#1e1e2e] hover:bg-[#262637] ring-1 ring-gray-800"
                  }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang}</span>
                </div>
              </button>
            ))}

            {selectedStyle && (
              <button
                onClick={() => setSelectedStyle("")}
                className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 hover:text-gray-300 transition-colors"
              >
                <X className="w-3 h-3" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Style Card Grid */}
    
        <div
  className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
  layout
>
  <AnimatePresence>
  {showStyles.length > 0 ? (
    showStyles.map((snippet) => (
      <SnippetCard key={snippet._id} snippet={snippet} />
    ))
  ) : (
    <div className="flex justify-center items-center min-h-[50vh] w-[95vw] col-span-full">
      <h1 className="text-[70px] text-center">No style found</h1>
    </div>
  )}
  </AnimatePresence>
</div>

{/* Load More Button*/}
{showStyles.length > 0 && showStyles.length < filteredStyles.length && (
  <div className="flex justify-center mt-8 w-full">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer px-6 py-2 rounded-xl bg-blue-600 text-white text-sm font-medium shadow-md hover:bg-blue-700 transition-all duration-200 tracking-wider"
      onClick={loadMore}
    >
      Load More
    </motion.button>
  </div>
)}

       
      </div>
    </div>
  );
}

export default MainPage;
