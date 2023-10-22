import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-zinc-950 p-10 shadow-md">
      <div className="container mx-auto flex max-w-screen-xl flex-col justify-between gap-y-5 xl:flex-row xl:items-center xl:gap-x-5">
        <div className="flex flex-col gap-4">
          <Play className="h-16 w-16 rounded-md bg-[#FE024E] p-2 text-white" />
          <p className="text-justify text-sm text-white">
            Ini adalah website movie app yang dibuat untuk memenuhi final
            project dari
            <Link href={"https://www.smk.dev/"} className="ml-1 underline">
              SMKDEV Bootcamp Frontend
            </Link>
            ,
            <br /> dengan menggunakan Next.js dan Tailwind CSS. Data yang
            digunakan diambil dari The Movie Database (TMDb).
          </p>
        </div>
        <div className="flex flex-col justify-between gap-y-4 text-sm text-white">
          <Link href={"/"} className="text-sm text-white">
            <p>Tentang Kami</p>
          </Link>
          <Link href={"/"} className="text-sm text-white">
            <p>Blog</p>
          </Link>
          <Link href={"/"} className="text-sm text-white">
            <p>Layanan</p>
          </Link>
          <Link href={"/"} className="text-sm text-white">
            <p>Karir</p>
          </Link>
          <Link href={"/"} className="text-sm text-white">
            <p>Pusat Media</p>
          </Link>
        </div>
        <div className="flex flex-col items-start justify-between gap-y-2">
          <h3 className="font-bold text-white">Download</h3>
          <div className="ml-2 flex gap-x-2">
            <Link href={"/"}>
              <Image
                src="/app-store.png"
                alt="App Store"
                className="w-28"
                width={135}
                height={40}
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/google-play.png"
                alt="Google Play"
                className="w-28"
                width={135}
                height={40}
              />
            </Link>
          </div>
          <h3 className="font-bold text-white">Social Media</h3>
          <div className="ml-2 flex items-center gap-x-2">
            <Link href={"/"}>
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/pinterest.svg"
                alt="Pinterest"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
            <Link href={"/"}>
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex flex-col">
        <hr className="mt-10 border-[#D4D4D4] border-opacity-50" />
        <p className="mt-5 text-center text-sm text-white">
          © 2000 - {new Date().getFullYear()} MilanTV. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
