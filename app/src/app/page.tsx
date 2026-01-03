import { AboutSection } from "./_components/about-section";
import { Carousel } from "./_components/carousel";
import { FadeInSections } from "./_components/fade-in-sections";
import { GreetingSection } from "./_components/greeting-section";
import { HeroSection } from "./_components/hero-section";
import { MvvSection } from "./_components/mvv-section";

export default async function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col gap-[105px] overflow-x-hidden pb-0 md:pb-20">
      <FadeInSections>
        <HeroSection />
        <MvvSection />
        <AboutSection />
        <Carousel />
        <GreetingSection />
      </FadeInSections>
    </main>
  );
}
