/* eslint-disable react/prop-types */
import './SkillsCard.css';

const SkillsCard = ({ logo, title, desc }) => {
  return (
    <div className="skills-card d-flex">
      <div className="skills-card__logo d-flex">
        <img src={logo} alt="logo" />
      </div>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default SkillsCard;
