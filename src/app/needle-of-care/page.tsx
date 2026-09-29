"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

// Tất cả ảnh đều mặc định là PNG
const IMG = (n: number) => `/image/needle-of-care-${n}.png`;
const VID = (n: number) => `/image/needle-of-care-${n}.mp4`;

// ================= DỮ LIỆU CHỨNG NHẬN =================
const CERTIFICATES = [
  { src: IMG(10), title: "Gold Award | Singapore Biology League | 2026" },
  { src: IMG(11), title: "World Food Prize Foundation Borlaug\nScholar | 2026" },
  { src: IMG(12), title: "Silver Award\nSingapore Biology League | 2025" },
  { src: IMG(13), title: "Bronze | Singapore Chemistry League | 2025" },
  { src: IMG(14), title: "Gold Medal\nSingapore Junior\nBiology Olympiad |\n2024" },
  { src: IMG(15), title: "Merit | Singapore Junior Chemistry Olympiad | 2024" },
  { src: IMG(16), title: "Silver | Singapore Junior\nBiology Olympiad | 2023" }
];

// ================= DỮ LIỆU ẢNH CUỘN PHẦN RESEARCH 2 =================
const RESEARCH_IMAGES = [
  { src: IMG(20), title: "Me preparing solutions for UV-Vis\nSpectroscopy" },
  { src: IMG(21), title: "Countless chromatograms on UVProbe..." },
  { src: IMG(22), title: "My favorite photo - the color gradient\ncreated from solutions of Ni(py-L-\nglutamine RSB)₂ at pH 3, 5, 7, 8 using\nsulfuric acid from right to left" },
  { src: IMG(23), title: "Centad - presentation" },
  { src: IMG(24), title: "Centad - exhibition" } 
];

// ================= DỮ LIỆU PHẦN SERIES (HOVER ĐỂ HIỆN NỘI DUNG) =================
const SERIES_ITEMS = [
  {
    img: IMG(37),
    title: "MEDONTRAY",
    desc: "A series taken inspiration from \"medical entrée\" meaning a nutritional dish which encapsulates ingredients in culinary delights that grant health benefits. Throughout this appetizing series, Heal Health will bring out the best of both worlds"
  },
  {
    img: IMG(38),
    title: "VACCENOLOGY",
    desc: "A series including various vaccines, a substance stimulate immunity to fight against infectious disease or pathogen"
  },
  {
    img: IMG(39),
    title: "HERMES",
    desc: "In biological realm, hormones, coming from the Greek word hormao, which means \"to set in motion\" or \"to stir up\", are chemical messengers that travel through the bloodstream to regulate various processes in the body, much like how Hermes delivered messages. They convey signals between organs, tissues, and cells, facilitating communication within the body."
  },
  {
    img: IMG(40),
    title: "FONDER",
    desc: "A Christmas-inspired series unwrapping the truth behind every tasty bite, breaking myths, sharing magic, and revealing how the foods we love fill our hearts as much as our bellies."
  }
];

// ================= DỮ LIỆU PHẦN INTERNSHIP =================
const GENSCRIPT_PHOTOS = [
  { src: IMG(48), cap: "Nano... drop!" },
  { src: IMG(49), cap: "Viewing the minuscule CHO (Chinese Hamster Ovary) 1" },
  { src: IMG(50), cap: "With my labmates 1" },
];

const USPHARMA_PHOTOS = [
  { src: IMG(52), cap: "Company" },
  { src: IMG(53), cap: "Quality Assurance Department" },
  { src: IMG(54), cap: "Quality Check Department" },
];

// ================= NHÃN MÀU KEM CÓ 4 Ô VUÔNG Ở GÓC =================
const LabelBox = ({ text, className = "" }: { text: string; className?: string }) => (
  <div className={`${styles.labelBox} ${className}`}>
    <span className={styles.labelText}>{text}</span>
    <i className={`${styles.labelCorner} ${styles.cTL}`} />
    <i className={`${styles.labelCorner} ${styles.cTR}`} />
    <i className={`${styles.labelCorner} ${styles.cBL}`} />
    <i className={`${styles.labelCorner} ${styles.cBR}`} />
  </div>
);

// ================= COMPONENT VIDEO TÙY CHỈNH =================
const CustomVideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <div 
      className={styles.customVideoContainer} 
      onClick={togglePlayPause}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={styles.customVideoElement}
      />
      {!isPlaying && (
        <div className={styles.playIconOverlay}>
          <svg viewBox="0 0 24 24" className={styles.playIconSvg}>
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </div>
      )}
    </div>
  );
};

// ================= KHUNG ẢNH CÓ CỤC VUÔNG =================
type FramedImageProps = {
  src: string;
  alt: string;
  aspect?: string;
  variant?: "lime" | "pink";
  caption?: string;
  sizes?: string;
};

const FramedImage = ({ src, alt, aspect, variant = "lime", caption, sizes }: FramedImageProps) => (
  <div
    className={`${styles.frame} ${variant === "lime" ? styles.frameLime : styles.framePink} ${
      aspect ? "" : styles.frameFull
    }`}
  >
    <div className={styles.frameInner} style={aspect ? { aspectRatio: aspect } : undefined}>
      <Image src={src} alt={alt} fill className={styles.fillImg} sizes={sizes} />
    </div>

    {variant === "lime" && (
      <>
        <span className={`${styles.handle} ${styles.hTL}`} />
        <span className={`${styles.handle} ${styles.hTR}`} />
        <span className={`${styles.handle} ${styles.hBL}`} />
        <span className={`${styles.handle} ${styles.hBR}`} />
      </>
    )}

    {caption && <LabelBox text={caption} className={styles.captionLabel} />}
  </div>
);

