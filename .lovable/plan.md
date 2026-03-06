

## Plan: Replace Static Hero with Image/Video Slider

The homepage currently has **both** a static hero image section at the top **and** the HeroSlider below the tagline. The plan is to merge them — replace the static hero with the slider as the primary hero, overlaying the headline/CTA on top of it.

### Changes

**`src/pages/Index.tsx`**
- Remove the static hero `<section>` (the one using `heroImage`)
- Move the HeroSlider to the top position, making it the full hero
- Overlay the headline text ("Stronger Every Decade"), sub-headline, and CTA buttons on top of the slider using absolute positioning
- Remove the separate `HeroSlider` placement below the tagline

**`src/components/HeroSlider.tsx`**
- Increase the aspect ratio to `min-h-[90vh]` to match the previous hero height
- Ensure the gradient overlay is strong enough for text readability over both images and videos
- Keep all existing controls (arrows, dots, play/pause) but reposition them to avoid overlapping the headline text

This consolidates two sections into one impactful hero with dynamic media rotation.

