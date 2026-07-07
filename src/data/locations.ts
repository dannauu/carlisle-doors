export type Ring = "core-mo" | "core-ks" | "extended" | "outer";

export type Location = {
  slug: string;
  name: string;
  state: "MO" | "KS" | "NE";
  ring: Ring;
  /** Approximate drive context used in copy */
  county?: string;
  /** Extra city-specific sections rendered on high-search-volume city pages */
  deepDive?: { title: string; body: string }[];
};

export const ringLabels: Record<Ring, string> = {
  "core-mo": "Core Metro: Missouri",
  "core-ks": "Core Metro: Kansas",
  extended: "Extended Ring (25–50 mi)",
  outer: "Outer Ring (50–100 mi)",
};

const slugify = (name: string, state: string) =>
  `${name.toLowerCase().replace(/[^a-z\s]/g, "").trim().replace(/\s+/g, "-")}-${state.toLowerCase()}`;

const loc = (name: string, state: "MO" | "KS" | "NE", ring: Ring, county?: string): Location => {
  const slug = slugify(name, state);
  return { slug, name, state, ring, county, deepDive: deepDives[slug] };
};

/**
 * City-specific content for the highest-search-volume pages.
 * Keyed by slug and merged into the matching Location below.
 */
const deepDives: Record<string, { title: string; body: string }[]> = {
  "overland-park-ks": [
    {
      title: "Overland Park's doors are aging out together.",
      body: "Huge swaths of Overland Park went up in the same building booms, which means whole neighborhoods hit the end of their builder-grade garage doors at the same time. If your neighbors have been replacing doors, yours is likely on the same clock: springs rated for 10,000 cycles, thin single-layer steel, and openers without modern safety or battery backup. We replace a lot of doors south of College Boulevard, and we stock parts for every brand the original builders used.",
    },
    {
      title: "Upgrades that fit the neighborhood (and the HOA).",
      body: "Many Overland Park subdivisions have HOA guidelines on door style and color, and most homeowners want a door that lifts the whole facade without clashing with the street. We bring sample books to your driveway, help you match panel style and color to the neighborhood, and handle insulated doors that make attached-garage homes noticeably quieter and cheaper to heat and cool through Kansas winters and July heat.",
    },
  ],
  "lenexa-ks": [
    {
      title: "From Old Town to City Center, Lenexa doors run the full range.",
      body: "Lenexa is two cities in one: established neighborhoods with doors and openers from the 80s and 90s, and newer construction around City Center with modern doors that still need tuned tracks, balanced springs, and warranty-safe service. We work both ends weekly, whether that's replacing a worn-out chain-drive opener in an older ranch or dialing in a brand-new insulated door a builder installed in a hurry.",
    },
    {
      title: "Same-day service on the I-35 corridor.",
      body: "Lenexa sits right on our daily Johnson County route, so repair calls placed before noon are usually handled the same day. Broken spring, door off track, opener that hums but will not lift: our trucks carry the springs, cables, rollers, and opener parts to finish most Lenexa repairs in a single visit, with the price quoted before we touch a tool.",
    },
  ],
  "olathe-ks": [
    {
      title: "Olathe grew fast. Its garage doors are catching up.",
      body: "Olathe has been one of the fastest-growing cities in Kansas for two decades, and the math is simple: subdivisions built in the 2000s and 2010s are now 10 to 20 years old, which is exactly when builder-grade springs, rollers, and openers start failing. We handle a steady stream of first-time spring replacements across Olathe, and we install 20,000-cycle springs as standard so you are not doing this again in seven years.",
    },
    {
      title: "New doors for new-build families.",
      body: "A lot of Olathe homeowners are upgrading the plain white builder door to something with real curb appeal: carriage house styles, wood-look steel, insulated doors with windows that brighten the garage gym or workshop. Estimates are free, we bring samples to your driveway, and installation typically happens within one to two weeks of ordering, old door haul-away included.",
    },
  ],
};

