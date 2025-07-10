// app/page.js

import HeroSection from '@/components/HeroSection'
import AboutSnippet from '@/components/AboutSnippet'
import SkillsSection from '@/components/SkillsSection'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer';

export default function HomePage() {
    return (
        // Ora il tag <main> vive qui, dando a questa pagina la sua struttura specifica
        <main className="flex-grow container mx-auto px-4">
            {            /* Tutti i componenti sono importati e usati qui */}
            <HeroSection />
            <AboutSnippet />
            <SkillsSection />
            <FeaturedProjects />
            <Footer />
        </main>
    );
}