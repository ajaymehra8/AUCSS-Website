import React from "react";
import InfoCard from "./InfoCard";

const MainSection = ({ details }) => {
  console.log(details);
  return (
    <div className="min-h-screen bg-[#1a1a28] py-[50px] lg:px-[150px]">
      <h1 className="text-white font-bold text-4xl">
        Get started with {details.title}
      </h1>
      <p className="text-md tracking-wider mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis in,
        natus quam repellat enim, cumque vitae vel sapiente eos, officia quidem
        dolore dolorum praesentium modi distinctio deserunt dolorem molestias
        saepe consequuntur ratione dicta et! Dolor necessitatibus nam possimus
        quam aperiam? Nemo ducimus eius architecto quas dolore quos pariatur
        dicta beatae. Voluptate dolorum consectetur fugit, facere placeat sunt
        voluptas repellat, nemo magnam aperiam eveniet enim at accusamus
        corrupti deleniti quisquam itaque architecto culpa nam. Ullam tempore
        nisi perferendis, odio omnis consectetur veniam quidem numquam earum
        quibusdam. Sed natus voluptatum expedita doloremque.
      </p>
      <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono line-clamp-3 overflow-x-auto cursor-pointer">
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
