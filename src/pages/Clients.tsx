import FadeIn from "@/components/FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Arjun M.",
    age: "34",
    role: "Software Engineer",
    text: "I came to Shantanu with chronic back pain and zero gym confidence. Six months later, I'm deadlifting pain-free and moving better than I did in my 20s. This isn't a quick fix — it's a whole new way of thinking about my body.",
  },
  {
    name: "Priya S.",
    age: "41",
    role: "Business Owner",
    text: "As a busy mom running a company, I needed something sustainable. No extreme diets, no two-hour sessions. Shantanu designed a system I can actually stick to — and I'm stronger now than I've ever been.",
  },
  {
    name: "Vikram R.",
    age: "52",
    role: "Architect",
    text: "I was told my knee pain was just 'aging.' Shantanu showed me it was neglect. With targeted mobility and strength work, I'm hiking again. The philosophy here is different — it's about building for the next 30 years.",
  },
  {
    name: "Neha K.",
    age: "29",
    role: "Doctor",
    text: "I've always been fit, but I was training without direction. Stronger Every Decade gave me a framework — not just exercises, but a way of thinking about longevity that changed how I approach my own patients' health.",
  },
  {
    name: "Rohan D.",
    age: "46",
    role: "Finance Director",
    text: "The consistency-over-intensity mindset was a game changer. I used to burn out every January. Now I've been training steadily for over a year with zero interruptions. My energy, sleep, and posture have completely transformed.",
  },
  {
    name: "Ananya T.",
    age: "37",
    role: "Yoga Instructor",
    text: "Even as a movement professional, I was missing the strength piece. Shantanu's approach bridges mobility and strength beautifully. My own practice — and teaching — has leveled up significantly.",
  },
];

const Clients = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
          Client Stories
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Real People. Real Decades.
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-16 max-w-xl">
          These are people building strength that lasts — not for a photoshoot, but for life.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.08}>
            <div className="border border-border bg-card p-8 rounded-sm h-full flex flex-col">
              <Quote size={24} className="text-primary/30 mb-4 flex-shrink-0" />
              <p className="text-foreground leading-relaxed text-sm flex-1 mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">
                  Age {t.age} · {t.role}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default Clients;
