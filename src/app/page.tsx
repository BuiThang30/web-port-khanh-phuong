import React from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import InteractiveTapestry from "@/components/InteractiveTapestry/InteractiveTapestry";
import FooterDNA from "@/components/footer/footer";

const Hero = () => {
  return (
    <>
      <div className={styles.container}>
        <video
          className={styles.bgVideo}
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/image/background.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
        <div className={styles.textContainer}>
          <p className={styles.greetingText}>Xin chào!</p>
          <h2 className={styles.nameText}>PHUONG</h2>
          <p className={styles.subText}>Welcome to my tapestry!</p>
        </div>
      </div>

      <InteractiveTapestry /> 

      <section className={styles.aboutSection}>
        <div className={styles.aboutImageContent}>
          <Image
            src="/image/home-2.png" 
            alt="About the Tailor"
            width={1440}
            height={1725}
            className={styles.aboutImage}
            priority
          />
        </div>
        <div className={styles.aboutTextContent}>
          <h2 className={styles.aboutTitle}>About the Tailor</h2>
          <p className={styles.aboutDescription}>
            Born in the fertile soil of Vietnam and nurtured on the lush futuristic land of 
            Singapore, I am the weave of the rich heritage of vast rice fields and the innovation of 
            moving gardens. From math to healthcare to entrepreneurship, I enjoy embroidering 
            life as interconnected threads. If I were to meet Fibonacci, Gregor Mendel and Alan 
            Turing, I would invite them to map and stitch a strand of DNA on a digital embroider
          </p>
        </div>
      </section>

      <section className={styles.colorsSection}>
        <div className={styles.colorsImageContent}>
          <Image
            src="/image/home-3.png" 
            alt="Pink and green"
            width={1440}
            height={1200}
            className={styles.colorsImage}
            priority
          />
        </div>
        <div className={styles.colorsTextContent}>
          <p className={styles.colorsDescription}>
            Pink and green, the color of flowers and plants, bloom into my daily life 
            (Strawberry matcha, Wicked, clothing style and even personal belongings). Pink 
            reminds me of the passion and genuine joy in my work as well as bringing 
            warmth to people around me. Green, known as the middle hue in the color 
            wavelength, brings me close to nature and inspires me to emanate freshness 
            and originality.
          </p>
        </div>
      </section>

      <section className={styles.collectionSection}>
        <div className={styles.collectionContent}>
          <div className={styles.imageBoxWrapper}>
            <div className={styles.collectionImageContainer}>
              <Image
                src="/image/home-10.png" 
                alt="My pinky greeny collection"
                width={760}
                height={894}
                className={styles.collectionImage}
              />
            </div>
            <div className={styles.collectionLabel}>
              Introducing... my pinky greeny<br />collection!
            </div>
          </div>
          <div className={styles.inventionWrapper}>
            <h3 className={styles.inventionTitle}>
              Check out another wicked<br />invention of mine
            </h3>
            <button className={styles.healButton}>
              Heal Heath <span>→</span>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.faithSection}>
        <div className={styles.faithContainer}>
          <h2 className={styles.faithTitle}>My Journey of Faith</h2>
          <div className={styles.faithText}>
            <p>
              I always see life at peace and with miracles flared by the boundless Catholic spirit. Practicing the preaches, I feel the love of giving to not only the less privileged but also pray for the abundant.
            </p>
            <p>
              The Bible has reinforced my conviction to the mission of healing and statistics.
            </p>
            <p>
              God shows me the beauty and purpose of numbers: from the single lost sheep that outweighs a population of ninety-nine, to the seven steps of complete creation, the ten commandments that guide my principles and the twelve pillars that anchor a unified community. Within the chaotic crowd, he calculates, numbers, and cares for every single digit.
            </p>
            <p>
              The Creator also inspires me to become like him, an artisan who delicately captures every loose end and weaves us back into wholeness; from the quiet touch that instantly mends a chronic illness, to the mud and water used to open eyes that had never seen the light, down to the commanding voice that tells a broken body to pick up its mat and walk.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.faithImagesSection}>
        <div className={styles.faithImagesContainer}>
          <Image
            src="/image/home-4.png"
            alt="Journey of Faith Images"
            width={3840}
            height={3364}
            className={styles.faithCollageImage}
          />
        </div>
      </section>

      <section className={styles.blueprintSection}>
        <div className={styles.blueprintContainer}>
          
          <div className={styles.blueprintHeader}>
            <h2 className={styles.blueprintTitle}>My Blueprint</h2>
            <p className={styles.blueprintDescription}>
              Born into a family of scholars with both parents moving to town for university and 
              both sisters studying in the States, I forge a similar belief in the power of education to 
              empower and transform the world. Everywhere I visit I always collect the threads of 
              values that nurture who I am today. My transformational 12-year educational journey 
              has sown unique patterns in me!
            </p>
          </div>

          <div className={styles.timelineWrapper}>
            
            <div className={`${styles.timelineItem} ${styles.item1}`}>
              <div className={styles.timelineText}>
                <h3 className={styles.timelineSchool}>
                  Dinh Tien Hoang Primary School<br/>(2014-2019) | Class Chairperson
                </h3>
                <p className={styles.timelineQuote}>&apos;Unity - Confidence - Knowledge&apos;</p>
                <p className={styles.timelineDesc}>
                  Where I had my first calligraphy, counting, reading and leading a class; solving 
                  logic math problems like Pigeonhole theorem or counting time backwards and 
                  forwards thousand years brought me the most joy.
                </p>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src="/image/home-5.png" alt="Dinh Tien Hoang" width={700} height={500} className={styles.timelineImg} />
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.reverse} ${styles.item2}`}>
              <div className={styles.timelineText}>
                <h3 className={styles.timelineSchool}>
                  Tran Dai Nghia High School for the<br/>Gifted (2019-2022)<br/>Class Vice chairperson
                </h3>
                <p className={styles.timelineQuote}>&apos;Learning to know, learning to do, learning to be, learning to live together&apos;</p>
                <p className={styles.timelineDesc}>
                  Where my love in math kindled with a City Gold medal at 13; decorating my 
                  notebooks with geometry like the Butterfly Theorem or the British Flag put me 
                  at ease.
                </p>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src="/image/home-6.png" alt="Tran Dai Nghia" width={700} height={500} className={styles.timelineImg} />
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.item3}`}>
              <div className={styles.timelineText}>
                <h3 className={styles.timelineSchool}>
                  Convent of the Holy Infant Jesus<br/>(2023-2024) | Class Chairperson
                </h3>
                <p className={styles.timelineQuote}>&apos;Simple in virtue, steadfast in duty&apos;</p>
                <p className={styles.timelineDesc}>
                  Where I found new joy in science; had my first lab lessons and represented 
                  school for a biology practical olympiad at Gardens by the Bay.<br/><br/>
                  Where I found inspiring peers to build an start-up of retained plastic bracelets to 
                  address UNSDG 14, granted the best annual report and donated our profits 
                  to the Singapore Environment Council.
                </p>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src="/image/home-7.png" alt="Convent of the Holy Infant Jesus" width={700} height={500} className={styles.timelineImg} />
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.reverse} ${styles.item4}`}>
              <div className={styles.timelineText}>
                <h3 className={styles.timelineSchool}>
                  Hwa Chong Institution (2025-2026)<br/>Values-In-Action Councillor
                </h3>
                <p className={styles.timelineQuote}>&apos;Live with passion, lead with compassion&apos;</p>
                <p className={styles.timelineDesc}>
                  Where I became an ambassador bringing the culture of giving in school and 
                  beyond.<br/><br/>
                  Where I led inspirational events and global affairs discussions.
                </p>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src="/image/home-8.png" alt="Hwa Chong Institution" width={700} height={500} className={styles.timelineImg} />
              </div>
            </div>

            <div className={`${styles.timelineItem} ${styles.item5}`}>
              <div className={styles.timelineText}>
              </div>
              <div className={styles.timelineImageWrap}>
                <Image src="/image/home-9.png" alt="Hwa Chong Events" width={700} height={500} className={styles.timelineImg} />
              </div>
            </div>

          </div>
          
          <h2 className={styles.blueprintFooterTitle}>Keep unravelling!</h2>
        </div>
      </section>
      {/* --- PHẦN 8: FOOTER (CONNECT WITH ME) --- */}
      <section className={styles.footerSection}>
        <div className={styles.footerContainer}>

          <div className={styles.footerGraphic}>
            <FooterDNA
              className={styles.footerSvgImage}
              links={{
                needleOfCare: "#",
                meshOfCode: "#",
                globalFabric: "#",
                entrepreneurialLoom: "#",
                creativeThread: "#",
              }}
            />
          </div>

          <div className={styles.contactInfo}>
            <h2 className={styles.contactTitle}>Connect with me</h2>
            
            <div className={styles.contactBlock}>
              <a href="mailto:phuonganh6884@gmail.com" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>phuonganh6884@gmail.com</span>
              </a>
              <a href="tel:+6582427977" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+65 8242 7977</span>
              </a>
            </div>
            
            <hr className={styles.contactDivider} />
            
            <div className={styles.contactBlock}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                <span>Phuong Nguyen</span>
              </a>
              <a href="https://github.com/phuonganh6884-xyz" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                <span>phuonganh6884-xyz</span>
              </a>
            </div>
            
            <hr className={styles.contactDivider} />
            
            <div className={styles.contactBlock}>
              <a href="#" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                <span>Nguyen Thi Khanh Phuong</span>
              </a>
              <a href="https://instagram.com/khanhphuongnguyende" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                <span>khanhphuongnguyende</span>
              </a>
              <a href="https://www.tiktok.com/@hello.phuongday" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
                {/* SVG Tiktok đơn giản hóa */}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                <span>hello.phuongday</span>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;