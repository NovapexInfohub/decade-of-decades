import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const offerings = [
  {
    label: "1:1 Coaching",
    title: "Personal Longevity Coaching",
    description:
      "Individualized programming built around your body, goals, and lifestyle. Strength, mobility, nutrition guidance, and accountability — designed for decades, not weeks.",
  },
  {
    label: "Programs",
    title: "Structured Training Programs",
    description:
      "Evidence-based programs designed for sustainable progress. Built on the six principles, tailored for different experience levels and goals.",
  },
  {
    label: "Consulting",
    title: "Brand & Content Collaborations",
    description:
      "For brands aligned with longevity, health, and sustainable fitness. Partnerships that reflect shared values around long-term thinking and human capability.",
  },
];

const WorkWithMe = () => (
  <>
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            Work With Me
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            Build a Body That Lasts
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-xl">
            Whether you're looking for guided coaching, a structured program, or a meaningful collaboration — every path starts with the same philosophy.
          </p>
        </FadeIn>

        <div className="space-y-8">
          {offerings.map((o, i) => (
            <FadeIn key={o.label} delay={i * 0.1}>
              <div className="border border-border bg-card p-8 md:p-10 rounded-sm">
                <span className="text-xs font-semibold text-accent tracking-widest uppercase mb-3 block">
                  {o.label}
                </span>
                <h2 className="font-heading text-2xl text-foreground mb-3">
                  {o.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {o.description}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Get in touch <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WorkWithMe;
