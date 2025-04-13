import React from 'react'

const InfoCard = ({info}) => {
    console.log(info);
  return (
    <div>
      <h1 className="text-white font-bold text-2xl">{info.title} ( {info.shortcut} ) :</h1>
      <p className="text-md tracking-wider mt-4">
        {info.description}
</p>
      <pre className="relative mt-3 bg-black/30 rounded-lg p-4 text-sm text-gray-300 font-mono line-clamp-3 overflow-x-auto cursor-pointer">
        {info.code}
      </pre>
    </div>
  )
}

export default InfoCard
