"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
// the controls for pagination i.e buttons

type Props = {
  page: number;// current page
  totalPages: number;
  visiblePages: number[];
  goToPage: (page: number, targetId?: string) => void;
};

export default function PaginationControls({page,totalPages, visiblePages,goToPage,}: Props) {
  return (
    <div className="flex items-center justify-center gap-3 mt-14 pb-10">

      {/* PREV */}
      <button
        onClick={() => goToPage(Math.max(0, page - 1))}
        disabled={page === 0}
        className="
          flex items-center justify-center
          w-10 h-10 rounded-full
          bg-white/10 hover:bg-white/20
          backdrop-blur
          transition-all duration-200
          hover:scale-110
          hover:cursor-pointer
          disabled:opacity-30
          disabled:hover:scale-100
          disabled:cursor-not-allowed
        "
      >
        <ChevronLeft size={18} />
      </button>

      {/* PAGE NUMBERS */}
      <div className="flex items-center gap-2">
        {visiblePages.map((i) => (
          <button
            key={i}
            onClick={() => goToPage(i)}
            className={`
              w-10 h-10 rounded-full
              text-sm font-medium
              transition-all duration-200
              hover:cursor-pointer
              ${
                i === page
                  ? "bg-white text-black scale-105"
                  : "bg-white/10 text-white hover:bg-white/20"
              }
            `}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* NEXT */}
      <button
        onClick={() => goToPage(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        className="
          flex items-center justify-center
          w-10 h-10 rounded-full
          bg-white/10 hover:bg-white/20
          backdrop-blur
          transition-all duration-200
          hover:scale-110
          hover:cursor-pointer
          disabled:opacity-30
          disabled:hover:scale-100
          disabled:cursor-not-allowed
        "
      >
        <ChevronRight size={18} />
      </button>

    </div>
  );
}