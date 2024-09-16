import React from 'react';

interface CardProps {
  title: string;
  accepted: string;
  duplicate: string;
}

export default function Card({ title, accepted, duplicate }: CardProps) {
  return (
    <div
      className="w-60 h-30 mb-3 p-6 bg-[#000] border border-[#333] rounded-lg shadow-lg transition-shadow duration-300 ease-in-out"
    >
      <h2 className="mb-2 text-2xl font-semibold underline">{title}</h2>
      <p className="text-gray-200">
        $Accepted: {accepted}
        <br />
        $Duplicate: {duplicate}
      </p>
    </div>
  );
};

