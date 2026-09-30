"use client";

import React from "react";
import Photo from "@/components/photo/photo";
import Slide from "@/components/slide/slide";
import FadeSlide from "@/components/fade-slide/fade-slide";
import ScrollRow from "@/components/scroll-row/scroll-row";
import styles from "./page.module.css";

const IMG = (n: number) => `/image/global-fabric-${n}.png`;

const range = (start: number, count: number, alt: string) =>
  Array.from({ length: count }, (_, i) => ({
    src: IMG(start + i),
    alt: `${alt} ${i + 1}`,
  }));

const SILK_IMAGES = range(1, 3, "Silk brocade");
const MAKING_IMAGES = range(4, 5, "Indigo batik in the making");
const BEESWAX_IMAGES = range(9, 2, "Beeswax batik");

// Các mảng ảnh cho phần MUN
const HWA_CHONG_IMAGES = range(18, 5, "Chair of the CSTD"); 
const SMUN_IMAGES = range(23, 3, "Delegate of Japan at the WHO"); 
const TOMUN_IMAGES = range(26, 4, "TOMUN conference"); 

// Các mảng ảnh tự chuyển động cho phần ISYF
const CANOPUS_IMAGES = range(33, 3, "Group Canopus");
const KEYNOTE_IMAGES = range(37, 2, "Keynote lecture");

