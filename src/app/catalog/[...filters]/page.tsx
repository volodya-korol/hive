"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Card from "./card";
import { FiltersDesktop } from "@/components/ui/filters-desktop";
import { FiltersMobile } from "@/components/ui/filters-mobile";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "@/components/ui/loading";

const Catalog = () => {
  const [items, setItems] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const getAllEstates = async () => {
    setLoading(true);
    const res = await fetch(
      "/api/estate?page=" + currentPage + "&" + params.toString()
    );
    const data = await res.json();
    setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    getAllEstates();
  }, [currentPage]);

  const content = loading ? (
    <Loading />
  ) : items.length > 0 ? (
    <>
      <div className="w-full px-2 py-4 columns-2 sm:columns-3 lg:columns-4 xl:columns-5">
        {items.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <CatalogPagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  ) : (
    <div className="w-full h-40 flex items-center justify-center">
      <h2 className="text-2xl">
        За Вашими фільтрами не було знайдено жодного оголошення.
      </h2>
    </div>
  );

  return (
    <section className="min-h-[500px] md:bg-[url('/218052644.jpg')] bg-cover w-full">
      <div className="w-flil min-h-[500px] bg-black/20 backdrop-blur flex items-center justify-center">
        <div className="container min-h-[500px] bg-white bg-cover flex px-0 space-x-2 justify-between relative">
          <div className="hidden lg:block">
            <FiltersDesktop refresh={getAllEstates} />
          </div>
          <div className="w-full">
            <div className="w-full sticky top-0 z-10 lg:hidden">
              <FiltersMobile refresh={getAllEstates} />
            </div>
            {content}
          </div>
        </div>
      </div>
    </section>
  );
};

const CatalogPagination = ({
  currentPage,
  setCurrentPage,
}: {
  currentPage: number;
  setCurrentPage: Function;
}) => {
  const handlePageChange = (page: number) => {
    if (page < 1) return;
    setCurrentPage(page);
  };

  return (
    <Pagination className="my-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(currentPage - 1)}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            {currentPage}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            {currentPage + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(currentPage + 2)}
          >
            {currentPage + 2}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default Catalog;
