import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Deep squat in natural light gym", span: "row-span-2" },
  { src: gallery2, alt: "Yoga stretch at golden hour", span: "" },
  { src: gallery3, alt: "Kettlebell grip close-up", span: "" },
  { src: gallery4, alt: "Outdoor pull-ups in morning mist", span: "row-span-2" },
  { src: gallery5, alt: "Single-leg balance exercise", span: "" },
  { src: gallery6, alt: "Healthy meal preparation", span: "" },
];

const GalleryHero = () => (
  <section className="section-padding bg-secondary/30">
    <div className="max-w-7xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
          Movement · Strength · Life
        </p>
        <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-12">
          Training in Motion
        </h2>
      </FadeIn>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[240px]">
        {images.map((img, i) => (
          <motion.div
            key={img.alt}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden rounded-sm ${img.span}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GalleryHero;
