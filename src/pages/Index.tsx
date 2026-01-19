import HeroSection from '@/components/HeroSection';
import OverviewSection from '@/components/OverviewSection';
import ApplicationsSection from '@/components/ApplicationsSection';
import ComplianceSection from '@/components/ComplianceSection';
import TeamSection from '@/components/TeamSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <OverviewSection />
      <ApplicationsSection />
      <ComplianceSection />
      <TeamSection />
      <Footer />
    </main>
  );
};

export default Index;
