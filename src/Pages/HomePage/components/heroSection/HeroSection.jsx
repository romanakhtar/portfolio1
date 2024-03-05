/* eslint-disable react/no-unescaped-entities */
import PersonImage from '../../../../assets/heroImagePerson.png';
import './HeroSection.css';
import Ring from './Ring/Ring';

const HeroSection = () => {
  return (
    <div className="hero-section d-flex ">
      <div className="hero__details d-flex">
        <span className="-intro d-flex">
          <span className="intro__line--graphic"></span>
          <span>Introducing</span>
        </span>
        <h1 className="d-flex">
          <span>Hello</span> <span>I'm Jessy Walter</span>
        </h1>
        <p>
          Since beginning my journey as a freelance designer nearby 7 years ago,
          I 've done remote work for agencies, consulted for startup, and
          collaborated with talented people to create digital products.
        </p>
        <button className="btn--primary">Contact Me</button>
      </div>
      <div className="hero__img-section d-flex">
        <div className="person__image d-flex">
          <img src={PersonImage} alt="" />
        </div>
        <div className="ring__wrapper d-flex">
          <Ring />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
