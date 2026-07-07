export type GalleryCategory = "residential" | "commercial" | "agricultural" | "shop";

export type GalleryItem = {
  src: string;
  alt: string;
  category: GalleryCategory;
  /** aspect hint for layout: tall images get more column height */
  wide?: boolean;
};

export const galleryCategories: { key: GalleryCategory | "all"; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "residential", label: "Residential" },
  { key: "commercial", label: "Commercial" },
  { key: "agricultural", label: "Barns & Shops" },
  { key: "shop", label: "Behind the Scenes" },
];

export const gallery: GalleryItem[] = [
  {
    src: "/gallery/carriage-style-garage-doors-brick-home.jpg",
    alt: "Carriage-style wood-grain garage doors installed on a brick home in the Kansas City metro",
    category: "residential",
    wide: true,
  },
  {
    src: "/gallery/wood-grain-carriage-garage-door.jpg",
    alt: "Close-up of a wood-grain carriage house garage door installed by Carlisle Overhead Doors",
    category: "residential",
  },
  {
    src: "/gallery/dark-walnut-double-garage-doors.jpg",
    alt: "Dark walnut double garage doors on a stucco home, installed near Kansas City",
    category: "residential",
    wide: true,
  },
  {
    src: "/gallery/bronze-raised-panel-garage-door.jpg",
    alt: "Bronze raised-panel garage door photographed at night after installation",
    category: "residential",
  },
  {
    src: "/gallery/pole-barn-garage-doors.jpg",
    alt: "Pole barn with two new white overhead doors and walk-in entry door",
    category: "agricultural",
    wide: true,
  },
  {
    src: "/gallery/metal-shop-building-overhead-doors.jpg",
    alt: "Metal shop building with commercial overhead doors installed by Carlisle Overhead Doors",
    category: "agricultural",
    wide: true,
  },
  {
    src: "/gallery/commercial-steel-building-doors.jpg",
    alt: "Steel commercial building with multiple sectional overhead doors near Kansas City",
    category: "commercial",
    wide: true,
  },
  {
    src: "/gallery/commercial-sectional-door-warehouse.jpg",
    alt: "White commercial sectional door and man door on a warehouse exterior",
    category: "commercial",
    wide: true,
  },
  {
    src: "/gallery/white-sectional-door-metal-building.jpg",
    alt: "White insulated sectional door installed on a blue-trim metal building",
    category: "commercial",
  },
  {
    src: "/gallery/commercial-white-overhead-door.jpg",
    alt: "Clean white commercial overhead door installation on a metal building",
    category: "commercial",
  },
  {
    src: "/gallery/high-lift-commercial-door-install.jpg",
    alt: "High-lift commercial overhead door installation with scissor lift inside a steel building",
    category: "commercial",
  },
  {
    src: "/gallery/insulated-overhead-door-interior.jpg",
    alt: "Interior view of an insulated overhead door track system in a steel building",
    category: "commercial",
    wide: true,
  },
  {
    src: "/gallery/garage-door-installation-in-progress.jpg",
    alt: "Garage door installation in progress with insulated panels and scissor lift",
    category: "shop",
  },
  {
    src: "/gallery/carlisle-overhead-doors-shop-sign.jpg",
    alt: "Carlisle Overhead Doors and Services wooden shop sign with phone number",
    category: "shop",
    wide: true,
  },
];