export default function GlobalFabric() {
  return (
    <div className={styles.page}>
      <section className={styles.introSection}>
        <div className={styles.content}>
          <div className={`${styles.narrow} ${styles.body}`}>
            <p>
              A tapestry speaking of a whole civilisation is not made from a
              single thread. From the silk brocade of the áo dài to the batik of
              the kebaya, every pattern, colour, and stitch carries a culture of
              its own. Yet embroidery has a peculiar power: different threads,
              each retaining their own colour and character, can be woven
              together to create something stronger and more beautiful than any
              could form alone.
            </p>
            <p>
              Living between different worlds has made me curious about what
              happens when their threads meet. I believe a stronger global
              fabric is woven not by erasing our differences, but by stitching
              them together. I strive to weave different cultures, perspectives,
              and local insights into one shared fabric capable of reaching
              beyond borders.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.scrollTitle}>
            Scroll down to see my textile collection!
          </h2>

          <div className={styles.split}>
            <div>
              <h3 className={styles.labelBox}>Silk Brocade</h3>
              <p className={styles.body}>
                I often pride myself wearing the Vietnamese heritage, imprinted
                by the hands of the meticulous silk artisans. Unlike printed
                fabric, brocade is built directly on the loom: silk threads are
                stretched tightly as the warp, while coloured threads are
                carefully lifted and passed through to form each motif: dragon
                and phoenix, apricot blossoms and bamboo.
              </p>
            </div>
            <FadeSlide
              images={SILK_IMAGES}
              width={815}
              height={655}
              interval={4000}
            />
          </div>

          <div className={styles.split}>
            <div className={styles.pair}>
              <figure className={styles.captioned}>
                <FadeSlide
                  images={MAKING_IMAGES}
                  width={400}
                  height={535}
                  interval={4500}
                />
                <figcaption className={styles.caption}>
                  In the making
                </figcaption>
              </figure>
              <figure className={styles.captioned}>
                <FadeSlide
                  images={BEESWAX_IMAGES}
                  width={400}
                  height={535}
                  interval={5000}
                />
                <figcaption className={styles.caption}>Beeswax</figcaption>
              </figure>
            </div>
            <div>
              <h3 className={styles.labelBox}>
                Indigo Batik - Dao Tien ethnic community (Hoa Binh, Vietnam)
              </h3>
              <p className={styles.body}>
                Beyond the industrial brocade, Vietnam possessed a vibrant
                wardrobe of other ethnicities from natural dyes which I had the
                chance to customise one lotus fabric. Beeswax is used with
                geometric bamboo stamps to create wax-resist patterns, leaving
                intricate white designs against the dark indigo dye. Mastering
                the curved shape of the lotus really made me admire how
                intricate and talented the Dao Tien people are!
              </p>
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.labelBox}>
              Batik and embroidered wear - Peranakan Museum, Singapore
            </h3>
            <div>
              <p className={styles.body}>
                Coming from a homogenous Vietnam, I am mesmerised by the
                multicultural depth in Singapore depicted in the pattern of
                Perankan wear. Batik used similar techniques of wax to imprint
                patterns on cotton. Let&apos;s see how the Javanese diasporas
                carried culture across borders!
              </p>
            </div>
          </div>
        </div>

        <div className={styles.rowBleed}>
          <ScrollRow>
            <figure className={styles.viewerItem}>
              <Photo
                src={IMG(11)}
                alt="Batik Hokokai"
                width={369}
                height={494}
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>Batik Hokokai during the Japanese occupation</span>
              </figcaption>
            </figure>

            <figure className={`${styles.viewerItem} ${styles.viewerWide}`}>
              <div className={styles.row}>
                <Photo
                  grow
                  src={IMG(12)}
                  alt="Peranakan wedding wear 1"
                  width={369}
                  height={494}
                />
                <Photo
                  grow
                  src={IMG(13)}
                  alt="Peranakan wedding wear 2"
                  width={369}
                  height={494}
                />
                <Photo
                  grow
                  src={IMG(14)}
                  alt="Peranakan wedding wear 3"
                  width={369}
                  height={494}
                />
              </div>
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>
                  Peranakan wedding wear with peacock, a national bird of
                  Indian, pattern
                </span>
                <br />
                Peacock alongside phoenix represents pairing of male and female
                synergies, the yang and yin principles of Daoist belief
              </figcaption>
            </figure>

            <figure className={`${styles.viewerItem} ${styles.viewerItemNarrow}`}>
              <Photo
                src={IMG(15)}
                alt="Java batiks with Indian influences"
                width={363}
                height={494}
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>Java batiks with Indian influences</span>
              </figcaption>
            </figure>

            <figure className={`${styles.viewerItem} ${styles.viewerHorizontal}`}>
              <Photo
                src={IMG(16)}
                alt="Batik Belanda"
                width={750}
                height={494}
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>
                  Batik Belanda - Indo-European women crafts inspired by Dutch fashion, Christian symbols and European fairy tales
                </span>
                <br />
                Snow White batik
              </figcaption>
            </figure>

            <figure className={`${styles.viewerItem} ${styles.viewerItemNarrow}`}>
              <Photo
                src={IMG(17)}
                alt="Manchester prints"
                width={363}
                height={494}
              />
              <figcaption className={styles.caption}>
                <span className={styles.captionStrong}>Manchester prints mass-produced by Britain&apos;s Industrial Revolution</span>
              </figcaption>
            </figure>
          </ScrollRow>
        </div>
      </section>

      <section id="model-united-nations" className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.banner}>Model United Nations</h2>

          <div className={styles.split}>
            <div>
              <h3 className={styles.subHeading}>
                Hwa Chong Conflict Resolution &amp; Inquiry XIV
              </h3>
              <div className={styles.body}>
                <p>
                  Nurturing my dream of becoming a doctor where patients
                  actively take charge of their health, I wanted to bring AI in
                  healthcare to Hwa Chong’s “Forging Concord for Tomorrow.”
                  While writing my 29-page study guide, I became increasingly
                  conscious of AI’s risks, from bias and privacy to the
                  difficulty of governing a non-binding CSTD.
                </p>
                <p>
                  Chairing 20 delegates, I clashed with my co-chairs over
                  guiding a beginner council. They favoured letting debate flow;
                  I wanted to actively empower quieter states like Rwanda
                  against domineering delegations. Our deadlock ended not
                  through authority, but creativity: we collaboratively scripted
                  a “Political Actor” plot to subtly steer discussion. I
                  realised I am more nurturing, and more interventionist, than I
                  thought. Inclusive leadership, I learned, is not about
                  controlling the room, but intentionally creating space for
                  voices that might otherwise disappear.
                </p>
              </div>
            </div>
            <figure className={styles.captioned}>
              <FadeSlide
                images={HWA_CHONG_IMAGES}
                width={850}
                height={502}
                interval={4000}
              />
              <figcaption className={styles.caption}>
                Chair of the United Nations Commission on Science and Technology
                for Development
                <br />
                Study guide:{" "}
                <a
                  className={styles.underline}
                  href="https://drive.google.com/file/d/1h4aQMVT5WWyFFcWK73GRhxFAgM4yb-9H/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CSTD Study Guide.pdf
                </a>
              </figcaption>
            </figure>
          </div>

          <div className={styles.split}>
            <figure className={styles.captioned}>
              <FadeSlide
                images={SMUN_IMAGES}
                width={850}
                height={586}
                interval={4500}
              />
              <figcaption className={styles.caption}>
                Delegate of Japan of the World Health Organisation
              </figcaption>
            </figure>
            <div>
              <h3 className={styles.subHeading}>
                Singapore Model United Nations 2026
              </h3>
              <div className={styles.body}>
                <p>
                  After chairing CSTD, I wanted to bring those questions on AI
                  and global health to SMUN, this time representing Japan in
                  WHO. Meeting delegates aged 12–23 from different backgrounds
                  and countries, including Estonia, made diplomacy feel much
                  more human than I had imagined. I worked closely with Brazil
                  and South Africa and became the main sponsor of a draft
                  resolution that passed. More than defending Japan’s interests
                  in labour, innovation and health data, I learned to find
                  common ground, supporting infrastructure in developing
                  countries without asking Japan to surrender what it needed to
                  advance.
                </p>
                <p>
                  Perhaps most memorable was discovering my own form of soft
                  power. When negotiations became consumed by budgets and
                  deficits, I brought everyone back to Wa, harmony, through
                  something I genuinely love: matcha. Asking delegates to raise
                  their placards if they enjoyed tea seemed almost playful, but
                  it opened the room to a shared cultural moment before I
                  connected harmony to global health. I learned that diplomacy
                  is not always about having the strongest argument; sometimes,
                  it is about finding something human enough to make people
                  listen.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.split}>
            <div>
              <h3 className={styles.subHeading}>
                Tran Dai Nghia Model United Nations Club
                <br />
                Head of Content
              </h3>
              <p className={styles.body}>
                Joining TOMUN, a MUN at my alma mater in Vietnam, I learned that
                content can be more than publicity: it can make politics
                accessible to young people. As Head of Content, I shaped social
                media posts, study guides, event content, and annual recaps,
                translating complex debates into stories that students could
                engage with beyond the conference room. Leading the Content
                sub-department also taught me that creating content is
                ultimately a collective process. I made it a point to listen to
                every member’s ideas and offer encouragement, especially when
                their work felt unseen.
              </p>
            </div>
            <FadeSlide
              images={TOMUN_IMAGES}
              width={850}
              height={410}
              interval={5000}
            />
          </div>
        </div>
      </section>

      <section id="international-science-youth-forum" className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.banner}>International Science Youth Forum</h2>

          <div className={styles.row}>
            <Photo
              grow
              src={IMG(30)}
              alt="ISYF 2026 photo 1"
              width={532}
              height={399}
            />
            <Photo
              grow
              src={IMG(31)}
              alt="ISYF 2026 photo 2"
              width={587}
              height={399}
            />
            <Photo
              grow
              src={IMG(32)}
              alt="ISYF 2026 photo 3"
              width={579}
              height={394}
            />
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <p className={styles.body}>
              Science may speak in equations and experiments, but it travels
              through people. At ISYF 2026 organised by my school Hwa Chong, I
              found myself moving between conversations with students from
              America, Malaysia, and beyond, each carrying a different question
              about the world. As part of the Ceremonies team, I helped bring
              Nobel Laureate keynote lectures to life, while hearing young
              researchers share discoveries from their own corners of the globe.
              Somewhere between the stage and these conversations, I realised
              that science becomes truly global when curiosity gives us a common
              language.
            </p>
            <a className={styles.linkButton} href="https://isyf.hci.edu.sg/">
              Website <span>→</span>
            </a>
          </div>

          {/* === 1. GROUP CANOPUS === */}
          <div className={styles.split}>
            <div>
              <h3 className={styles.subHeading}>1. Group Canopus</h3>
              <p className={styles.body}>
                The experience resonated deeply with my role as a leader and
                facilitator of Group Canopus, where I worked with students from
                Singapore and across continents. Despite our different
                backgrounds and disciplines, we bonded through the same
                curiosity and excitement for discovery. Though Canopus has since
                disbanded, I still think of it whenever I see that star in the
                sky, a reminder that, like constellations, connections formed
                through science can transcend borders and endure long after the
                moment has passed.
              </p>
            </div>
            <FadeSlide
              images={CANOPUS_IMAGES}
              width={551}
              height={387}
              interval={4000}
            />
          </div>

          {/* === 2. MASTERCLASS === */}
          <div className={styles.split}>
            {/* Ảnh tĩnh do không có yêu cầu chuyển */}
            <Photo
              src={IMG(36)}
              alt="Masterclass by Professor Joan B. Rose"
              width={554}
              height={364}
            />
            <div>
              <h3 className={styles.subHeading}>
                2. Masterclass by Nobel Laureates, Professor Joan B. Rose
              </h3>
              <p className={styles.body}>
                Her work in wastewater surveillance, microbial source tracking,
                and microbial risk assessment showed me how environmental
                science can detect invisible threats early and translate them
                into policies protecting entire communities. It shifted my view
                of public health from reactive treatment to preventive,
                systems-level action.
              </p>
            </div>
          </div>

          {/* === 3. KEYNOTE LECTURE === */}
          <div className={styles.split}>
            <div>
              <h3 className={styles.subHeading}>
                3. Keynote Lecture: Curiosity Unlocked: How questions drive
                curiosity in the age of AI?
              </h3>
              <p className={styles.body}>
                Professor Brian Schmidt’s keynote offered a different
                perspective. Coming from biology, I was fascinated by how his
                work on cosmology and the accelerating universe pushed me beyond
                my comfort zone. Together, both experiences reminded me that
                science, from microbes to galaxies, is ultimately about
                understanding the unknown and using that knowledge to improve
                lives.
              </p>
            </div>
            <FadeSlide
              images={KEYNOTE_IMAGES}
              width={555}
              height={380}
              interval={4500}
            />
          </div>
        </div>
      </section>

      <section id="asean-scholars" className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.banner}>ASEAN Scholar</h2>
          <div className={`${styles.narrow} ${styles.block}`}>
            <div className={styles.body}>
              <p>
                Four years ago, a fourteen-year-old me arrived in Singapore with
                a suitcase, a scholarship, and little idea of what lay ahead.
                What began as an education became four years of finding home, in
                boarding schools, classrooms, the Padang, and most importantly,
                among friends from across ASEAN. The Singaporean education we
                received gave us more than academic knowledge for an
                increasingly turbulent world; rooted in Kindness, Integrity,
                Responsibility, Gratitude and Honesty, it taught me that
                education is not simply about what we achieve for ourselves, but
                what we can contribute to others.
              </p>
              <p>
                As an ASEAN Scholar, I have tried to carry these values forward,
                sharing the Singapore I came to love, supporting younger
                scholars, and giving back to the community that once welcomed
                me. To me, the scholarship was never simply a ticket across a
                border; it was an invitation to belong, to grow with others, and
                eventually to leave the door open for those who come after us.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bleed}>
          <Slide
            items={[
              {
                src: IMG(39),
                alt: "ASEAN Scholars",
                caption: "ASEAN Scholars",
                width: 578,
                height: 372,
              },
              {
                src: IMG(40),
                alt: "Scholars from Hwa Chong",
                caption: "Scholars from Hwa Chong",
                width: 561,
                height: 372,
              },
              {
                src: IMG(41),
                alt: "Scholars at the 58th National Day Parade",
                caption: "Scholars at the 58th National Day Parade",
                width: 561,
                height: 372,
              },
              {
                src: IMG(42),
                alt: "Boarding friends from Saint Andrew's Hall",
                caption: "Boarding friends from Saint Andrew's Hall",
                width: 513,
                height: 382,
              },
            ]}
            imageHeight={280}
            speedSeconds={30}
          />
        </div>

        <div className={styles.content}>
          <div className={styles.split}>
            <Photo
              src={IMG(43)}
              alt="ASEAN Scholarship ambassador"
              width={554}
              height={546}
            />
            <div className={styles.body}>
              <p>
                As an ambassador of the scholarship, I hope to carry its spirit
                beyond Singapore through many online media, opening the same
                doors for others that were once opened for me.
              </p>
              <p>
                <a
                  className={styles.underline}
                  href="https://www.youtube.com/watch?v=AM6h2_zduHM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AH, THERE YOU ARE! | BUILDING BEAUTIFUL FRIENDSHIPS | MEET
                  &amp; GREET WITH KHANH PHUONG | HTV Kids
                </a>
              </p>
            </div>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.subHeading}>
              Junior College Executive Committee | Vice-President
            </h3>
            <div className={styles.body}>
              <p>
                Having benefited deeply from the ASEAN Scholarship, I wanted to
                give back to the scholar community as JC ExCo Vice-President -
                “by scholars, for scholars.” Working with twelve students from
                different schools, backgrounds and strengths, I supported
                Farewell for seniors, Mentorship for my batch, and Orientation
                for 130 juniors. Each event reminded me that service is often
                found in the small details that make people feel they belong.
              </p>
              <p>
                Leading Publicity also taught me to turn an instinct for design
                into something others could own. I learned to listen to
                different creative perspectives, communicate intangible ideas
                clearly, and nurture members’ strengths rather than impose my
                own. More than the events we delivered, JC ExCo left me with a
                deeper appreciation for the people who made Singapore feel like
                home and a desire to do the same for those who came after me.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.bleed}>
          <Slide
            items={[
              {
                src: IMG(44),
                alt: "JC ExCo",
                width: 552,
                height: 309,
              },
              {
                src: IMG(45),
                alt: "Senior Farewell",
                caption: "Senior Farewell",
                width: 552,
                height: 309,
              },
              {
                src: IMG(46),
                alt: "Mentorship Programme",
                caption: "Mentorship Programme",
                width: 552,
                height: 309,
              },
              {
                src: IMG(47),
                alt: "Mentorship Programme",
                caption: "Mentorship Programme",
                width: 552,
                height: 309,
              },
              {
                src: IMG(48),
                alt: "Junior Orientation",
                caption: "Junior Orientation",
                width: 466,
                height: 309,
              },

              {
                src: IMG(49),
                alt: "Our Socials",
                caption: "Our Socials",
                width: 207,
                height: 309,
              },
              
            ]}
            imageHeight={260}
            speedSeconds={30}
          />
        </div>

        <div className={styles.content}>
          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.subHeading}>
              ThinkSingapore Mentorship programme | Mentor
            </h3>
            <p className={styles.body}>
              Having benefited from the life-changing ASEAN Scholarship, I
              wanted to pay it forward to Vietnamese students dreaming of
              studying abroad. As an English and Math Mentor with
              ThinkSingapore, I taught 20+ students through weekly free online
              lessons in June 2023, from vocabulary and essays to Singapore
              Math, with more than 10 eventually securing admission. Yet I
              reminded them that a scholarship is only the beginning, not the
              destination. Drawing from my own journey, I shared not only how to
              get to Singapore, but the friendships, opportunities and
              experiences that made the journey meaningful. Reading their essays
              and nurturing their individual voices taught me that mentorship is
              not simply about opening a door, but inspiring someone to walk
              through it and discover what lies beyond.
            </p>
          </div>

          <div className={styles.row}>
            <Photo
              grow
              src={IMG(50)}
              alt="ThinkSingapore mentorship 1"
              width={452}
              height={390}
            />
            <Photo
              grow
              src={IMG(51)}
              alt="ThinkSingapore mentorship 2"
              width={315}
              height={390}
            />
            <Photo
              grow
              src={IMG(52)}
              alt="ThinkSingapore mentorship 3"
              width={555}
              height={390}
            />
            <Photo
              grow
              src={IMG(53)}
              alt="ThinkSingapore mentorship 4"
              width={396}
              height={390}
            />
          </div>
        </div>
      </section>

      <section id="community-service" className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.banner}>Community Service</h2>

          <div className={`${styles.narrow} ${styles.block}`}>
            <p className={styles.body}>
              Seeing smiles appear on people’s faces is my greatest happiness.
              The genuine grins of children at orphanages and the renewed vigour
              of the elderly showed me a wealth I could never put a price on.
            </p>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.subHeading}>Vietnam</h3>
            <p className={styles.body}>
              I had the privilege to taste this affluence right at the heart of
              Saigon. At Thi Nghe Orphanage, I joined my churchmates in bringing
              joy through dance, while at Vincente Retirement Home, my
              classmates and I offered both practical help and companionship to
              the elderly. At soup kitchens and community outreaches, I shared
              small things I had once taken for granted, from meals to simple
              medicines like gastric remedies and green oil. These experiences
              reminded me that wealth is not measured by what we possess, but by
              what we are able to share, and the relief, even momentary, we can
              bring to someone else’s day.
            </p>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <figure className={styles.captioned}>
              <Photo
                src={IMG(54)}
                alt="Soup kitchen in Ho Chi Minh City"
                width={1146}
                height={826}
              />
              <figcaption className={styles.caption}>
                Soup kitchen (Ho Chi Minh City)
              </figcaption>
            </figure>

            <figure className={styles.captioned}>
              <div className={styles.row}>
                <Photo
                  grow
                  src={IMG(55)}
                  alt="Soup kitchen 1"
                  width={370}
                  height={495}
                />
                <Photo
                  grow
                  src={IMG(56)}
                  alt="Soup kitchen 2"
                  width={371}
                  height={495}
                />
                <Photo
                  grow
                  src={IMG(57)}
                  alt="Soup kitchen 3"
                  width={361}
                  height={495}
                />
              </div>
              <figcaption className={styles.caption}>
                Soup kitchen (Ho Chi Minh City)
              </figcaption>
            </figure>

            <figure className={styles.captioned}>
              <div className={styles.row}>
                <Photo
                  grow
                  src={IMG(58)}
                  alt="Dao Tien community 1"
                  width={371}
                  height={495}
                />
                <Photo
                  grow
                  src={IMG(59)}
                  alt="Dao Tien community 2"
                  width={371}
                  height={495}
                />
                <Photo
                  grow
                  src={IMG(60)}
                  alt="Dao Tien community 3"
                  width={371}
                  height={495}
                />
              </div>
              <figcaption className={styles.caption}>
                Dao Tien Ethnic Community (Hoa Binh)
              </figcaption>
            </figure>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <p className={styles.body}>
              I had long dreamed of easing the burdens of Vietnam’s highland
              communities. Visiting the Dao Tien in Hoa Binh, a three-hour
              journey from Hanoi, my group brought milk, stationery and a
              water-filtration system after researching the village’s needs. Yet
              my greatest joy came from living and working alongside the women:
              mending roofs, moulding dó paper and gathering medicinal plants.
              As an urbanised child, I had unconsciously seen work as a means to
              an end: work enough to earn, then stop to enjoy. These women
              showed me otherwise. Their work never ended, yet neither did their
              sense of purpose. They renewed mine: to live, work and serve with
              the same quiet commitment.
            </p>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.subHeading}>Singapore</h3>
            <p className={styles.body}>
              Coming to Singapore has taught me that even the economically
              advanced society cares extensively for the last, the least and the
              lost. And the service learning projects embedded within
              educational institutions have brought structure to my
              volunteering.
            </p>
            <a className={styles.linkButton} href="https://cipcouncil2.wixstudio.com/viacouncil">
              Website <span>→</span>
            </a>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.centerTitle}>Values-in-action Councillor</h3>

            <div className={styles.groupRow}>
              <figure className={styles.group} style={{ flex: 448 }}>
                <div className={styles.row}>
                  <Photo
                    grow
                    src={IMG(61)}
                    alt="Kits for Kids"
                    width={448}
                    height={327}
                  />
                </div>
                <figcaption className={styles.caption}>
                  Kits for Kids
                </figcaption>
              </figure>
              <figure className={styles.group} style={{ flex: 688 }}>
                <div className={styles.row}>
                  <Photo
                    grow
                    src={IMG(62)}
                    alt="Bridging Hearts 1"
                    width={244}
                    height={328}
                  />
                  <Photo
                    grow
                    src={IMG(63)}
                    alt="Bridging Hearts 2"
                    width={429}
                    height={328}
                  />
                </div>
                <figcaption className={styles.caption}>
                  Bridging Hearts
                </figcaption>
              </figure>
            </div>

            <figure className={`${styles.captioned} ${styles.gap}`}>
              <div className={styles.row}>
                <Photo
                  grow
                  src={IMG(64)}
                  alt="Spark in the Dark 1"
                  width={406}
                  height={242}
                />
                <Photo
                  grow
                  src={IMG(65)}
                  alt="Spark in the Dark 2"
                  width={337}
                  height={242}
                />
                <Photo
                  grow
                  src={IMG(66)}
                  alt="Spark in the Dark 3"
                  width={374}
                  height={242}
                />
              </div>
              <figcaption className={styles.caption}>
                Spark in the Dark
              </figcaption>
            </figure>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <p className={styles.body}>
              In Hwa Chong, VIAC enabled me to multiply service beyond my own
              hands. As an SL Mentor, I learned to empower peers to find ways of
              serving that matched both their strengths and beneficiaries’
              needs. This became especially tangible in Batch Project 3, Spark
              in the Dark, where I helped pioneer VIAC’s first collaboration
              with MINDS. Seeing students rally around the colourful socks
              initiative and carnival reminded me that service is not simply
              about what I can give, but about creating spaces where others want
              to give too. As Website IC, I carried the same belief behind the
              scenes, turning the website into a living resource and archive so
              future students could navigate, learn from and build upon one
              another’s work. Whether mentoring projects or improving the
              systems behind them, I found purpose in nurturing a culture of
              giving that could outlast my individual contribution.
            </p>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <h3 className={styles.centerTitle}>Food from the Heart</h3>
            <div className={styles.row}>
              <Photo
                grow
                src={IMG(67)}
                alt="Food from the Heart 1"
                width={369}
                height={259}
              />
              <Photo
                grow
                src={IMG(68)}
                alt="Food from the Heart 2"
                width={346}
                height={259}
              />
              <Photo
                grow
                src={IMG(69)}
                alt="Food from the Heart 3"
                width={401}
                height={259}
              />
            </div>
          </div>

          <div className={`${styles.narrow} ${styles.block}`}>
            <p className={styles.body}>
              Being an environmental and humanitarian advocate, I remind myself
              that responsible consumption matters when others still go hungry.
              Inspired by a 2023 learning journey to a black soldier fly
              facility, my Sec 3 class collected near-expiry food for Food from
              the Heart, seeing how collective action can turn waste into
              nourishment. At Willing Hearts, serving meals to underprivileged
              families deepened this lesson: environmental responsibility and
              care for people are not separate causes, but shared acts of
              stewardship. Most meaningfully, these experiences showed me how
              service can bring people together around something larger than
              ourselves.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}