"use client";
import ReactPaginate from "react-paginate";
import { useState } from "react";

type Props = {
  coinList: {
    meta: {
      pageCount: number;
    };
  };
};

export const Pagination = ({ coinList }: Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages] = useState(coinList.meta.pageCount);

  const handlePageClick = (e: { selected: number; }) => {
    // setCurrentPage(e.selected)
    console.log(e.selected)
  }

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={coinList.meta.pageCount}
      previousLabel="<"
      disabledLinkClassName="disabled"
      activeClassName="activePage"
      forcePage={currentPage - 1}
      className="flex gap-1 justify-center flex-wrap py-5"
    />
  );
};
