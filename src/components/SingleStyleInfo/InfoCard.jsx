import { Check, Copy } from "lucide-react";
import React, { useState } from "react";

const InfoCard = ({ info }) => {
  const [copy, setCopy] = useState(false);
  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(info.code);
    setCopy(true);
    setTimeout(() => setCopy(false), 2000);
  };
  console.log(info);
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">
        {info.title} ( {info.shortcut} ) :
      </h1>
      <p className="text-md tracking-wider mt-4">{info.description}</p>
      <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono cursor-pointer">
        <div className="overflow-x-auto cursor-pointer">
          <p className="whitespace-pre">{info.code}</p>
        </div>
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          type="button"
          className="p-2 hover:bg-white/20 rounded-lg transition-all duration-200 group absolute top-[0px] sm:top-[2px] right-2"
        >
          {copy ? (
            <Check className="size-4 text-green-400" />
          ) : (
            <Copy className="size-4 text-gray-400 group:hover:text-gray-300 " />
          )}
        </button>
      </pre>
    </div>
  );
};

export default InfoCard;
