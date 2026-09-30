"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const IMG = (n: number) => `/image/creative-thread-${n}.png`;

// Component hộp tiêu đề có viền trang trí
const DecoratedBox = ({ title }: { title: string }) => (
  <div className={styles.decoratedBoxWrapper}>
    <div className={styles.decoratedBox}>
      <h3 className={styles.decoratedTitle}>{title}</h3>
    </div>
    <div className={`${styles.cornerBox} ${styles.cornerTL}`} />
    <div className={`${styles.cornerBox} ${styles.cornerTR}`} />
    <div className={`${styles.cornerBox} ${styles.cornerBL}`} />
    <div className={`${styles.cornerBox} ${styles.cornerBR}`} />
  </div>
);

// Component tự động chuyển ảnh (Crossfade)
const AutoFadeImage = ({ images, aspectRatio = "3 / 4" }: { images: string[], aspectRatio?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className={styles.imgBox} style={{ aspectRatio }}>
      {images.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Slide image ${i + 1}`}
          fill
          className={styles.fillImg}
          style={{
            opacity: i === currentIndex ? 1 : 0,
            transition: "opacity 1s ease-in-out",
            zIndex: i === currentIndex ? 1 : 0
          }}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ))}
    </div>
  );
};

// Nút Play dùng chung (hình tròn trắng + tam giác đen)
const PlayIcon = () => (
  <svg viewBox="0 0 24 24" fill="black" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Ảnh thumbnail có nút Play, bấm vào mở link sang trang khác
const VideoLinkBox = ({ src, link, alt }: { src: string, link: string, alt: string }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className={styles.videoLinkWrapper}>
    <div className={styles.imgBox} style={{ aspectRatio: "16 / 9" }}>
      <Image src={src} alt={alt} fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 50vw" />
      <div className={styles.playButtonOverlay}>
        <PlayIcon />
      </div>
    </div>
  </a>
);

// Video MP4 phát tại chỗ: hiện nút Play, bấm vào mới chạy
const VideoPlayerBox = ({ src, poster }: { src: string; poster?: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false); // đã bấm play ít nhất 1 lần
  const [paused, setPaused] = useState(true);

  const handlePlay = () => {
    videoRef.current?.play();
  };

  return (
    <div className={styles.imgBox} style={{ aspectRatio: "16 / 9" }}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        controls={started}
        className={styles.fillVideo}
        onPlay={() => { setStarted(true); setPaused(false); }}
        onPause={() => setPaused(true)}
        onEnded={() => setPaused(true)}
      />
      {paused && (
        <button
          type="button"
          aria-label="Play video"
          onClick={handlePlay}
          className={`${styles.playButtonOverlay} ${styles.playButtonClickable}`}
        >
          <PlayIcon />
        </button>
      )}
    </div>
  );
};

export default function CreativeThread() {
  return (
    <div className={styles.page}>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <p className={styles.introText}>
            Step into the atelier of my pure imagination where I stretch the
            limits of my body, hand and soul! Follow through to see how I found
            joy in weaving these threads but also sharing them with the people
            around me.
          </p>
        </div>
      </section>

      {/* ================= SECTION: EMBROIDERY ================= */}
      <div id="embroidery" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Embroidery</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.embroiderySectionUnique}>
          <div className={styles.embroideryRow1}>
            <div className={styles.embroideryText1}>
              <div className={styles.bodyText}>
                <p>
                  I have always looked up to my mother for how self-sufficient and
                  reliable she is, effortlessly mending our family&rsquo;s torn
                  clothes, almost an &ldquo;alchemist&rdquo; who could turn
                  something broken into something whole. Perhaps that inspired me
                  to learn my own first running and backstitches through Design
                  and Technology in Vietnamese primary school. Since then,
                  embroidery has become a way for me to create: every thread
                  differs in colour, thickness and stitch, yet together they form
                  something beautiful. I hope to carry this craft beyond myself,
                  sharing its threads with my community and weaving individual
                  contributions into something greater together.
                </p>
                <p>
                  This toolkit is my own Doraemon&rsquo;s pouch: not only keeping
                  my clothes together when I study abroad, but holding all the
                  little &ldquo;magic&rdquo; I need to make a new place feel like
                  home.
                </p>
              </div>
            </div>
            <div className={styles.embroideryImage1}>
              <div className={styles.imgBox} style={{ aspectRatio: "103 / 94" }}>
                <Image src={IMG(1)} alt="Embroidery hoop" fill className={styles.fillImg} sizes="(max-width: 1024px) 100vw, 638px" priority />
              </div>
            </div>
          </div>

          <div className={styles.embroideryRowItem}>
            <div className={styles.embroideryItemImg}>
              <AutoFadeImage images={[IMG(2), IMG(3), IMG(4)]} aspectRatio="3 / 4" />
            </div>
            <div className={styles.embroideryItemContent}>
              <DecoratedBox title="1. Aria Embroidery Arts Auction" />
              <div className={styles.bodyText}>
                <p>
                  Curating A Tapestry of Vietnamese Colors taught me that art can
                  do more than preserve heritage: it can create connection and
                  give back. Bringing embroidered floral hairpins into an
                  exhibition allowed me to share a piece of Vietnamese craft while
                  raising $1,200 for the Vietnam Cerebral Palsy Association.
                  Later, through The Essence of Vietnam, I combined visual art
                  with folk music, learning how different forms of culture can
                  come together to tell a richer story and support a cause. I
                  found joy in turning something I love, Vietnamese culture, into
                  a thread connecting people, creativity and service.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.embroideryRowItem}>
            <div className={styles.embroideryItemContent}>
              <DecoratedBox title="2. Gram Scrunchies" />
              <div className={styles.bodyText}>
                <p>
                  Enjoyed scrunchies as an accessory back then, my sisters and I
                  thought of scaling it. That&apos;s when I started learning to
                  use the industrial sewing machine at my house while my sisters
                  secured the silk and packaging and publicity. Our synergy
                  launched two amazing stocks of floral and food!
                </p>
              </div>
              <a href="https://www.instagram.com/scrunchie.gam/" target="_blank" rel="noopener noreferrer" className={styles.socialLinkInstagram}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>scrunchie.gam</span>
              </a>
            </div>
            <div className={styles.embroideryItemImg}>
              <div className={styles.scrunchiesRowImages}>
                <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 2" }}>
                  <Image src={IMG(5)} alt="Scrunchies 1" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
                <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 2" }}>
                  <Image src={IMG(6)} alt="Scrunchies 2" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
                <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 2" }}>
                  <Image src={IMG(7)} alt="Scrunchies 3" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.embroideryRowItem}>
            <div className={styles.embroideryItemImg}>
              <AutoFadeImage images={[IMG(8), IMG(9), IMG(10)]} aspectRatio="4 / 3" />
            </div>
            <div className={styles.embroideryItemContent}>
              <DecoratedBox title="3. Gift" />
              <div className={styles.bodyText}>
                <p>
                  On every birthday occasion, I will embroider their names on the
                  gifts, believing that there is really a beauty in
                  everyone&apos;s name.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================= SECTION: VIDEOGRAPHY ================= */}
      <div id="videography" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Videography</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.twoCol} style={{ alignItems: "center" }}>
          <div className={styles.col}>
            <div className={styles.bodyText}>
              <p>
                Inspired by how life-changing and uplifting the vlogs on Youtube
                are, I create my own Youtube channel called
                &quot;hellophuongday&quot; to share the footage of my vigorous
                teenagehood studying abroad. As simple as Capcut, technology and
                media can intrigue and connect people around the globe. I would
                consider myself as a seasonal Youtuber as I edit video out of zeal
                not out of profession.
              </p>
            </div>
          </div>
          <div className={styles.col}>
            <VideoLinkBox src="/image/creative-thread-video-1.png" link="https://www.youtube.com/watch?v=IYodNRvc3eU" alt="Vlog Thumbnail 1" />
          </div>
        </div>

        <div className={styles.twoCol} style={{ alignItems: "center" }}>
          <div className={styles.col}>
            <VideoLinkBox src="/image/creative-thread-video-2.png" link="https://phuongndk0604.wixsite.com/khanhphuongnguyend-1/hobbies" alt="Vlog Thumbnail 2" />
          </div>
          <div className={styles.col}>
            <div className={styles.bodyText}>
              <div className={styles.badgeFloatWrapper}>
                <Image src={IMG(32)} alt="Badge" width={300} height={200} className={styles.badgeImageFloat} />
              </div>
              <p>
                Inspired by how life-changing and uplifting the vlogs on
                Youtube are, I create my own Youtube channel called
                &quot;hellophuongday&quot; to share the footage of my vigorous
                teenagehood studying abroad. As simple as Capcut, technology and
                media can intrigue and connect people around the globe. I would
                consider myself as a seasonal Youtuber as I edit video out of zeal
                not out of profession.
              </p>
            </div>
          </div>
        </div>

        <h3 className={styles.galleryTitle}>My Gallery</h3>
        <div className={styles.galleryGrid}>
          {Array.from({ length: 12 }, (_, i) => i + 11).map((n) => (
            <div key={n} className={styles.imgBox} style={{ aspectRatio: "3 / 4" }}>
              <Image src={IMG(n)} alt={`Gallery image ${n}`} fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 33vw" />
            </div>
          ))}
        </div>
      </div>

      {/* ================= SECTION: SPORT ================= */}
      <div id="sports" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Sport</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.sportZigzagRow}>
          <div className={styles.sportTextCol}>
            <div className={styles.bodyText}>
              <p>
                Sports to me is the best way to build a company. As my parents
                stress on the importance of exercising, I also find myself
                attracted to the allure of sports, not because of the glamour of
                victory but the therapeutic and transformative impact that it
                brings. I enjoy teamsport as the camaraderie I earn is
                rewarding.
              </p>
              <p>
                When I was 12, I represented my class back in Vietnam in the
                Girl Basketball School Tournament and clinched the gold medal.
                Despite being nowhere near bouncing a ball, inspired by my
                friends, I quickly learned the moves and kept the morale of the
                team high. As the youth spirit never dies in me, I along with my
                housemates in the hostel clinched gold two consecutive years for
                Captain Girls Ball on the hostel Sports Day. The satisfaction
                and fulfillment sport rejuvenates my life as I know that I am
                capable and happiness is multiplier.
              </p>
            </div>
          </div>
          <div className={styles.sportImageCol}>
            <div className={styles.sportTopImagesContainer}>
              <div className={styles.sportTopImageMain}>
                <Image src={IMG(23)} alt="Medals" fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className={styles.sportTopImagesRight}>
                <div className={styles.sportRightImgBox}>
                  <Image src={IMG(24)} alt="Girls Basketball Team 1" fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
                <div className={styles.sportRightImgBox}>
                  <Image src={IMG(25)} alt="Girls Basketball Team 2" fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.sportZigzagRow}>
          <div className={styles.sportImageCol}>
            <div className={styles.skatingImagesRow}>
              <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 1.5" }}>
                <Image src={IMG(26)} alt="Skating 1" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
              <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 1.5" }}>
                <Image src={IMG(27)} alt="Skating 2" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
              <div className={styles.imgBox} style={{ flex: 1, aspectRatio: "1 / 1.5" }}>
                <Image src={IMG(28)} alt="Skating 3" fill className={styles.fillImg} sizes="(max-width: 768px) 33vw, 16vw" />
              </div>
            </div>
          </div>
          <div className={styles.sportTextCol}>
            <h3 className={styles.sportTitle}>SKATING</h3>
            <div className={styles.bodyText}>
              <p>
                I am an amateur skater, but perhaps that is what makes me love
                it. Skating taught me not to fear falling; sometimes, falling is
                part of moving forward. Navigating the rink with friends has
                also shown me how skating connects people through encouragement
                and laughter. To me, it is less about perfecting every move than
                finding courage to keep moving. One day, I hope to take this
                passion onto real ice and experience the thrill beyond the rink.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.sportZigzagRow}>
          <div className={styles.sportTextCol}>
            <h3 className={styles.sportTitle}>ARCHERY</h3>
            <div className={styles.bodyText}>
              <p>
                Archery is my left-handed flair! Archery challenges both the
                mind and body in a way few sports do. I enjoy the precision and
                discipline of establishing a consistent stance, draw and anchor
                point before each release, where even a slight change can shift
                the arrow&rsquo;s trajectory.
              </p>
            </div>
          </div>
          <div className={styles.sportImageCol}>
            <VideoPlayerBox src="/image/creative-thread-video-3.mp4" />
          </div>
        </div>
      </div>

      {/* ================= SECTION: CHOIR ================= */}
      <div id="choir" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Choir</h2>
      </div>

      <div className={styles.content}>
        <div className={styles.bodyTextCentered}>
          <p>
            Growing up, I listened to songs mainly through their melodies.
            Singing alto in choirs in Vietnam and Singapore changed how I hear
            music. I began to appreciate the quieter harmonies that I once
            barely noticed, realising that every voice has a role in shaping the
            whole. Singing for school and community occasions also showed me how
            music can be a form of service, connecting people through a shared
            voice. Christ Be Our Light remains one of my favourites, reminding
            me that even voices that do not carry the melody can help bring
            light to others.
          </p>
        </div>

        {/* HÀNG 1: 2 video YouTube có link chú thích gạch chân */}
        <div className={styles.twoCol}>
          <div className={styles.col}>
            <VideoLinkBox
              src="/image/creative-thread-video-4.png"
              link="https://www.youtube.com/watch?v=lYz7DKNUPHo&list=RDlYz7DKNUPHo&start_radio=1"
              alt="IJ call music video from my alma mater"
            />
            <a href="https://www.youtube.com/watch?v=lYz7DKNUPHo&list=RDlYz7DKNUPHo&start_radio=1" target="_blank" rel="noopener noreferrer" className={styles.choirLinkCentered}>
              IJ call music video from my alma mater
            </a>
          </div>
          <div className={styles.col}>
            <VideoLinkBox
              src="/image/creative-thread-video-5.png"
              link="https://www.youtube.com/watch?v=r7oB0Mc-vI4&list=RDr7oB0Mc-vI4&start_radio=1"
              alt="Distinction | Singapore Youth Festival 2023"
            />
            <a href="https://www.youtube.com/watch?v=r7oB0Mc-vI4&list=RDr7oB0Mc-vI4&start_radio=1" target="_blank" rel="noopener noreferrer" className={styles.choirLinkCentered}>
              Distinction | Singapore Youth Festival 2023
            </a>
          </div>
        </div>

        {/* HÀNG 2: ảnh tĩnh bên trái & video MP4 bên phải - chung 1 chú thích */}
        <div className={styles.twoCol} style={{ marginTop: 60 }}>
          <div className={styles.col}>
            <div className={styles.imgBox} style={{ aspectRatio: "16 / 9" }}>
              <Image src={IMG(29)} alt="Phu Hanh church choir" fill className={styles.fillImg} sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
          <div className={styles.col}>
            <VideoPlayerBox src="/image/creative-thread-video-6.mp4" />
          </div>
        </div>
        <p className={styles.choirNameCentered} style={{ marginTop: -20, marginBottom: 60 }}>Phu Hanh church choir</p>

        {/* HÀNG 3: 2 ảnh tĩnh - chung 1 chú thích */}
        <div className={styles.twoCol} style={{ marginTop: 20, alignItems: "center" }}>
          <div className={styles.col}>
            <div className={styles.imgBox} style={{ aspectRatio: "16 / 9" }}>
              <Image src={IMG(30)} alt="Cathedral choir 1" fill className={styles.fillImg} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.imgBox} style={{ aspectRatio: "16 / 9" }}>
              <Image src={IMG(31)} alt="Cathedral choir 2" fill className={styles.fillImg} sizes="(max-width: 768px) 50vw, 25vw" />
            </div>
          </div>
        </div>
        <p className={styles.choirNameCentered} style={{ marginTop: -20 }}>Cathedral of the Good Shepherd choir</p>

      </div>
    </div>
  );
}