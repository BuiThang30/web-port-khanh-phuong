"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./fade-slide.module.css";

export interface FadeSlideImage {
  src: string;
  alt: string;
}

interface FadeSlideProps {
  images: FadeSlideImage[];
  width?: number;
  height?: number;
  ratio?: number;
  followRatio?: boolean;
  initialRatio?: number;
  onRatio?: (ratio: number) => void;
  interval?: number;
  sizes?: string;
  className?: string;
}

export default function FadeSlide({
  images,
  width,
  height,
  ratio,
  followRatio = false,
  initialRatio = 3 / 4,
  onRatio,
  interval = 4000,
  sizes = "(max-width: 768px) 100vw, 50vw",
  className,
}: FadeSlideProps) {
  const [active, setActive] = useState(0);
  const [measured, setMeasured] = useState<number>();

  useEffect(() => {
    if (images.length < 2) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      interval,
    );
    return () => clearInterval(id);
  }, [images.length, interval]);

  const fixed = width && height ? width / height : undefined;
  const frameRatio = followRatio
    ? (ratio ?? initialRatio)
    : (ratio ?? fixed ?? measured ?? initialRatio);

  return (
    <div
      className={`${styles.wrap} ${className ?? ""}`}
      style={{ aspectRatio: `${frameRatio}` }}
    >
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          aria-hidden={i !== active}
          className={`${styles.image} ${i === active ? styles.active : ""}`}
          onLoad={
            i === 0
              ? (e) => {
                  const el = e.currentTarget;
                  if (el.naturalWidth && el.naturalHeight) {
                    const r = el.naturalWidth / el.naturalHeight;
                    setMeasured(r);
                    onRatio?.(r);
                  }
                }
              : undefined
          }
        />
      ))}
    </div>
  );
}