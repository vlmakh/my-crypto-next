"use client";

import ReactPaginate from "react-paginate";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  metaInfo: {
    page: number;
    limit: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
};

export const Pagination = ({ metaInfo }: Props) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentCurrency = searchParams.get("currency") ?? 'USD'

  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) === 0 ? 1 : Number(searchParams.get("page"))
  );

  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected + 1);

    router.push(`/?page=${Number(e.selected) + 1}&currency=${currentCurrency}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={metaInfo.pageCount}
      previousLabel="<"
      disabledLinkClassName="disabled text-gray-200"
      activeClassName="text-orange-500"
      forcePage={currentPage - 1}
      containerClassName="flex gap-2 justify-center flex-wrap py-5 font-bold"
      pageClassName="hover:text-orange-500 transition-colors"
      previousClassName="hover:text-orange-500 transition-colors"
      nextClassName="hover:text-orange-500 transition-colors"
    />
  );
};
