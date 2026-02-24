import FadeIn from "@/components/FadeIn";

const posts = [
  {
    title: "Why Strength Is the Most Important Health Metric After 30",
    excerpt: "Muscle isn't vanity — it's armor. Here's why building and maintaining strength is the single most important investment you can make for your future self.",
    date: "Coming Soon",
  },
  {
    title: "The Myth of the Quick Fix",
    excerpt: "Thirty-day challenges sell hope. But what happens on day thirty-one? Real change is built in years, not weeks.",
    date: "Coming Soon",
  },
  {
    title: "Mobility: The Silent Foundation of Longevity",
    excerpt: "You can be strong and still limited. True capability requires full range of motion, pain-free movement, and a body that bends without breaking.",
    date: "Coming Soon",
  },
];

const Insights = () => (
  <section className="section-padding bg-background">
    <div className="max-w-3xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
          Insights
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Ideas & Long-Form Thinking
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-16 max-w-xl">
          Thoughts on strength, aging, discipline, and the long game of building a body and mind that lasts.
        </p>
      </FadeIn>

      <div className="space-y-10">
        {posts.map((post, i) => (
          <FadeIn key={post.title} delay={i * 0.1}>
            <article className="border-b border-border pb-10">
              <span className="text-xs text-muted-foreground font-medium tracking-wide">
                {post.date}
              </span>
              <h2 className="font-heading text-xl md:text-2xl text-foreground mt-2 mb-3">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {post.excerpt}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
