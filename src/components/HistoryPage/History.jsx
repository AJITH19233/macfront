import  { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import your festival media (images and videos)

import video2020 from '../../assets/history/2020.mp4';
import video2021 from '../../assets/history/2021.mp4';
import video2022 from '../../assets/history/2022.mp4';
import video2023 from '../../assets/history/2023.mp4';
import video2024 from '../../assets/history/2024.mp4';

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    title: 'UNITING TALENTS TO EXCEL',
    desc: 'MACFIESTA is MACFAST’s premier student-led, national-level fest. It provides a dynamic platform for students to showcase their talents, nurture creativity, and develop professionalism for future success, all under faculty guidance. It’s an opportunity to excel and grow.',
    media: { type: 'video', src: video2024 },
  },
  {
    year: '2001',
    title: 'THE FOUNDATION',
    desc: 'Founded in 2001 by His Grace Dr. Geevarghese Mar Timotheos, MACFAST is a leading postgraduate research institute. Managed by the Catholic Archdiocese of Tiruvalla, it’s affiliated with Mahatma Gandhi University and approved by AICTE. His Grace Dr. Thomas Mar Koorilos is the current patron.',
    media: { type: 'video', src: video2020 },
  },
  {
    year: '2003',
    title: 'THE GENESIS OF FESTS',
    desc: 'The MACFIESTA journey began in 2003 with three separate fests: Technitrous, Prana, and Tantra. Each was a national-level departmental event, celebrating the unique spirit and expertise of the MCA, Biosciences, and MBA departments. They attracted talent nationwide.',
    media: { type: 'video', src: video2021 },
  },
  {
    year: '2018',
    title: 'UNITING TALENTS',
    desc: 'In 2018, these three departmental fests merged into one grand event: MACFIESTA. This unified celebration of knowledge and culture has since attracted over 5,000 participants from across India, featuring diverse competitions, workshops, and cultural programs.',
    media: { type: 'video', src: video2022 },
  },
  {
    year: 'PRESENT',
    title: 'A NEW CHAPTER',
    desc: 'Every MACFIESTA is defined by its massive participation, dynamic events, and a spirit of excellence. It has become more than just a fest; it’s a proud tradition of bringing talents together to learn, lead, and succeed. The legacy continues.',
    media: { type: 'video', src: video2023 },
  },
   {
    year: '2025',
    title: 'THE LEGACY UNVEILED',
    desc: 'As we prepare for MACFIESTA 2025, we honor our legacy and promise an even more remarkable experience. The event will offer more opportunities for competition, exposure, and unforgettable memories. We remain united to excel, together.',
    media: { type: 'video', src: video2024 },
  },
];

