import { portflioSections } from '../../demodata';
import Layout from './../../components/Layout/Layout';
import './PortfolioPage.css';
import SimpleSectionCard from './components/SimpleSectionCard/SimpleSectionCard';

const PortfolioPage = () => {
  return (
    <Layout>
      <div className="portfolio-page">
        {portflioSections.map((section, index) => (
          <SimpleSectionCard
            key={index}
            title={section.title}
            caption={section.caption}
            text={section.text}
            image={section.image}
            size={section.size}
          />
        ))}
      </div>
    </Layout>
  );
};

export default PortfolioPage;
