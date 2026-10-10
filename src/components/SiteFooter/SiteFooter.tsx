import React from 'react';
import FooterDNA from "@/components/footer/footer";
import styles from './SiteFooter.module.css';

const SiteFooter = () => {
  return (
    <section className={styles.footerSection}>
      <div className={styles.footerContainer}>

        <div className={styles.footerGraphic}>
          <FooterDNA
            className={styles.footerSvgImage}
            links={{
              aboutMe: "/about-me",
              needleOfCare: "/needle-of-care",
              meshOfCode: "/mesh-of-code",
              globalFabric: "/global-fabric",
              entrepreneurialLoom: "/entrepreneurial-loom",
              creativeThread: "/creative-thread",
            }}
          />
        </div>

        <div className={styles.contactInfo}>
          <h2 className={styles.contactTitle}>Connect with me</h2>

          <div className={styles.contactBlock}>
            <a href="mailto:phuongndk0604@gmail.com" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <span>phuongndk0604@gmail.com</span>
            </a>
            <a href="tel:+6586467577" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <span>+65 8646 7577</span>
            </a>
          </div>

          <hr className={styles.contactDivider} />

          <div className={styles.contactBlock}>
            <a href="https://www.linkedin.com/in/phuong-nguyen-47364a337/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>Phuong Nguyen</span>
            </a>
            <a href="https://github.com/phuongndk0604-ops" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              <span>phuongndk0604-ops</span>
            </a>
          </div>

          <hr className={styles.contactDivider} />

          <div className={styles.contactBlock}>
            <a href="https://www.facebook.com/ndkphuong/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              <span>Nguyen Do Khanh Phuong</span>
            </a>
            <a href="https://www.instagram.com/khanhphuongnguyendo/" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>khanhphuongnguyendo</span>
            </a>
            <a href="https://www.youtube.com/@hellophuongday648" target="_blank" rel="noopener noreferrer" className={styles.contactItem}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
              <span>hellophuongday</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SiteFooter;