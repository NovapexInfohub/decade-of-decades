import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import GalleryHero from "@/components/GalleryHero";
import HeroSlider from "@/components/HeroSlider";
import heroImage from "@/assets/hero-image.jpg";

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
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Functional movement in natural light"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <h1 className="font-heading text-5xl md:text-7xl text-primary-foreground leading-[1.1] mb-6">
              Stronger Every Decade
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-4 max-w-lg">
              Training for strength, mobility, and longevity — not just today, but for life.
            </p>
            <p className="text-sm text-primary-foreground/60 mb-10 font-medium tracking-wide">
              With Shantanu · Longevity-focused strength & movement coaching
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/work-with-me"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-foreground text-primary font-medium text-sm rounded-sm hover:bg-primary-foreground/90 transition-colors"
              >
                Work With Me
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/philosophy"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground font-medium text-sm rounded-sm hover:bg-primary-foreground/10 transition-colors"
              >
                Explore the Philosophy
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Image & Video Slider */}
      <HeroSlider />

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
