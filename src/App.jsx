import NavbarMain from './components/navbar/NavbarMain';
import HeroMain from './components/heroSection/HeroMain';
import HeroGradient from './components/heroSection/HeroGradient';
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import ProjectsMain from './components/projectsSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';

function App() {
  return( 
  <main className="font-body">
    <NavbarMain />
    <HeroMain />
    <HeroGradient />
    <SubHeroSection />
    <AboutMeMain />
    <SkillsMain />
    <SubSkills />
    <ExperienceMain />
    <ProjectsMain />
    <ContactMeMain />
    <FooterMain />
  </main>
  );
}

export default App;
