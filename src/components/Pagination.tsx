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
  const [totalPages] = useState(coinList.meta.pageCount);

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      // onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel="<"
      disabledLinkClassName="disabled"
      activeClassName="activePage"
      forcePage={currentPage - 1}
    />
  );
};
