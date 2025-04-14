import React from "react";
import details from "../../assets/getStarted_info.json";
import { Copy } from "lucide-react";
import toast from "react-hot-toast";
const Setup = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] py-[50px] lg:px-[150px]">
      <h1 className="text-white font-bold text-4xl">
        Get started with {details.name}
      </h1>
      <p className="text-md tracking-wider mt-4">{details.description}</p>
      <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
        {/* Copy Button */}
        <button
          onClick={async () => {
            await navigator.clipboard.writeText("npm i au-css");
            toast.success("Copied.");
          }}
          type="button"
          className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
          title="Copy code"
        >
          <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
        </button>
        npm i au-css
      </pre>
      <div className="w-full py-5 flex flex-col gap-[40px] mt-[40px]">
        <div>
          <h1 className="text-white font-bold text-2xl">Using via CDN:</h1>
          <div className="mt-[30px]">
            <p className="text-md tracking-wider mt-4">
              Add this css link inside head tag in HTML:
            </p>
            <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
              {/* Copy Button */}
              {`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/au-css@latest/dest/index.css" />`
              }
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/au-css@latest/dest/index.css" />`);
                  toast.success("Copied.");
                }}
                type="button"
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
              >
                <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
              </button>
            </pre>
          </div>
          <div className="mt-[30px]">
            <p className="text-md tracking-wider mt-4">
              Add this js link inside in your HTML:
            </p>
            <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
              {/* Copy Button */}
              {`<script src="https://cdn.jsdelivr.net/npm/au-css@latest/js/arbitary-values.js"></script>`}
              <button
                onClick={async () => {
                  await navigator.clipboard.writeText(`<script src="https://cdn.jsdelivr.net/npm/au-css@latest/js/arbitary-values.js"></script>`  );
                  toast.success("Copied.");

                }}
                type="button"
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
              >
                <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
              </button>
            </pre>
          </div>
        </div>
      </div>

      <div className="w-full py-5 flex flex-col gap-[40px] mt-[40px]">
        <div>
          <h1 className="text-white font-bold text-2xl">Using via npm:</h1>
          <div className="mt-[30px]">
            <p className="text-md tracking-wider mt-4">Install package:</p>
            <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
              {/* Copy Button */}
              npm i au-css
              <button
                onClick={() => { }}
                type="button"
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
              >
                <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
              </button>
            </pre>
          </div>
          <div className="mt-[30px]">
            <p className="text-md tracking-wider mt-4">
              Add this links in you App.jsx:
            </p>
            <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
              {/* Copy Button */}
              <code>
                import 'au-css/dest/index.css'{"\n"}
                import 'au-css/js/arbitary-values.js'
              </code>
              <button
                onClick={() => { }}
                type="button"
                className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
              >
                <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
              </button>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setup;
