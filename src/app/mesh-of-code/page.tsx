"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const IMG = (n: number) => `/image/mesh-of-code-${n}.png`;
const VID = (n: number) => `/image/mesh-of-code-${n}.mp4`;

// ================= LINK PHẦN INTERNSHIP =================
const NUS_SPH_LINK = "https://sph.nus.edu.sg/";
const POST_EVALUATION_LINK = "https://www.linkedin.com/posts/healthfinancing-universalhealthcoverage-covid19-share-7475711514994237441-sFTH/";
const RESEARCH_PAPER_LINK = "https://pubmed.ncbi.nlm.nih.gov/42307858/";

// ================= DỮ LIỆU CHỨNG NHẬN =================
const CERTIFICATES = [
  { src: IMG(11), title: "Gold Honor | Asia International Mathematical Olympiad National Round 2026" },
  { src: IMG(12), title: "Certification | Artificial Intelligence: From Understanding to Innovation by Dartmouth College | 2026" },
  { src: IMG(13), title: "Silver Medal | Singapore Mathematical Olympiad | 2025" },
  { src: IMG(14), title: "Silver Medal | Singapore Mathematical Olympiad | 2025" },
  { src: IMG(15), title: "Distinction | Australian Mathematics Competition | 2023" },
  { src: IMG(16), title: "Bronze | Singapore Mathematical Olympiad | 2023" },
  { src: IMG(17), title: "Gold | Ho Chi Minh City Mathematics Olympic Competition | 2021" },
  { src: IMG(18), title: "Gold | Ho Chi Minh City Mathematics Olympic Competition | 2021" },
  { src: IMG(19), title: "Bronze | Singapore and Asian Schools Math Olympiad (SASMO) | 2021" },
  { src: IMG(20), title: "Bronze | Singapore and Asian Schools Math Olympiad (SASMO) | 2020" },
];

// ================= COMPONENT HỘP TRANG TRÍ =================
const DecoratedBox = ({ title, compact = false }: { title: string; compact?: boolean }) => (
  <div className={`${styles.decoratedBoxWrapper} ${compact ? styles.compact : ""}`}>
    <div className={styles.decoratedBox}>
      <h3 className={styles.decoratedTitle}>{title}</h3>
    </div>
    <div className={`${styles.cornerBox} ${styles.cornerTL}`} />
    <div className={`${styles.cornerBox} ${styles.cornerTR}`} />
    <div className={`${styles.cornerBox} ${styles.cornerBL}`} />
    <div className={`${styles.cornerBox} ${styles.cornerBR}`} />
  </div>
);

// ================= COMPONENT VIDEO TÙY CHỈNH: NÚT PLAY / PAUSE Ở GIỮA =================
const CustomVideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
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
    <div className={styles.customVideoContainer} onClick={togglePlayPause}>
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        className={styles.customVideoElement}
      />

      {isPlaying ? (
        <div className={`${styles.playIconOverlay} ${styles.pauseOverlay}`}>
          <svg viewBox="0 0 24 24" className={styles.playIconSvg}>
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        </div>
      ) : (
        <div className={styles.playIconOverlay}>
          <svg viewBox="0 0 24 24" className={styles.playIconSvg}>
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      )}
    </div>
  );
};


