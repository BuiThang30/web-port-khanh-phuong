"use client";

import React from "react";
import Image from "next/image";
import styles from "./slide.module.css";

export interface SlideItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface SlideProps {
  items: SlideItem[];
  imageHeight?: number;
  gap?: number;
  speedSeconds?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const Slide: React.FC<SlideProps> = ({
  items,
  imageHeight = 260,
  gap = 16,
  speedSeconds = 28,
  direction = "left",
  pauseOnHover = true,
  className,
}) => {
  if (!items || items.length === 0) return null;
  const loopItems = [...items, ...items];

  return (
    <div
      className={`${styles.galleryViewport} ${
        pauseOnHover ? styles.pauseOnHover : ""
      } ${className ?? ""}`}
      style={
        {
          "--slide-image-height": `${imageHeight}px`,
          "--slide-gap": `${gap}px`,
          "--slide-duration": `${speedSeconds}s`,
        } as React.CSSProperties
      }
    >
      <div
        className={`${styles.galleryTrack} ${
          direction === "right" ? styles.directionRight : styles.directionLeft
        }`}
      >
        {loopItems.map((item, index) => {
          const isDuplicate = index >= items.length;
          const ratio = (item.width ?? 800) / (item.height ?? 600);
          return (
            <figure
              key={`${item.src}-${index}`}
              className={styles.galleryItem}
              aria-hidden={isDuplicate ? true : undefined}
            >
              <div
                className={styles.imageWrap}
                style={{
                  width: `calc(var(--slide-image-height) * ${ratio})`,
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 40vw, 320px"
                  className={styles.galleryImage}
                />
              </div>
              {item.caption && (
                <figcaption className={styles.galleryCaption}>
                  {item.caption}
                </figcaption>
              )}
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Slide;