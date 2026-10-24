import {
  accommodationIcon,
  altitudeIcon,
  durationIcon,
  elementsIcon,
  groupIcon,
} from "@/src/assets/index.js";
import heroImage from "@/src/assets/photo-galleries/jun25/IMG_20250614_145831.jpg";
import mariaAndAnastasia from "@/src/assets/photo-galleries/jun25/IMG_20250610_094415.jpg";
import gorgeCascade from "@/src/assets/details/jun2025/photo-2.jpg";
import groupOnStonePath from "@/src/assets/photo-galleries/oct25/1768874687374.jpg";
import greenHillside from "@/src/assets/photo-galleries/may24/olympus24312.jpg";
import greenPath from "@/src/assets/photo-galleries/jun25/IMG_20250609_163401.jpg";
import groupOnSlope from "@/src/assets/photo-galleries/may24/olympus24311.jpg";
import beechForestPath from "@/src/assets/photo-galleries/may24/olympus24313.jpg";
import valleyLight from "@/src/assets/photo-galleries/jun25/IMG_20250609_172218.jpg";
import refugeSunrise from "@/src/assets/photo-galleries/may24/olympus24301.jpg";
import signpost from "@/src/assets/details/jun2025/photo-1.jpg";
import gorgeWaterfall from "@/src/assets/photo-galleries/jun25/IMG_20250611_154216.jpg";
import peaksView from "@/src/assets/photo-galleries/may24/olympus24303.jpg";
import chamois from "@/src/assets/photo-galleries/may24/olympus24305.jpg";
import sunsetRidge from "@/src/assets/photo-galleries/jun25/IMG_20250609_202331.jpg";
import refugeBenches from "@/src/assets/photo-galleries/may24/olympus24304.jpg";
import greenValley from "@/src/assets/photo-galleries/jun25/IMG_20250610_091011.jpg";
import mistyForest from "@/src/assets/photo-galleries/may24/olympus24205.jpg";
import restingBoots from "@/src/assets/events/mt-olympus-jun-2025.jpg";

export const summer2027Hero = {
  image: heroImage,
  locationTitle: "Mount Olympus, Greece",
  date: "July/August/September 2027",
  p1: "A summer retreat in the great outdoors, filled with yoga, hikes and wholesome meals.",
  p2: "Exact dates to be decided",
};

export const summer2027Intro = {
  image: mariaAndAnastasia,
  imageAlt: "Maria and Anastasia sitting together on the rocks above a snow-filled gully on Mount Olympus",
  communityLink: { href: "/", text: "Read more about our community" },
  paragraphs: [
    "Welcome to the world of Life Goats, a community and event series for people who value relationship building and spending quality time together in the great outdoors.",
    "Greece is best known for its ancient monuments and its islands, but it’s actually a mountainous country, with 413 mountains over 1,000m high, 53 of which are over 2,000m. Mount Olympus is the highest of them all, with its highest peak, Mytikas, reaching 2,918m.",
    "This is a chance to discover another side of Greece, far from the crowded islands. Together, we’ll wander along well-preserved mountain paths, take in breathtaking views, enjoy outdoor yoga on the mountain and under the stars, and share delicious local food and good company along the way.",
  ],
  highlight: {
    title: "You don’t have to climb to the top to feel the magic",
    text: "This retreat is built around the foothills of Mount Olympus: forest trails, river gorges, waterfalls and the town of Litochoro. Going up to the high mountain huts is entirely optional, for anyone who wants that extra challenge.",
  },
};

export const summer2027Details = [
  {
    name: "When",
    icon: durationIcon,
    alt: "",
    text: "Jul/Aug/Sep 2027",
  },
  {
    name: "Group",
    icon: groupIcon,
    alt: "",
    text: 15,
    text2: " people",
    initialNumber: 0,
  },
  {
    name: "Where",
    icon: altitudeIcon,
    alt: "",
    text: "Litochoro & Mount Olympus",
  },
  {
    name: "Elements",
    icon: elementsIcon,
    alt: "",
    text: "mountain, sea, river",
  },
  {
    name: "Accommodation",
    icon: accommodationIcon,
    alt: "",
    text: "rental apartments, hotels, mountain huts",
  },
];

export const summer2027DetailsImages = [
  { image: groupOnStonePath, alt: "A group of hikers with backpacks climbing a stone path through the forest" },
  { image: greenHillside, alt: "Hikers crossing a green hillside dotted with pine trees" },
  { image: greenPath, alt: "A rocky path winding through green shrubs and pine forest" },
  { image: groupOnSlope, alt: "Hikers with backpacks climbing a green mountain slope" },
  { image: beechForestPath, alt: "Hikers far ahead on a path through a bright green beech forest" },
  { image: valleyLight, alt: "Soft light over a deep green valley framed by pine trees" },
];

