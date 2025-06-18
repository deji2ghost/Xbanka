import React from "react";
import { Button } from "./button";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  maxVisibleButtons?: number; // optional
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  maxVisibleButtons = 5,
}) => {
  if (totalPages <= 1) return null;

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      onPageChange(page);
    }
  };

  const generatePageNumbers = () => {
    const pages = [];
    const half = Math.floor(maxVisibleButtons / 2);
    let start = Math.max(currentPage - half, 1);
    let end = start + maxVisibleButtons - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(end - maxVisibleButtons + 1, 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6 text-sm">
      <Button
      size="sm"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-white rounded disabled:opacity-50"
      >
        Prev
      </Button>

      {generatePageNumbers().map((page) => (
        <Button
            size="sm"
          key={page}
          onClick={() => goToPage(page)}
          className={`px-3 py-1 text-[13px] w-[32px] rounded-[8px] ${
            page === currentPage
              ? "bg-[#2C2C2C] hover:bg-[#2C2C2C]/50 text-[#F5F5F5]"
              : "hover:bg-gray-100 bg-white text-[#1E1E1E]"
          }`}
        >
          {page}
        </Button>
      ))}

      <Button
      size="sm"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 text-[13px] bg-white rounded disabled:opacity-50"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
