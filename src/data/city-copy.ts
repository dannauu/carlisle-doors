/**
 * Unique, hand-written content for every service-area city page.
 * Each city gets a distinct hero blurb and at least one city-specific
 * section grounded in real local context (housing stock, geography,
 * economy) so no two pages read alike. This is what separates a real
 * programmatic SEO build from doorway pages.
 */
export type CityCopy = {
  /** Unique hero paragraph shown under the H1 */
  blurb: string;
  /** City-specific content sections */
  sections: { title: string; body: string }[];
};

export const cityCopy: Record<string, CityCopy> = {
  /* ================= Core Metro, Missouri ================= */

  "kansas-city-mo": {
    blurb:
      "From pre-war Brookside colonials with original hardware to new townhomes in the Northland, Kansas City proper has the widest mix of garage doors in the metro, and we work on all of it.",
    sections: [
      {
        title: "A century of housing means a century of doors.",
        body: "Kansas City's housing stock spans a hundred years, and the garage doors show it. Waldo and Brookside still have narrow single-car openings sized for 1940s automobiles, midtown has detached garages that have settled out of square, and the Northland is full of 90s and 2000s builder doors reaching the end of their spring life. We carry parts for all of it, from low-headroom track for older garages to modern insulated doors sized for openings that were never quite standard. If your garage is older than your opener, we can make them work together safely.",
      },
      {
        title: "Same-day across the city, both sides of the river.",
        body: "Our crews cross the metro daily on I-70, I-435, and I-35, so a repair call from the Plaza is as routine as one from Platte Woods. Most Kansas City repairs are quoted on the phone, confirmed in the driveway, and finished the same visit from truck stock.",
      },
    ],
  },
  "independence-mo": {
    blurb:
      "Truman's hometown runs from historic homes near the Square to 60s and 70s ranches out toward Highway 291, and its garage doors are some of the hardest-working in Jackson County.",
    sections: [
      {
        title: "Older garages, modern doors, no drama.",
        body: "A lot of Independence garages were built decades before modern sectional doors were standard, which means low headroom, out-of-square jambs, and framing that has moved with time. We measure carefully, stock low-headroom track, and rebuild openings when the wood behind the door has rotted out. For the newer subdivisions east of MO-291, it's a different story: builder-grade doors from the 90s and 2000s that are hitting their first spring failures, which we handle same-day with high-cycle replacements.",
      },
    ],
  },
  "lees-summit-mo": {
    blurb:
      "One of Missouri's fastest-growing cities for two decades running, Lee's Summit is full of 2000s-era subdivisions whose builder-grade doors and openers are all aging out on the same schedule.",
    sections: [
      {
        title: "The 20-year wave has arrived.",
        body: "Drive through Winterset, Raintree, or the neighborhoods off Ward Road and you'll see the pattern: homes built in a five-year window, which means springs, rollers, and openers failing in the same five-year window. We run Lee's Summit constantly, install 20,000-cycle springs as standard so the next failure is decades away, and quote door replacements with samples brought to your driveway. Downtown Lee's Summit's older homes get the same care with low-headroom and custom-fit solutions.",
      },
    ],
  },
  "blue-springs-mo": {
    blurb:
      "Between the lake traffic, commuter miles on I-70, and three decades of steady homebuilding, Blue Springs garage doors cycle hard. Ours is one of the most frequent service routes we run.",
    sections: [
      {
        title: "Minutes from our shop, first on the route.",
        body: "Blue Springs is one town over from our Oak Grove home base, which makes it one of the fastest places in the metro to get a Carlisle truck. Morning spring failures are usually fixed by lunch. The city's housing runs from 70s ranches near downtown to newer construction south toward Lake Tapawingo and Adams Dairy Parkway, and we stock springs and panels for the builder doors common to every era of it.",
      },
    ],
  },
  "raytown-mo": {
    blurb:
      "Raytown's mid-century ranches were built when garage doors were an afterthought. Sixty years later, we spend a lot of time here replacing original hardware that has more than earned its retirement.",
    sections: [
      {
        title: "Mid-century homes deserve better than 1960s hardware.",
        body: "A surprising number of Raytown garages still run on original or decades-old doors: heavy wooden slabs, extension springs without safety cables, and openers older than the homeowners. These are the doors that fail dangerously. We convert old extension-spring setups to modern torsion systems, replace wood slabs with insulated steel that keeps the garage usable year-round, and bring openers up to current safety code with photo eyes and auto-reverse. The house keeps its character; the door stops being a hazard.",
      },
    ],
  },
  "grandview-mo": {
    blurb:
      "Home of the Truman farm and a straight shot down I-49 for our trucks, Grandview mixes post-war ranches with newer builds, and both generations of garage doors keep us busy.",
    sections: [
      {
        title: "Honest work for working homes.",
        body: "Grandview homeowners tend to want the door fixed right, not upsold. That's our lane. We repair what's repairable, tell you plainly when replacement is the cheaper path over five years, and stock economical insulated steel doors that handle Missouri summers and ice storms without the premium-brand markup. Same flat rates as everywhere else in the metro, no distance surcharge.",
      },
    ],
  },
  "gladstone-mo": {
    blurb:
      "Gladstone's post-war Northland neighborhoods are full of solid brick ranches with garages that were sized for 1960s cars, and doors that are ready for their second or third replacement.",
    sections: [
      {
        title: "Right-sizing doors for Northland ranches.",
        body: "The classic Gladstone garage is a single-car opening, sometimes widened over the years, often with settled framing and headroom that modern kits don't expect. We measure every opening rather than assuming standard sizes, carry low-headroom track on the truck, and can widen or rebuild openings where homeowners want to fit today's larger vehicles. For the many detached garages in the area, we also handle the electrical-free options: keyed locks, battery openers, and manual lift setups done right.",
      },
    ],
  },
  "liberty-mo": {
    blurb:
      "From the historic square and William Jewell College to the new rooftops spreading north and east, Liberty spans 150 years of construction, and we fit doors to every era of it.",
    sections: [
      {
        title: "Historic character in front, modern function behind.",
        body: "Liberty homeowners near the square often want carriage-house styling that suits older architecture, and the newer subdivisions want quiet openers and insulated doors for finished garages. We do both weekly: wood-look steel carriage doors that pass the curb test on a historic street, and belt-drive smart openers with battery backup for the new builds. Clay County is a daily route for us, so same-day repair is the norm, not the exception.",
      },
    ],
  },
  "north-kansas-city-mo": {
    blurb:
      "NKC is equal parts industrial district, brewery row, and compact residential blocks, and its overhead doors work harder than almost anywhere else in the metro.",
    sections: [
      {
        title: "Commercial doors are half our work here.",
        body: "North Kansas City's warehouses, shops, and dock doors cycle dozens of times a day, and a stuck door stops revenue. We service rolling steel, sectional, and dock doors across the industrial district, offer planned maintenance that catches spring fatigue before it strands a bay, and prioritize down-door commercial calls. For the neighborhood's bungalows, we handle compact garages and alley-access doors that bigger outfits don't want to bother with.",
      },
    ],
  },
  "riverside-mo": {
    blurb:
      "Tucked along the Missouri River bluffs off Highway 9, Riverside is small, but its mix of riverside industry and hillside homes gives us plenty of interesting door work.",
    sections: [
      {
        title: "Small city, quick service.",
        body: "Riverside sits minutes from downtown via I-635 and Highway 9, right on our daily Platte County loop. Homeowners here get the same stocked-truck, one-visit service we run across the metro, and the light-industrial businesses in the Horizons area get commercial door repair without big-outfit scheduling delays. Wind exposure along the river valley makes proper wind-load rating worth discussing on any new door here.",
      },
    ],
  },
  "parkville-mo": {
    blurb:
      "Between the river bottoms of English Landing and the wooded hills around Park University, Parkville homes rarely have a flat, standard garage situation, and that's exactly the work we like.",
    sections: [
      {
        title: "Hillside garages and custom fits.",
        body: "Parkville builds on terrain. Tuck-under garages, steep driveways, and custom home designs mean doors that need real measurement and sometimes creative track work. We handle high-lift conversions for tall ceilings, custom-width doors for older openings near downtown, and premium styles for the newer estates off Highway 45 where the door is a major piece of the home's face. Free estimates, samples in the driveway, and honest advice about what the architecture calls for.",
      },
    ],
  },
  "belton-mo": {
    blurb:
      "Belton's straight shot down I-49 keeps it firmly in our same-day zone, and its mix of established neighborhoods and new construction south of 155th keeps the full range of door work coming.",
    sections: [
      {
        title: "Cass County's workhorse doors.",
        body: "Belton garages do real work: trucks, trailers, shop projects, and daily cycles that add up fast. We install heavier-gauge steel doors that shrug off dings, put high-cycle springs on everything, and service the older extension-spring doors still common in the established neighborhoods off North Scott. When a builder-grade door from the 2000s gives out, we'll quote both a repair and a replacement so you can pick with real numbers.",
      },
    ],
  },
  "raymore-mo": {
    blurb:
      "One of the fastest-growing cities in Missouri, Raymore is wall-to-wall 2000s and 2010s subdivisions, which means a coming wave of first spring failures, and we're already catching it.",
    sections: [
      {
        title: "Built in a boom, failing on schedule.",
        body: "Raymore's growth came fast, and builder-grade hardware has a clock on it: about 10,000 cycles, or 7 to 10 years for a busy family. We're now replacing first-generation springs and openers across the city's newer neighborhoods, and we do it with 20,000-cycle springs and belt-drive openers so the second decade is quieter than the first. HOA-conscious door upgrades are routine here, and we help match styles and colors that keep the street consistent.",
      },
    ],
  },
  "grain-valley-mo": {
    blurb:
      "Our next-door neighbor on I-70, Grain Valley is often the first stop a Carlisle truck makes in the morning. New rooftops keep going up, and we keep their doors running.",
    sections: [
      {
        title: "Neighbors, literally.",
        body: "Grain Valley is minutes from our Oak Grove shop, which means repair response here is about as fast as it gets anywhere in the metro. The city's newer subdivisions carry the usual builder-grade door hardware, and we're steadily upgrading it street by street as it wears: high-cycle springs, nylon rollers that end the 6 AM rattle, and insulated doors for the many homeowners finishing garage gyms and workshops.",
      },
    ],
  },
  "kearney-mo": {
    blurb:
      "Jesse James country is now commuter country. Kearney's acreages and new subdivisions both lean on their garages hard, and outbuildings here are as common as garages.",
    sections: [
      {
        title: "House doors and barn doors alike.",
        body: "Kearney splits between newer in-town subdivisions and rural properties with shops and pole barns, and we outfit both. In town, it's spring replacements and insulated door upgrades. On the acreage, it's 10 and 12-foot-tall doors for equipment bays, commercial-grade track and openers for shop buildings, and doors that seal well enough to keep a heated shop affordable through a Clay County winter. One crew, both jobs, same trip.",
      },
    ],
  },
  "smithville-mo": {
    blurb:
      "Lake life means boats, and boats mean tall garages. Between lakeside properties and Smithville's growing subdivisions, oversized doors are practically the local specialty.",
    sections: [
      {
        title: "Doors sized for lake toys.",
        body: "A standard 7-foot door doesn't clear a wakeboard tower. Smithville homeowners regularly ask us for 8 and 9-foot-tall doors, RV bays, and third-stall additions, and we quote them with the framing work included. For everything else, the city's newer construction carries typical builder hardware that we service same-day from our daily Clay County route, with high-cycle springs standard on every replacement.",
      },
    ],
  },
  "platte-city-mo": {
    blurb:
      "The Platte County seat sits minutes from KCI, and its mix of historic homes near Main Street and new construction along Highway 92 gives us both ends of the door spectrum.",
    sections: [
      {
        title: "From courthouse square to new construction.",
        body: "Platte City's older homes need doors fitted to openings that predate standard sizing, and its newer neighborhoods need the usual: spring service, opener upgrades, and builder-door replacements with something quieter and better insulated. Airport-area wind exposure is real here, so we talk wind-load ratings on every new door quote. Platte County is on our regular route, and emergencies get the same 24/7 response as the rest of the metro.",
      },
    ],
  },
  "pleasant-hill-mo": {
    blurb:
      "With its preserved downtown and rail heritage, Pleasant Hill mixes century homes, post-war blocks, and country properties, and no two garage door calls here look the same.",
    sections: [
      {
        title: "Variety is the routine here.",
        body: "One Pleasant Hill morning can include a carriage-style door for a Victorian near downtown, a torsion conversion on a 60s ranch, and a 12-foot shop door on an acreage off Highway 7. We carry the range: low-headroom hardware, wood-look steel for historic streets, and commercial-grade doors for outbuildings. Cass County sits inside our same-day zone, and our flat rates don't change with your zip code.",
      },
    ],
  },

  /* ================= Core Metro, Kansas ================= */

  "overland-park-ks": {
    blurb:
      "Kansas's second-largest city and the metro's biggest suburban door market. Whole Overland Park neighborhoods hit the end of their builder-grade doors at the same time, and we're there when they do.",
    sections: [
      {
        title: "Overland Park's doors are aging out together.",
        body: "Huge swaths of Overland Park went up in the same building booms, which means whole neighborhoods hit the end of their builder-grade garage doors at the same time. If your neighbors have been replacing doors, yours is likely on the same clock: springs rated for 10,000 cycles, thin single-layer steel, and openers without modern safety or battery backup. We replace a lot of doors south of College Boulevard, and we stock parts for every brand the original builders used.",
      },
      {
        title: "Upgrades that fit the neighborhood (and the HOA).",
        body: "Many Overland Park subdivisions have HOA guidelines on door style and color, and most homeowners want a door that lifts the whole facade without clashing with the street. We bring sample books to your driveway, help you match panel style and color to the neighborhood, and handle insulated doors that make attached-garage homes noticeably quieter and cheaper to heat and cool through Kansas winters and July heat.",
      },
    ],
  },
  "olathe-ks": {
    blurb:
      "The Johnson County seat has been one of the fastest-growing cities in Kansas for twenty years, and its 2000s-era subdivisions are hitting their first big wave of garage door failures right now.",
    sections: [
      {
        title: "Olathe grew fast. Its garage doors are catching up.",
        body: "Olathe has been one of the fastest-growing cities in Kansas for two decades, and the math is simple: subdivisions built in the 2000s and 2010s are now 10 to 20 years old, which is exactly when builder-grade springs, rollers, and openers start failing. We handle a steady stream of first-time spring replacements across Olathe, and we install 20,000-cycle springs as standard so you are not doing this again in seven years.",
      },
      {
        title: "New doors for new-build families.",
        body: "A lot of Olathe homeowners are upgrading the plain white builder door to something with real curb appeal: carriage house styles, wood-look steel, insulated doors with windows that brighten the garage gym or workshop. Estimates are free, we bring samples to your driveway, and installation typically happens within one to two weeks of ordering, old door haul-away included.",
      },
    ],
  },
  "shawnee-ks": {
    blurb:
      "Shawnee stretches from 1950s neighborhoods near Old Shawnee Town out to new construction past K-7, and its garage doors span every decade in between.",
    sections: [
      {
        title: "Seventy years of Shawnee garages.",
        body: "Eastern Shawnee's post-war homes carry older doors, some still on extension springs that deserve a modern torsion conversion. Western Shawnee past K-7 is newer construction with builder-grade hardware wearing out on schedule. We work the whole corridor weekly, stock parts for both generations, and handle the growing number of homeowners adding side-mount openers and tall doors to accommodate lifted trucks and car lifts in newer builds.",
      },
    ],
  },
  "lenexa-ks": {
    blurb:
      "Lenexa is two cities in one: established neighborhoods from the 80s and 90s, and the fast-growing City Center corridor. Both ends of town keep our Johnson County trucks busy.",
    sections: [
      {
        title: "From Old Town to City Center, Lenexa doors run the full range.",
        body: "Lenexa is two cities in one: established neighborhoods with doors and openers from the 80s and 90s, and newer construction around City Center with modern doors that still need tuned tracks, balanced springs, and warranty-safe service. We work both ends weekly, whether that's replacing a worn-out chain-drive opener in an older ranch or dialing in a brand-new insulated door a builder installed in a hurry.",
      },
      {
        title: "Same-day service on the I-35 corridor.",
        body: "Lenexa sits right on our daily Johnson County route, so repair calls placed before noon are usually handled the same day. Broken spring, door off track, opener that hums but will not lift: our trucks carry the springs, cables, rollers, and opener parts to finish most Lenexa repairs in a single visit, with the price quoted before we touch a tool.",
      },
    ],
  },
  "leawood-ks": {
    blurb:
      "Leawood homes make a statement from the street, and the garage door is a third of that statement. Premium doors, precise installs, and quiet openers are the standing order here.",
    sections: [
      {
        title: "Doors that match the neighborhood's standards.",
        body: "In Leawood, a dented builder door drags the whole facade down. We install the upper end of the catalog here: custom carriage house designs, full-view glass and aluminum, wood-look steel with real presence, and side-mount openers that keep ceilings clean for storage racks. Installs are measured twice, sealed properly, and finished with the hardware details that premium doors deserve. Repairs get the same treatment, with technicians who show up when they say they will.",
      },
    ],
  },
  "prairie-village-ks": {
    blurb:
      "Prairie Village's post-war homes were built as a planned community, and keeping a consistent, classic street face matters here. We fit doors that respect that, then hide modern convenience behind them.",
    sections: [
      {
        title: "Classic outside, modern inside.",
        body: "Many Prairie Village garages are single-car, attached, and original to homes from the 40s and 50s, with openings that don't match today's standard sizes. We fabricate the fit rather than forcing it: correctly sized doors in clean traditional styles, low-headroom track where post-war framing demands it, and whisper-quiet belt openers, because in a house this size, everyone hears a chain drive. Spring and cable service on older hardware is a daily call for us here.",
      },
    ],
  },
  "merriam-ks": {
    blurb:
      "Compact, convenient, and right on I-35, Merriam's mid-century homes are some of the quickest service stops on our Johnson County route.",
    sections: [
      {
        title: "Small garages, quick fixes, fair prices.",
        body: "Merriam's housing stock leans mid-century: single-car garages, older hardware, and openers that have outlived their design life. Most calls here are classic repair work, and our trucks carry what these doors need: springs sized for lighter older doors, low-headroom track, safety-cable retrofits for old extension setups, and compact openers that fit tight ceilings. In and out in one visit is the norm.",
      },
    ],
  },
  "mission-ks": {
    blurb:
      "Mission's walkable blocks and mid-century homes come with garages from an era of smaller cars and simpler doors. We keep them working, quietly, without oversizing the fix.",
    sections: [
      {
        title: "Right-sized service for first-ring homes.",
        body: "The typical Mission garage doesn't need a premium 18-footer; it needs an honest single-car door that fits an older opening, runs quietly next to a bedroom, and doesn't cost more than the problem justifies. That's the work we do here weekly: spring replacements on aging hardware, torsion conversions, weather seal that finally stops the winter draft, and clean traditional door styles that suit the neighborhood's character.",
      },
    ],
  },
  "roeland-park-ks": {
    blurb:
      "One of the first-ring's tidiest small cities, Roeland Park keeps its post-war homes in good order, and the garage doors here are overdue for the same attention.",
    sections: [
      {
        title: "Keeping older garages safe and current.",
        body: "Roeland Park garages often still run on hardware from decades past: extension springs without safety cables, openers that predate mandatory auto-reverse, and doors heavy enough to be dangerous when something lets go. We bring these setups up to modern safety standards without overselling: torsion conversions, code-current openers with photo eyes, and solid insulated single-car doors that suit the housing stock and the budget.",
      },
    ],
  },
  "kansas-city-ks": {
    blurb:
      "From Strawberry Hill's century-old homes to the Legends' newer rooftops and the industrial corridors along I-70, KCK covers more door variety per mile than anywhere in the metro.",
    sections: [
      {
        title: "Every kind of door Wyandotte County can throw at us.",
        body: "KCK service calls range from a 1920s detached garage off Central Avenue to a dock door in the Fairfax industrial district to a builder-grade spring failure out west near the Legends. We run all of it: residential repairs and replacements, commercial and rolling steel service, and the odd-sized custom fits that older Wyandotte housing demands. Flat rates hold across the county line, and same-day is the standard response inside our core zone.",
      },
    ],
  },
  "bonner-springs-ks": {
    blurb:
      "Where the metro starts feeling like the country, Bonner Springs mixes in-town homes with acreage properties, and garage door calls here often come with a shop building attached.",
    sections: [
      {
        title: "Town doors and shop doors in one trip.",
        body: "Plenty of Bonner Springs properties have both a house garage and an outbuilding, and we're set up to service both in a single visit: residential spring and opener work on the house, taller commercial-grade doors and heavier track on the shop. New pole barn going up? We'll spec doors that match the building's frame and your equipment height before the concrete cures.",
      },
    ],
  },
  "edwardsville-ks": {
    blurb:
      "Small, quiet, and right off I-70 between KCK and Bonner Springs, Edwardsville gets the same stocked-truck service as the big suburbs, usually faster.",
    sections: [
      {
        title: "No town too small for a full-service call.",
        body: "Edwardsville homeowners sometimes assume they'll wait longer because the town is small. It's the opposite: we pass through this stretch of I-70 daily, so repairs slot into our route quickly. Springs, cables, openers, panel damage, and full replacements all run at the same metro flat rates, and the growing warehouse corridor nearby means our commercial crew is often minutes away.",
      },
    ],
  },
  "gardner-ks": {
    blurb:
      "Where the Oregon and Santa Fe trails split, Gardner is now one of Johnson County's fastest-growing family towns, with the logistics corridor next door keeping commercial doors busy too.",
    sections: [
      {
        title: "Growing families, hard-working doors.",
        body: "Gardner's newer subdivisions are full of young families cycling their doors six to ten times a day, which burns through builder-grade springs years ahead of schedule. We install high-cycle springs as standard and quiet belt openers that don't wake the baby. Nearby, the intermodal and warehouse growth means dock and rolling steel doors on tight uptime requirements, and our commercial maintenance program keeps them off the emergency list.",
      },
    ],
  },
  "de-soto-ks": {
    blurb:
      "With the giant battery plant transforming the K-10 corridor, De Soto is growing faster than anyone expected, and both its new construction and its established acreages need door work.",
    sections: [
      {
        title: "A small town in a big growth moment.",
        body: "De Soto's new rooftops come with builder-grade doors that will need real service within the decade, and we're already fielding calls from the first wave. The town's older properties and acreages along the Kansas River valley bring the classic rural mix: shop buildings, oversized doors, and equipment bays. Whichever side of De Soto's growth story you're on, K-10 puts you minutes from our daily Johnson County route.",
      },
    ],
  },
  "spring-hill-ks": {
    blurb:
      "Straddling the Johnson-Miami county line, Spring Hill is new-build country: young subdivisions, first-time spring failures, and homeowners upgrading plain builder doors street by street.",
    sections: [
      {
        title: "First failures and first upgrades.",
        body: "Spring Hill's housing boom is recent enough that many homeowners are hitting their first garage door problem right now, usually a snapped builder spring or an opener that gave up early. We fix it same-day with hardware rated for twice the cycles, and while we're there, plenty of owners ask about upgrading the plain white door to something with windows and insulation. Estimates are free and samples come to the driveway.",
      },
    ],
  },
  "basehor-ks": {
    blurb:
      "One of Leavenworth County's fastest-growing communities, Basehor pairs new subdivisions with rural properties, and its garage doors range from brand-new builder grade to well-used shop doors.",
    sections: [
      {
        title: "New neighborhoods, country property, one door crew.",
        body: "Basehor calls split evenly: builder-door service in the newer subdivisions off 24-40 Highway, and heavier work on the acreages, where shop buildings and detached garages need commercial-grade doors and track. We handle both from the same truck, with high-cycle springs standard on replacements and honest quotes on whether an aging door is worth repairing or ready for retirement.",
      },
    ],
  },

  /* ================= Extended Ring, 25 to 50 miles ================= */

  "excelsior-springs-mo": {
    blurb:
      "The old spa town's historic homes and hillside streets give Excelsior Springs some of the most character-filled garages in the metro, and some of the trickiest fits.",
    sections: [
      {
        title: "Historic homes need doors that fit, literally and visually.",
        body: "Excelsior Springs garages were often added to homes decades after they were built, wedged into hillsides and alleys with openings that ignore every standard size chart. We measure, fabricate the fit, and match styles that suit a historic street: carriage-house steel, clean traditional panels, and colors that don't fight the house. Modern springs and openers go in behind the vintage look, so the door works like it's new, because it is.",
      },
    ],
  },
  "oak-grove-mo": {
    blurb:
      "This is home. Carlisle Overhead Doors is based in Oak Grove, and when a neighbor's door breaks, the truck is often there before the coffee's cold.",
    sections: [
      {
        title: "Our own backyard.",
        body: "Oak Grove is where Tyler parks the trucks, so response here is as fast as it gets: no routing, no scheduling gymnastics, just a short drive across town. We service everything local: in-town homes, the acreages and shop buildings that surround the city, and the I-70 corridor businesses that keep this stretch of Jackson County moving. If you've seen our wooden sign around town, you know where to find us, and the phone number on it rings a real person.",
      },
    ],
  },
  "odessa-mo": {
    blurb:
      "One exit east of our shop on I-70, Odessa is practically home turf. Farm properties, in-town homes, and shop buildings all get the neighbor treatment here.",
    sections: [
      {
        title: "Next-exit neighbors.",
        body: "Odessa sits ten minutes down I-70 from our Oak Grove base, inside what we consider our home zone. In-town calls run the usual springs, openers, and replacements. Outside town, Lafayette County acreage means real outbuildings: 12-foot equipment doors, insulated shop doors that keep a wood stove's heat, and heavy-duty track that stands up to farm use. Same-day service is the default, not the upgrade.",
      },
    ],
  },
  "harrisonville-mo": {
    blurb:
      "The Cass County seat anchors the southern end of our core routes, with courthouse-square homes, newer subdivisions, and working farms all within a few minutes of each other.",
    sections: [
      {
        title: "County-seat variety, one flat rate.",
        body: "Harrisonville work runs the full spread: older homes near the square with odd-sized openings, 90s and 2000s subdivisions hitting spring-replacement age, and rural properties along 291 and 71 Highway with barns and shops that need serious doors. We run Cass County regularly, carry hardware for all three kinds of calls on the same truck, and quote everything flat-rate before work starts.",
      },
    ],
  },
  "peculiar-mo": {
    blurb:
      "Yes, we get asked about the name on every visit. Peculiar's mix of small-town blocks and new growth along the 71 Highway corridor keeps our Cass County route interesting.",
    sections: [
      {
        title: "Nothing peculiar about a door that just works.",
        body: "Peculiar is growing along the Raymore-Belton corridor, and its newer homes carry the standard builder-grade hardware we replace all over the metro, while its older streets and surrounding acreages bring rural door work: shop buildings, detached garages, and doors that haul real weight. High-cycle springs, quiet openers, honest quotes, and a crew that's heard every possible joke about the town name and still laughs.",
      },
    ],
  },
  "cameron-mo": {
    blurb:
      "At the crossroads of I-35 and US-36, Cameron is the hub of a big rural area, and garage door calls here as often involve a machine shed as a house.",
    sections: [
      {
        title: "Crossroads service for town and farm.",
        body: "Cameron anchors our northern extended route. In-town homes get the standard full service: springs, openers, and replacement doors at metro flat rates. The surrounding Clinton and DeKalb county farmland brings the bigger work: tall equipment-shed doors, commercial track and openers for shop buildings, and repairs on doors that have taken a beating from actual use. We schedule the area efficiently, so ask about combining house and outbuilding work in one visit.",
      },
    ],
  },
  "richmond-mo": {
    blurb:
      "The Mushroom Capital and Ray County seat sits in solid farm country, where garage doors share driveways with machine sheds, and we service both.",
    sections: [
      {
        title: "Farm-country doors done properly.",
        body: "Richmond calls regularly include the outbuildings: equipment sheds needing 12 to 14-foot doors, shops that want insulation so winter projects stay comfortable, and older barns getting proper overhead doors for the first time. In town, the county-seat housing stock spans a century, so we carry low-headroom track and odd-size solutions alongside the standard springs and openers. Scheduled visits are efficient; true emergencies still get same-day dispatch.",
      },
    ],
  },
  "lexington-mo": {
    blurb:
      "Antebellum architecture, a historic battlefield, and river-town streets make Lexington's garages some of the most character-rich we serve, and modern doors have to earn their place here.",
    sections: [
      {
        title: "Respecting a historic streetscape.",
        body: "On a street of 150-year-old homes, a glaring white builder door is vandalism. Lexington homeowners tend to choose carriage-house styles, muted colors, and window designs that suit the architecture, and we stock exactly those catalogs. Behind the period look goes modern hardware: sealed insulated steel, quiet openers, and springs sized to the door's actual weight. For the surrounding Lafayette County farmland, we run the full rural door service too.",
      },
    ],
  },
  "higginsville-mo": {
    blurb:
      "A tidy Lafayette County farm town off I-70, Higginsville pairs in-town homes with serious agricultural buildings, and its doors work for a living.",
    sections: [
      {
        title: "Working doors for a working town.",
        body: "Higginsville garage doors don't get babied: farm trucks, equipment, grain-season traffic, and shop projects keep them cycling. We install hardware that keeps up, including heavier-gauge steel, commercial track on shop buildings, and high-cycle springs everywhere. I-70 puts Higginsville an easy run from our Oak Grove shop, so scheduled work lands quickly and a stuck door before harvest gets treated like the emergency it is.",
      },
    ],
  },
  "leavenworth-ks": {
    blurb:
      "The first city of Kansas has garages spanning three centuries of construction, from Victorian carriage houses to Fort Leavenworth-driven new builds, and we've fitted doors to all of it.",
    sections: [
      {
        title: "Three centuries of housing, one door crew.",
        body: "Leavenworth's historic districts hold homes from the 1800s whose garages were carriage houses first, with openings and headroom no modern kit expects. We custom-fit those regularly. The city's newer neighborhoods, many housing Fort Leavenworth families, bring standard suburban service with a twist: military moves mean doors need fixing on a PCS timeline, and we hit those dates. Springs, openers, and full replacements all run at flat metro rates.",
      },
    ],
  },
  "lansing-ks": {
    blurb:
      "Growing steadily along the K-7 corridor south of Leavenworth, Lansing is young-family territory where the garage is the busiest door in the house.",
    sections: [
      {
        title: "Family garages that cycle all day.",
        body: "Lansing's subdivisions are full of households that open the garage more than the front door: school runs, bikes, sports gear, and the second fridge. That duty cycle eats builder springs in six or seven years. We swap them for 20,000-cycle hardware, tune openers so the door doesn't announce every departure, and quote insulated replacement doors for the many owners turning the garage into usable year-round space.",
      },
    ],
  },
  "tonganoxie-ks": {
    blurb:
      "Halfway between Lawrence and Leavenworth on the 24-40 corridor, Tonganoxie has boomed with families wanting acreage within commuting range, and their properties need both house and shop doors.",
    sections: [
      {
        title: "Acreage living, done with the right doors.",
        body: "The Tonganoxie formula is a newer house plus a shop building or planning for one. We serve both halves: standard residential service on the house, and for the shop, doors sized to your actual equipment, 10 to 14 feet tall, insulated if you heat the space, with commercial track and openers that handle daily use. Building new? Call before the framing is done and we'll spec openings that save you money on the door.",
      },
    ],
  },
  "paola-ks": {
    blurb:
      "The Miami County seat with its classic park square anchors our southwest routes, serving a town-and-country mix where garage doors and barn doors share the same call sheet.",
    sections: [
      {
        title: "Square-town charm, farm-country function.",
        body: "Paola's older in-town homes call for well-fitted traditional doors and the occasional custom size, while the surrounding county brings equipment sheds, horse barns, and shop buildings needing tall, heavy-duty doors. We run Miami County on a regular loop, quote everything flat-rate, and treat a farmer's stuck equipment-bay door in planting season with the urgency it deserves.",
      },
    ],
  },
  "osawatomie-ks": {
    blurb:
      "John Brown's old stomping grounds is a hard-working Miami County town where practical, durable, fairly priced door work is exactly what's wanted, and exactly what we do.",
    sections: [
      {
        title: "Durable and fair, no frills required.",
        body: "Osawatomie homeowners mostly want the door to work, the price to be honest, and the crew to show up when promised. Done. We repair aging hardware on the town's older housing stock, replace doors with solid insulated steel that doesn't need pampering, and handle the rural outbuildings across the surrounding county. Flat rates, no distance surcharge, and scheduled visits that respect your time.",
      },
    ],
  },
  "louisburg-ks": {
    blurb:
      "Known metro-wide for its cider mill, Louisburg is Miami County acreage country: newer homes on big lots, with shops and barns that need doors as capable as the houses are comfortable.",
    sections: [
      {
        title: "Big lots, big doors.",
        body: "Louisburg properties run large, and so do their door needs: three-car garages, RV-height bays, and shop buildings that homeowners actually use. We install oversized and high-lift doors, spec insulation for heated shops, and put commercial-grade hardware on anything that cycles daily. The house garage gets the same attention, with high-cycle springs and quiet openers standard on our replacements.",
      },
    ],
  },
  "lawrence-ks": {
    blurb:
      "Between KU rentals, historic Old West Lawrence homes, and new construction on the west side, Lawrence has three distinct door markets, and we work all three.",
    sections: [
      {
        title: "College town, three door markets.",
        body: "Lawrence rental properties need doors fixed fast, priced fairly, and documented for property managers, and we handle portfolios across town. Old West Lawrence and East Lawrence historic homes need custom fits and period-appropriate styles. West Lawrence's newer subdivisions bring standard suburban service, with builder doors aging into spring replacements. One call covers all of it, and K-10 makes Lawrence an easy regular route for our Johnson County crews.",
      },
    ],
  },
  "atchison-ks": {
    blurb:
      "Amelia Earhart's hometown climbs from the Missouri River in tiers of Victorian architecture, and its hillside garages are as characterful and as nonstandard as the houses above them.",
    sections: [
      {
        title: "Victorian hills, custom fits.",
        body: "Atchison garages tuck into hillsides, alleys, and carriage-house footprints, and standard door sizing rarely applies. We measure every opening, build the fit with custom widths and low-headroom track, and match styles that don't argue with a Victorian streetscape. Benedictine-area rentals get quick, fair repair service, and the surrounding farmland brings regular outbuilding work. Scheduled visits are the norm at this distance; emergencies still get dispatched same-day.",
      },
    ],
  },

  /* ================= Outer Ring, 50 to 100 miles ================= */

  "st-joseph-mo": {
    blurb:
      "The Pony Express city has one of the great historic housing stocks in the Midwest, and its garages, carriage houses, and commercial buildings need doors that respect a lot of history.",
    sections: [
      {
        title: "Historic stock, industrial backbone.",
        body: "St. Joseph splits between grand old neighborhoods where garages were an afterthought to the architecture and a working industrial base with dock and rolling steel doors that can't afford downtime. We schedule the city weekly: custom-fit residential doors and torsion conversions on the historic side, commercial service and planned maintenance on the industrial side. True emergencies, a door stuck open or a business bay down, get same-day dispatch despite the distance.",
      },
    ],
  },
  "warrensburg-mo": {
    blurb:
      "Between the University of Central Missouri and Whiteman AFB down the road, Warrensburg mixes college rentals, military families, and Johnson County farmland, and all three need door work.",
    sections: [
      {
        title: "Rentals, PCS timelines, and farm shops.",
        body: "Warrensburg property managers need rental doors fixed fast with clean documentation, and we deliver both. Military families near Whiteman work on move timelines, so we hit scheduled dates reliably. Outside town, it's classic west-central Missouri: machine sheds and shops needing tall doors and heavy hardware. We route the area regularly from Oak Grove down US-50, and flat rates hold this far out too.",
      },
    ],
  },
  "sedalia-mo": {
    blurb:
      "Home of the Missouri State Fair and Scott Joplin's ragtime, Sedalia has sturdy century homes, post-war blocks, and enough fairground-area commerce to keep commercial doors on our schedule.",
    sections: [
      {
        title: "State Fair city, full-service route.",
        body: "Sedalia's housing spans from stately older neighborhoods to mid-century blocks, and its doors span the same century of hardware. We run scheduled routes here for repairs, replacements, and the commercial doors on shops and warehouses around town. Older homes get custom fits and torsion conversions; newer ones get high-cycle springs and quiet openers. Combining neighbors' jobs on one trip keeps everyone's cost down, so mention if the folks next door have a door problem too.",
      },
    ],
  },
  "marshall-mo": {
    blurb:
      "The Saline County seat, home of Missouri Valley College and the legend of Jim the Wonder Dog, sits in prime farm country where equipment doors matter as much as garage doors.",
    sections: [
      {
        title: "County-seat homes, working farmland.",
        body: "In-town Marshall runs the classic county-seat mix of century homes and post-war blocks, with door work to match: custom fits, torsion conversions, and honest repair-or-replace advice. The surrounding Saline County farmland brings the heavy work, including machine-shed doors, grain-operation buildings, and shop doors that see daily equipment traffic. We schedule the area efficiently and treat harvest-season breakdowns as the emergencies they are.",
      },
    ],
  },
  "clinton-mo": {
    blurb:
      "The gateway to Truman Lake pairs a classic courthouse square with lake-country properties, and garage doors here range from historic in-town fits to boat-depth bays.",
    sections: [
      {
        title: "Square-town service, lake-country doors.",
        body: "Clinton's older homes around the square need thoughtful fits and styles that suit the streetscape. Out toward the lake, garages get deeper and taller for boats and campers, and detached shops are the rule. We quote oversized doors with the framing conversation included, put corrosion-resistant hardware on anything living near the water, and run the area on scheduled routes with same-day dispatch reserved for true emergencies.",
      },
    ],
  },
  "butler-mo": {
    blurb:
      "The Bates County seat is farm country through and through, and our door work here leans toward machine sheds, shops, and in-town homes that value function over flash.",
    sections: [
      {
        title: "Function-first doors for Bates County.",
        body: "Butler calls are refreshingly direct: the door needs to lift, seal, and last. We install heavier-gauge steel that handles real use, tall doors for equipment buildings, and high-cycle springs across the board. In-town homes get the same practical treatment with insulated doors that tame summer heat and winter wind. We schedule Bates County regularly down 71 Highway, and flat rates make the distance irrelevant to your bill.",
      },
    ],
  },
  "nevada-mo": {
    blurb:
      "Pronounced Ne-VAY-da, thank you, the Vernon County seat and home of Cottey College anchors the southern edge of our range, where practical rural door work is the daily bread.",
    sections: [
      {
        title: "The southern edge, served properly.",
        body: "Nevada sits at the far end of our service radius, and we make the distance count by scheduling smart: grouped visits, thorough trucks, and jobs finished in one trip. The work is classic rural Missouri, including farm buildings needing tall doors, in-town homes with aging hardware, and shops that want insulation and a quiet opener. Emergencies still get dispatched, with an honest ETA quoted on the phone before we roll.",
      },
    ],
  },
  "chillicothe-mo": {
    blurb:
      "The Home of Sliced Bread deserves doors as reliable as its claim to fame. Chillicothe anchors our north-central Missouri route through solid farm country.",
    sections: [
      {
        title: "Best thing since... you know.",
        body: "Chillicothe's in-town housing runs from historic blocks to post-war neighborhoods, and the surrounding Livingston County farmland brings steady outbuilding work: machine sheds, shops, and barns getting proper overhead doors. We schedule the area in efficient loops, carry rural-duty hardware as standard stock, and quote flat rates that don't inflate with the mileage. A stuck door during harvest gets moved to the front of the line.",
      },
    ],
  },
  "maryville-mo": {
    blurb:
      "Home of Northwest Missouri State, Maryville is the far northwest anchor of our service area, where college rentals and Nodaway County farms both keep doors cycling.",
    sections: [
      {
        title: "Bearcat country's door crew.",
        body: "Maryville splits between rental properties that need fast, documented repairs for property managers and the surrounding farm country's equipment buildings and shops. We schedule the area on planned routes, stock the truck for both kinds of work, and finish jobs in one visit because a second trip this far north helps nobody. Emergency dispatch is available around the clock, with the drive time quoted honestly when you call.",
      },
    ],
  },
  "carrollton-mo": {
    blurb:
      "The Carroll County seat sits in rich river-bottom farm country, where the garage door conversation usually includes at least one machine shed.",
    sections: [
      {
        title: "River-bottom farms, rock-solid doors.",
        body: "Carrollton work leans agricultural: tall equipment doors, shop buildings that want insulation for winter repairs, and hardware that stands up to grain-season traffic. In-town homes get full residential service with the same flat rates we charge in the metro. We route Carroll County on scheduled loops and combine neighboring jobs when we can, which keeps costs down for everyone on the route.",
      },
    ],
  },
  "topeka-ks": {
    blurb:
      "The state capital has everything from Potwin's Victorian streets to state-government-era ranch neighborhoods and a working warehouse base, and its doors need a crew that can handle all three.",
    sections: [
      {
        title: "Capital city, complete coverage.",
        body: "Topeka's older neighborhoods bring custom fits and period styles, its mid-century blocks bring aging hardware ready for torsion conversions and quiet openers, and its commercial corridors bring dock and rolling steel work. We run the city on regular routes down I-70 from our shop, an hour door to door, with flat metro rates and scheduled installs that hit their dates. Washburn-area rentals get the fast, documented service property managers need.",
      },
    ],
  },
  "ottawa-ks": {
    blurb:
      "The Franklin County seat, with its university and classic Main Street, anchors our southwest Kansas routes where town homes and farm buildings split the call sheet.",
    sections: [
      {
        title: "Main Street to the section roads.",
        body: "Ottawa's in-town housing spans a century, and its doors need everything from custom-width fits to standard spring service. Outside town, Franklin County farms bring equipment sheds and shop buildings that need tall, heavy-duty doors. We run the area on scheduled loops along I-35, treat harvest-season breakdowns as priority calls, and hold the same flat rates we charge in Johnson County.",
      },
    ],
  },
  "emporia-ks": {
    blurb:
      "Where the Flint Hills begin, Emporia is a university town and a ranching hub at the far southwest edge of our range, and both sides of that identity need working doors.",
    sections: [
      {
        title: "Flint Hills far post.",
        body: "Emporia marks the edge of our 100-mile radius, so we make every trip count: scheduled routes, fully stocked trucks, and jobs done in one visit. ESU-area rentals get quick documented repairs, in-town homes get the full residential service, and the surrounding ranch country brings barn and shop door work built to handle real use. Call ahead and we'll slot you into the next Lyon County loop with an honest date.",
      },
    ],
  },
  "fort-scott-ks": {
    blurb:
      "Built around a national historic site, Fort Scott's brick downtown and Victorian homes are the real thing, and its garage doors deserve better than an off-the-shelf mismatch.",
    sections: [
      {
        title: "History out front, hardware done right.",
        body: "Fort Scott's historic housing calls for doors that don't clash: carriage-house styles, sympathetic colors, and custom fits for openings that predate every standard. We stock those catalogs and measure properly. The surrounding Bourbon County farmland brings the practical work of shed and shop doors that lift heavy and last long. Scheduled routes keep the distance affordable, and flat rates keep the quote predictable.",
      },
    ],
  },
  "garnett-ks": {
    blurb:
      "The Anderson County seat is quiet farm country on the Prairie Spirit Trail, where a door that works every time matters more than anything a brochure says.",
    sections: [
      {
        title: "Dependable doors for Anderson County.",
        body: "Garnett work is honest and rural: in-town homes with aging hardware, farmsteads with machine sheds, and shops where projects happen all winter. We bring hardware built for that life, including heavier-gauge doors, high-cycle springs, and insulation that makes a heated shop affordable to keep warm. Scheduled loop visits keep our prices flat despite the distance, and one trip finishes the job.",
      },
    ],
  },
  "baldwin-city-ks": {
    blurb:
      "Home to Baker University and one of the prettiest small downtowns in eastern Kansas, Baldwin City pairs historic charm with Douglas County acreage living.",
    sections: [
      {
        title: "College-town charm, acreage-country needs.",
        body: "Baldwin City's older in-town homes want doors that suit a historic street, and we fit carriage styles and custom sizes to match. The surrounding acreages want shop buildings outfitted properly, with tall doors, real track, and openers that handle daily use. We fold Baldwin City into our regular Douglas County routes along with Lawrence, so service here is quicker than the map suggests.",
      },
    ],
  },
  "holton-ks": {
    blurb:
      "The Jackson County seat north of Topeka is courthouse-square Kansas at its best, surrounded by farmland where our door work leans tall, heavy, and built to last.",
    sections: [
      {
        title: "Square-town service on the northern loop.",
        body: "Holton anchors the northern end of our Kansas routes. In-town homes around the square get full residential service, from spring replacements to well-fitted new doors in styles that suit older architecture. The surrounding farms bring equipment-shed and shop-door work, where we spec for actual machinery heights and daily use. Scheduled visits keep costs flat, and we combine area jobs into single trips whenever we can.",
      },
    ],
  },
  "falls-city-ne": {
    blurb:
      "The far northern tip of our service area reaches into Nebraska's southeast corner, where Falls City's homes and farms get the same flat rates as a house in Blue Springs.",
    sections: [
      {
        title: "Yes, we really do come this far.",
        body: "Falls City sits at the edge of our 100-mile radius, and we serve it on planned routes with fully stocked trucks so everything finishes in one visit. The work is southeast Nebraska classic: solid older homes needing spring and opener service, farmsteads with machine sheds, and shops that work all winter. Call ahead, get an honest date on the next Richardson County loop, and pay the same flat rate as the metro. Distance is our problem, not yours.",
      },
    ],
  },
};
