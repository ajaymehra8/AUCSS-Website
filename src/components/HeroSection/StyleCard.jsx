"use client";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StyleCard = ({ snippet }) => {
  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      layout
    >
      <Link to={`/docs/${snippet._id}`} className="h-full block">
        <div
          className="relative h-full bg-[#1e1e2e]/80 backdrop-blur-sm rounded-xl 
          border border-[#313244]/50 hover:border-[#313244] 
          transition-all duration-300 overflow-hidden"
        >
          <div className="p-6">
            {/* CARD HEADER */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="space-y-1">
                  <span className="px-3 py-2 bg-blue-500/10 text-blue-400 rounded-lg text-xs font-medium">
                    {snippet.shortcut}
                  </span>
                </div>
                <div className="relative">
                  <h2 className="text-xl font-semibold text-white mb-2 line-clamp-1 group-hover:text-blue-400 transition-colors">
                    {snippet.title}
                  </h2>
                </div>
              </div>
            </div>

            {/* CONTENT */}
            <div className="space-y-4">
              <div>
                <p>{snippet.description}</p>
              </div>

              <div className="relative group/code">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-purple-500/5 rounded-lg opacity-0 group-hover/code:opacity-100 transition-all" />
                <pre className="relative bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono line-clamp-3 overflow-auto">
                  {snippet.code}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default StyleCard;
