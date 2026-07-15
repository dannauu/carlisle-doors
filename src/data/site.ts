export const site = {
  name: "Carlisle Overhead Doors and Services",
  shortName: "Carlisle Overhead Doors",
  legalName: "Carlisle Overhead Doors and Services LLC",
  tagline: "Kansas City's Garage Door Experts",
  phone: "(816) 288-3574",
  phoneHref: "tel:+18162883574",
  address: {
    city: "Oak Grove",
    state: "MO",
    zip: "64075",
    region: "Kansas City Metro",
  },
  geo: {
    lat: 39.0075,
    lng: -94.1291,
  },
  // Apex domain is canonical: GSC shows it winning impressions over www,
  // and Netlify's primary domain should be set to match (www redirects here).
  url: "https://carlisleoverheaddoors.com",
  hours: [
    { days: "Monday – Friday", hours: "8:00 AM – 6:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 4:00 PM" },
    { days: "Sunday", hours: "Emergency Service Only" },
  ],
  openingHoursSchema: [
    "Mo-Fr 08:00-18:00",
    "Sa 09:00-16:00",
  ],
  social: {
    facebook: "https://www.facebook.com/carlisleoverheaddoors",
    google: "https://g.page/carlisleoverheaddoors",
  },
  serviceRadiusMiles: 100,
  yearsInBusiness: 15,
  foundingYear: 2011,
};
