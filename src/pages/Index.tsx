import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import CertificatesSection from "../components/CertificatesSection";
import DifferentialsSection from "../components/DifferentialsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const Index = () => {
    return (
        <main className="min-h-screen bg-background">
            <Header />
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <CertificatesSection />
            <DifferentialsSection />
            <CTASection />
            <Footer />
        </main>
    );
};

export default Index;
