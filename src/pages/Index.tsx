import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GalleryHero from "@/components/GalleryHero";
import HeroSlider from "@/components/HeroSlider";

const principles = [
  {
    title: "Capability Over Appearance",
    description: "We don't train to look capable. We train to be capable.",
  },
  {
    title: "Consistency Beats Intensity",
    description: "What you repeat over time shapes the body more than what you push once.",
  },
  {
    title: "Strength Is a Life Skill",
    description: "Every decade without strength costs freedom.",
  },
  {
    title: "Mobility Is Insurance",
    description: "Pain-free movement keeps strength usable and the body resilient.",
  },
  {
    title: "Aging Is Trainable",
    description: "Most people age poorly because they never trained for aging.",
  },
  {
    title: "Aesthetics Follow Function",
    description: "When the fundamentals are right, looking good is inevitable.",
  },
];

const Index = () => {
  return (
    <>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Tagline */}
      <section className="section-padding bg-background">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <p className="font-heading text-2xl md:text-3xl text-foreground leading-relaxed">
            A well-trained body should become more capable with age, not less.
          </p>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Strength, mobility, nutrition, recovery, and discipline form the foundation of a long and functional life. Aging well is a trainable skill — not a genetic accident.
          </p>
        </FadeIn>
      </section>

      {/* Gallery */}
      <GalleryHero />

      {/* Principles */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              The Six Principles
            </h2>
            <p className="text-muted-foreground mb-14 max-w-lg">
              The operating framework behind everything we build, train, and teach.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="border border-border bg-card p-8 rounded-sm h-full">
                  <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4 block">
                    0{i + 1}
                  </span>
                  <h3 className="font-heading text-xl text-foreground mb-3">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <FadeIn className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Train for function. Live with discipline.
          </h2>
          <p className="text-primary-foreground/70 mb-10 max-w-md mx-auto">
            Let aesthetics take care of themselves. Start building a body that works for life.
          </p>
          <Link
            to="/work-with-me"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-medium text-sm rounded-sm hover:bg-primary-foreground/90 transition-colors"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </>
  );
};

export default Index;
