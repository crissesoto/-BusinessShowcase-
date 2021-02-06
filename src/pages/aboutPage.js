import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import FAQ from "../components/faqSection";

const AboutPage = () => {
    return (
        <div className="about-page">
            <AboutSection />
            <ServicesSection />
            <FAQ />
        </div>
    )
};

export default AboutPage;