import FadeIn from "@/components/FadeIn";
import founderImage from "@/assets/founder-image.jpg";

const About = () => (
  <>
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <img
            src={founderImage}
            alt="Shantanu - Founder of Stronger Every Decade"
            className="w-full max-w-md rounded-sm object-cover aspect-[4/5]"
          />
        </FadeIn>
        <FadeIn delay={0.15}>
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            About
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Meet Shantanu
          </h1>
          <div className="space-y-5 text-muted-foreground leading-relaxed">
            <p>
              Stronger Every Decade was born from a simple realization: most people don't decline because of age — they decline because they never trained for aging.
            </p>
            <p>
              I'm Shantanu, and I've spent years studying what makes bodies last. Not just perform for a season, but remain strong, mobile, and capable across decades.
            </p>
            <p>
              This isn't about six-pack timelines or extreme challenges. It's about building a body you can trust — one that carries you through life with strength, independence, and zero compromise.
            </p>
            <p>
              My approach is rooted in consistency, discipline, and long-term thinking. I coach people who want more than a transformation — they want a foundation.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </>
);

export default About;
