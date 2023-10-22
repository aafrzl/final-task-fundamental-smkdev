"use client";

import SearchResults from "@/components/SearchResults";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const params = useSearchParams();
  const keyword = params.get("query");

  return (
    <section className="container mx-auto my-10 px-10 md:px-0">
      <h2 className="mb-6 text-center text-2xl font-bold text-[#8C8989] xl:text-start xl:text-5xl">
        Search {keyword}
      </h2>
      <SearchResults keyword={keyword} />
    </section>
  );
}
