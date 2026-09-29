"use client";

import React, { useRef } from "react";
import styles from "./scroll-row.module.css";

interface ScrollRowProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollRow({ children, className }: ScrollRowProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    const el = trackRef.current;
    if (!el) return;

    // Tính khoảng cách đã cuộn tối đa
    const maxScroll = el.scrollWidth - el.clientWidth;

    // Nếu đã lướt đến ảnh cuối cùng (sai số 10px), cuộn mượt mà về lại đầu tiên
    if (el.scrollLeft >= maxScroll - 10) {
      el.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      // Đẩy một lực bằng khoảng 60% màn hình, CSS scroll-snap sẽ tự động "hút" ảnh tiếp theo vào đúng mép lề cực kỳ êm ái
      el.scrollBy({ left: el.clientWidth * 0.6, behavior: "smooth" });
    }
  };

  return (
    <div className={`${styles.viewer} ${className ?? ""}`}>
      <div ref={trackRef} className={styles.track}>
        {children}
      </div>
      <button
        type="button"
        className={styles.next}
        onClick={handleNext}
        aria-label="Next images"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}