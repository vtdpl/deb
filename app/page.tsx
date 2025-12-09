

"use client";
import Image from "next/image";
import { images } from "./images";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { RenderSlideProps } from "yet-another-react-lightbox";
import { FiZoomIn } from "react-icons/fi";

export default function AlbumDaDeb() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black font-sans">
      <header className="w-full py-6 px-4 text-center bg-white dark:bg-zinc-900 shadow-md sticky top-0 z-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-pink-600 dark:text-pink-400 tracking-tight">album da déb</h1>
      </header>
      <main className="p-4 max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={idx}
              className="relative aspect-square overflow-hidden rounded-lg shadow group bg-white dark:bg-zinc-800 focus:outline-pink-500"
              onClick={() => { setOpen(true); setIndex(idx); }}
              aria-label={`Abrir imagem ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover w-full h-full"
                priority={idx < 4}
              />
              <span className="absolute bottom-2 right-2 bg-pink-600/80 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <FiZoomIn size={20} />
              </span>
            </button>
          ))}
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={images.map(img => ({ src: img.src, alt: img.alt }))}
        />
      </main>
    </div>
  );
}
