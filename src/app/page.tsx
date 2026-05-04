import MainLayout from '../components/layout/MainLayout';
import {
  LeftSidebar,
  RightSidebar,
  HeroSection,
  KnowledgeSection,
  EducationSection,
  PortafolioSection,
  Footer,
} from '../components/organisms';

const sections = [
  HeroSection,
  KnowledgeSection,
  EducationSection,
  PortafolioSection,
  Footer,
];

export default function Home() {
  return (
    <MainLayout leftSidebar={<LeftSidebar />} rightSidebar={<RightSidebar />}>
      <div className="flex flex-col gap-2 lg:gap-14 w-full">
        {sections.map((Section, i) => (
          <Section key={i} />
        ))}
      </div>
    </MainLayout>
  );
}