import heroImage from "@/src/assets/hero/hero-bg-jun25.jpg";
import forestPath from "@/src/assets/photo-galleries/jun25/IMG_20250611_140915.jpg";
import waterfallPool from "@/src/assets/photo-galleries/jun25/IMG_20250614_145831.jpg";
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
  date: "July to early September 2027",
  p1: "A summer retreat in the great outdoors, for up to 15 people.",
  p2: "Exact dates to be decided",
};

export const summer2027Intro = {
  image: forestPath,
  imageAlt: "A hiker walking along a shaded forest path on Mount Olympus",
  paragraphs: [
    "Welcome to the world of Life Goats, a community and event series for people who value relationship building and spending quality time together in the great outdoors.",
    "Greece is best known for its ancient monuments and its islands, but it’s actually a mountainous country, with 413 mountains over 1,000m high, 53 of which are over 2,000m. Mount Olympus is the highest of them all, with its highest peak, Mytikas, reaching 2,918m.",
  ],
  highlight: {
    title: "You don’t have to climb to the top",
    text: "This retreat is built around the foothills of Mount Olympus: forest trails, river gorges, waterfalls and the town of Litochoro, with a comfortable bed every night. Going up to the high mountain huts is entirely optional, for anyone who wants that extra challenge.",
  },
};

export const summer2027Facts = [
  { label: "When", value: "July to early September 2027", note: "Exact dates to be decided" },
  { label: "Group size", value: "Up to 15 people", note: "A small group, so everyone gets to know each other" },
  { label: "Where", value: "Litochoro and Mount Olympus", note: "Northern Greece, between the mountain and the sea" },
  { label: "Getting there", value: "Fly to Thessaloniki", note: "Then just over an hour to Litochoro" },
];

export const summer2027Plans = [
  {
    id: "plan-a",
    label: "Plan A",
    title: "The foothills and lower altitudes",
    tagline: "Our main plan, for every fitness level",
    featured: true,
    image: waterfallPool,
    imageAlt: "A waterfall pouring into a clear green pool in the Enipeas gorge",
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
  },
  {
    title: "Where to stay",
    text: "There are plenty of places to stay at the foot of the mountain, in Litochoro and the nearby villages. Closer to the retreat, and depending on the size of the group, we’ll either book accommodation for everyone or share our suggestions. If anyone joins the classic route, we’ll book spaces in the mountain huts.",
  },
  {
    title: "Before and after",
    text: "Plan to arrive in Litochoro at least a day before the hikes begin and to leave at least a day after. That leaves time to explore the nearby city of Thessaloniki and enjoy the beach near Litochoro.",
  },
];

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
