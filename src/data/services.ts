export type ServiceFAQ = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  /** Short name for nav / cards */
  name: string;
  /** SEO title targeting the primary keyword */
  seoTitle: string;
  /** Primary Semrush keyword this page targets */
  primaryKeyword: string;
  /** Supporting keywords woven into copy */
  supportingKeywords: string[];
  metaDescription: string;
  /** Large display headline on the page */
  headline: string;
  intro: string;
  /** Numbered index for display, e.g. "01" */
  sections: { title: string; body: string }[];
  bullets: string[];
  faqs: ServiceFAQ[];
  /** Emoji-free icon key used by the UI */
  icon: "wrench" | "install" | "spring" | "opener" | "bolt" | "warehouse" | "track" | "shield";
};

export const services: Service[] = [
  {
    slug: "garage-door-repair",
    name: "Garage Door Repair",
    seoTitle: "Garage Door Repair Kansas City | Same-Day Service",
    primaryKeyword: "garage door repair Kansas City",
    supportingKeywords: [
      "garage door repair near me",
      "overhead door repair Kansas City",
      "broken garage door repair",
      "garage door service KC metro",
    ],
    metaDescription:
      "Same-day garage door repair in Kansas City & the surrounding metro. Broken springs, snapped cables, doors off track, opener failures. Fixed right the first time. Call (816) 288-3574.",
    headline: "Garage door repair, done right the first time.",
    intro:
      "A broken garage door isn't just inconvenient. It's your home's largest moving system failing at the worst possible moment. Carlisle Overhead Doors provides same-day garage door repair across the Kansas City metro, from Oak Grove to Overland Park. Our trucks arrive stocked with springs, cables, rollers, and openers for every major brand, so most repairs are finished in a single visit.",
    sections: [
      {
        title: "Every make. Every model. Every problem.",
        body: "We repair all residential garage door brands sold in the Kansas City market: Clopay, Amarr, C.H.I., Wayne Dalton, Overhead Door, Raynor, and more. Whether your door is grinding, sagging, stuck halfway, or refusing to move at all, our technicians diagnose the root cause instead of patching symptoms. That means fewer callbacks and a door that lasts.",
      },
      {
        title: "Stocked trucks, single-visit fixes.",
        body: "Nothing is more frustrating than a repair visit that ends with 'we'll have to order the part.' Our service vehicles carry torsion springs in every common size, drums, cables, hinges, rollers, weather seal, and opener components. Over 90% of the garage door repairs we run in the KC metro are completed the same day we arrive.",
      },
      {
        title: "Honest pricing before we touch a tool.",
        body: "You'll get a straightforward quote before any work begins: no trip-fee surprises, no 'while we're here' upsells. If a repair doesn't make financial sense compared to replacement, we'll tell you exactly that and walk you through both numbers.",
      },
    ],
    bullets: [
      "Same-day service across the KC metro",
      "Broken spring & cable replacement",
      "Doors off track re-set and realigned",
      "Panel and section replacement",
      "Bent track & hardware repair",
      "Weather seal & bottom rubber replacement",
      "All major brands serviced",
      "Upfront, flat-rate pricing",
    ],
    faqs: [
      {
        q: "How much does garage door repair cost in Kansas City?",
        a: "Most common repairs in the KC metro run between $150 and $450 depending on the part and door size. Spring replacements, the most frequent repair, typically fall in the $200–$400 range including parts and labor. We quote every job upfront before starting work.",
      },
      {
        q: "Do you offer same-day garage door repair?",
        a: "Yes. We run same-day repair calls throughout the Kansas City metro Monday through Saturday, and 24/7 emergency service for doors that are stuck open, off track, or blocking a vehicle.",
      },
      {
        q: "My garage door opens a few inches then stops. What's wrong?",
        a: "That's the classic symptom of a broken torsion spring: the opener senses the door is too heavy and reverses to protect itself. Stop using the door and give us a call; running an opener against a broken spring can burn out the motor.",
      },
      {
        q: "Should I repair or replace my garage door?",
        a: "If the door is structurally sound and under 15 years old, repair is usually the smart money. If panels are rotting, rusting, or the door lacks modern safety features, replacement often costs less over five years. We'll give you both numbers honestly.",
      },
    ],
    icon: "wrench",
  },
  {
    slug: "garage-door-installation",
    name: "Garage Door Installation",
    seoTitle: "Garage Door Installation & Replacement Kansas City",
    primaryKeyword: "garage door installation Kansas City",
    supportingKeywords: [
      "new garage door Kansas City",
      "garage door replacement cost",
      "garage door installers near me",
      "insulated garage doors KC",
    ],
    metaDescription:
      "New garage door installation and replacement in Kansas City. Steel, carriage house, modern glass & insulated doors from Clopay, Amarr & C.H.I. Free in-home estimates. (816) 288-3574.",
    headline: "A new door changes the whole face of your home.",
    intro:
      "Your garage door is up to 40% of your home's street-facing façade, and one of the few upgrades that consistently returns over 100% of its cost at resale, per Remodeling Magazine's Cost vs. Value report. Carlisle Overhead Doors installs steel, carriage house, modern aluminum-and-glass, and high-R-value insulated doors across the Kansas City metro, with free in-home estimates and honest guidance on what fits your home and budget.",
    sections: [
      {
        title: "Built for Kansas City weather.",
        body: "KC swings from ice storms to 100-degree Julys, and your garage door takes the brunt of it. We help you choose the right gauge steel, insulation R-value, and wind-load rating for your home, especially important for attached garages, where an insulated door can noticeably cut energy bills and street noise.",
      },
      {
        title: "Styles for every home, from Brookside bungalows to new builds.",
        body: "Traditional raised-panel steel, farmhouse carriage house designs, sleek full-view glass and aluminum. We carry the full catalogs from Clopay, Amarr, and C.H.I. and will bring samples to your driveway. We install standard sizes and fully custom doors, including oversized doors for RV bays and shops.",
      },
      {
        title: "Installation that protects the warranty.",
        body: "A great door installed poorly is a bad door. Our installers set every door to manufacturer spec (balanced springs, aligned tracks, sealed perimeter, safety-tested opener integration) so your manufacturer warranty stays fully intact and the door runs quietly for decades. Old door haul-away is included on every install.",
      },
    ],
    bullets: [
      "Free in-home estimates & sample viewing",
      "Clopay, Amarr, C.H.I. & more",
      "Insulated & wind-rated options",
      "Carriage house & modern glass styles",
      "Custom and oversized doors",
      "Old door removal & haul-away included",
      "Manufacturer warranty protected",
      "Financing available",
    ],
    faqs: [
      {
        q: "How much does a new garage door cost in Kansas City?",
        a: "Installed prices in the KC metro typically range from $1,200 for a quality single-car steel door to $4,500+ for premium insulated carriage house or full-view glass doors. Double-car doors most commonly land between $1,800 and $3,200 installed. Every estimate is free and itemized.",
      },
      {
        q: "How long does garage door installation take?",
        a: "A standard replacement takes 3–5 hours. Custom doors, structural changes, or opener replacements can extend that to a full day. Most doors we quote are installed within 1–2 weeks of ordering.",
      },
      {
        q: "Is an insulated garage door worth it in Missouri?",
        a: "If your garage is attached or you use it as a workspace, yes. An insulated door (R-12 to R-18) keeps the garage 10–20 degrees closer to room temperature through KC winters and summers, quiets operation, and resists dents better than single-layer doors.",
      },
      {
        q: "Do you haul away my old garage door?",
        a: "Yes, removal and disposal of your existing door and hardware is included in every installation quote, no hidden fees.",
      },
    ],
    icon: "install",
  },
  {
    slug: "garage-door-spring-repair",
    name: "Spring Repair",
    seoTitle: "Garage Door Spring Repair & Replacement Kansas City",
    primaryKeyword: "garage door spring repair Kansas City",
    supportingKeywords: [
      "garage door spring replacement cost",
      "broken garage door spring",
      "torsion spring replacement Kansas City",
      "garage door springs near me",
    ],
    metaDescription:
      "Broken garage door spring? Same-day torsion & extension spring replacement across Kansas City. High-cycle springs, upfront pricing, all brands. Call (816) 288-3574 now.",
    headline: "The loud bang from your garage? We fix that today.",
    intro:
      "If you heard a gunshot-like bang from the garage and now the door won't lift, you have a broken torsion spring, the single most common garage door failure in Kansas City. Springs are also the most dangerous component on the door, holding hundreds of pounds of tension. Carlisle Overhead Doors replaces torsion and extension springs same-day across the KC metro, using high-cycle springs sized precisely to your door's weight.",
    sections: [
      {
        title: "Why springs break (and why yours picked winter).",
        body: "A standard torsion spring is rated for about 10,000 cycles, roughly 7–10 years of typical use. Cold snaps make steel brittle, which is why KC sees a wave of spring failures every January. We install 20,000+ cycle springs as our standard, and we always replace springs in pairs on two-spring doors so you're not calling us back in six months.",
      },
      {
        title: "This is not a DIY job. Seriously.",
        body: "A wound torsion spring stores enough energy to break bones, and YouTube confidence doesn't loosen a winding cone safely. Our technicians replace springs with the proper winding bars, measure wire size and inside diameter to spec, and rebalance the door so your opener isn't straining against dead weight.",
      },
      {
        title: "Sized to your exact door, not 'close enough.'",
        body: "An undersized spring wears out your opener; an oversized one slams your door. We weigh and measure every door before installing springs: wire gauge, inside diameter, and length matched to your door's actual weight, including doors with added insulation or replaced panels.",
      },
    ],
    bullets: [
      "Same-day spring replacement",
      "High-cycle (20,000+) springs standard",
      "Torsion & extension spring systems",
      "Springs replaced in matched pairs",
      "Door rebalanced & safety tested",
      "Cables, drums & bearings inspected",
      "All door brands and weights",
      "Upfront flat-rate pricing",
    ],
    faqs: [
      {
        q: "How much does garage door spring replacement cost in Kansas City?",
        a: "Most spring replacements in the KC metro run $200–$400 total for a two-spring residential door, including parts, labor, and rebalancing. We quote the exact price before starting and never charge extra for same-day service during business hours.",
      },
      {
        q: "Can I open my garage door with a broken spring?",
        a: "Don't try with the opener. It will strain and can burn out the motor. If you must get a car out, two strong adults can carefully lift the door manually, but it will be extremely heavy. The safest move is to leave it and call for same-day service.",
      },
      {
        q: "Should I replace both springs if only one broke?",
        a: "Yes. Both springs have the same cycle count, so the survivor is living on borrowed time. Replacing both in one visit costs far less than two service calls, and we'll only ever recommend it on two-spring doors.",
      },
      {
        q: "How long do garage door springs last?",
        a: "Standard builder-grade springs last about 10,000 cycles (7–10 years for most families). The high-cycle springs we install are rated 20,000+ cycles, 15 to 20 years of typical use.",
      },
    ],
    icon: "spring",
  },
  {
    slug: "garage-door-opener-repair",
    name: "Opener Repair & Installation",
    seoTitle: "Garage Door Opener Repair & Installation Kansas City",
    primaryKeyword: "garage door opener repair Kansas City",
    supportingKeywords: [
      "garage door opener installation",
      "LiftMaster dealer Kansas City",
      "garage door opener not working",
      "smart garage door opener",
    ],
    metaDescription:
      "Garage door opener repair & installation in Kansas City. LiftMaster, Chamberlain & Genie service. Smart openers, battery backup, quiet belt drives. Call (816) 288-3574.",
    headline: "Quiet, smart, and it opens every single time.",
    intro:
      "When the opener hums but nothing moves, the remote works only from two feet away, or the door reverses for no reason? That's our department. Carlisle Overhead Doors repairs and installs garage door openers throughout the Kansas City metro, servicing LiftMaster, Chamberlain, Genie, Craftsman, and every other major brand, and installing modern smart openers with battery backup and phone control.",
    sections: [
      {
        title: "Repair first, replace when it's smarter.",
        body: "Many 'dead' openers just need a new logic board, gear kit, trolley, or safety sensor realignment, repairs that cost a fraction of a new unit. If your opener is 15+ years old, lacks safety reversal, or needs a repair approaching half the cost of new, we'll show you the math on both options.",
      },
      {
        title: "The new generation of openers is worth knowing about.",
        body: "Today's belt-drive openers are dramatically quieter than the chain unit rattling your bedroom above the garage. Wi-Fi models notify your phone if the door is left open, let you close it from anywhere, and integrate with Amazon Key and smart home systems. Battery backup, now standard on our installs, keeps the door working through KC's ice-storm outages.",
      },
      {
        title: "Safety sensors, done to code.",
        body: "Since 1993, every opener must auto-reverse on obstruction. We test and calibrate photo eyes and force settings on every visit, a two-minute check that protects kids, pets, and bumpers. If your door has ever closed on something without reversing, call us before using it again.",
      },
    ],
    bullets: [
      "All brands repaired: LiftMaster, Chamberlain, Genie & more",
      "Quiet belt-drive & wall-mount jackshaft installs",
      "Smart / Wi-Fi openers with phone control",
      "Battery backup for power outages",
      "Keypads, remotes & car programming",
      "Safety sensor testing & alignment",
      "Gear, trolley & logic board replacement",
      "Same-day service available",
    ],
    faqs: [
      {
        q: "How much does a new garage door opener cost installed?",
        a: "In the Kansas City area, a quality belt-drive opener installed runs $450–$750 depending on horsepower and smart features. Premium wall-mount jackshaft units run $850–$1,200. All installs include haul-away of your old unit, remote programming, and safety calibration.",
      },
      {
        q: "Why does my garage door opener work but the door doesn't move?",
        a: "Usually a broken spring (the opener protects itself from the extra weight), a stripped gear inside the opener, or a disconnected trolley. All three are quick diagnoses, and two of the three are inexpensive fixes.",
      },
      {
        q: "Can you make my existing opener work with my phone?",
        a: "Often, yes. Many openers from 2011+ can add a smart bridge for app control. Older units are usually better served by a new Wi-Fi opener, which also brings quieter operation and battery backup.",
      },
      {
        q: "Why does my garage door reverse before hitting the floor?",
        a: "Either the photo-eye sensors are misaligned or blocked, or the close-force and travel limits need adjustment. Both are routine calibrations we perform on a standard service call.",
      },
    ],
    icon: "opener",
  },
  {
    slug: "emergency-garage-door-repair",
    name: "24/7 Emergency Repair",
    seoTitle: "24 Hour Emergency Garage Door Repair Kansas City",
    primaryKeyword: "emergency garage door repair Kansas City",
    supportingKeywords: [
      "24 hour garage door repair",
      "garage door won't close",
      "garage door stuck open",
      "after hours garage door service",
    ],
    metaDescription:
      "Garage door stuck open at 10 PM? 24/7 emergency garage door repair across the Kansas City metro. Fast response, real technicians, honest after-hours pricing. (816) 288-3574.",
    headline: "Stuck open at midnight? We answer the phone.",
    intro:
      "A garage door that won't close is a security problem, not a tomorrow problem. Whether your door is stuck open, jumped its tracks, was backed into, or snapped a spring with your car trapped inside, Carlisle Overhead Doors runs true 24/7 emergency service across the Kansas City metro. A real technician answers, gives you an honest ETA, and secures your home tonight.",
    sections: [
      {
        title: "What counts as a garage door emergency.",
        body: "Door stuck open with your home exposed. Door off its tracks and hanging. Vehicle trapped inside before a work shift or flight. Broken spring with no other way to get a car out. Storm or vehicle impact damage. If it can't wait until morning, neither do we. Nights, weekends, and holidays included.",
      },
      {
        title: "Secured tonight, perfected tomorrow.",
        body: "Our first job on an emergency call is making your home safe and your car free. If a full repair needs a special-order part, we'll get the door closed, locked, and weathertight tonight, then return to finish the job. You're never left with an open garage while parts ship.",
      },
      {
        title: "Honest after-hours pricing.",
        body: "Emergency service costs more than a Tuesday-morning appointment, but it shouldn't cost triple. We quote our after-hours rate on the phone before we roll a truck, and the repair price is the same flat rate we'd charge in daylight.",
      },
    ],
    bullets: [
      "True 24/7/365 availability",
      "Door stuck open? Secured tonight",
      "Off-track doors made safe",
      "Vehicle trapped? Priority dispatch",
      "Storm & impact damage response",
      "After-hours rate quoted on the phone",
      "Nights, weekends & holidays",
      "Serving the full KC metro",
    ],
    faqs: [
      {
        q: "Do you really answer at 2 AM?",
        a: "Yes. Emergency calls ring straight to an on-call technician, not a national answering service. You'll get a real ETA from the person actually driving to your house.",
      },
      {
        q: "How fast can you get to me?",
        a: "For emergencies inside the core KC metro we typically arrive within 60–90 minutes. Extended-area calls (Warrensburg, St. Joseph, Topeka side) depend on distance; we'll give you an honest window when you call.",
      },
      {
        q: "My door is off the tracks. Can I push it back myself?",
        a: "Please don't. An off-track door can fall: they weigh 150–350 pounds. Unplug the opener, keep everyone away from it, and call us. Re-setting a door safely requires releasing spring tension first.",
      },
      {
        q: "What does emergency garage door service cost?",
        a: "We charge a quoted after-hours dispatch fee plus our normal flat repair rates, the same price the repair would cost during business hours. You'll know the full number before we head your way.",
      },
    ],
    icon: "bolt",
  },
  {
    slug: "commercial-overhead-doors",
    name: "Commercial Overhead Doors",
    seoTitle: "Commercial Overhead Door Repair & Installation Kansas City",
    primaryKeyword: "commercial overhead doors Kansas City",
    supportingKeywords: [
      "commercial garage door repair",
      "rolling steel doors Kansas City",
      "dock door repair",
      "sectional door installation commercial",
    ],
    metaDescription:
      "Commercial overhead door installation & repair for Kansas City businesses. Rolling steel, sectional, dock doors & fire doors. Planned maintenance programs. (816) 288-3574.",
    headline: "When the door stops, the business stops.",
    intro:
      "A failed overhead door at a loading dock, fire station, or shop bay costs money by the hour. Carlisle Overhead Doors installs and services commercial overhead doors across the Kansas City metro (rolling steel, insulated sectional, high-lift, dock doors, and fire-rated doors) with priority response for businesses and planned-maintenance programs that keep failures from happening at all.",
    sections: [
      {
        title: "Every commercial door type in the metro.",
        body: "Rolling steel service doors and counter shutters. Insulated sectional doors for warehouses and fleet garages. High-lift and full-vertical track for wash bays and lifts. Dock doors, seals, and levelers. Fire-rated rolling doors with required annual drop testing. If it rolls, lifts, or coils, we install and service it.",
      },
      {
        title: "Planned maintenance beats emergency repair.",
        body: "Commercial doors cycle 10–50 times a day: hardware loosens, springs fatigue, and cables fray on a schedule you can predict. Our quarterly and semi-annual maintenance programs catch failures before they strand a dock, and program customers get priority emergency dispatch and preferred rates.",
      },
      {
        title: "Built around your operation, not ours.",
        body: "We schedule installs and repairs around your receiving hours, run background-checked technicians, carry commercial general liability, and provide the documentation your facility manager and insurer want, including fire door drop-test certification.",
      },
    ],
    bullets: [
      "Rolling steel & sectional doors",
      "Dock doors, seals & shelters",
      "Fire door installation & drop testing",
      "Commercial operators & controls",
      "Planned maintenance programs",
      "Priority emergency response",
      "Fully insured & documented",
      "Serving KC metro & 100-mile radius",
    ],
    faqs: [
      {
        q: "Do you offer commercial maintenance contracts?",
        a: "Yes: quarterly and semi-annual programs that include full inspection, lubrication, spring and cable assessment, operator safety testing, and documentation for your records. Program customers get priority dispatch and preferred repair rates.",
      },
      {
        q: "Can you service our doors outside business hours?",
        a: "Absolutely. We regularly schedule commercial work for evenings and weekends so your docks and bays stay open during operating hours.",
      },
      {
        q: "Do you perform fire door drop tests?",
        a: "Yes. NFPA 80 requires annual drop testing of fire-rated rolling doors. We test, reset, repair, and document, the paperwork your fire marshal and insurance carrier ask for.",
      },
      {
        q: "How fast can you respond to a down dock door?",
        a: "Maintenance-program customers get same-day priority response across the KC metro. For all commercial customers we prioritize down-door calls because we know what a stopped dock costs.",
      },
    ],
    icon: "warehouse",
  },
  {
    slug: "garage-door-off-track-repair",
    name: "Off-Track & Cable Repair",
    seoTitle: "Garage Door Off Track Repair Kansas City | Cable Replacement",
    primaryKeyword: "garage door off track repair",
    supportingKeywords: [
      "garage door cable replacement",
      "garage door crooked",
      "garage door fell off track",
      "garage door cable snapped",
    ],
    metaDescription:
      "Garage door off its track or hanging crooked? Snapped cable? Stop. Don't operate it. Same-day off-track and cable repair across Kansas City. Call (816) 288-3574.",
    headline: "Crooked, jammed, or off the rails. Step away from the door.",
    intro:
      "A garage door that's jumped its track or snapped a cable is the most dangerous condition a door can be in: several hundred pounds of steel held up by whatever's left. Don't run the opener, don't try to shove it back. Carlisle Overhead Doors safely re-sets off-track doors and replaces frayed or snapped cables same-day throughout the Kansas City metro.",
    sections: [
      {
        title: "Why doors come off track.",
        body: "The usual suspects: a car bumper nudge, a snapped lift cable dumping the door's weight to one side, worn rollers popping out of bent track, or an obstruction mid-travel. Whatever the cause, one side stops carrying weight, and the door twists, jams, or hangs. We fix the cause, not just the symptom, so it doesn't repeat.",
      },
      {
        title: "The safe re-set procedure.",
        body: "Our technicians release spring tension, support the door's weight, re-seat or replace rollers, straighten or replace bent track sections, re-cable both drums, then rebalance and safety-test the door through full cycles. It's a precise job, and exactly why this repair should never be a DIY project.",
      },
      {
        title: "Cables: the cheapest part that does the heaviest job.",
        body: "Lift cables fray from the bottom up, where water and salt sit through KC winters. If you can see broken strands or rust bloom at the bottom bracket, the cable is on its way out. We replace cables in pairs, inspect drums and bottom brackets, and get ahead of the failure instead of waiting for the bang.",
      },
    ],
    bullets: [
      "Same-day off-track response",
      "Snapped & frayed cable replacement",
      "Bent track straightened or replaced",
      "Rollers & hinges replaced",
      "Impact damage assessment",
      "Door rebalanced & cycle-tested",
      "Root cause fixed, not patched",
      "All brands & door weights",
    ],
    faqs: [
      {
        q: "Can I use my garage door if it's off track?",
        a: "No. Unplug the opener immediately. Operating an off-track door can bring the whole door down, destroy panels, and injure anyone nearby. It's a same-day fix for us and not worth the risk.",
      },
      {
        q: "What does off-track garage door repair cost?",
        a: "Straightforward re-sets with minor track adjustment typically run $150–$275 in the KC metro. If cables snapped or track sections and rollers need replacement, expect $250–$450. We quote exactly before work begins.",
      },
      {
        q: "One cable snapped. Can you replace just that one?",
        a: "We replace them in pairs. Both cables have identical wear, and a new cable paired with a worn one puts the door right back in a crooked, dangerous state when the old one lets go.",
      },
      {
        q: "The door hit my car. Whose insurance covers it?",
        a: "We see this often. We'll document the damage, provide a detailed repair estimate, and work with your (or the driver's) insurance paperwork. Either way, we can usually have the door operating safely the same day.",
      },
    ],
    icon: "track",
  },
  {
    slug: "garage-door-maintenance",
    name: "Tune-Up & Maintenance",
    seoTitle: "Garage Door Tune-Up & Maintenance Kansas City",
    primaryKeyword: "garage door maintenance Kansas City",
    supportingKeywords: [
      "garage door tune up",
      "garage door lubrication service",
      "noisy garage door fix",
      "garage door inspection",
    ],
    metaDescription:
      "Annual garage door tune-ups in Kansas City: 25-point inspection, lubrication, spring & cable check, opener safety test. Quiet the noise, prevent the breakdown. (816) 288-3574.",
    headline: "The $99 visit that prevents the $400 emergency.",
    intro:
      "Garage doors fail on schedule: springs fatigue, rollers wear flat, cables fray, and openers drift out of adjustment. A yearly tune-up from Carlisle Overhead Doors catches all of it early. Our 25-point service quiets rattling doors, extends spring life, and keeps you off the emergency-call list when the first ice storm of a Kansas City winter hits.",
    sections: [
      {
        title: "The 25-point tune-up.",
        body: "We inspect and tension springs, check cables for fraying, tighten every hinge and bracket, replace worn rollers on request, lubricate all moving steel with garage-door-specific lubricant (not WD-40, which is a solvent), test door balance, calibrate opener force and travel limits, and verify photo-eye safety reversal. You get a written condition report with anything worth watching.",
      },
      {
        title: "The cure for a noisy door.",
        body: "That wake-the-whole-house rattle is usually worn steel rollers, dry hinges, and loose hardware amplified by your garage acting as a speaker box. A tune-up with nylon roller replacement typically cuts door noise dramatically, the fix bedroom-over-garage households love most.",
      },
      {
        title: "When to schedule it.",
        body: "Once a year for most homes; twice a year for heavy-use doors (4+ cycles a day). Fall is the smart season in Kansas City: steel that's about to fail tends to let go in the first hard cold snap, and a September tune-up finds it first.",
      },
    ],
    bullets: [
      "25-point inspection & written report",
      "Spring tension & balance check",
      "Cable & bottom bracket inspection",
      "Full lubrication service",
      "Hardware tightening throughout",
      "Opener force & limit calibration",
      "Photo-eye safety test",
      "Nylon roller upgrades available",
    ],
    faqs: [
      {
        q: "How often should a garage door be serviced?",
        a: "Once a year for typical use, the same cadence as your furnace. Doors cycling more than four times daily, or doors over 10 years old, benefit from twice-yearly service.",
      },
      {
        q: "What does a garage door tune-up cost?",
        a: "Our standard 25-point tune-up is a flat rate, call for current pricing. Parts like nylon rollers or weather seal are quoted separately before we install anything.",
      },
      {
        q: "Why is my garage door so loud?",
        a: "Nine times out of ten: worn steel rollers, dry hinges and springs, and hardware that's vibrated loose over years of cycles. A tune-up with nylon rollers usually transforms a rattling door into a quiet one.",
      },
      {
        q: "Can maintenance really extend spring life?",
        a: "Yes. A properly balanced, lubricated door reduces stress on springs every cycle. We regularly see maintained springs outlast neglected ones by years, and a tune-up costs a fraction of a spring replacement visit.",
      },
    ],
    icon: "shield",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
