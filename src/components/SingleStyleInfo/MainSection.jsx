import React, { useState } from "react";
import InfoCard from "./InfoCard";
import { Check, Copy } from "lucide-react";

const MainSection = ({ details }) => {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(details.code);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };
  return (
    <div className="min-h-screen bg-[#1a1a28] py-[50px] lg:px-[150px] md:px-[80px] sm:px-[50px] px-[30px]">
      <h1 className="text-white font-bold text-4xl">
        Get started with {details.title}
      </h1>
      <p className="text-md tracking-wider mt-4">
        {details.briefDescription}
      </p>
      <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono overflow-x-auto cursor-pointer">
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200  group absolute top-2 right-2 cursor-pointer"
          title="Copy code"
        >
          {copy ? (
            <Check className="size-4 text-green-400" />
          ) : (
            <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
          )}
        </button>

        {details.code}
      </pre>
      <div className="w-full py-5 flex flex-col gap-[40px] mt-[40px]">
        {details.extraInfo.map((info) => (
          <InfoCard info={info} />
        ))}
      </div>
    </div>
  );
};

export default MainSection;