export default function MeshOfCode() {
  return (
    <div className={styles.page}>

      {/* ================= HERO SECTION ================= */}
      <section className={styles.heroSection}>
        <div className={styles.content}>
          
          <div className={styles.heroIntroText}>
            <p>How does flat cloth warp flawlessly around a 3D human body? I always admired how my mom and other tailors crafted perfect fits from just three measurements. The secret lies in developable surfaces, which bend without stretching. While knits stretch via loops, woven fabrics deform by altering the angles between warp and weft threads. This is the essence of Chebyshev nets, a geometric framework modeling fabric as a network of inextensible fibers. By linking geometry to garment design, clothing becomes a living mesh of code where math conforms to the human form.</p>
          </div>

          <div className={styles.bookImagesRow}>
             <div className={styles.bookPage}>
                <Image src={IMG(1)} alt="Notebook Left Page" fill className={styles.fillImg} style={{ objectFit: "contain" }} sizes="(max-width: 768px) 50vw, 500px" />
             </div>
             <div className={styles.bookPage}>
                <Image src={IMG(2)} alt="Notebook Right Page" fill className={styles.fillImg} style={{ objectFit: "contain" }} sizes="(max-width: 768px) 50vw, 500px" />
             </div>
          </div>
          
          <p className={styles.captionText} style={{ textAlign: "center", marginBottom: 120, fontWeight: 700 }}>
            My very first sewing calculation lessons
          </p>

          <div className={styles.heroPinkLeft}>
            Welcome to my sandbox where you can explore the dimensions of mathematics, game theory, statistics, and artificial intelligence!
          </div>

          <div className={styles.heroPinkRightWrapper}>
            <div className={styles.heroPinkRightContent}>
              <div className={styles.heroPinkText}>
                Like a mathematician, tailors from the past mesmerized me with geometric patterns discreetly incorporated in traditional fabric.
              </div>
              <a href="/global-fabric" className={styles.collectionBtn}>View my textile collection here →</a>
            </div>
          </div>

          {/* ================= EXTENDED INTRO BLOCKS ================= */}
          <div className={styles.extendedIntroSection}>
            
            <div className={styles.introBlock}>
              <p className={styles.introSmallText}>
                If I immerse myself in constructing my own graph in geometry, I could predict how likely I would bump into my old Vietnamese friend on a Saturday morning in Singapore in Game Theory, the science of decision-making. What fascinates me most is how optimal yet paradoxical strategies often challenge ordinary intuition: sometimes we practise more of something precisely to avoid ever needing to use it, or cooperate only because competition exists. Game theory grounds chaos into order, revealing that nature&apos;s strategic rationality often challenges human intuition.
              </p>
              <div className={styles.twoColNotes}>
                 <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                    <Image src={IMG(3)} alt="Game theory note 1" fill className={styles.fillImg} />
                 </div>
                 <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                    <Image src={IMG(4)} alt="Game theory note 2" fill className={styles.fillImg} />
                 </div>
              </div>
            </div>

            <div className={styles.introBlock}>
              <p className={styles.introSmallText}>
                While pure math offers flawless order, I fell in love with statistics for the imperfections it reveals. It turns dry data, noise, and anomalies into structured insight. Transitioning to R allowed me to decode decades of survival trends through graphical visualization, transforming chaotic uncertainty into sharp, future-informing predictions with simple commands.
              </p>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}>
                <Image src={IMG(5)} alt="R Language Interface" fill className={styles.fillImg} />
              </div>
            </div>

            <div className={styles.introBlock}>
              <p className={styles.introSmallText}>
                Statistics embeds theoretical math into code, untangling massive datasets. I once thought coding was just binary (reminiscent of a sweet binary love confession I once received) but computers are beautifully multilingual. I found joy designing website elements in JavaScript, then advanced to Python for machine learning. Because no model is flawless, my favorite challenge is experimenting with high-variance simulations to reduce algorithmic bias and crack the black box.
              </p>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}>
                <Image src={IMG(6)} alt="Python and Web Code Interface" fill className={styles.fillImg} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= GIANTS (MENTORS) ================= */}
      <section className={styles.section}>
        <div className={styles.content}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <DecoratedBox title="Introducing my giants who have lured me into these realms" />
          </div>
          <div className={styles.giantsRow}>
            {[
              { img: IMG(7), name: "Ms. Yan Youyu", role: "Statistics" },
              { img: IMG(8), name: "Prof. Massimiliano Landi", role: "Game Theory" },
              { img: IMG(9), name: "Prof. Alex Cook", role: "Mathematical Modelling" },
              { img: IMG(10), name: "Dr. Viet Dung Nguyen", role: "Bioinformatics" }
            ].map((giant, idx) => (
              <div key={idx} className={styles.giantCard}>
                <div className={styles.giantImgBox}>
                  <Image src={giant.img} alt={giant.name} fill className={styles.fillImg} sizes="(max-width: 768px) 50vw, 25vw" />
                </div>
                <h4 className={styles.giantName}>{giant.name}</h4>
                <p className={styles.giantRole}>{giant.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENT & INFINITE SCROLL ================= */}
      <section id="achievement" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Achievement</h2>
      </section>

      <section className={styles.section} style={{ padding: "40px 0" }}>
        
        <div className={styles.content}>
          <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto 80px auto" }}>
            <p>Math, to me, is a universal language and the backbone of all sciences. First exposed to its wonders at the age of four in Vietnam, I fell in love with a subject that manifests in diverse forms and cultural philosophies. In Vietnam, I would instinctively deploy Vieta&apos;s formulas to solve quadratic equations; in Singapore, I find myself completing the square. Where Vietnamese math challenges me to prove a multivariable inequality through pure algebra, Singaporean math prompts me to sketch it visually. Yet, both approaches share an underlying creative beauty. This creativity shines whether I am constructing auxiliary lines to unlock a geometry problem in Vietnam, such as my favorite, the Butterfly Theorem, or visualizing 3D spheres to conquer vector questions in Singapore.</p>
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

      {/* ================= MATH PHILOSOPHY (ZIGZAG ROWS) ================= */}
      <section className={styles.section}>
        <div className={styles.content}>
          
          <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "0 auto 0 auto" }}>
            <p>Through mathematics, I have been privileged to glimpse the beauty of infinity hidden within geometric progressions and fractals. I see the very architecture of Singapore mapped out through differentiation and vectors. Ultimately, math has given me a unique lens to appreciate how different civilizations speak the exact same truth in their own distinct tongues.</p>
          </div>

          <h2 className={styles.neonTitleLeft}>
            Some of my favorite and prettiest math manifestations
          </h2>

          <div className={styles.zigzagRow}>
            <div className={styles.zigzagText}>
              <DecoratedBox title="1. The Esplanade - Theatres on the Bay" />
              <p className={styles.bodyText}>Ever heard of a triangle with more than 180 degrees? That is exactly why I find the Esplanade, Singapore&apos;s Durian, absolutely brilliant because it turns raw calculus into an architectural icon. By using non-Euclidean geometry to map those impossible triangles onto complex 3D curves, and vector math to tilt 7,124 spikes against Singapore&apos;s equator sun, it pushes digital algorithms to their absolute limits.</p>
            </div>
            <div className={styles.zigzagImg}>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}><Image src={IMG(21)} alt="Esplanade" fill className={styles.fillImg} /></div>
            </div>
          </div>

          <div className={styles.zigzagRow}>
            <div className={styles.zigzagImg}>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}><Image src={IMG(22)} alt="Tower of Hanoi" fill className={styles.fillImg} /></div>
            </div>
            <div className={styles.zigzagText}>
              <DecoratedBox title="2. The Tower of Hanoi" />
              <p className={styles.bodyText}>Ever thought a children&apos;s game could blueprint a fractal? The Tower of Hanoi turns raw recursive constraints into a geometric masterpiece. By mapping coordinate sequences across an exponential landscape of 2^N-1 steps, its entire state space crystallises organically into a flawless Sierpiński triangle.</p>
            </div>
          </div>
          
          <div className={styles.zigzagRow}>
            <div className={styles.zigzagText}>
              <DecoratedBox title="3. Fibonacci sequence" />
              <p className={styles.bodyText}>Ever imagined a simple addition rule blueprinting the entire universe? The Fibonacci sequence turns raw arithmetic summation into nature&apos;s ultimate geometric signature. By compounding a basic recurrence relation where each step absorbs its past, it forces shifting numerical ratios to converge flawlessly onto the Golden Ratio, curling linear integers into a universal spiral that maps everything from a human fingerprint to the architecture of swirling galaxies.</p>
            </div>
            <div className={styles.zigzagImg}>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}><Image src={IMG(23)} alt="Fibonacci" fill className={styles.fillImg} /></div>
            </div>
          </div>

          <div className={styles.zigzagRow}>
            <div className={styles.zigzagImg}>
              <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}><Image src={IMG(24)} alt="Euler's Formula" fill className={styles.fillImg} /></div>
            </div>
            <div className={styles.zigzagText}>
              <DecoratedBox title="4. Euler&apos;s Formula" />
              <p className={styles.bodyText}>Five sovereign constants from entirely separate mathematical dimensions colliding to form a single, perfect sentence. By steering e&apos;s engine of continuous growth into the imaginary realm of i, linear acceleration twists into a circular rhythm that rotates exactly pi radians across the complex plane, pulling unity back to the absolute balance of zero.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= RESEARCH ================= */}
      <section id="research" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Research</h2>
      </section>

      <section className={styles.section} style={{ paddingTop: 0 }}>
        
        {/* === CARD 1 === */}
        <div className={styles.researchCardAdvanced}>
          
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(25)} alt="Cardiovascular Paper" fill className={styles.fillImg} style={{ objectFit: "contain", backgroundColor: "#fff" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Cardiovascular Risk Assessment Based on Vascular Age Gap Using Stacking Ensemble Learning</h3>
                      <ul className={styles.researchList}>
                         <li>Co-author</li>
                         <li>Machine Learning</li>
                         <li>
                           Published on IEEE: <a href="https://ieeexplore.ieee.org/document/11658458?denied=" target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>2026 Eleventh International Conference on Communications and Electronics (ICCE)</a>
                         </li>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper}>
             <div className={styles.content}>
                <div className={styles.researchSplit}>
                   <div className={styles.researchImgCol}>
                      <div className={styles.imgBox} style={{ aspectRatio: "4/3", marginBottom: 15 }}>
                         <Image src={IMG(26)} alt="Working with Dr Viet Dung" fill className={styles.fillImg} />
                      </div>
                      <p className={styles.captionTextLeft}>
                        My honor to work with Dr. Viet Dung Nguyen (2nd from left) along with teammates at Ha Noi University of Science and Technology
                      </p>
                   </div>
                   <div className={styles.researchTextCol}>
                      <p className={styles.researchBodyText}>
                        To me, the heart is a sacred organ, the only one that continues beating until we draw our last breath. Yet, ischemic heart disease was the top global cause of death in 2025. Have you ever wondered how old your heart is?
                      </p>
                      <p className={styles.researchBodyText}>
                        This research trains smartwatches to analyze microscopic pulse-wave geometry. The key finding is that male and female arteries age along completely separate physiological tracks. By building a multi-level Stacking Ensemble framework (XGBoost, RF, SVR) and blinding it to chronological age to prevent data &quot;cheating&quot;, our accuracy skyrocketed, slashing male prediction errors significantly. Among 15 multidimensional variables, my team identified Pulse Pressure (PP) as the dominant mechanical aging trajectory in men, while identifying Mean Arterial Pressure (MAP) as the key indicator of micro-vascular elasticity shifts in women.
                      </p>
                      <p className={styles.researchBodyText}>
                        Through the process of learning to deploy AI, I discovered that monolithic models fail against real-world biological noise. I learned to stack diverse architectures so they actively correct each other&apos;s weaknesses. Moving forward, I aim to integrate hormonal biomarkers to optimize the female cohort variance and transition this 46ms, 7.7MB framework into clinical trials. Ultimately, I hope to relieve the burden of at-risk groups via uncovering hidden arterial aging long before traditional cardiovascular symptoms strike.
                      </p>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* === CARD 2 (LESOTHO) === */}
        <div className={styles.researchCardAdvanced}>
          
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(57)} alt="Temporal Investigation Paper" fill className={styles.fillImg} style={{ objectFit: "cover" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>The temporal investigation of the significance of antenatal care on maternal health in Lesotho</h3>
                      <ul className={styles.researchList}>
                         <li>Research Scholar at Lumiere Education</li>
                         <li>Data Science</li>
                         <li>
                           Presented and published on Springer-Nature: <a href="https://drive.google.com/file/d/1-pFfJUK8xNuG6Zd8VKHxebAU16myRcGt/view" target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>Proceedings of the 12th IRC Conference on Science, Engineering and Technology</a>
                         </li>
                      </ul>
                      <div style={{ marginTop: 24, paddingLeft: 20 }}>
                         <a href="https://drive.google.com/file/d/1vAalWz_rElWknGuOVJXsz9sIQRPrY0BQ/view" target="_blank" rel="noopener noreferrer" className={styles.collectionBtn}>View my presentation video →</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper}>
             <div className={styles.content}>
                
                <div className={styles.gridThree}>
                   <div className={styles.imgBox} style={{ aspectRatio: "1/1" }}>
                      <Image src={IMG(27)} alt="IRC-SET" fill className={styles.fillImg} />
                      <p className={styles.captionBox}>IRC-SET 2026</p>
                   </div>
                   <div className={styles.imgBox} style={{ aspectRatio: "1/1" }}>
                      <Image src={IMG(28)} alt="Mentor" fill className={styles.fillImg} />
                      <p className={styles.captionBox}>My mentor - Dr. Samir Soneji, a veteran biostatistician</p>
                   </div>
                   <div className={styles.imgBox} style={{ aspectRatio: "1/1" }}>
                      <Image src={IMG(29)} alt="Certification" fill className={styles.fillImg} />
                      <p className={styles.captionBox}>Certification<br/>Lumiere Research Scholar Program | 2026</p>
                   </div>
                </div>

                <div className={styles.bodyTextCentered} style={{ maxWidth: 1000, margin: "40px auto 0" }}>
                  <p>While high-profile oncology or vaccine development dominates global funding, maternal health remains a critically overlooked public health frontier, severely threatened by declining humanitarian aid. This global austerity directly undermines United Nations Sustainable Development Goal Target 3.1, which aims to reduce maternal mortality below 70 deaths per 100,000 live births.</p>
                  <p>Imagine a pregnant woman in the middle of winter just beginning labor, weakened by anemia and malnutrition. The nearest clinic is over an hour away, across steep mountain paths. This devastating reality of mothers in Lesotho, a landlocked country in South Africa with the world&apos;s highest maternal mortality rate, inspired me to investigate the 20-year trajectory of antenatal care (ANC) utilisation from 2004 to 2024. While I am heartened to see basic access to ANC expanded, severe socioeconomic inequalities emerged at the intensive, WHO-recommended eight-visit model, where high national averages frequently mask deep underlying injustices against impoverished households.</p>
                  <p>Visualising these stratified demographic data through R, I took pride in making mothers&apos; lives in another country a little safer by proposing targeted policy shifts. Healthcare policies must pivot from passive coverage targets toward proactive, community-linked tracking models like maternal waiting homes and automated digital referrals. Ultimately, I hope to use Lesotho’s current health reforms as a launchpad to translate life-saving care continuity to vulnerable, developing communities worldwide.</p>
                </div>

             </div>
          </div>

        </div>

        {/* === CARD 3 (SCOLIOSIS) === */}
        <div className={styles.researchCardAdvanced}>
          
          <div className={styles.researchTopWrapper}>
             <div className={styles.grayBgFullWidth}></div>
             <div className={styles.content}>
                <div className={styles.researchSplitAdvanced}>
                   <div className={styles.researchImgColSmall}>
                      <div className={styles.paperImgBoxSmall}>
                         <Image src={IMG(30)} alt="Scoliosis System" fill className={styles.fillImg} style={{ objectFit: "cover" }} />
                      </div>
                   </div>
                   <div className={styles.researchTextCol}>
                      <h3 className={styles.researchTitle}>Image-recognition risk-warning multimodal system for scoliosis</h3>
                      <ul className={styles.researchList}>
                         <li>Co-researcher and developer</li>
                         <li>
                           Presented at the 2026 <a href="https://sg-innovationchallenge.org/?fbclid=IwZXh0bgNhZW0CMTAAYnJpZBExeDhQS1hScDdXdDhOSDFCQnNydGMGYXBwX2lkEDIyMjAzOTE3ODgyMDA4OTIAAR7ArkBxyU6tK8WfTECoD8r6xOpa40K24ZNYT_HUER5-X4gA-jBqueqqJqfBeg_aem_67DNqzuf4HggEYPy6W1vjg" target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>NUS – SYNAPXE – IMDA AI Innovation Challenge</a>
                         </li>
                         <ul style={{ paddingLeft: 40, marginTop: 10, listStyleType: "circle" }}>
                           <li><a href="https://docs.google.com/presentation/d/1qWhHZ5_k5qoKTBRrG9Q8RqMcHLIlLfEkW42P_OTDn0I/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>Presentation</a></li>
                           <li><a href="https://github.com/phuongndk0604-ops/scoliosis" target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>GitHub</a></li>
                         </ul>
                      </ul>
                   </div>
                </div>
             </div>
          </div>

          <div className={styles.researchBottomWrapper}>
             <div className={styles.content}>
                <div className={styles.researchSplit}>
                   
                   <div className={styles.researchImgCol} style={{ flex: "0 0 38%" }}>
                      <div className={styles.imgBox} style={{ aspectRatio: "4/3", marginBottom: 15 }}>
                         <Image src={IMG(31)} alt="Prototype" fill className={styles.fillImg} />
                      </div>
                      <p className={styles.captionTextLeft} style={{ textAlign: "center" }}>AI Spine Diagnosis Prototype</p>
                   </div>
                   
                   <div className={styles.researchTextCol}>
                      <p className={styles.researchBodyText}>Remember your last school screening for scoliosis? I don&apos;t. Healthcare systems handle this through a rigid, fleeting window, checking kids for a brief moment in youth before completely dropping the ball. This short-term approach leaves sedentary adults entirely vulnerable, blind to the silent, asymptomatic curves progressing behind their desks until they are forced into expensive, invasive surgeries.</p>
                      <p className={styles.researchBodyText}>This systemic gap sparked my team to design a lifelong spinal monitoring companion. Coding this software completely rewired my perspective on medical technology; I realized life-saving AI doesn&apos;t belong locked away in elite, clinic-bound hospital hardware. By training a computer vision model to map subtle shoulder, hip, and trunk symmetries from a simple smartphone photo, we turned raw, everyday pixels into instant clinical radar. We paired this with an empathetic AI chatbot to bridge the long-term care void, providing 24/7 condition management guidance.</p>
                      <p className={styles.researchBodyText}>Our dream is to fuse these features into a dynamic, multimodal AI that tracks live postural habits. We want to put the power of prevention directly back into people&apos;s hands: catching silent structural shifts at home long before they can rewrite a person&apos;s physical future.</p>
                   </div>

                </div>

                <div className={styles.videoCenterWrapper}>
                   <div className={styles.imgBox} style={{ aspectRatio: "16/9", width: "100%", marginBottom: 15 }}>
                      <CustomVideoPlayer src={VID(32)} />
                   </div>
                   <p className={styles.captionTextLeft} style={{ textAlign: "center" }}>Multilingual AI Chatbot with 24/7 Condition Management Advice</p>
                </div>

             </div>
          </div>

        </div>
      </section>

      {/* ================= COMMUNITY ================= */}
      <section id="community" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Community</h2>
      </section>

      <section className={styles.section}>
        <div className={styles.content}>
          <div className={styles.centerBlock}>
             <h3 className={styles.tealTitle}>DyspneaCare Asthma-Monitoring Prototype</h3>
             <p className={styles.tealSubtitle}>Designer and Developer</p>
          </div>
          
          <div className={styles.imgBox} style={{ aspectRatio: "16/9", marginBottom: 30 }}>
             <Image src={IMG(33)} alt="DyspneaCare 3D Model" fill className={styles.fillImg} />
          </div>

          <div className={styles.gridFive} style={{ marginBottom: 70 }}>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(34)} alt="Component 1" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(35)} alt="Component 2" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(36)} alt="Component 3" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(37)} alt="Component 4" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(38)} alt="Component 5" fill className={styles.fillImg} /></div>
          </div>

          <div className={styles.twoCol} style={{ alignItems: "flex-start", gap: 60, marginTop: 40, marginBottom: 100 }}>
             <div className={styles.col}>
                <div className={styles.bodyText}>
                   <p style={{ marginBottom: 20 }}>Every puff of my bronchodilator is a reminder that breathing should not be a luxury. In Vietnam, pediatric asthma rates are three times the global average, a stark statistic driven by the harsh realities of climate change and industrial pollution. This forms a heartbreaking generational inequality, where future generations pay for modern comforts with their health.</p>
                   <p style={{ marginBottom: 20 }}>Driven by my own diagnosis, I sought a proactive solution by engineering an IoT, smartwatch-integrated asthma monitoring system. To map the complex interplay between environmental triggers and physiological responses, I used Onshape to 3D-print hardware houses that sync internal biometrics (MAX30100 for heart rate, MAX30205 for body temperature via ESP32-C3) with external pollutants (MQ-135 for NOx/NH3, ZH03B for fine particulate matter, and AHT20 for humidity). Coding in C/C++ for low-level hardware optimization, I built a web application using HTML/CSS and DOM manipulation to map patient data, offer medical advice, and alert nearby clinics during emergencies.</p>
                   <p>Testing the prototype on my parents, my very first patients, deepened my vision. If given unlimited resources, I would expand this technology globally, establish a philanthropic fund to distribute bronchodilators to low-income families, and pioneer CNN and Vision Transformer models for advanced lung X-ray diagnostic mapping.</p>
                </div>
             </div>

             <div className={styles.col} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", gap: 20, marginBottom: 12 }}>
                   <div className={styles.imgBox} style={{ aspectRatio: "16/9", flex: 1 }}>
                      <Image src={IMG(39)} alt="Droptest 1" fill className={styles.fillImg} />
                   </div>
                   <div className={styles.imgBox} style={{ aspectRatio: "16/9", flex: 1 }}>
                      <Image src={IMG(40)} alt="Droptest 2" fill className={styles.fillImg} />
                   </div>
                </div>
                <p className={styles.captionText} style={{ textAlign: "center", fontWeight: 700 }}>Droptest on my parents</p>
             </div>
          </div>

          <div className={styles.centerBlock} style={{ marginTop: 60 }}>
             <h3 className={styles.tealTitle} style={{ fontSize: "24px", marginBottom: 20 }}>Website Navigation</h3>
             
             <div className={styles.imgBox} style={{ aspectRatio: "16/9", width: "100%", maxWidth: "900px", marginBottom: 20 }}>
                <CustomVideoPlayer src={VID(41)} />
             </div>

             <a href="https://dyspneacare.com/login" className={styles.collectionBtn} style={{ marginTop: 10 }}>View website →</a>
          </div>

          {/* === CARE COMMUNITY === */}
          <div className={styles.centerBlock} style={{ marginTop: 100 }}>
             <h3 className={styles.tealTitle}>Care Community Services Society Singapore</h3>
             <p className={styles.tealSubtitle}>Volunteer and programme designer</p>
          </div>
          <div className={styles.bodyTextCentered} style={{ maxWidth: "1000px" }}>
             <p>Being the youngest one in the house, I often wonder why I learn better with my friends than when asking my sisters. Math is a domain where I inherit from my parents and unbeatable among the three. Growing up in Vietnam, visual logic math sparked my lifelong love for the subject. I fancy the idea of luring someone in this realm like I was lured into.</p>
             <p>The Saturdays volunteering at Canberra have been one of the most exciting ones I look forward to my menteers, children from less fortunate backgrounds in Singapore. I recalled my first session. I was trembling on hearing of my role as coaching math to PSLE students, a Singapore&apos;s secondary school entrance exam, as I did not take PSLE myself and now teaching math not in my mother tongue. But I learned that willing to give and guide someone ultimately outpaces the need for accuracy or preparation. Much as I was hoping to instill stoicism and perseverance in the kids, I made her cry on the fifth attempt. My rigid method taught me that good intentions are not enough; understanding a child&apos;s unique mindset is crucial. Probably why my sisters had a hard time also!</p>
             <p>Seeing the repeating math games that the children can play, my team proposed creating new ones for P4,5,6. But it gave me a harder time than doing olympiad questions as I must consider the receptivity of primary school students.</p>
             <p>Ultimately, these math games transformed dry academic concepts into an exciting, collaborative experience. I have achieved what I intended too: luring the kids into the love of math. And what I always remind my mentee is drawing the asymptote and saying how math joy is infinite. Teenagers like me also enjoy being a kid!</p>
          </div>
          
          <div className={styles.gridThree} style={{ marginTop: 40, marginBottom: 100 }}>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(42)} alt="Volunteer 1" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(43)} alt="Volunteer 2" fill className={styles.fillImg} /></div>
             <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}><Image src={IMG(44)} alt="Volunteer 3" fill className={styles.fillImg} /></div>
          </div>

          {/* === MY THIRD SPACE === */}
          <div className={styles.centerBlock}>
             <h3 className={styles.tealTitle}>My Third Space</h3>
             <p className={styles.tealSubtitle}>Creator</p>
          </div>
          <div className={styles.bodyTextCentered} style={{ maxWidth: "1000px", marginBottom: 40 }}>
             <p>Game theory felt so real in both nature and geopolitics to me. Eager to cross-pollinate these insights, I used my role as Hwa Chong Economics Moderator to launch an interdisciplinary multimedia series, a &quot;third space&quot; where economics, math, law, and biology collide. Here are two episodes I am most proud of:</p>
          </div>

          <div className={styles.twoCol} style={{ marginTop: 60 }}>
             <div className={styles.col} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className={styles.imgBox} style={{ aspectRatio: "3/4", width: "100%", marginBottom: 20 }}>
                   <Image src={IMG(45)} alt="Evolution" fill className={styles.fillImg} />
                </div>
                <p className={styles.bodyText} style={{ textAlign: "left", marginBottom: 30 }}>The Economics of Evolution: I broke down the mathematical optimization of marginalist ant colonies, symbiotic externalities, and free-riding bacteria in a classic Prisoner&apos;s Dilemma.</p>
                <a href="#" className={styles.outlineBtn}>Dive in and explore! →</a>
             </div>
             <div className={styles.col} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div className={styles.imgBox} style={{ aspectRatio: "3/4", width: "100%", marginBottom: 20 }}>
                   <Image src={IMG(46)} alt="US-Iran War" fill className={styles.fillImg} />
                </div>
                <p className={styles.bodyText} style={{ textAlign: "left", marginBottom: 30 }}>The Economics of Evolution: I broke down the mathematical optimization of marginalist ant colonies, symbiotic externalities, and free-riding bacteria in a classic Prisoner&apos;s Dilemma.</p>
                <a href="#" className={styles.outlineBtn}>Dive in and explore! →</a>
             </div>
          </div>

        </div>
      </section>

      {/* ================= INTERNSHIP ================= */}
      {/* Thanh tiêu đề: "Internship · NUS Saw Swee Hock School of Public Health" (chữ gạch chân là link) */}
      <section id="internship" className={styles.sectionBar}>
        <h2 className={styles.sectionTitle}>Internship</h2>
        <span className={styles.sectionBarDot}>·</span>
        <a
          href={NUS_SPH_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.sectionBarLink}
        >
          NUS Saw Swee Hock School of Public Health
        </a>
      </section>

      <section className={styles.section} style={{ paddingBottom: 100 }}>
        <div className={styles.content}>

          {/* ----- 2 hàng giới thiệu: ảnh trái + chữ phải, chữ trái + ảnh phải ----- */}
          <div className={styles.internIntro}>
            <div className={`${styles.internRow} ${styles.internRowReverse}`}>
              <div className={styles.internTextCol}>
                <p className={styles.internText}>
                  With the 3M+S healthcare scheme, Singapore boasts one of the most robust healthcare systems in the world. Singapore&apos;s rapid COVID-19 vaccination is a testament to this. I thought so too until I interned with Professor Alex Cook, the Vice Dean of the Saw Swee Hock Graduate School of Public Health, and saw the critical systems underbelly - the migrant workers dormitory isolation and suicide crises.
                </p>
              </div>
              <div className={styles.internImgCol}>
                <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                  <Image src={IMG(47)} alt="NUS Saw Swee Hock School of Public Health" fill className={styles.fillImg} />
                </div>
              </div>
            </div>

            <div className={styles.internRow}>
              <div className={styles.internTextCol}>
                <p className={styles.internText}>
                  Professor Alex Cook is a veteran in infectious disease modelling and statistics, including dengue, COVID-19, influenza and other respiratory pathogens. My determination to intern with him at the Graduate school was predominantly because of his renowned Mathematical Disease Modelling Programme across South East Asia countries and his wealth of long-term understanding and knowledge about the regions that I live in and are passionate about.
                </p>
              </div>
              <div className={styles.internImgCol}>
                <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                  <Image src={IMG(48)} alt="Selfie with Prof Alex Cook" fill className={styles.fillImg} />
                </div>
              </div>
            </div>
          </div>

          {/* ----- Ảnh Dean + câu joke ----- */}
          <div className={styles.internDean}>
            <div className={styles.imgBox} style={{ aspectRatio: "16/9", marginBottom: 40 }}>
              <Image src={IMG(49)} alt="Selfie with Professor Teo Yik Ying" fill className={styles.fillImg} />
            </div>
            <div className={styles.internText}>
              <p>One of my favourite moments was when we laughed over the classic statistician joke: &quot;How do you tell the difference between an introverted statistician and an extroverted statistician?&quot;</p>
              <p>&quot;The introvert looks at his own shoes when talking to you. The extrovert looks at yours.&quot;</p>
              <p>&quot;But both love being completely significant.&quot; - I replied.</p>
              <p>It was a small joke, but one that captured something I admire: behind every model, every dataset and every confidence interval are people quietly working to improve lives, often without seeking the spotlight.</p>
              <p>I&apos;m equally grateful to Professor Teo Yik Ying, the Dean, whose outward-looking leadership has inspired countless young people, including myself, to believe that students can help shape the future of health, not just inherit it.</p>
            </div>
          </div>

          {/* ----- MY DIARY ----- */}
          <h3 className={styles.diaryTitle}>My diary...</h3>

          <div className={styles.diaryTimeline}>

            {/* 1. HITAP: chữ trái, 2 ảnh phải */}
            <div className={styles.diaryRow}>
              <div className={styles.diaryCol}>
                <DecoratedBox compact title="1. Retreat with Health Intervention and Technology Assessment Program Foundation (HITAP)" />
                <p className={styles.diaryText}>
                  Shadowing at the cross-border HITAP (Thailand) x SSHSPH (Singapore) consortium revealed that regional public health relies on simulating reality to correct structural injustices. Reviewing Thailand&apos;s Maternal Pertussis Immunization program and the HPVADVISE Model showed me how abstract statistical tools like Markov models serve as mathematical engines for health equity. As the youngest in the room, motivated by hearing all these impactful, ground-up projects, I stepped up to bring my own data and field experiences to our ASEAN table. I contributed my insights on migrant healthcare worker screening, maternal health systems, and the statistical tracking of rare diseases in Vietnam.
                </p>
              </div>
              <div className={styles.diaryCol}>
                <div className={styles.diaryImgPair}>
                  <div className={styles.imgBox} style={{ aspectRatio: "1/1" }}>
                    <Image src={IMG(50)} alt="HITAP open discussion" fill className={styles.fillImg} />
                  </div>
                  <div className={styles.imgBox} style={{ aspectRatio: "1/1" }}>
                    <Image src={IMG(51)} alt="HITAP meeting room" fill className={styles.fillImg} />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. UCL: 2 ảnh trái, chữ phải */}
            <div className={`${styles.diaryRow} ${styles.diaryRowReverse}`}>
              <div className={styles.diaryCol}>
                <DecoratedBox compact title="2. Exchange with the UCL Global Business School for Health Faculty of Population Health Sciences" />
                <p className={styles.diaryText}>
                  Global health requires an intergovernmental perspective. Meeting graduates at UCL allowed me to view Singapore&apos;s safety net through a different lens, realizing systems like Medifund often react to inequalities rather than preventing them. True health system architects cannot rely on isolated, short-term pilots; they must scale immediately to prevent structural failure.
                </p>
              </div>
              <div className={styles.diaryCol}>
                <div className={styles.diaryImgPair}>
                  <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                    <Image src={IMG(52)} alt="UCL slide 1" fill className={styles.fillImg} />
                  </div>
                  <div className={styles.imgBox} style={{ aspectRatio: "4/3" }}>
                    <Image src={IMG(53)} alt="UCL slide 2" fill className={styles.fillImg} />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Dr Javid: chữ trái, 1 ảnh phải */}
            <div className={styles.diaryRow}>
              <div className={styles.diaryCol}>
                <DecoratedBox compact title="3. Hosting Dr Mohamed Javid - the International President of Doctors Beyond Border" />
                <p className={styles.diaryText}>
                  With his depth of experiences in bringing care to regions in crises, he offers a critical and practical lens to the challenges by these Doctors Beyond Border: the unwillingness of states to let foreign doctors in despite their benevolence. Hearing him speak on medical neutrality in war-stricken zones under International Humanitarian Law bridged the gap between global diplomacy and local execution.
                </p>
              </div>
              <div className={styles.diaryCol}>
                <div className={styles.imgBox} style={{ aspectRatio: "16/9" }}>
                  <Image src={IMG(54)} alt="Dr Mohamed Javid" fill className={styles.fillImg} />
                </div>
              </div>
            </div>

            {/* 4. Analyse research paper: ảnh bài báo trái, chữ phải */}
            <div className={`${styles.diaryRow} ${styles.diaryRowReverse}`}>
              <div className={styles.diaryCol}>
                <DecoratedBox compact title="4. Analyse research paper" />
                <ul className={styles.diaryLinkList}>
                  <li>
                    <a href={POST_EVALUATION_LINK} target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>My post evaluation</a>
                  </li>
                  <li>
                    <a href={RESEARCH_PAPER_LINK} target="_blank" rel="noopener noreferrer" className={styles.underlineHover}>Link to research</a>
                  </li>
                </ul>
                <p className={styles.diaryText}>
                  Being entrusted with putting this research into layman terms by Dr. Alex, I discovered how Thailand&apos;s Universal Coverage Scheme (covering 75.7% of the population via the UCS) demonstrated remarkable resilience. This evaluation tied directly back to my HITAP meeting, where I saw the intellectual architects of this very system in action. The data revealed a sharp inverse relationship between bed capacity and net hospital financial reserves, exposing significant asymmetric shocks across providers. Top-down funding proved ineffective without provider-level agility.
                </p>
              </div>
              <div className={styles.diaryCol}>
                <div className={`${styles.imgBox} ${styles.paperBox}`}>
                  <Image src={IMG(55)} alt="Research paper" fill className={styles.fillImg} style={{ objectFit: "contain" }} />
                </div>
              </div>
            </div>

            {/* 5. NCID: chữ trái, ảnh phải */}
            <div className={styles.diaryRow}>
              <div className={styles.diaryCol}>
                <DecoratedBox compact title="5. Collab with National Centre for Infectious Disease to build robust models for the next outbreak in Singapore" />
                <p className={styles.diaryText}>
                  I learned how statisticians utilize data features like line listings, prior/posterior probabilities, the effective reproduction number, and Pearson correlation matrices to map linear relationships across complex datasets. In a crisis, the line between research and policy dissolves!
                </p>
              </div>
              <div className={styles.diaryCol}>
                <div className={styles.imgBox} style={{ aspectRatio: "3/2" }}>
                  <Image src={IMG(56)} alt="National Centre for Infectious Diseases" fill className={styles.fillImg} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}