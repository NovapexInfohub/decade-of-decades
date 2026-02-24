import FadeIn from "@/components/FadeIn";
import { Mail } from "lucide-react";

const Contact = () => (
  <section className="section-padding bg-background">
    <div className="max-w-2xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
          Contact
        </p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6 leading-tight">
          Let's Connect
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-12 max-w-lg">
          Whether you're interested in coaching, have a collaboration idea, or simply want to start a conversation — reach out. No pressure, no sales pitch.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full px-4 py-3 bg-card border border-border rounded-sm text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              placeholder="What's on your mind?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-medium text-sm rounded-sm hover:bg-primary/90 transition-colors"
          >
            <Mail size={16} />
            Send Message
          </button>
        </form>
      </FadeIn>
    </div>
  </section>
);

export default Contact;
