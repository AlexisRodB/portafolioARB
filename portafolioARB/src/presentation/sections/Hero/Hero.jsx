import { useRef } from 'react';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { getProfile } from '@/config/container';
import { useHeroReveal } from '@/presentation/animations/useHeroReveal';
import './Hero.css';

const { hero } = getProfile();

function Hero() {
  const sectionRef = useRef(null);
  const year = new Date().getFullYear();
  useHeroReveal(sectionRef);

  return (
    <section id="inicio" className="hero" ref={sectionRef}>
      <div className="container hero__inner">
        <div className="hero__content">
          <p className="hero__badge" data-reveal>
            <span className="hero__badge-dot" aria-hidden="true" />
            {hero.availability}
            <span className="hero__badge-year">{year}</span>
          </p>

          <p className="hero__role" data-reveal>
            {hero.role}
          </p>

          <h1 className="hero__title" data-reveal>
            <span className="hero__title-solid">{hero.firstName}</span>{' '}
            <span className="hero__title-outline">{hero.lastName}</span>
          </h1>

          <p className="hero__intro" data-reveal>
            {hero.intro.before}
            <span className="hero__highlight">{hero.intro.highlight}</span>
            {hero.intro.after}
          </p>

          <div className="hero__actions" data-reveal>
            <a href={hero.primaryCta.target} className="hero__btn">
              {hero.primaryCta.label} <FiArrowRight aria-hidden="true" />
            </a>
            <a href={hero.secondaryCta.target} className="hero__link">
              {hero.secondaryCta.label} <FiChevronRight aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="hero__visual" data-reveal-image>
          <div className="hero__frame">
            <span className="hero__bar hero__bar--top" aria-hidden="true" />
            <div className="hero__photo">
              <img src={hero.image.src} alt={hero.image.alt} width="420" height="520" />
              <span className="hero__tint" aria-hidden="true" />
              <span className="hero__scan" aria-hidden="true" />
            </div>
            <span className="hero__bar hero__bar--bottom" aria-hidden="true" />
          </div>
        </div>
      </div>

      <a href="#sobre-mi" className="hero__scroll" aria-label="Ir a la siguiente sección">
        <span>Scroll para explorar</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}

export default Hero;
