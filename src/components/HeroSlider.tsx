import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

type Slide = {
  type: "image" | "video";
  src: string;
  alt: string;
  poster?: string;
};

const slides: Slide[] = [
  { type: "image", src: gallery1, alt: "Deep squat in natural light gym" },
  { type: "image", src: gallery2, alt: "Yoga stretch at golden hour" },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/4057411/4057411-uhd_2560_1440_24fps.mp4",
    alt: "Functional training in action",
    poster: gallery3,
  },
  { type: "image", src: gallery4, alt: "Outdoor pull-ups in morning mist" },
  { type: "image", src: gallery5, alt: "Single-leg balance exercise" },
  {
    type: "video",
    src: "https://videos.pexels.com/video-files/4761437/4761437-uhd_2560_1440_24fps.mp4",
    alt: "Strength and mobility routine",
    poster: gallery6,
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const slide = slides[current];
    const delay = slide.type === "video" ? 12000 : 5000;
    const timer = setTimeout(next, delay);
    return () => clearTimeout(timer);
  }, [current, paused, next]);

  const slide = slides[current];

  return (
    <section className="relative w-full aspect-[16/7] md:aspect-[16/6] overflow-hidden bg-secondary">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          {slide.type === "image" ? (
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover"
            />
          ) : (
            <video
              src={slide.src}
              poster={slide.poster}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/20" />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
        >
          <ChevronLeft size={20} />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2">
          {slides.map((s, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? "w-6 h-2 bg-primary"
                  : "w-2 h-2 bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next slide"
          className="p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
        >
          <ChevronRight size={20} />
        </button>

        <button
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play" : "Pause"}
          className="p-2 rounded-full bg-background/60 backdrop-blur-sm text-foreground hover:bg-background/80 transition-colors"
        >
          {paused ? <Play size={16} /> : <Pause size={16} />}
        </button>
      </div>

      {/* Slide label */}
      <div className="absolute bottom-6 right-6 z-10">
        <span className="text-xs font-medium text-foreground/70 bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
          {slide.type === "video" ? "▶ Video" : "Photo"} · {current + 1}/{slides.length}
        </span>
      </div>
    </section>
  );
};

export default HeroSlider;
