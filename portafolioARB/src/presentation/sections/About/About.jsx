import { useRef } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { getProfile } from '@/config/container';
import { useScrollReveal } from '@/presentation/animations/useScrollReveal';
import './About.css';

const { about } = getProfile();
const ICONS = { linkedin: FaLinkedinIn, github: FaGithub };

function About() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef);

  return (
    <section id="sobre-mi" className="about" ref={sectionRef}>
      <span className="about__index" aria-hidden="true">
        {about.index}
      </span>

      <div className="container about__inner">
        <div className="about__visual" data-reveal>
          <div className="about__frame">
            <img src={about.image.src} alt={about.image.alt} width="400" height="460" />
          </div>

          <div className="about__socials">
            {about.socials.map((social) => {
              const Icon = ICONS[social.icon];
              const content = (
                <>
                  <Icon aria-hidden="true" /> {social.label}
                </>
              );
              return social.url ? (
                <a
                  key={social.label}
                  href={social.url}
                  className="about__social"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <span key={social.label} className="about__social about__social--off">
                  {content}
                </span>
              );
            })}
          </div>
        </div>

        <div className="about__content">
          <p className="about__eyebrow" data-reveal>
            {about.eyebrow}
          </p>

          <h2 className="about__title" data-reveal>
            {about.titleSolid} <span>{about.titleAccent}</span>
          </h2>

          <p className="about__greeting" data-reveal>
            {about.greeting.before}
            <strong>{about.greeting.name}</strong>
            {about.greeting.after}
          </p>

          <p className="about__text" data-reveal>
            {about.description}
          </p>

          <div data-reveal>
            <a href={about.cv.file} download={about.cv.filename} className="about__cv">
              <FiDownload aria-hidden="true" /> {about.cv.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
