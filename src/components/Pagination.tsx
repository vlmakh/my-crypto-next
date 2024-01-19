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

  // const page = searchParams.get('page') ?? '1'
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get("page")) === 0 ? 1 : Number(searchParams.get("page"))
  );

  const handlePageClick = (e: { selected: number }) => {
    setCurrentPage(e.selected + 1);

    router.push(`/coins/?page=${Number(e.selected) + 1}`);
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={5}
      pageCount={metaInfo.pageCount}
      previousLabel="<"
      disabledLinkClassName="disabled"
      activeClassName="text-orange-500"
      forcePage={currentPage - 1}
      className="flex gap-2 justify-center flex-wrap py-5 font-bold"
    />
  );
};
