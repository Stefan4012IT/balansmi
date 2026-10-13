"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#approach" },
  { label: "Sessions", href: "#sessions" },
  { label: "FAQ", href: "#faq" },
  { label: "Book a session", href: "#contact", cta: true },
];

const focusAreas = [
  {
    title: "Anxiety & Overthinking",
    text: "When thoughts become difficult to switch off, everyday situations can begin to feel heavier than they need to.",
  },
  {
    title: "Stress & Burnout",
    text: "Understanding prolonged stress, emotional exhaustion and the pressure to keep functioning when your capacity feels depleted.",
  },
  {
    title: "Relationships",
    text: "Exploring recurring patterns, boundaries, attachment, communication and difficulties in close relationships.",
  },
  {
    title: "Self-esteem",
    text: "Understanding the internal narratives that shape how you see yourself and how you respond to others.",
  },
  {
    title: "Life Transitions",
    text: "Support through change, uncertainty, relocation, career shifts, separation or other periods when familiar structures change.",
  },
  {
    title: "Feeling Stuck",
    text: "Sometimes there is no obvious crisis — only the sense that something in life is no longer working.",
  },
];

const faqs = [
  {
    question: "How do I know whether counselling is right for me?",
    answer: "You do not need to be in crisis to speak with a psychologist. Counselling can be useful when something feels difficult, repetitive, confusing or simply worth understanding more deeply.",
  },
  {
    question: "How long does a session last?",
    answer: "Individual sessions usually last approximately 50 minutes.",
  },
  {
    question: "How often will we meet?",
    answer: "Many people begin with weekly sessions, but frequency can be discussed depending on your needs and circumstances.",
  },
  {
    question: "How many sessions will I need?",
    answer: "There is no predetermined number. Some people seek support around a specific situation, while others choose longer-term work. We can discuss this together as the process develops.",
  },
  {
    question: "Are online sessions confidential?",
    answer: "Confidentiality is a fundamental part of psychological counselling. The final copy should accurately reflect the psychologist’s professional, legal and technological arrangements.",
  },
  {
    question: "What if I do not know what to talk about?",
    answer: "That is completely fine. You do not need to arrive with a prepared story or clearly defined goal. Finding the words can itself be part of the process.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const mobileViewport = window.matchMedia("(max-width: 900px)");
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const handleViewportChange = () => {
      if (!mobileViewport.matches) setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    mobileViewport.addEventListener("change", handleViewportChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      mobileViewport.removeEventListener("change", handleViewportChange);
    };
  }, [menuOpen]);

  return (
    <main className="site-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Balansmi home" onClick={closeMenu}>
          balansmi
        </Link>

        <nav className="site-nav" aria-label="Main navigation">
          {navigationItems.map((item) => (
            <a className={item.cta ? "nav-cta" : undefined} href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`header-action${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </header>

      <nav
        id="mobile-nav"
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <p className="eyebrow mobile-nav__eyebrow">Navigate</p>
        <div className="mobile-nav__links">
          {navigationItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              <span className="mobile-nav__number">0{index + 1}</span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <p className="mobile-nav__footer">Private · Professional · At your own pace</p>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Private online counselling</p>
          <h1 id="hero-title">
            <span>A space to talk.</span>
            <span>Time to understand.</span>
          </h1>
          <p className="hero__intro">
            Professional online psychological counselling in a private, thoughtful
            space — wherever you feel most comfortable.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="#contact">
              Book a session <span aria-hidden="true">→</span>
            </a>
            <a className="button button--secondary" href="#how-it-works">
              Learn how it works
            </a>
          </div>
          <p className="trust-line">Private <span>·</span> Professional <span>·</span> At your own pace</p>
        </div>
        <div className="hero__aside" aria-hidden="true">
          <span>quietly held</span>
          <span>space to begin</span>
        </div>
      </section>

      <section className="intro-statement section" id="about" aria-labelledby="intro-title">
        <div className="intro-statement__aside">
          <p className="eyebrow">About the practice</p>
          <svg className="intro-statement__pause-mark" viewBox="0 0 176 176" fill="none" aria-hidden="true">
            <circle cx="88" cy="88" r="86" stroke="currentColor" strokeOpacity="0.28" />
            <circle cx="88" cy="88" r="58" stroke="currentColor" strokeOpacity="0.48" />
            <circle cx="88" cy="88" r="30" stroke="currentColor" strokeOpacity="0.72" />
            <circle cx="88" cy="88" r="3" fill="currentColor" />
          </svg>
        </div>
        <div className="intro-statement__content">
          <h2 id="intro-title">You don&apos;t need to have everything figured out before you start talking.</h2>
          <div className="intro-statement__copy">
            <p>
              Sometimes we know exactly what is troubling us. At other times, there is
              simply a sense that something feels difficult, repetitive or out of balance.
            </p>
            <p>
              Psychological counselling creates space to slow down, understand what is
              happening beneath the surface, and explore new ways of relating to yourself,
              your experiences and the people around you.
            </p>
          </div>
        </div>
      </section>

      <section className="about section section--split" aria-labelledby="about-title">
        <div className="about__visual" role="img" aria-label="A calm, softly lit private counselling space">
          <div className="about__visual-note">A quiet space<br />to begin.</div>
          <div className="about__visual-caption">private practice / online</div>
        </div>
        <div className="about__content">
          <p className="eyebrow">About me</p>
          <h2 id="about-title">A thoughtful, human approach to psychological support.</h2>
          <p>
            I&apos;m [Name], a psychologist working with adults through individual online counselling.
          </p>
          <p>
            My approach is grounded in the belief that meaningful psychological work begins
            with understanding rather than judgement. Therapy is not about being told what to
            do or becoming a different person. It is a collaborative process of recognising
            patterns, understanding emotions and creating room for different choices.
          </p>
          <p>
            I aim to create a relationship in which difficult experiences can be explored
            honestly, carefully and at a pace that feels manageable.
          </p>
          <div className="credentials" aria-label="Credentials placeholders">
            <div><strong>[Degree / professional qualification]</strong></div>
            <div><strong>[Professional association / licence]</strong></div>
            <div><strong>[Additional psychotherapy education]</strong></div>
          </div>
        </div>
      </section>

      <section className="focus section" aria-labelledby="focus-title">
        <div className="focus__heading">
          <p className="eyebrow">Areas of support</p>
          <h2 id="focus-title">What we can work through together</h2>
          <p>
            People come to counselling for many different reasons. You do not need a diagnosis
            or a clearly defined problem to begin.
          </p>
        </div>
        <div className="focus-grid">
          {focusAreas.map((area, index) => (
            <article className="focus-item" key={area.title}>
              <span className="focus-item__number">0{index + 1}</span>
              <h3>{area.title}</h3>
              <p>{area.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="statement-band" aria-labelledby="statement-title">
        <svg
          className="statement-band__waves"
          viewBox="0 0 1440 640"
          preserveAspectRatio="none"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <filter id="statement-wave-distortion" x="-10%" y="-10%" width="120%" height="120%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.018" numOctaves="2" seed="8" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="32" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
          <g filter="url(#statement-wave-distortion)">
          <path d="M -80 62 C 122 20 256 150 438 92 S 766 48 948 118 S 1234 42 1520 84" strokeOpacity="0.24" />
          <path d="M -80 104 C 126 148 294 26 474 117 S 770 178 986 91 S 1270 146 1520 128" strokeOpacity="0.55" />
          <path d="M -80 150 C 120 70 300 206 506 134 S 814 66 1020 153 S 1320 90 1520 106" strokeOpacity="0.32" />
          <path d="M -80 176 C 154 224 266 102 482 196 S 780 248 978 168 S 1292 228 1520 178" strokeOpacity="0.7" strokeWidth="1.2" />
          <path d="M -80 226 C 146 156 320 266 534 211 S 826 138 1042 235 S 1310 178 1520 244" strokeOpacity="0.2" />
          <path d="M -80 258 C 114 304 290 176 498 274 S 820 314 1018 224 S 1304 312 1520 264" strokeOpacity="0.44" />
          <path d="M -80 306 C 172 220 312 356 520 291 S 842 236 1062 325 S 1290 260 1520 294" strokeOpacity="0.62" />
          <path d="M -80 328 C 112 392 322 256 538 350 S 844 412 1040 314 S 1296 390 1520 356" strokeOpacity="0.28" />
          <path d="M -80 378 C 144 316 296 438 516 374 S 806 300 1020 400 S 1320 334 1520 414" strokeOpacity="0.52" />
          <path d="M -80 416 C 160 478 328 340 522 436 S 826 492 1058 390 S 1318 454 1520 426" strokeOpacity="0.18" />
          <path d="M -80 460 C 112 386 302 516 518 448 S 850 374 1056 474 S 1292 422 1520 482" strokeOpacity="0.68" strokeWidth="1.2" />
          <path d="M -80 492 C 164 544 320 414 514 516 S 800 574 1034 472 S 1316 542 1520 504" strokeOpacity="0.36" />
          <path d="M -80 540 C 134 470 306 600 528 530 S 826 458 1040 554 S 1328 496 1520 568" strokeOpacity="0.5" />
          <path d="M -80 572 C 146 618 304 500 512 594 S 812 646 1038 544 S 1300 608 1520 590" strokeOpacity="0.22" />
          <path d="M 72 242 C 148 178 204 296 288 224 S 402 168 468 254 S 578 222 642 246" strokeOpacity="0.42" />
          <path d="M 372 108 C 446 164 492 66 580 128 S 690 204 782 118 S 900 98 968 152" strokeOpacity="0.36" />
          <path d="M 812 284 C 888 224 940 358 1026 274 S 1148 206 1226 302 S 1362 330 1458 260" strokeOpacity="0.48" />
          <path d="M -40 424 C 56 366 116 492 212 406 S 326 354 406 442 S 536 466 614 406" strokeOpacity="0.3" />
          <path d="M 582 462 C 668 382 718 514 812 444 S 936 376 1012 466 S 1130 508 1226 434" strokeOpacity="0.4" />
          <path d="M 1030 176 C 1094 120 1148 242 1236 164 S 1354 108 1468 214" strokeOpacity="0.34" />
          </g>
        </svg>
        <div className="statement-band__inner">
          <p className="eyebrow eyebrow--light">A different kind of space</p>
          <h2 id="statement-title">
            Understanding yourself doesn&apos;t mean having all the answers. It means learning to ask better questions.
          </h2>
          <p>
            Counselling offers a protected space to explore those questions without pressure
            to immediately solve them.
          </p>
        </div>
      </section>

      <section className="approach section" id="approach" aria-labelledby="approach-title">
        <div className="approach__heading">
          <div className="approach__aside">
            <p className="eyebrow">How I work</p>
            <svg className="approach__mark" viewBox="0 0 176 176" fill="none" aria-hidden="true">
              <circle cx="62" cy="88" r="58" stroke="currentColor" strokeOpacity="0.45" />
              <circle cx="114" cy="88" r="58" stroke="currentColor" strokeOpacity="0.72" />
              <circle cx="88" cy="88" r="3" fill="currentColor" />
            </svg>
          </div>
          <h2 id="approach-title">Therapy should feel like a conversation — not an examination.</h2>
          <p>
            There is no universal formula for psychological work. The process develops through
            conversation, curiosity and careful attention to what is happening in your life.
          </p>
        </div>
        <div className="stages" id="how-it-works">
          <article className="stage">
            <span className="stage__number">01</span>
            <h3>Understand</h3>
            <p>
              We begin by exploring what brings you to counselling, what you are experiencing
              now and what you would like to understand or change.
            </p>
          </article>
          <article className="stage">
            <span className="stage__number">02</span>
            <h3>Explore</h3>
            <p>
              Together, we look at emotions, thoughts, relationships and patterns that may be
              shaping your current experience.
            </p>
          </article>
          <article className="stage">
            <span className="stage__number">03</span>
            <h3>Integrate</h3>
            <p>
              Insight becomes useful when it begins to influence everyday life. Over time, we
              explore ways of responding with greater awareness, flexibility and choice.
            </p>
          </article>
        </div>
      </section>

      <section className="sessions section section--split" id="sessions" aria-labelledby="sessions-title">
        <div className="sessions__visual" aria-hidden="true">
          <div className="sessions__visual-word">present</div>
        </div>
        <div className="sessions__content">
          <p className="eyebrow">Online counselling</p>
          <h2 id="sessions-title">A private space, wherever you are.</h2>
          <p>
            Online counselling allows you to speak from a familiar environment while maintaining
            the structure and privacy of a professional psychological session.
          </p>
          <p>Sessions take place through secure video calls and usually last approximately 50 minutes.</p>
          <dl className="session-details">
            <div><dt>Format</dt><dd>Individual online session</dd></div>
            <div><dt>Duration</dt><dd>Approximately 50 minutes</dd></div>
            <div><dt>Language</dt><dd>[Languages]</dd></div>
            <div><dt>Availability</dt><dd>[Days / time zone]</dd></div>
            <div><dt>Price</dt><dd>[Session price]</dd></div>
          </dl>
        </div>
      </section>

      <section className="interlude section" aria-labelledby="interlude-title">
        <h2 id="interlude-title">There is no “right” reason to begin.</h2>
        <p>
          You may be facing something specific, or you may simply want to understand yourself
          more clearly. Both are enough places to start.
        </p>
      </section>

      <section className="first-session section" aria-labelledby="first-session-title">
        <div className="first-session__heading">
          <p className="eyebrow">The first session</p>
          <h2 id="first-session-title">What happens in the first session?</h2>
        </div>
        <div className="first-session__copy">
          <p>
            The first session is an opportunity for us to meet and understand what brings you to counselling.
          </p>
          <p>
            You can share as much or as little as feels comfortable. We may talk about what has
            been happening recently, relevant experiences from your past, and what you hope might
            change through our work together.
          </p>
          <p>
            It is also an opportunity for you to get a sense of how I work and whether the
            relationship feels right for you.
          </p>
          <p>There is no obligation to arrive prepared or to know exactly what you want to say.</p>
          <blockquote>You don&apos;t need to prepare for therapy. You only need to arrive.</blockquote>
        </div>
      </section>

      <section className="faq section" id="faq" aria-labelledby="faq-title">
        <div className="faq__heading">
          <p className="eyebrow">Before we begin</p>
          <h2 id="faq-title">Questions before we begin</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            const answerId = `faq-answer-${index}`;

            return (
              <div className={`faq-item${isOpen ? " is-open" : ""}`} key={faq.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                </h3>
                <div className="faq-answer" id={answerId} hidden={!isOpen}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="final-cta section" id="contact" aria-labelledby="contact-title">
        <p className="eyebrow">When you&apos;re ready</p>
        <h2 id="contact-title">We can start with a conversation.</h2>
        <p>
          If you are considering counselling, you can get in touch to arrange an initial session
          or ask any questions about the process.
        </p>
        <div className="final-cta__actions">
          <a className="button button--primary" href="mailto:[email]">Book a session <span aria-hidden="true">→</span></a>
          <a className="button button--secondary" href="mailto:[email]">Get in touch</a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__main">
          <div>
            <Link className="footer-brand" href="/">balansmi</Link>
            <p>A quiet space for honest conversation.</p>
          </div>
          <div className="footer-links">
            <div>
              <span className="footer-label">Explore</span>
              <a href="#about">About</a>
              <a href="#approach">Approach</a>
              <a href="#sessions">Online sessions</a>
              <a href="#faq">FAQ</a>
            </div>
            <div>
              <span className="footer-label">Contact</span>
              <a href="#contact">Book a session</a>
              <a href="mailto:[email]">[email]</a>
              <span>[Location / time zone]</span>
            </div>
            <div>
              <span className="footer-label">Information</span>
              <a href="#privacy">Privacy policy</a>
              <a href="#terms">Professional information</a>
            </div>
          </div>
        </div>
        <div className="emergency-note">
          <strong>Important:</strong> This service is not intended for emergencies or immediate
          crisis support. Please add verified emergency resources for the psychologist&apos;s location
          and client jurisdictions before publishing.
        </div>
        <div className="site-footer__bottom">
          <span>© 2026 [Psychologist name]</span>
          <span>Private · Professional · At your own pace</span>
        </div>
      </footer>
    </main>
  );
}
