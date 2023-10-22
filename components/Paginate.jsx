import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

export default function Paginate({ movies }) {
  const params = useSearchParams();
  const router = useRouter();
  const [initialPage, setInitialPage] = useState(1);

  useEffect(() => {
    const page = parseInt(params.get("page") || "1");
    setInitialPage(page);
  }, [params, initialPage]);


  //fungsi untuk handle navigasi page
  const handlePageNavigation = ({ selected }) => {
    //variable untuk menyimpan query params
    let searchParams = new URLSearchParams();

    //looping untuk setiap query params
    params.forEach((param, key) => {
      searchParams.set(key, param);
    });

    //set page query params
    if (selected == 0) {
      searchParams.set("page", Number(selected + 1).toString());
    } else {
      searchParams.set(
        "page",
        selected < 500 ? (selected + 1).toString() : selected.toString(),
      );
    }

    //push ke router
    router.push(`?${searchParams.toString()}`);
  };

  return (
    <ReactPaginate
      pageCount={movies.total_pages < 6 ? movies.total_pages : 6}
      nextLabel={<ArrowRight className="w-6 h-6" />}
      previousLabel={<ArrowLeft className="w-6 h-6" />}
      forcePage={initialPage > 0 ? initialPage - 1 : initialPage}
      className="mt-12 flex flex-wrap gap-10 justify-center items-center"
      activeLinkClassName="bg-[#FE024E] text-white rounded-md px-4 py-2"
      disabledClassName="opacity-50 cursor-not-allowed"
      onPageChange={handlePageNavigation}
    />
  );
}
