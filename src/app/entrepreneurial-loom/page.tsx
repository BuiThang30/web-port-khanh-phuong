import React from "react";
import Image from "next/image";
import Slide from "@/components/slide/slide";
import styles from "./page.module.css";

const IMG = (n: number) => `/image/entrepreneunrial-loom-${n}.png`;

export default function EntrepreneurialLoom() {
  return (
    <div className={styles.page}>
      <section className={styles.heroSection}>
        <Image
          className={styles.heroImage}
          src={IMG(1)}
          alt="Gemini generated visual — heirloom loom"
          fill
          sizes="100vw"
          priority
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroText}>
          <div className={styles.bodyText}>
            <p>
              Right here, amid the industrial rhythm of my mother&rsquo;s
              heirloom loom, an antique older than her grandparents, all the
              amazing textile makeovers took place in our home. For exposed
              seam, using the loom would help to scale stitches consistently.
              Operating it requires total harmony, a simultaneous dance of hands
              and feet. Just as that loom is engineered to scale stitches
              consistently, entrepreneurship is designed to scale goodness to
              the community.
            </p>
            <p>
              In my urban city life, weekends were an escape into two distinct
              worlds. In one, I trailed my mother through bustling wet markets,
              watching her effortlessly trade with &quot;sisters and
              brothers&quot; she had known for decades. In the other, my father
              brought us home to his family&apos;s agricultural sanctuary, a
              fertile Eden bearing endless fruit across generations. These
              empires were built by my grandparents: market trade on my
              mother&rsquo;s side, agribusiness on my father&rsquo;s.
            </p>
            <p>
              Naturally, entrepreneurship is in my blood. But I operate in a
              different era. For my ancestors, business was a burden of
              survival; for me, it is a creative calling to pioneer change.
            </p>
            <p>
              Vietnam planted my seed. Singapore&rsquo;s high-octane startup
              ecosystem with visionary leaders like Lee Kuan Yew has put the
              fire in me to venture beyond. After two start-ups, I not only work
              alongside like-minded entrepreneurs but also touch the lives of
              people from all walks of life and learn from great leaders at both
              the industry and governance!
            </p>
            <p>
              Walk with me through my entrepreneurial loom, where you may stitch
              your own causes.
              <br />
              (If you have a wild, paradigm-shifting startup idea, let&rsquo;s
              have a coffee chat and bring it to life.)
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>
            6k herbal tea family business | Founder
          </h2>

          <div className={styles.bodyText}>
            <p>
              6k and a bottle. No artificial sugar. Yet the impeccable amount of
              sweetness naturally extracted from the herbal leaves makes Ms
              Thu&apos;s herbal tea unbeatable.
            </p>
            <p>
              In Saigon&rsquo;s scorching heat, most teenagers crave the
              saccharine street drinks that fuel rising diabetes rates. I
              initially shared this obsession, rejecting the sugar-free herbal
              tea my mother, Ms. Thu, brewed from scratch. Yet, watching my
              neighborhood succumb to these noxious, convenient beverages
              sparked a realization: why not scale up a healthier alternative?
            </p>
            <p>
              Driven to share my mom&apos;s recipe and protect my community, I
              launched a street-side family venture. My accountant parents and
              business-major sisters rallied behind me: Dad secured bottles, Mom
              brewed the soulful tea, and my siblings and I managed the
              marketing. Selling from a simple thermal cooler on the pavement,
              we offered refreshing, immune-boosting bottles for just 6,000 VND.
            </p>
            <p>
              By summer&apos;s end, we earned 300,000 VND. More than the profit,
              this simple startup taught me how a small project can scale into
              meaningful impact. It became my first language of care, proving
              that simple, heartfelt interventions can combat widespread health
              issues, one bottle at a time.
            </p>
          </div>

          <div className={styles.photoRow}>
            <figure>
              <Image
                src={IMG(2)}
                alt="Setting up"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className={styles.caption}>Setting up</figcaption>
            </figure>
            <figure>
              <Image
                src={IMG(3)}
                alt="First sale"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className={styles.caption}>First sale</figcaption>
            </figure>
            <figure>
              <Image
                src={IMG(4)}
                alt="Tricycle uncle"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className={styles.caption}>Tricycle uncle</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Pleave start-up</h2>

          <a
            href="https://www.instagram.com/pleavetheway/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.socialLink} ${styles.socialLinkCenter}`}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
            <span>pleavetheway</span>
          </a>

          <div className={`${styles.twoCol} ${styles.pleavePair}`}>
            <figure className={styles.tallFigure}>
              <Image
                src={IMG(5)}
                alt="Product Approval Application"
                width={773}
                height={552}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <figcaption className={styles.caption}>
                Product Approval Application
              </figcaption>
            </figure>
            <figure className={styles.tallFigure}>
              <Image
                src={IMG(6)}
                alt="Company best annual report"
                width={773}
                height={552}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <a
                className={styles.tallFigureLink}
                href="https://drive.google.com/file/d/1rqGwzBO-xw2XmniGmnGibtwLpF0xky0f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Company best annual report
              </a>
            </figure>
          </div>

          <div className={styles.bodyText} style={{ marginTop: 48 }}>
            <p>
              Reflecting on my 6k herbal tea business, the discarded plastic
              bottles nagged at me. Seeking a sustainable solution, I drew
              inspiration from Singapore&rsquo;s green initiatives to co-found
              Pleave, a student venture tackling single-use plastic in alignment
              with UNSDG 12.
            </p>
            <p>
              As President, I led our team using Design Thinking to transform
              flimsy plastic bags into durable yarns, weaving them into colorful
              bracelets and cup holders. We championed social causes, creating
              custom purple and white designs for Singapore&rsquo;s Purple
              Parade to support people with disabilities. Ultimately, Pleave
              generated a $270.10 profit, donated $150 to the Singapore
              Environment Council, and clinched the &quot;Best Annual
              Report&quot; award at the JA Company of the Year 2024. To us,
              saving the environment is not about making profit. We want to
              inspire a change of eco-friendly products that are both
              transformative yet accessible with affordable prices.
            </p>
            <p>
              Though Pleave has now liquidated, pitching to judges and
              networking with global changemakers solidified my macro-to-micro
              problem-solving. My entrepreneurial spirit to build a sustainable
              difference for humanity lives on.
            </p>
          </div>

          <div className={styles.slideWrapper}>
            <Slide
              items={[
                {
                  src: IMG(7),
                  alt: "58th National Day Parade",
                  caption: "Scholars at the 58th National Day Parade",
                  width: 550,
                  height: 412,
                },
                {
                  src: IMG(8),
                  alt: "Pitching to judge",
                  caption: "Pitching to judge",
                  width: 553,
                  height: 412,
                },
                {
                  src: IMG(9),
                  alt: "Clinching our Best Annual Report",
                  caption: "Clinching our Best Annual Report",
                  width: 553,
                  height: 412,
                },
                {
                  src: IMG(10),
                  alt: "Plastic friendship bracelet",
                  caption: "1st series: Plastic friendship bracelet",
                  width: 553,
                  height: 412,
                },
                {
                  src: IMG(11),
                  alt: "Plastic friendship bracelet",
                  caption:
                    "2nd series: DNA bracelets for Purple Parade - celebrating PWDs in Singapore",
                  width: 307,
                  height: 412,
                },
              ]}
              imageHeight={280}
              speedSeconds={26}
            />
          </div>

          <div className={styles.twoCol} style={{ marginTop: 60 }}>
            <figure className={styles.tallFigure}>
              <div className={styles.imgBox}>
                <Image
                  src={IMG(12)}
                  alt="Our Trophy"
                  fill
                  className={styles.fillImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <figcaption className={styles.caption}>Our Trophy</figcaption>
            </figure>
            <div className={styles.stackedCol}>
              <figure>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(13)}
                    alt="Certificate of Completion of JA Company Program"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className={styles.caption}>
                  Certificate
                  <br />
                  Completion of JA Company Program
                </figcaption>
              </figure>
              <figure>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(14)}
                    alt="Certificate Presenter at the 2023 JA Singapore COY"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <figcaption className={styles.caption}>
                  Certificate | Presenter at the 2023
                  <br />
                  JA Singapore Company of the Year Competition
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <h2 className={styles.sectionTitle}>Econtreprenurship Events</h2>

          <div className={styles.twoCol}>
            {/* Cột trái: Chứa 2 ảnh và 2 dòng chú thích */}
            <div className={styles.leftColEvents}>
              <div className={styles.eventPhotoRow}>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(15)}
                    alt="6th ESS Distinguished Public Lecture"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(16)}
                    alt="17th Singapore Economic Policy Forum"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.eventCaptionRow}>
                <figcaption className={styles.eventCaption}>
                  6th ESS Distinguished Public Lecture
                </figcaption>
                <figcaption className={styles.eventCaption}>
                  17th Singapore Economic Policy Forum
                </figcaption>
              </div>
            </div>

            {/* Cột phải: Chứa văn bản và link Instagram */}
            <div className={styles.bodyText}>
              <p>
                Serving as a Hwa Chong Economics Moderator exposed me to
                visionary leaders shaping global economic landscapes when
                volunteering at Economic Events and Seminars. Engaging with
                Senior Minister Lee Hsien Loong at the ESS Annual Dinner and
                Professor Jeffrey Sachs taught me that economic frameworks are
                not just theoretical models, but powerful toolkits for driving
                human-centric solutions.
              </p>
              <p>
                Listening to their perspectives transformed my understanding of
                healthcare and education. I no longer saw them merely as social
                sectors, but as critical market infrastructures: a well-designed
                healthcare system protects a productive workforce, while
                equitable education builds the human capital necessary for
                long-term growth.
              </p>
              <p>
                True enterprise is about spotting systemic gaps, like healthcare
                or environmental inefficiencies, and building viable, scalable
                models to solve them. These leaders inspired me to view
                entrepreneurship not simply as a path to commercial profit, but
                as a vehicle to engineer sustainable, real-world impact that
                directly strengthens society.
              </p>
              
              <a
                href="https://www.instagram.com/hc.econs/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLinkInstagram}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                <span>Follow us @hc.econs</span>
              </a>
            </div>
          </div>

          {/* Phần 69th ESS Annual Dinner - Bỏ alignItems: "center" để về flex-start */}
          <div className={styles.twoCol} style={{ marginTop: 70 }}>
            <div className={styles.dinnerTextCol}>
              <p className={styles.quoteText}>
                In the 69th ESS Annual Dinner, Senior Prime Minister Lee Hsien
                Loong reminded youth like me not &quot;lie flat&quot; which I kept
                practising what he said: remain aspirational and avoid passivity.
              </p>
            </div>
            
            <figure className={styles.dinnerImageCol}>
              <div className={styles.dinnerRow}>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(17)}
                    alt="69th ESS Annual Dinner photo 1"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(18)}
                    alt="69th ESS Annual Dinner photo 2"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.imgBox}>
                  <Image
                    src={IMG(19)}
                    alt="69th ESS Annual Dinner photo 3"
                    fill
                    className={styles.fillImg}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <figcaption className={styles.caption} style={{ marginTop: 14 }}>
                69th ESS Annual Dinner
              </figcaption>
            </figure>
          </div>

          <div className={styles.twoCol} style={{ marginTop: 70 }}>
            <figure className={styles.tallFigure} style={{ margin: 0 }}>
              <div className={styles.imgBox} style={{ height: 460 }}>
                <Image
                  src={IMG(20)}
                  alt="Chatting with Mr. James Dong on his Alibaba quest"
                  fill
                  className={styles.fillImg}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </figure>
            <div className={styles.bodyText}>
              <p>
                The International Marketplace President at Alibaba, James
                Dong&apos;s quest was also a phenomenal one: not one that
                changed his life but others lives. An engineering student, upon
                learning of an Indian textile shop&apos;s owner who was able to
                finance his son&apos;s study in the US via scaling his business
                on an e-commerce platform, he dedicated himself to Alibaba and
                braved it through market storms. Its founder, Jack Ma, started
                from negative, accepting a loan from a cleaner. Their quests
                inspire me to begin true entrepreneurship at zero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}