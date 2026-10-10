import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const AboutMe = () => {
  return (
    // .page định nghĩa biến --u (1 "đơn vị thiết kế" = 1px ở 1440px) cho toàn trang
    <div className={styles.page}>
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
            Born in the fertile soil of Vietnam and nurtured on the lush futuristic land of Singapore, I am the weave of the rich heritage of vast rice fields and the innovation of moving gardens. From math to healthcare to entrepreneurship, I enjoy embroidering life as interconnected threads. If I were to meet Fibonacci, Gregor Mendel and Alan Turing, I would invite them to map and stitch a strand of DNA on a digital embroider.
          </p>
        </div>
      </section>

      <section className={styles.colorsSection}>
        <div className={styles.colorsImageContent}>
          <Image
            src="/image/home-3.png"
            alt="Pink and green"
            width={740}
            height={600}
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
            <Link href="/needle-of-care#heal-heath" className={styles.healButton}>
              Heal Heath <span>→</span>
            </Link>
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
                  Dinh Tien Hoang Primary School<br />(2014-2019) | Class Chairperson
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
                  Tran Dai Nghia High School for the<br />Gifted (2019-2022)<br />Class Vice chairperson
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
                  Convent of the Holy Infant Jesus<br />(2023-2024) | Class Chairperson
                </h3>
                <p className={styles.timelineQuote}>&apos;Simple in virtue, steadfast in duty&apos;</p>
                <p className={styles.timelineDesc}>
                  Where I found new joy in science; had my first lab lessons and represented
                  school for a biology practical olympiad at Gardens by the Bay.<br /><br />
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
                  Hwa Chong Institution (2025-2026)<br />Values-In-Action Councillor
                </h3>
                <p className={styles.timelineQuote}>&apos;Live with passion, lead with compassion&apos;</p>
                <p className={styles.timelineDesc}>
                  Where I became an ambassador bringing the culture of giving in school and
                  beyond.<br /><br />
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
        </div>
      </section>
    </div>
  );
};

export default AboutMe;