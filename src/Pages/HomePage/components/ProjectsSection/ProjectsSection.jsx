import { portflioSections } from '../../../../demodata';
import SimpleSectionCard from './../../../PortfolioPage/components/SimpleSectionCard/SimpleSectionCard';
import './ProjectsSection.css';
const ProjectsSection = () => {
  return (
    <div className="projects-section d-flex">
      <div className="projects">
        <SimpleSectionCard {...portflioSections[0]} />
        <SimpleSectionCard {...portflioSections[1]} />
        <SimpleSectionCard {...portflioSections[2]} />
      </div>
      <div className="projects-btn-box d-flex">
        <button className="projects-btn">View All</button>
      </div>
    </div>
  );
};

export default ProjectsSection;