export const locations: Location[] = [
  // Core Metro, Missouri side (0–25 miles)
  loc("Kansas City", "MO", "core-mo", "Jackson County"),
  loc("Independence", "MO", "core-mo", "Jackson County"),
  loc("Lee's Summit", "MO", "core-mo", "Jackson County"),
  loc("Blue Springs", "MO", "core-mo", "Jackson County"),
  loc("Raytown", "MO", "core-mo", "Jackson County"),
  loc("Grandview", "MO", "core-mo", "Jackson County"),
  loc("Gladstone", "MO", "core-mo", "Clay County"),
  loc("Liberty", "MO", "core-mo", "Clay County"),
  loc("North Kansas City", "MO", "core-mo", "Clay County"),
  loc("Riverside", "MO", "core-mo", "Platte County"),
  loc("Parkville", "MO", "core-mo", "Platte County"),
  loc("Belton", "MO", "core-mo", "Cass County"),
  loc("Raymore", "MO", "core-mo", "Cass County"),
  loc("Grain Valley", "MO", "core-mo", "Jackson County"),
  loc("Kearney", "MO", "core-mo", "Clay County"),
  loc("Smithville", "MO", "core-mo", "Clay County"),
  loc("Platte City", "MO", "core-mo", "Platte County"),
  loc("Pleasant Hill", "MO", "core-mo", "Cass County"),

  // Core Metro, Kansas side (0–25 miles)
  loc("Overland Park", "KS", "core-ks", "Johnson County"),
  loc("Olathe", "KS", "core-ks", "Johnson County"),
  loc("Shawnee", "KS", "core-ks", "Johnson County"),
  loc("Lenexa", "KS", "core-ks", "Johnson County"),
  loc("Leawood", "KS", "core-ks", "Johnson County"),
  loc("Prairie Village", "KS", "core-ks", "Johnson County"),
  loc("Merriam", "KS", "core-ks", "Johnson County"),
  loc("Mission", "KS", "core-ks", "Johnson County"),
  loc("Roeland Park", "KS", "core-ks", "Johnson County"),
  loc("Kansas City", "KS", "core-ks", "Wyandotte County"),
  loc("Bonner Springs", "KS", "core-ks", "Wyandotte County"),
  loc("Edwardsville", "KS", "core-ks", "Wyandotte County"),
  loc("Gardner", "KS", "core-ks", "Johnson County"),
  loc("De Soto", "KS", "core-ks", "Johnson County"),
  loc("Spring Hill", "KS", "core-ks", "Johnson County"),
  loc("Basehor", "KS", "core-ks", "Leavenworth County"),

  // Extended Ring, 25–50 miles
  loc("Excelsior Springs", "MO", "extended", "Clay County"),
  loc("Oak Grove", "MO", "extended", "Jackson County"),
  loc("Odessa", "MO", "extended", "Lafayette County"),
  loc("Harrisonville", "MO", "extended", "Cass County"),
  loc("Peculiar", "MO", "extended", "Cass County"),
  loc("Cameron", "MO", "extended", "Clinton County"),
  loc("Richmond", "MO", "extended", "Ray County"),
  loc("Lexington", "MO", "extended", "Lafayette County"),
  loc("Higginsville", "MO", "extended", "Lafayette County"),
  loc("Leavenworth", "KS", "extended", "Leavenworth County"),
  loc("Lansing", "KS", "extended", "Leavenworth County"),
  loc("Tonganoxie", "KS", "extended", "Leavenworth County"),
  loc("Paola", "KS", "extended", "Miami County"),
  loc("Osawatomie", "KS", "extended", "Miami County"),
  loc("Louisburg", "KS", "extended", "Miami County"),
  loc("Lawrence", "KS", "extended", "Douglas County"),
  loc("Atchison", "KS", "extended", "Atchison County"),

  // Outer Ring, 50–100 miles
  loc("St. Joseph", "MO", "outer", "Buchanan County"),
  loc("Warrensburg", "MO", "outer", "Johnson County"),
  loc("Sedalia", "MO", "outer", "Pettis County"),
  loc("Marshall", "MO", "outer", "Saline County"),
  loc("Clinton", "MO", "outer", "Henry County"),
  loc("Butler", "MO", "outer", "Bates County"),
  loc("Nevada", "MO", "outer", "Vernon County"),
  loc("Chillicothe", "MO", "outer", "Livingston County"),
  loc("Maryville", "MO", "outer", "Nodaway County"),
  loc("Carrollton", "MO", "outer", "Carroll County"),
  loc("Topeka", "KS", "outer", "Shawnee County"),
  loc("Ottawa", "KS", "outer", "Franklin County"),
  loc("Emporia", "KS", "outer", "Lyon County"),
  loc("Fort Scott", "KS", "outer", "Bourbon County"),
  loc("Garnett", "KS", "outer", "Anderson County"),
  loc("Baldwin City", "KS", "outer", "Douglas County"),
  loc("Holton", "KS", "outer", "Jackson County"),
  loc("Falls City", "NE", "outer", "Richardson County"),
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}

export function locationsByRing(ring: Ring): Location[] {
  return locations.filter((l) => l.ring === ring);
}
