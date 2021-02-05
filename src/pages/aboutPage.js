import AboutSection from "../components/aboutSection";
import ServicesSection from "../components/servicesSection";
import FAQ from "../components/faqSection";

const AboutPage = () => {
    return (
        <section className="about-page">
            <AboutSection />
            <ServicesSection />
            <FAQ />
        </section>
    )
}

export default AboutPage;