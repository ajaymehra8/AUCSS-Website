import React from "react";
import { Blocks } from "lucide-react";

function Footer() {
  return (
    <footer className="relative border-t border-gray-800/50 mt-auto">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-gray-900 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-400">
            <Blocks className="size-5" />
            <span>Built for developers, by AU Techies</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/support" className="text-gray-400 hover:text-gray-300 transition-colors">
              Support
            </a>
            <a href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
