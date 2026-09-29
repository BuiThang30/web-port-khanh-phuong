"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './InteractiveTapestry.module.css';

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

export default function InteractiveTapestry() {
  const [activeImage, setActiveImage] = useState('/image/home-a.png'); 
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleLabelClick = (id: string, imagePath: string) => {
    if (activeId === id) {
      setActiveImage('/image/home-a.png');
      setActiveId(null);
    } else {
      setActiveImage(imagePath);
      setActiveId(id);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.innerImageWrapper}>
          <Image 
            src={activeImage} 
            alt="Inner Tapestry" 
            fill
            className={styles.innerImage}
            sizes="(max-width: 1024px) 50vw, 400px"
            priority
          />
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
          {TAPESTRY_DATA.map((item) => (
            <button
              key={item.id}
              className={`${styles.labelButton} ${activeId === item.id ? styles.activeLabel : ''}`}
              style={item.position}
              onClick={() => handleLabelClick(item.id, item.image)}
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
      </div>
    </section>
  );
}