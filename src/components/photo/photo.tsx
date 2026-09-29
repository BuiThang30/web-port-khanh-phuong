import Image from "next/image";
import styles from "./photo.module.css";

interface PhotoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  grow?: boolean;
  sizes?: string;
}

export default function Photo({
  src,
  alt,
  width,
  height,
  grow = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: PhotoProps) {
  const ratio = width / height;
  return (
    <div
      className={styles.photo}
      style={{
        aspectRatio: `${width} / ${height}`,
        flex: grow ? `${ratio} 1 0` : undefined,
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className={styles.image} />
    </div>
  );
}