// CSS-in-JS styles
const styles = {
  historyPage: {
    fontFamily: "'Unbounded', sans-serif",
    backgroundColor: '#0d0d0d',
    color: '#fff',
    overflowX: 'hidden',
    margin: 0,
    padding: 0,
  },
  heroSection: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 2rem',
    backgroundColor: '#0d0d0d',
    position: 'relative',
    overflow: 'hidden',
  },
  heroTitle: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(4rem, 10vw, 10rem)',
    color: '#f9d85c',
    lineHeight: 1,
    textTransform: 'uppercase',
    margin: 0,
  },
  stroke: {
    color: 'transparent',
    WebkitTextStroke: '2px #f9d85c',
    textShadow: '2px #f9d85c',
  },
  heroSubtitle: {
    fontSize: 'clamp(1rem, 2.5vw, 2rem)',
    fontWeight: 300,
    marginTop: '1rem',
  },
  scrollHint: {
    position: 'absolute',
    bottom: '5vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    animation: 'bounce 2s infinite',
  },
  scrollArrow: {
    width: '2rem',
    height: '2rem',
    borderLeft: '2px solid #fff',
    borderBottom: '2px solid #fff',
    transform: 'rotate(-45deg)',
  },
  scrollHintText: {
    fontSize: '0.8rem',
    marginTop: '0.5rem',
  },
  historyTimelineContainer: {
    position: 'relative',
    width: '100vw',
    height: '100vh',
  },
  slide: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0,
    pointerEvents: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideActive: {
    pointerEvents: 'auto',
  },
  mediaContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  videoMedia: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))',
    zIndex: 1,
  },
  contentContainer: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '2rem',
    boxSizing: 'border-box',
    '@media (min-width: 1024px)': {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingLeft: '5rem',
    },
  },
  textContent: {
    color: '#fff',
    textAlign: 'center',
    maxWidth: '900px',
    padding: '2rem',
    boxSizing: 'border-box',
    '@media (min-width: 1024px)': {
      textAlign: 'left',
      maxWidth: '50%',
      padding: '0',
    },
  },
  textContentYear: {
    fontFamily: "'Cinzel', serif",
    fontSize: 'clamp(3rem, 7vw, 6rem)',
    letterSpacing: '4px',
    color: 'white',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    fontWeight: 700,
    textShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
  },
  textContentTitle: {
    fontFamily: "'Unbounded', sans-serif",
    fontSize: 'clamp(1.5rem, 3vw, 3rem)',
    fontWeight: 700,
    marginBottom: '1.5rem',
    textShadow: '0 2px 10px rgba(0, 0, 0, 0.7)',
    color: '#f9d85c', // Changed to golden color
  },
  textContentDesc: {
    fontSize: 'clamp(1rem, 2vw, 1.3rem)',
    lineHeight: 1.7,
    color: 'white',
    textShadow: '0 1px 3px rgba(0, 0, 0, 0.9)',
    fontWeight: 300,
    fontFamily: "'General Sans', sans-serif",
  },
};

const History = () => {
  const mainContainer = useRef();
  const timelineRef = useRef();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const slidesElements = gsap.utils.toArray('.slide');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: 'top top',
          end: `+=${slidesElements.length * 1000 - 500}px`,
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const slideDuration = 1 / slidesElements.length;
            const newIndex = Math.min(
              slidesElements.length - 1,
              Math.floor(progress / slideDuration)
            );
            setCurrentSlideIndex(newIndex);
          },
        },
      });

      slidesElements.forEach((slide, i) => {
        tl.fromTo(
          slide,
          { opacity: 0, scale: 1.05 },
          { opacity: 1, scale: 1, duration: 1, ease: 'power2.inOut' }
        )
          .addLabel(`slide${i}`);

        if (i < slidesElements.length - 1) {
          tl.to(slide, { opacity: 0, scale: 0.95, duration: 1, ease: 'power2.inOut' }, '+=1.5');
        }
      });

      timelineRef.current = tl;
    }, mainContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div style={styles.historyPage}>
      <div style={styles.heroSection}>
        <h1 style={styles.heroTitle}>
          MACFIESTA <span style={styles.stroke}>History</span>
        </h1>
        <p style={styles.heroSubtitle}>A journey through years of innovation, spirit, and legend.</p>
        <div style={styles.scrollHint}>
          <div style={styles.scrollArrow}></div>
          <p style={styles.scrollHintText}>Scroll</p>
        </div>
      </div>

      <div style={styles.historyTimelineContainer} ref={mainContainer}>
        {slides.map((s, i) => (
          <div
            key={s.year || s.title}
            className={`slide ${i === currentSlideIndex ? 'active' : ''}`}
            data-slide-index={i}
            style={{ ...styles.slide, ...(i === currentSlideIndex ? styles.slideActive : {}) }}
          >
            <div style={styles.mediaContainer}>
              <video src={s.media.src} autoPlay loop muted playsInline style={styles.videoMedia} />
            </div>
            <div style={styles.overlay} />
            <div style={styles.contentContainer}>
              <div style={styles.textContent}>
                <h2 style={styles.textContentYear}>{s.year}</h2>
                <h3 style={styles.textContentTitle}>{s.title}</h3>
                <p style={styles.textContentDesc}>{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;