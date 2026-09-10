"use client";

import { useState } from "react";
import Image from "next/image";
import { FaBone, FaUserMd, FaHeartbeat } from "react-icons/fa";

interface CardImageHeaderProps {
  src?: string;
  alt: string;
  category?: "enfermedad" | "servicio" | "sintoma";
  aspectRatio?: "aspect-video" | "aspect-[16/10]" | "aspect-[4/3]";
  badgeText?: string;
}

export default function CardImageHeader({
  src,
  alt,
  category = "enfermedad",
  aspectRatio = "aspect-video",
  badgeText
}: CardImageHeaderProps) {
  const [imageError, setImageError] = useState(false);

  const getIcon = () => {
    switch (category) {
      case "servicio":
        return <FaUserMd className="text-4xl text-[#4494C5]" />;
      case "sintoma":
        return <FaHeartbeat className="text-4xl text-[#4494C5]" />;
      default:
        return <FaBone className="text-4xl text-[#4494C5]" />;
    }
  };

  return (
    <div className={`relative w-full ${aspectRatio} rounded-2xl overflow-hidden bg-gradient-to-br from-[#102634] via-[#1A4174] to-[#0B1B26] border border-[#4494C5]/20 shadow-md group-hover:shadow-lg transition-all`}>
      {src && !imageError ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          onError={() => setImageError(true)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center space-y-2 bg-[#102634]/90">
          <div className="w-14 h-14 rounded-2xl bg-[#4494C5]/10 border border-[#4494C5]/30 flex items-center justify-center shadow-inner">
            {getIcon()}
          </div>
          <span className="text-[11px] font-extrabold text-[#B1D2E7] uppercase tracking-wider line-clamp-1 max-w-[90%]">
            {alt}
          </span>
        </div>
      )}

      {badgeText && (
        <div className="absolute top-3 left-3 bg-[#102634]/90 backdrop-blur-md border border-[#4494C5]/30 text-[#B1D2E7] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
          {badgeText}
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-[#102634]/60 via-transparent to-transparent pointer-events-none" />
    </div>
  );
}
