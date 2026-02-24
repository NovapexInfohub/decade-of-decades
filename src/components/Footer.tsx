import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-secondary/30">
    <div className="max-w-7xl mx-auto px-6 py-16 lg:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-lg text-foreground mb-3">Stronger Every Decade</h3>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Training for strength, mobility, and longevity — not just today, but for life.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground mb-4 uppercase">Navigate</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/philosophy" className="hover:text-primary transition-colors">Philosophy</Link></li>
            <li><Link to="/work-with-me" className="hover:text-primary transition-colors">Work With Me</Link></li>
            <li><Link to="/clients" className="hover:text-primary transition-colors">Clients</Link></li>
            <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold tracking-wide text-foreground mb-4 uppercase">Connect</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Stronger Every Decade. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
