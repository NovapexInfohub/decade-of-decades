import FadeIn from "@/components/FadeIn";

const pillars = [
  {
    title: "Capability Over Appearance",
    body: "Training prioritizes real-world strength, balance, endurance, and independence. We do not train to look capable. We train to be capable. The body is a tool, and we sharpen it for use — not display.",
  },
  {
    title: "Consistency Beats Intensity",
    body: "What you repeat over time shapes the body more than what you push once. Sustainable habits practiced over years outperform extreme efforts that lead to burnout. Progress is quiet, steady, and compounding.",
  },
  {
    title: "Strength Is a Life Skill",
    body: "Strength protects joints, bones, posture, confidence, and long-term independence. Every decade without strength costs freedom. It is not optional — it is foundational.",
  },
  {
    title: "Mobility Is Insurance",
    body: "Strength without mobility limits quality of life. Pain-free movement keeps strength usable and the body resilient. You cannot be truly capable if you cannot move freely.",
  },
  {
    title: "Aging Is a Skill You Can Train",
    body: "Decline is not automatic. Most people age poorly because they never trained for aging — physically or mentally. Longevity is built deliberately, one decade at a time.",
  },
  {
    title: "Aesthetics Are Inevitable",
    body: "When training consistently for strength, mobility, proper nutrition, recovery, and discipline — good aesthetics are unavoidable. We don't chase how we look. We earn it by doing everything else right.",
  },
];

const Philosophy = () => (
  <>
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
            Philosophy
          </p>
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
            What We Believe
          </h1>
          <p className="text-muted-foreground leading-relaxed mb-16 max-w-xl">
            Stronger Every Decade is built on six core principles. These are not slogans. They are the lens through which every training decision, coaching conversation, and piece of content is shaped.
          </p>
        </FadeIn>

        <div className="space-y-16">
          {pillars.map((p, i) => (
            <FadeIn key={p.title} delay={0.05 * i}>
              <div className="border-l-2 border-primary pl-8">
                <span className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-2 block">
                  Principle 0{i + 1}
                </span>
                <h2 className="font-heading text-2xl text-foreground mb-3">
                  {p.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-20 p-10 bg-secondary/50 rounded-sm text-center">
            <p className="font-heading text-xl text-foreground italic">
              "Train for function. Live with discipline. Let aesthetics take care of themselves."
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  </>
);

export default Philosophy;
