// app/page.js
import CombinedIntroSection from '@/components/CombinedIntroSection'; // -> NUOVO IMPORT
import SkillsSection from '@/components/SkillsSection';
import FeaturedProjects from '@/components/FeaturedProjects';

export default function HomePage() {
    return (
        <main className="container mx-auto px-4">
            <CombinedIntroSection/>
            <SkillsSection/>
            <FeaturedProjects/>
        </main>
    );
}