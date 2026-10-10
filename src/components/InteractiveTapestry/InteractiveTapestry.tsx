"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './InteractiveTapestry.module.css';

const DEFAULT_IMAGE = '/image/home-a.png';
const AUTO_INTERVAL = 3000; // ms: thời gian giữa 2 lần tự chuyển ảnh

const TAPESTRY_DATA = [
  {
    id: 'vietnam',
    label: 'Made in Vietnam',
    image: '/image/home-d.png',
    position: { top: '-2%', left: '61%', transform: 'translateX(-50%)' },
  },
  {
    id: 'faith',
    label: 'Woven with faith and positivity',
    image: '/image/home-b.png',
    position: { top: '10.8%', left: '6.5%' },
  },
  {
    id: 'enterprise',
    label: 'Designed by enterprise and algorithm',
    image: '/image/home-e.png',
    position: { top: '18.9%', right: '7.8%' },
  },
  {
    id: 'healthcare',
    label: 'Tailored for healthcare',
    image: '/image/home-c.png',
    position: { top: '27%', left: '12%' },
  },
  {
    id: 'community',
    label: 'Knit into community',
    image: '/image/home-f.png',
    position: { top: '39%', left: '61%', transform: 'translateX(-50%)' },
  },
];

// Vòng lặp: ảnh mặc định -> 5 ảnh theo thứ tự -> quay lại ảnh mặc định
const SLIDES = [DEFAULT_IMAGE, ...TAPESTRY_DATA.map((item) => item.image)];

export default function InteractiveTapestry() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % SLIDES.length);
    }, AUTO_INTERVAL);
    return () => clearTimeout(timer);
  }, [index, paused]);

  const activeId = index === 0 ? null : TAPESTRY_DATA[index - 1].id;
  const handleLabelClick = (i: number) => {
    setIndex((prev) => (prev === i ? 0 : i));
  };

  return (
    <section
      className={styles.section}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.container}>

        <div className={styles.innerImageWrapper}>
          {/* Xếp chồng tất cả ảnh, chỉ ảnh đang chọn có opacity 1 -> chuyển ảnh mượt (fade) */}
          {SLIDES.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={i === 0 ? 'Inner Tapestry' : ''}
              aria-hidden={i !== index}
              fill
              className={styles.innerImage}
              style={{ opacity: i === index ? 1 : 0 }}
              sizes="(max-width: 1024px) 50vw, 400px"
              priority
            />
          ))}
        </div>

        <div className={styles.flowerWrapper}>
          <Image
            src="/image/home.png"
            alt="Flower Frame"
            fill
            className={styles.flowerImage}
            sizes="(max-width: 1024px) 100vw, 1125px"
            priority
          />
        </div>

        <div className={styles.labelsContainer}>
          {TAPESTRY_DATA.map((item, i) => (
            <button
              key={item.id}
              className={`${styles.labelButton} ${activeId === item.id ? styles.activeLabel : ''}`}
              style={item.position}
              onClick={() => handleLabelClick(i + 1)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.bottomText}>
          <p>
            Here, every tapestry is knitted by and with<br/>
            Khanh Phuong - a windbell with direction. I<br/>
            hope those who wear this purpose will pass<br/>
            on the spirit of positivity and harmony!
          </p>
        </div>

        {/* Nút View my resume */}
        <a 
          href="https://drive.google.com/file/d/1U9-MTN5TYek7Xk5UJ1ow0elRh8C2nm_Z/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          View my resume
        </a>
      </div>
    </section>
  );
}