/* eslint-disable react/no-unescaped-entities */
import { skillsCardsData } from '../../../../demodata';
import './SkillsSection.css';
import SkillsCard from './components/SkillsCard/SkillsCard';
const SkillsSection = () => {
  return (
    <div className="skills-section d-flex">
      <div className="skills__cards d-flex">
        <div className="skills__cards-col1 d-flex">
          <SkillsCard
            logo={skillsCardsData[0]?.logo}
            title={skillsCardsData[0]?.title}
            desc={skillsCardsData[0]?.desc}
          />
          <SkillsCard
            logo={skillsCardsData[1]?.logo}
            title={skillsCardsData[1]?.title}
            desc={skillsCardsData[1]?.desc}
          />
        </div>
        <div className="skills__cards-col2 d-flex">
          <SkillsCard
            logo={skillsCardsData[2]?.logo}
            title={skillsCardsData[2]?.title}
            desc={skillsCardsData[2]?.desc}
          />
          <SkillsCard
            logo={skillsCardsData[3]?.logo}
            title={skillsCardsData[3]?.title}
            desc={skillsCardsData[3]?.desc}
          />
        </div>
      </div>
      <div className="skills__details">
        <div className="skills__details-wrapper">
          <div className="-intro d-flex">
            <div className="intro__line--graphic"></div>
            <span>My Skills</span>
          </div>
          <h2>Why Hire Me For Next Project?</h2>
          <p>
            The technological revolution is changing aspect of our lives, and
            the fabric of society itself. it's also changing the way we learn
            and what we learn. Factual knowledge is less prized when everything
            you ever need to know can be found on your phone. There's no
            imperative to be an expert at doing everything when you can.
          </p>
          <button className="btn--primary">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