export const summer2027Plans = [
  {
    id: "plan-a",
    label: "Plan A",
    title: "The foothills and lower altitudes",
    tagline: "Our main plan, for every fitness level",
    featured: true,
    image: gorgeCascade,
    imageAlt: "A waterfall tumbling down a rocky wall in the Enipeas gorge",
    summary:
      "Day hikes on the lower slopes of Mount Olympus, at your own pace, returning to Litochoro each evening.",
    points: [
      "Walk the Enipeas Gorge, with its wooden bridges over the river, numerous waterfalls and crystal-clear water.",
      "Explore the forest trails around Prionia (1,100m) and the Saint Dionysios monastery.",
      "Discover Litochoro, a beautiful town at the foot of the mountain, and the Mount Olympus museum.",
      "Spend time at the beach near Litochoro, just a short drive away.",
      "Sleep in comfortable accommodation in Litochoro or a nearby village, with no mountain huts needed.",
    ],
  },
  {
    id: "plan-b",
    label: "Plan B",
    title: "Our ‘classic’ route to the Plateau of the Muses",
    tagline: "For anyone who wants to go higher",
    featured: false,
    image: refugeSunrise,
    imageAlt: "A mountain refuge on the Plateau of the Muses at sunrise, below a rocky peak",
    summary:
      "A multi-day hike up to the high mountain huts, with nights spent on the mountain. Steep at times, but always on safe, well-preserved paths.",
    days: [
      {
        title: "First day",
        points: [
          "Leave Litochoro early in the morning (around 6am) for Gortsia, a mountain location at 1,137m, where the hike begins.",
          "Short breaks for snacks, water and catching our breath, and a longer stop at Petrostruga Refuge (1,940m).",
          "A break on Skourta peak (2,483m), then on towards Laimos and the Plateau of the Muses.",
          "Reach our mountain hut early in the evening: Giosos Apostolidis (2,697m) or Christos Kakalos (2,650m), depending on availability.",
          "Time to rest, eat, chat, enjoy the sunset or simply be there in the fresh air, without Wi-Fi and without distractions.",
        ],
      },
      {
        title: "Mountain days (1 to 2 nights)",
        points: [
          "Optionally, scramble up to Mytikas, the highest peak, whose base is a short distance from the huts.",
          "Optionally, hike to shorter peaks nearby.",
          "Plenty of time to rest and enjoy the views together.",
        ],
      },
      {
        title: "Last day",
        points: [
          "Leave the hut early in the morning and head down a different route to Spilios Agapitos refuge (2,100m).",
          "After a break, continue down to Prionia (1,100m), which has a restaurant and a car park.",
          "Decide together whether to extend the hike into the Enipeas Gorge, or head back to Litochoro by car.",
        ],
      },
    ],
  },
  {
    id: "plan-c",
    label: "Plan C",
    title: "A bit of both",
    tagline: "Two teams, meeting in the middle",
    featured: false,
    image: signpost,
    imageAlt: "A yellow trail signpost beside a rocky gully on Mount Olympus",
    summary:
      "If some of us want to go all the way up and others prefer the lower altitudes, we split into two teams and come back together.",
    points: [
      "Team A heads up the mountain on our classic route (Plan B).",
      "Team A can stay on the mountain for just one night, then come down to join Team B.",
      "Team B can arrive two or three days later, or stay in Litochoro to explore the town and the Mount Olympus museum.",
      "Once both teams meet, we all enjoy the shorter hikes of Plan A together.",
    ],
  },
];

export const summer2027Practical = [
  {
    title: "Getting there",
    text: "There are daily flights from several London airports to Thessaloniki. From there, Litochoro is just over an hour away by car, train or coach. Depending on arrival and departure dates, we can share cars from and to Thessaloniki, or hire a minivan for a larger group.",
    map: [
      {
        id: "thessaloniki-airport",
        name: "Thessaloniki Airport",
        description: "Macedonia International Airport (SKG)",
        lat: 40.5197,
        lng: 22.9709,
      },
    ],
  },
  {
    title: "The retreat base",
    map: [
      {
        id: "litochoro",
        name: "Litochoro",
        description: "A small town at the foot of Mount Olympus",
        lat: 40.1029,
        lng: 22.5026,
      },
    ],
    text: "There are plenty of places to stay at the foot of the mountain, in Litochoro and the nearby villages. Closer to the retreat, and depending on the size of the group, we’ll either book accommodation for everyone or share our suggestions. If anyone joins the classic route, we’ll book spaces in the mountain huts.",
  },
];

export const summer2027Pricing = {
  tiers: [
    {
      title: "Gods",
      accommodation: "Hotel room",
      location: "Litochoro",
      notes: ["Double room", "Private bathroom"],
    },
    {
      title: "Demigods",
      accommodation: "Private room in a rental apartment",
      location: "Litochoro",
      notes: ["Private bedroom", "Shared kitchen and living space"],
    },
    {
      title: "Mere mortals",
      accommodation: "Shared room in a rental apartment",
      location: "Litochoro",
      notes: ["Shared bedroom", "Shared kitchen and living space"],
    },
  ],
  includedTitle: "What’s included",
  included: [
    { description: "Guided day hikes on the lower slopes of Mount Olympus" },
    { description: "Outdoor yoga sessions on the mountain and under the stars" },
    { description: "Wholesome meals together" },
    { description: "Help arranging shared transport to and from Thessaloniki airport" },
    { description: "Mountain hut bookings for anyone joining the classic route" },
  ],
  note: "Exact prices will be shared once the dates and accommodation are confirmed.",
};

export const summer2027Contact = {
  name: "Anastasia",
  whatsappNumber: "306973900026",
  displayNumber: "+30 697 390 0026",
};

export const summer2027Photos = [
  { image: gorgeWaterfall, alt: "A waterfall cascading over rocks into a stream in the Enipeas gorge" },
  { image: peaksView, alt: "Rocky peaks of Mount Olympus with patches of snow under a blue sky" },
  { image: chamois, alt: "A chamois standing on a grassy slope near the summit" },
  { image: sunsetRidge, alt: "Golden evening light over a forested mountain ridge" },
  { image: refugeBenches, alt: "Wooden benches outside a mountain refuge at sunrise" },
  { image: greenValley, alt: "A green valley seen between tall pine trees" },
  { image: mistyForest, alt: "Pine forest disappearing into the mist" },
  { image: restingBoots, alt: "Hiking boots resting on the grass above a mountain valley" },
];
