// app/page.js

import HeroSection from '@/components/HeroSection';
import AboutSnippet from '@/components/AboutSnippet';
import SkillsSection from '@/components/SkillsSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        // Il tag <main> è semanticamente corretto per il contenuto principale della pagina
        <main className="container mx-auto px-4">
            <HeroSection />
            <AboutSnippet />
            <SkillsSection />
            <FeaturedProjects />
            <Footer />
        </main>
    );
}