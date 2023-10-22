"use client";

import Banner from "@/components/Banner";
import ButtonNav from "@/components/ButtonNav";

export default function MovieLayout({ children }) {
  return (
    <main>
      <Banner />
      <section className="container mx-auto">
        <ButtonNav />
      </section>
      {children}
    </main>
  );
}
