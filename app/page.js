"use client";

import Link from "next/link";
import { useState } from "react";

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

  return (
    <main className="site-page">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Balansmi home">
          balansmi
        </Link>

        <nav
          id="site-nav"
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#approach" onClick={closeMenu}>Approach</a>
          <a href="#sessions" onClick={closeMenu}>Sessions</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Book a session</a>
        </nav>

        <button
          className="header-action"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-controls="site-nav"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
      </header>

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
        <div className="section-label">About the practice</div>
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
          <div className="section-label">About me</div>
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
          <div className="section-label">Areas of support</div>
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
        <div className="statement-band__inner">
          <div className="section-label section-label--light">A different kind of space</div>
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
          <div className="section-label">How I work</div>
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
          <div className="section-label">Online counselling</div>
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
          <div className="section-label">The first session</div>
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
          <div className="section-label">Before we begin</div>
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
        <div className="section-label">When you&apos;re ready</div>
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
