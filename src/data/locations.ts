export type Ring = "core-mo" | "core-ks" | "extended" | "outer";

export type Location = {
  slug: string;
  name: string;
  state: "MO" | "KS" | "NE";
  ring: Ring;
  /** Approximate drive context used in copy */
  county?: string;
};

export const ringLabels: Record<Ring, string> = {
  "core-mo": "Core Metro: Missouri",
  "core-ks": "Core Metro: Kansas",
  extended: "Extended Ring (25–50 mi)",
  outer: "Outer Ring (50–100 mi)",
};

const slugify = (name: string, state: string) =>
  `${name.toLowerCase().replace(/[^a-z\s]/g, "").trim().replace(/\s+/g, "-")}-${state.toLowerCase()}`;

const loc = (name: string, state: "MO" | "KS" | "NE", ring: Ring, county?: string): Location => ({
  slug: slugify(name, state),
  name,
  state,
  ring,
  county,
});

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