export default function NeedleOfCare() {
  const [heroImgIndex, setHeroImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroImgIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.page}>

      {/* ================= NEEDLE: THÊU & KHÂU VẾT THƯƠNG ================= */}
      <section className={styles.section}>
        <div className={styles.content}>

          <div className={styles.row}>
            <div className={styles.textCol}>
              <div className={styles.text}>
                <p>To me, the needle is where healing and creativity meet. In healthcare, to stitch is to heal. In embroidery, stitching is self-expression.</p>
                <p>Whether using a single thread for delicate fabrics or a multi-thread setup for heavy seams, the needle transforms raw materials. My favorite technique, the ladder stitch, creates invisible seams that erase tears completely. Is this not a biomimicry of the human body? Is that not how my flesh from the road accident healed: platelets holding the wound like pins, fibrin crossing itself into stitches?</p>
              </div>
            </div>
            <div className={styles.imgCol}>
              <FramedImage
                src={IMG(1)}
                alt="Embroidering on a hoop"
                aspect="401/421"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
          </div>

          <div className={`${styles.row} ${styles.rowImgFirst}`}>
            <div className={styles.imgCol}>
              <div className={styles.pair}>
                <FramedImage
                  src={IMG(2)}
                  alt="Suture practice strips"
                  aspect="192/262"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
                <FramedImage
                  src={IMG(3)}
                  alt="Practicing suturing on a pad"
                  aspect="192/262"
                  sizes="(max-width: 1024px) 45vw, 22vw"
                />
              </div>
            </div>
            <div className={styles.textCol}>
              <div className={styles.text}>
                <p>I use needles not only with threads on cloth but also with filaments on a dynamic, living canvas - the skin. Venturing into suturing, I felt a sense of deja vu yet mastery when squeezing a needle holder with the same fine motor discipline as stabilizing an embroidery hoop. Stitching too tightly causes ischemia, while stitching too loosely creates a dead space that invites infection.</p>
                <p>Now, I weave these stitching patterns into public health, pharmaceuticals, and molecular biology. From lab research to fieldwork, this thread empowers me to travel across Vietnam, Singapore, and the Kingdom of Lesotho - solving human health challenges one precise stitch at a time.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= MY FAVORITE LIFE SPECIMEN ================= */}
      <section className={styles.specimenSection}>
        <div className={styles.specimenBoard}>

          <svg
            className={styles.specimenLines}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="26" y1="18" x2="74" y2="82" />
            <line x1="74" y1="18" x2="26" y2="82" />
          </svg>

          <div className={`${styles.specItem} ${styles.specTL}`}>
            <FramedImage src={IMG(4)} alt="Plant stem cross-section under the microscope" variant="pink" sizes="(max-width: 768px) 45vw, 240px" />
          </div>
          <div className={`${styles.specItem} ${styles.specTR}`}>
            <FramedImage src={IMG(5)} alt="Specimen under the microscope" variant="pink" sizes="(max-width: 768px) 45vw, 240px" />
          </div>

          <div className={styles.specCenter}>
            <LabelBox text="My favorite life specimen" />
          </div>

          <div className={`${styles.specItem} ${styles.specBL}`}>
            <FramedImage src={IMG(6)} alt="Tissue specimen under the microscope" variant="pink" sizes="(max-width: 768px) 45vw, 240px" />
          </div>
          <div className={`${styles.specItem} ${styles.specBR}`}>
            <FramedImage src={IMG(7)} alt="Aedes mosquito under the microscope" variant="pink" caption="Aedes mosquito" sizes="(max-width: 768px) 45vw, 240px" />
          </div>

        </div>
      </section>

      {/* ================= ACHIEVEMENT ================= */}
      <section  id="achievement" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Achievement</h2>
      </section>

      <section className={styles.section} style={{ padding: "40px 0 100px 0" }}>
        
        <div className={styles.content}>
          <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto 80px auto" }}>
            <p>Impassioned by the intellectual thirst of science in research and clinics, I have never expected to become so salient and versatile as a cook adept at cutting potatoes, a cell artist, a statistician, a botanist, a microbiologist, a pharmacist, a policy-maker and a Nobel Laureate.</p>
          </div>
        </div>

        <div className={styles.marqueeContainer}>
          <div className={styles.marqueeTrack}>
            {[...CERTIFICATES, ...CERTIFICATES].map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <div className={styles.certImgBox}>
                  <img src={cert.src} alt={cert.title} className={styles.certImg} />
                </div>
                <p className={styles.certTitle}>{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HEALING GARDEN ================= */}
      <section className={styles.section} style={{ paddingBottom: 100 }}>
         <div className={styles.content}>
            
            <div className={styles.collageContainer}>
               <div className={styles.collageTextRow} style={{ top: "0", right: "0", width: "50%" }}>
                  <p className={styles.bodyText}>Since childhood, I have felt a profound, intrinsic connection to the natural landscape of my hometown, a place defined by its abundant crops and vibrant ecosystems. I possessed an almost instinctual understanding of its rhythms, from tracking the seasonal migrations of crabs along the riverbeds to navigating the dense local flora.</p>
               </div>

               <div className={styles.collageImgWrapper} style={{ top: "0%", left: "5%", width: "40%", zIndex: 3 }}>
                  <Image src={IMG(8)} alt="Childhood connection to nature" width={600} height={800} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
               </div>

               <div className={styles.collageImgWrapper} style={{ top: "15%", right: "5%", width: "45%", zIndex: 2 }}>
                  <Image src={IMG(9)} alt="Exploring botanical compounds" width={600} height={800} style={{ width: "100%", height: "auto", objectFit: "contain" }} />
               </div>

               <div className={styles.collageTextRow} style={{ top: "75%", left: "0", width: "45%" }}>
                  <p className={styles.bodyText}>Yet, biology helps me to understand the mechanism behind this nourishment. Born in the land of rich natural resources, I am drawn to biopharming as Vietnam&apos;s ethnic minorities demonstrate the untapped potency of local flora. My immersive stay with the Dao Tien tribe in the Hoa Binh highlands exposed me to indigenous extraction techniques and therapeutic botanical compounds.</p>
               </div>

               <div className={styles.collageTextRow} style={{ bottom: "0", right: "0", width: "50%" }}>
                  <p className={styles.bodyText}>Moving to Singapore, a City in Nature, I saw an urban parallel at the Singapore Botanic Gardens&apos; Healing Garden. Spanning 2.5 hectares, this tranquil retreat serves as a living plant bank by mapping over 400 Southeast Asian medicinal species.</p>
               </div>
            </div>

            <div className={styles.videoBoxContainer}>
               <div className={styles.videoTitleBox}>
                  <LabelBox text="Healing Garden - Outbound Journey Series:" />
               </div>
               <div className={styles.videoPlayerBox}>
                  <iframe 
                    width="100%" 
                    height="100%" 
                    src="https://www.youtube.com/embed/jEbn6zs64T8?si=MXTcYyTbSRYI4p0c" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                  </iframe>
               </div>
            </div>

            <div className={styles.centerBlock} style={{ marginTop: 120 }}>
               <div className={styles.imgBox} style={{ aspectRatio: "4/3", width: "100%", maxWidth: "800px", margin: "0 auto 20px" }}>
                  <Image src={IMG(17)} alt="Practical experience at Gardens By The Bay" fill className={styles.fillImg} sizes="(max-width: 1024px) 100vw, 800px" />
               </div>
               <p className={styles.captionTextLeft} style={{ textAlign: "center", color: "#fff5d0", fontWeight: 700, marginBottom: 40, maxWidth: "600px", margin: "0 auto 40px" }}>
                  Practical experience at Gardens By The Bay at the 2024 Singapore Junior Biology Olympiad
               </p>
               <div className={styles.bodyTextCentered} style={{ maxWidth: "900px", margin: "0 auto" }}>
                  <p>And miraculously, I stepped foot in the laboratory of Gardens by the Bay during the 2024 Singapore Junior Biology Olympiad. There, I analyzed how coastal mangroves serve dual purposes: acting as a physical shield against rising sea levels while producing unique bioactive secondary metabolites with broad therapeutic properties. Biology remains boundless because nature transcends geopolitical lines. I wish to go forth, explore its vastness and bridge indigenous field knowledge with clinical biopharming research to innovate scalable therapeutics</p>
               </div>
            </div>

         </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section id="research" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Research</h2>
      </section>

      <section className={styles.section} style={{ paddingTop: 0, paddingBottom: 60 }}>
        
        {/* === RESEARCH CARD 1: VACCINATION ESSAY === */}
        <div className={styles.researchCardAdvanced}>
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(18)} alt="Vaccination Essay" fill className={styles.fillImg} style={{ objectFit: "contain", backgroundColor: "#fff" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Should vaccination be mandatory in a public health emergency?</h3>
                      <ul className={styles.researchList}>
                         <li>Public Health</li>
                         <li>Writer</li>
                         <li>Shortlisted in top 17.5% in the John Locke Global Essay Prize</li>
                      </ul>
                      <div style={{ marginTop: 24, paddingLeft: 20 }}>
                         <a href="https://drive.google.com/file/d/1vH4IiiTVkhUMAboLu-jrQOWimJi6yBOs/view" className={styles.collectionBtn} target="_blank" rel="noopener noreferrer">Read my researched essay here →</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper}>
             <div className={styles.content}>
                <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto" }}>
                  <p>As a benefactor of the AstraZeneca vaccine, I sought to pay my debt through vaccinology research. However, the pandemic proved even the best vaccines fail without prudent governance. John Locke brings me to the realm of public health governance where I dived deep from historical philosophy like Locke&apos;s self-ownership or Judith Buteler&apos;s bodily vulnerability to modern historic events like Jacobson v. Massachusetts (1905) or divergent COVID-19 outcomes in the US and Singapore democratic states. Explore how I argue against Locke, with Locke and add on to his ideology that bodily interdependence is a state-resident communication and vice versa and must extend beyond an emergency by ensuring decent living standards for residents. Living under both socialism and democracy, I hope to redesign institutional check-and-balance frameworks that break the panic-neglect cycle of global health funding. The message I want to advocate is &quot;Politics must learn what biology has always known.&quot;</p>
                </div>
             </div>
          </div>
        </div>

        {/* === RESEARCH CARD 2: NICKEL COMPLEXES === */}
        <div className={styles.researchCardAdvanced} style={{ marginTop: 120 }}>
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(19)} alt="Nickel Complexes Research" fill className={styles.fillImg} style={{ objectFit: "contain", backgroundColor: "#fff" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Nickel (II) Complexes of Polar Amino Acid Reduced Schiff Bases: Synthesis, Structural Characterisation, and Crystallization Strategies</h3>
                      <ul className={styles.researchList}>
                         <li>Pharmaceutical</li>
                         <li>Co-author</li>
                         <li>Presented at the Hwa Chong CenTaD Exhibition 2026</li>
                      </ul>
                      <div style={{ marginTop: 24, paddingLeft: 20 }}>
                         <a href="https://drive.google.com/file/d/14fBcCXYJXsBrSIQhhiXdS12X81FwxqC7/view?usp=sharing" className={styles.collectionBtn} target="_blank" rel="noopener noreferrer">View my presentation →</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper} style={{ marginBottom: 80 }}>
             <div className={styles.content}>
                <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto" }}>
                  <p>If the periodic table is chemistry&apos;s shiniest treasure, the genetic code is biology&apos;s backbone. Fascinated by their intersection, I joined CenTaD at Hwa Chong Institution, researching amino-acid reduced Schiff base permutations to combat cancer. Eagerly, I proposed expanding my four-amino-acid nickel project to twenty. Dr. Tan reined me in: &quot;Focus on depth, not breadth.&quot;</p>
                  <p>Months of tracking permutations yielded nothing until Glutamine sparked a pellucid lattice under my flashlight. Overjoyed, I envisioned research fairs. Then came verification. My heart sank. By over-acidifying, I hadn&apos;t forged a novel complex; I had simply recrystallized the reactant. I recorded my missteps carefully, passing the data down so my juniors could find that elusive gem. Drug development is a punishing, often futile landscape, never a bed of roses. Yet, I balance this reality with fierce optimism. For underrepresented communities like Vietnam, breakthroughs demand unshakeable resilience to dismantle error until truth is won.</p>
                </div>
             </div>
          </div>
          
          <div className={styles.marqueeContainer}>
             <div className={styles.marqueeTrackResearch}>
               {[...RESEARCH_IMAGES, ...RESEARCH_IMAGES].map((item, idx) => (
                 <div key={idx} className={styles.researchSlideCard}>
                   <div className={styles.researchSlideImgBox}>
                      <Image src={item.src} alt={item.title} fill className={styles.fillImg} />
                   </div>
                   <p className={styles.researchSlideTitle}>{item.title}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* === RESEARCH CARD 3: EX VIVO CRISPR-CAS9 (CÓ VIDEO MP4 26) === */}
        <div className={styles.researchCardAdvanced} style={{ marginTop: 120 }}>
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(25)} alt="Rice University Certificate" fill className={styles.fillImg} style={{ objectFit: "contain", backgroundColor: "#fff" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Ex Vivo CRISPR-Cas9 Gene Editing Therapy for Curative Treatment of Transfusion-Dependent β-Thalassemia</h3>
                      <ul className={styles.researchList}>
                         <li>Presenter</li>
                         <li>Molecular biology</li>
                         <li>Pre-college course on Genome Engineering: Changing the Future of Medicine by Rice University</li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper}>
             <div className={styles.content}>
                <div className={styles.centerBlock} style={{ marginBottom: 60 }}>
                   <div className={styles.imgBox} style={{ aspectRatio: "16/9", width: "100%", maxWidth: "900px", border: "2px solid #242424" }}>
                      <CustomVideoPlayer src={VID(26)} />
                   </div>
                   <p className={styles.captionText} style={{ textAlign: "center", fontWeight: 700, marginTop: 16 }}>Research Proposal Video</p>
                </div>

                <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto" }}>
                  <p>Seeking to understand disease at a molecular level, I explored how gene editing could bring targeted, preventive therapies to underserved populations. Reading hundreds of pages of research wasn&apos;t as instantly rewarding as solving a math equation or embroidering a flower, but I knew it was necessary to do the greatest good. Because Southeast Asians face a high incidence of this genetic disease, I felt a flaming passion to reduce their immense medical and financial burdens. I had great fun designing a custom therapy to cover past loopholes, naming it &quot;Mutation-specific Beta-globin Homology-Directed Repair,&quot; and even engineered my own DNA sequence for Cas9 targeting. Based on my proposed testing phases, I project that with a Master&apos;s in Genetic Engineering, this technology could achieve approval by 2035.</p>
                </div>
             </div>
          </div>
        </div>

        {/* === RESEARCH CARD 4: DENGUE IMMUNOASSAY TOOLKIT === */}
        <div className={styles.researchCardAdvanced} style={{ marginTop: 120 }}>
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(27)} alt="Dengue Slayers Certificate" fill className={styles.fillImg} style={{ objectFit: "contain", backgroundColor: "#fff" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Home-based immunoassay toolkit against dengue</h3>
                      <ul className={styles.researchList}>
                         <li>Epidemiology</li>
                         <li>Presented at the Dengue Slayers Challenge 2025</li>
                      </ul>
                      <div style={{ marginTop: 24, paddingLeft: 20 }}>
                         <a href="#" className={styles.collectionBtn}>View my presentation →</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper} style={{ marginBottom: 60 }}>
             <div className={styles.content}>
                <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto" }}>
                  <p>Closing my window against NEA&apos;s thermal fogging made me wonder: is this investment wasteful? The Dengue Slayers Challenge showed me that battling dengue in tropical Asia&apos;s dense urban heat requires smarter community prevention, not just reactive treatment. Visiting Project Wolbachia, even placing my hand in a cage of male mosquitoes, inspired my team to complement NEA&apos;s strategy of producing infertile Aedes female mosquitoes.</p>
                  <p>Our team designed a reusable trap using lactic acid to attract Aedes mosquitoes, microwaves to immobilize them, and an immunoassay layer to detect the dengue NS1 protein, instantly alerting authorities. Presenting this to NEA, we learned from other innovative solutions like the winning portable scent device that deters mosquitoes. This experience taught me that public health must democratise vector control, empowering consumers to participate actively rather than passively enforcing measures. Moving forward, I want to optimize our biosensor for multi-serotype detection and scale it to under-resourced, endemic regions like Vietnam.</p>
                </div>
             </div>
          </div>
          
          <div className={styles.content}>
             <div className={styles.dengueGrid}>
                <div className={styles.dengueColLeft}>
                   <div className={styles.imgBox} style={{ aspectRatio: "4/3", marginBottom: 20 }}>
                      <Image src={IMG(28)} alt="Presentation stage" fill className={styles.fillImg} />
                   </div>
                   <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                      <Image src={IMG(29)} alt="Presenting to judges" fill className={styles.fillImg} />
                   </div>
                </div>
                <div className={styles.dengueColCenter}>
                   <div className={styles.imgBox} style={{ width: "100%", height: "100%" }}>
                      <Image src={IMG(30)} alt="Aedes under the microscope" fill className={styles.fillImg} style={{ objectFit: "cover" }} />
                   </div>
                   <p className={styles.captionTextLeft} style={{ textAlign: "center", marginTop: 12 }}>Aedes under the microscope</p>
                </div>
                <div className={styles.dengueColRight}>
                   <div className={styles.imgBox} style={{ width: "100%", height: "100%" }}>
                      <Image src={IMG(31)} alt="Hands in mosquito cave" fill className={styles.fillImg} style={{ objectFit: "cover" }} />
                   </div>
                   <p className={styles.captionTextLeft} style={{ textAlign: "center", marginTop: 12 }}>Hands in mosquito cave</p>
                </div>
             </div>
          </div>
        </div>

      </section>

      {/* ================= COMMUNITY ================= */}
      <section id="community" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Community</h2>
      </section>

      <section className={styles.communitySection}>
        <div className={styles.communityContent}>
          
          <div className={styles.centerBlock} style={{ marginBottom: 30 }}>
            <div className={styles.communityTag}>
              Migrant Health Matters Project
            </div>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.instagramLink}
            >
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>Instagram</span>
            </a>
          </div>

          <div className={styles.communityHero}>
            <Image 
              src={IMG(32)} 
              alt="Migrant Health Matters Project Team" 
              fill 
              style={{ objectFit: "cover", opacity: heroImgIndex === 0 ? 1 : 0, transition: "opacity 0.6s ease-in-out" }} 
            />
            <Image 
              src="/image/needle-of-care-32-b.png" 
              alt="Migrant Health Matters Project Team Alternative" 
              fill 
              style={{ objectFit: "cover", opacity: heroImgIndex === 1 ? 1 : 0, transition: "opacity 0.6s ease-in-out" }} 
            />
          </div>

          <div className={styles.communityTwoCol}>
            
            <div className={styles.col}>
              <p className={styles.bodyText} style={{ marginBottom: 30, color: "#fff5d0", fontWeight: 700 }}>
                As a fully funded scholar in Singapore, I often feel homesick from leaving home at such a tender age. Yet, I know I have it easier than other fellow foreigners, who have to eke out a fragile living and laboring gruelly under the sun.
              </p>
              <div className={styles.imgBox} style={{ width: "100%" }}>
                <Image 
                  src={IMG(34)} 
                  alt="Health screening in dormitories" 
                  width={500} 
                  height={650} 
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }} 
                />
              </div>
            </div>

            <div className={styles.col}>
              <div className={styles.imgBox} style={{ width: "100%", aspectRatio: "16/10", marginBottom: 35, backgroundColor: "#000" }}>
                <video
                  src={VID(33)}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              <div className={styles.bodyText}>
                <p style={{ marginBottom: 20 }}>
                  I then came to befriend these brothers and sisters, migrant blue-collar and domestic workers in Singapore, via health screenings in Kranji and Changi dormitories. Assisting with doctor triage and visual acuity testing, I saw how heat, dust, and demanding labor manifest as skin infections, eye strain, and high blood pressure. Being part of the screening process showed me how early detection, even through simple checks, can make a real difference before conditions worsen.
                </p>
                <p>
                  What stayed with me most was the human connection; small gestures and smiles bypassed language barriers to communicate care. I found deep joy where science meets compassion, functioning as a safety net for this vulnerable community. Beyond Singapore, I know countless other nameless brothers and sisters remain neglected, and I hope to nurture this service to democratize care, a basic human right, far beyond. The backbones in society deserve to be cared for!
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= HEAL HEATH ================= */}
      <section className={styles.sectionBarSub}>
        <h2 className={styles.sectionTitle} style={{ color: "#111" }}>Heal Heath</h2>
      </section>

      <section className={styles.section} style={{ paddingTop: 60, paddingBottom: 100 }}>
        <div className={styles.content}>
          
          <div className={styles.bodyTextCentered} style={{ maxWidth: 900, margin: "0 auto 40px auto" }}>
            <p style={{ marginBottom: 20 }}>
              From my migrant health worker screenings, I feel incomplete at the point of care as continuous monitoring is impossible as the screenings only happen once a month and depend on the number of volunteers.
            </p>
            <p>
              Why not digitise care? Along with my members, I incorporated the digital health screening based on fundamental health metrics on my brainchild Heal Health website. This mirrors the future of health that I envision where people take charge of their health and proactively take care of it with the personalized advice that the algorithm provides.
            </p>
          </div>

          <div className={styles.centerBlock} style={{ marginBottom: 50 }}>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.collectionBtn}
            >
              Give it a try here! →
            </a>
          </div>

          <div className={styles.bodyTextCentered} style={{ maxWidth: 900, margin: "0 auto 60px auto" }}>
            <p>
              I founded Heal Health in 2022, the calm after the COVID-19 storm to raise global physical and mental health awareness. The peripheral reason was partially for me to master the clinical jargon of biology which I fell in love learning about. Inspired by academic and self-directed discovery, the non-profit platform uses creative media and analogies across Facebook, Instagram, and YouTube. We translate complex science into comprehensible, applicable knowledge, inspiring the mass audience to become health-conscious through the project series below.
            </p>
          </div>

          {/* Khu vực 2 ảnh Heal Health: Trái 1 phần, Phải 3 phần */}
          <div className={styles.healGrid}>
            <div className={styles.healColLeft}>
              <div className={styles.healImgWrapper}>
                <Image 
                  src={IMG(35)} 
                  alt="Heal Health Profile" 
                  fill
                  style={{ objectFit: "contain", objectPosition: "center" }} 
                />
              </div>
            </div>
            <div className={styles.healColRight}>
              <div className={styles.healImgWrapper}>
                <Image 
                  src={IMG(36)} 
                  alt="Heal Health Global Reach Map" 
                  fill
                  style={{ objectFit: "contain", objectPosition: "center", backgroundColor: "#fff", borderRadius: 8 }} 
                />
              </div>
            </div>
          </div>

          {/* Chân trang (Footer links) */}
          <div className={styles.centerBlock} style={{ gap: 12, marginTop: 80, marginBottom: 80 }}>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.instagramLink}
            >
              <svg 
                viewBox="0 0 24 24" 
                width="16" 
                height="16" 
                stroke="currentColor" 
                strokeWidth="2" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>healhealthsoulyou</span>
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#fff5d0", fontSize: "14px", fontFamily: 'var(--font, "Akzidenz-Grotesk BQ Extended", sans-serif)' }}>
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"></path>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor"></polygon>
              </svg>
              <span>Healing Garden - Outbound Journey Series</span>
            </div>
          </div>

          {/* ================= SERIES (HOVER ĐỂ HIỆN NỘI DUNG BÊN DƯỚI) ================= */}
          <div style={{ marginTop: 60, marginBottom: 80 }}>
            <h3 className={styles.subSectionTitle}>Series</h3>
            
            <div className={styles.seriesGrid}>
              {SERIES_ITEMS.map((item, index) => (
                <div key={index} className={styles.seriesCard}>
                  <div className={styles.seriesImgContainer}>
                    <Image src={item.img} alt={item.title} fill className={styles.fillImg} />
                    <div className={styles.seriesHoverContent}>
                      <h4 className={styles.seriesCardTitle}>{item.title}</h4>
                      <p className={styles.seriesCardDesc}>{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Đoạn text giữa Series và Homepage */}
          <div className={styles.bodyTextCentered} style={{ maxWidth: 900, margin: "0 auto 60px auto" }}>
            <p>
              Recognizing that healthcare centers on community rather than just the individual, I expanded Heal Health&apos;s mission in 2025: driven by youth for Vietnam and Singapore. Operating via social media, we connect health enthusiasts to advocate for modern healthcare advancement. Our home-grown platform now features biweekly global breakthrough updates, accessible aforementioned online screening tools, and a world map tracking regional disease concerns.
            </p>
          </div>

          {/* ================= HOMEPAGE ================= */}
          <div style={{ marginTop: 80, marginBottom: 80 }}>
            <h3 className={styles.subSectionTitle}>Homepage</h3>
            
            <div className={styles.homepageGrid}>
              <div className={styles.homepageImgBox}>
                <Image src={IMG(41)} alt="Homepage Screenshot 1" fill className={styles.fillImg} />
              </div>
              <div className={styles.homepageImgBox}>
                <Image src={IMG(42)} alt="Homepage Screenshot 2" fill className={styles.fillImg} />
              </div>
              <div className={styles.homepageImgBox}>
                <Image src={IMG(43)} alt="Homepage Screenshot 3" fill className={styles.fillImg} />
              </div>
              <div className={styles.homepageImgBox}>
                <Image src={IMG(44)} alt="Homepage Screenshot 4" fill className={styles.fillImg} />
              </div>
            </div>
          </div>

          {/* Đoạn text cuối trang Heal Health */}
          <div className={styles.bodyTextCentered} style={{ maxWidth: 900, margin: "0 auto 60px auto" }}>
            <p style={{ marginBottom: 20 }}>
              Across four years, I am delighted that Heal Health has delivered impact across scales and times. In our socials, we have engaged over 10000 views through our awareness campaigns. With the website, our biweekly news garners 10 monthly new visitors to the site. Moreover, our site traffic has reached twelve countries in and outside of Asia which is a testament to Heal Health&apos;s empowering care.
            </p>
            <p>
              Heal Health is a seamless medium for me to connect with peers beyond the border, from my secondary school friends in Vietnam to friends I met in Singapore. This diverse network forms a unified ecosystem for healthcare advancement that I am proud to lead and deliver impact across scales to various countries.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ASEAN MENTAL HEALTH PROJECT ================= */}
      <section className={styles.sectionBarSub}>
        <h2 className={styles.sectionTitle} style={{ color: "#111" }}>ASEAN Mental Health Project</h2>
      </section>

      <section className={styles.aseanSection}>
        <div className={styles.aseanContent}>
          
          {/* Đoạn văn 1 */}
          <div className={styles.aseanText} style={{ margin: "0 auto 50px auto" }}>
            <p>
              At seventeen, transitioning to Junior College shattered my lifelong illusion of unblemished &apos;Joy.&apos; Facing academic setbacks, I felt like Riley from Inside Out, wrestling with competing, gloomy emotions. Journaling helped, but learning about the limbic system and Singapore&apos;s youth suicide crisis transformed my perspective.
            </p>
          </div>

          {/* 2 Ảnh hoạt động cạnh nhau (IMG 45 và IMG 46) */}
          <div className={styles.aseanGrid}>
            <div className={styles.aseanImgBox}>
              <Image src={IMG(45)} alt="ASEAN Mental Health Activity 1" fill className={styles.fillImg} />
            </div>
            <div className={styles.aseanImgBox}>
              <Image src={IMG(46)} alt="ASEAN Mental Health Activity 2" fill className={styles.fillImg} />
            </div>
          </div>

          {/* Đoạn văn 2 */}
          <div className={styles.aseanText} style={{ margin: "50px auto" }}>
            <p>
              I realized emotional complexity is universal, and pain often stems from unbearable psychological ache. Training in the P.A.D.I. framework taught me that suicide is preventable through empathetic listening, alerting, approaching, and assisting those in distress.
            </p>
          </div>

          {/* Ảnh chứng chỉ (IMG 47) */}
          <div className={styles.aseanCertBox}>
            <Image 
              src={IMG(47)} 
              alt="Certificate of Achievement - Samaritans of Singapore" 
              fill 
              style={{ objectFit: "contain", backgroundColor: "#fff", padding: "10px", borderRadius: 8 }} 
            />
          </div>

          {/* Đoạn văn kết */}
          <div className={styles.aseanText} style={{ margin: "50px auto 0 auto" }}>
            <p>
              To me, vulnerability is not weakness. True strength lies in recognizing ambivalence, breaking stigmas, and building support networks. Armed with skills from the Samaritans of Singapore, I am ready to champion mental health across ASEAN. If you need a listening ear, I am always here!
            </p>
          </div>

        </div>
      </section>

      {/* ================= INTERNSHIP ================= */}
      <section id="internship" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>
          <span>Internship</span>
          <span className={styles.barDot}>·</span>
          <Link href="/internship/genscript" className={styles.barLink}>
            GenScript Biotechnology Cooperation
          </Link>
        </h2>
      </section>

      <section className={styles.section} style={{ paddingTop: 60, paddingBottom: 120 }}>
        <div className={styles.content}>

          {/* ---------- GenScript ---------- */}
          <div className={styles.internHead}>
            <h3 className={styles.internCompany}>
              <Link href="/internship/genscript" className={styles.linkLime}>
                GenScript Biotechnology Cooperation
              </Link>
            </h3>
            <Link href="/internship/genscript/molecular-biology" className={styles.linkCream}>
              Molecular biology
            </Link>
          </div>

          <div className={styles.internGridFour}>
            {GENSCRIPT_PHOTOS.map((p, i) => (
              <figure key={i} className={styles.internFigure}>
                <div className={styles.internPortrait}>
                  <Image src={p.src} alt={p.cap} fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 22vw" />
                </div>
                <figcaption className={styles.internCaption}>{p.cap}</figcaption>
              </figure>
            ))}
            <figure className={styles.internFigure}>
              <div className={styles.internLandscape}>
                <Image src={IMG(51)} alt="With schoolmates" fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 28vw" />
              </div>
              <figcaption className={styles.internCaption}>With schoolmates</figcaption>
            </figure>
          </div>

          <div className={styles.bodyText} style={{ maxWidth: 800, margin: "50px auto 0" }}>
            <p>
              Interning at GenScript Biotechnology Corporation transitioned my pharmaceutical focus into upstream biomanufacturing. Assisting with the synthesis, expression, and purification of recombinant proteins and therapeutic antibodies, I executed standard assays, including SDS-PAGE, Western blotting, and NanoDrop spectrophotometry, to monitor critical yield metrics. Beyond technical execution, analyzing CHO and HEK293 cell line suitability to optimize transfection efficiency deepened my understanding of scalable biological systems. This rigor mirrored the meticulous standard required to transform raw science into lifesaving biologics. Moving from basic generics to complex antibody engineering, I am eager to leverage these bioprocess insights to pioneer next-generation targeted therapeutics.
            </p>
          </div>

          {/* ---------- US Pharma USA ---------- */}
          <div className={styles.internHead} style={{ marginTop: 100 }}>
            <h3 className={styles.internCompany}>
              <Link href="/internship/us-pharma-usa" className={styles.linkLime}>
                US Pharma USA Joint Stock Company
              </Link>
            </h3>
            <Link href="/internship/us-pharma-usa/report" className={styles.linkCream}>
              Internship Report
            </Link>
          </div>

          <div className={styles.internGridThree}>
            {USPHARMA_PHOTOS.map((p, i) => (
              <figure key={i} className={styles.internFigure}>
                <div className={styles.internLandscape}>
                  <Image src={p.src} alt={p.cap} fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 30vw" />
                </div>
                <figcaption className={styles.internCaption}>{p.cap}</figcaption>
              </figure>
            ))}
          </div>

          <div className={styles.bodyText} style={{ maxWidth: 800, margin: "50px auto 0" }}>
            <p>
              Berocca, paracetamol, and Peripan were my essential must-haves packed from Vietnam to Singapore, where medications remain costly. Yet, Vietnamese-packaged pharmaceuticals also revealed Vietnam&apos;s growing domestic capacity
            </p>
            <p>
              US Pharma USA is the springboard in both tailoring general medicine to the Vietnamese populace. During my time interning with the Qualitative Assurance (QA) and Quality Control (QC) under the R&amp;D lab, I feel the unending passion of delivering the pills into saving lives of all the pharmacists here.
            </p>
            <p>
              While Vietnam&apos;s pharmaceutical sector remains in a budding stage dependent on the DailyMed pharmacopeia with limited clinical R&amp;D, I carry larger aspirations. I aim to advance the industry beyond basic antibiotics toward oncology, stem cells, and homegrown patents. Compiling my technical and interpersonal skills into a formal scientific report showed me the vital dynamic of scientific communication. Inspired by my colleagues&apos; dedication, I will channel these insights to transform Vietnam into an R&amp;D hub and serve global healthcare.
            </p>
          </div>

          {/* ---------- Video HPLC (bật/tắt giống các video trên) ---------- */}
          <div className={styles.centerBlock} style={{ marginTop: 60 }}>
            <div className={styles.imgBox} style={{ aspectRatio: "16/9", width: "100%", maxWidth: 830 }}>
              <CustomVideoPlayer src={VID(55)} />
            </div>
            <p className={styles.internVideoCaption}>
              Me catching peaks of HPLC graphs, calculating the drug concentration and weighing the pill mass
            </p>
          </div>

          {/* ---------- University of Science's Stem Cell Institute ---------- */}
          <div className={styles.internHead} style={{ marginTop: 160 }}>
            <h3 className={styles.internCompany}>
              <Link href="/internship/stem-cell-institute" className={styles.linkLime}>
                University of Science&apos;s Stem Cell Institute
              </Link>
            </h3>
            <span className={styles.internRole}>Molecular biology | Intern</span>
          </div>

          <div className={styles.internGridStem}>
            <figure className={styles.internFigure}>
              <div className={styles.internStemPortrait}>
                <Image src={IMG(56)} alt="Sci-Tech Update 2025" fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 20vw" />
              </div>
              <figcaption className={styles.internCaption}>
                <Link href="/internship/stem-cell-institute/sci-tech-update-2025" className={styles.linkCreamSmall}>
                  Sci-Tech Update 2025
                </Link>
              </figcaption>
            </figure>
            <figure className={styles.internFigure}>
              <div className={styles.internStemLandscape}>
                <Image src={IMG(57)} alt="Check-in" fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 35vw" />
              </div>
              <figcaption className={styles.internCaption}>Check-in</figcaption>
            </figure>
            <figure className={styles.internFigure}>
              <div className={styles.internStemLandscape}>
                <Image src={IMG(58)} alt="In front of stem cells" fill className={styles.fillImg} sizes="(max-width: 768px) 90vw, 35vw" />
              </div>
              <figcaption className={styles.internCaption}>In front of stem cells</figcaption>
            </figure>
          </div>

          <div className={styles.bodyText} style={{ maxWidth: 800, margin: "60px auto 0" }}>
            <p>
              Have you ever imagined a world where a failing organ is not a death sentence, but simply a temporary biological glitch waiting to be rewritten? Regenerative medicine has stretched my imagination, transforming the human body from a fixed machine into an evolving canvas of cellular repair. This frontier became deeply personal after the sudden passing of my favourite Vietnamese artist, Chí Tài, from a stroke, which exposed the brutal finality of neural loss under current treatment limitations.
            </p>
            <p>
              Tracking advancements at the VNUHCM-US Stem Cell Institute grounded this wonder into tangible science. Professor Phạm Văn Phúc&apos;s vision to position Vietnam as a cell therapy pioneer highlights our current bottlenecks, from infrastructure to regulatory vacuums. Scaling clinical pipelines via iPSCs and biomaterials requires rigorous ethical frameworks to ensure public trust and equity. Regenerative medicine is a global health endeavour; I am driven to advance these bio-innovations to reshape healthcare landscapes.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}