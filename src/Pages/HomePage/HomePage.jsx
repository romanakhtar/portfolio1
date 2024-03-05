import Layout from './../../components/Layout/Layout';
import Awards from './components/AwardsSection/Awards';
import Carousel from './components/Carousel/Carousel';
import ProjectsSection from './components/ProjectsSection/ProjectsSection';
import SkillsSection from './components/SkillsSection/SkillsSection';
import WorkTogetherCard from './components/WorkTogetherCard/WorkTogetherCard';
import HeroSection from './components/heroSection/HeroSection';
const HomePage = () => {
  return (
    <Layout>
      <div className="homepage">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <Awards />
        <Carousel />
        <WorkTogetherCard />
      </div>
    </Layout>
  );
};

export default HomePage;
