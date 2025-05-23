import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Fan,
  Flame,
  Fuel,
  Users,
  Bolt,
  TrendingUp,
  Target,
  Eye,
  Handshake,
  Flag,
} from "lucide-react";

import {
  banner1,
  banner2,
  banner5,
  banner6,
  features1,
  branding,
  rig,
  tanks2,
  tanks,
  thermometer,
  meter,
  ship,
  power,
  automate,
  petroleum,
  drum,
  team1,
  team2,
  team3,
  team4,
  majorDeal1,
  majorDeal2,
  majorDeal3,
  majorDeal4,
  majorDeal5,
  majorDeal6,
  woman1,
  woman2,
  testimonia,
  ceo,
  man,
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  landingPage,
  banner4,
  eco,
  support,
} from "@/assets";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type CardData = {
  id: number;
  title: string;
  subtitle: string;
  Icon: React.ElementType;
  bg?: string;
};

const titlesData = [
  {
    id: 1,
    title: "Sustainability Focused",
    subtitle:
      "Major Deals leads the energy sector with a deep commitment to sustainability—delivering solutions that power progress while protecting the planet. We invest in cleaner technologies and responsible practices that shape a greener future for generations to come.",
    bg: banner1,
  },
  {
    id: 2,
    title: "Integrity & Reliability",
    subtitle:
      "Rooted in trust and transparency, Major Deals provides dependable energy solutions across Nigeria and beyond. Our operations are guided by integrity, ensuring safe, reliable service that industries and communities can count on.",
    bg: banner2,
  },
  {
    id: 3,
    title: "Smart Solutions. Real Impact.",
    subtitle:
      "Major Deals thrives on innovation—transforming energy challenges into growth opportunities through cutting-edge technology and smart engineering. We build future-ready solutions that drive progress and redefine what’s possible.",
    bg: banner6,
  },
  {
    id: 4,
    title: "Community Centric",
    subtitle:
      "We don’t just power industries—we empower people. Major Deals invests in energy solutions that uplift local communities, drive economic development, and create lasting impact beyond the oil and gas sector.",
    bg: banner5,
  },
];
export { titlesData };

const homeSectionData = [
  { id: 1, title: "Petroleum Industry", bg: tanks, Icon: Fuel },
  { id: 3, title: "Natural Gas", bg: rig, Icon: Flame },
  { id: 2, title: "Civil Engineering", bg: features1, Icon: Fan },
];

export { homeSectionData };

export const HomeInnovationData: CardData[] = [
  {
    id: 1,
    title: "Collaborative",
    subtitle:
      "Rooted in trust and transparency, Major Deals provides dependable energy solutions across Nigeria and beyond. Our operations are guided by integrity, ensuring safe, reliable service that industries and communities can count on.",
    Icon: Users,
  },
  {
    id: 2,
    title: "Efficient",
    subtitle:
      "At Major Deals, efficiency drives everything we do. We optimize resources, streamline operations, and prioritize impact—delivering measurable results for our employees and communities. Our commitment ensures sustainable performance, continuous improvement, and maximum value across every touchpoint of our energy solutions.",
    Icon: Bolt,
  },
  {
    id: 3,
    title: "Progressive",
    subtitle:
      "At Major Deals, progress is fueled by innovation. We foster a forward-thinking culture that embraces new ideas, technologies, and strategies—ensuring we remain competitive and influential in the global energy market while driving meaningful change for the future of our industry.",
    Icon: TrendingUp,
  },
  {
    id: 4,
    title: "Respectful",
    subtitle:
      "At Major Deals, we uphold a culture rooted in inclusion, mutual respect, and integrity. Our team operates with the highest ethical and professional standards, fostering trust, collaboration, and a workplace where every voice is valued and dignity is a shared priority.",
    Icon: Handshake,
  },
];

export const homeMisionData: CardData[] = [
  {
    id: 1,
    title: "OUR VISION",
    subtitle:
      " To be the leading provider of innovative and sustainable energy solutions, driving progress and prosperity for our clients and communities.",
    Icon: Eye,
  },
  {
    id: 2,
    title: "OUR VALUES",
    subtitle:
      "Every day, we strive to operate in a safe, stable, and trustworthy manner while providing long-term value to our shareholders.",
    Icon: Handshake,
  },
  {
    id: 3,
    title: "OUR MISSION",
    subtitle:
      "We're committed to creating goods that people use every day, as well as being the safest and most dependable company in our business.",
    Icon: Target,
  },
  {
    id: 4,
    title: "OUR GOALS",
    subtitle:
      "Major Deals goal is to meet the world's demand for reliable and sustainable energy via innovation, ingenuity and exceptional execution.",
    Icon: Flag,
  },
];

export const homeSolutionsData: CardData[] = [
  {
    id: 1,
    title: "Oil Storage",
    subtitle:
      "Oil will continue to dominate the energy mix, delivering around 55 percent of the world's energy......",
    bg: thermometer,
    Icon: Handshake,
  },
  {
    id: 2,
    title: "Natural Gas",
    subtitle:
      "To fulfill increased demand until 2040, all of the world's energy sources will be required....",
    bg: meter,
    Icon: Handshake,
  },
  {
    id: 3,
    title: "Manufacturing Plants",
    subtitle:
      "Our factory construction projects are planned with production facilities in mind, so that we can .....",
    bg: ship,
    Icon: Handshake,
  },
  {
    id: 4,
    title: "Power and Energy",
    subtitle:
      "Major Deals is a major counselor to firms in the energy, power, and infrastructure industries, with...",
    bg: power,
    Icon: Handshake,
  },
  {
    id: 5,
    title: "Automation Industry",
    subtitle:
      "Automation World is a conference dedicated to all aspects of industrial automation industry....",
    bg: automate,
    Icon: Handshake,
  },
  {
    id: 6,
    title: "Petroleum Industry",
    subtitle:
      "While meeting global demand for affordable, reliable, and cleaner energy, the natural gas and....",
    bg: petroleum,
    Icon: Handshake,
  },
];

export const homeOurProjectsData: CardData[] = [
  {
    id: 1,
    title: "Whearhouse Support",
    subtitle: "Major Deals now giving the whearhouse support around the world",
    bg: tanks,
    Icon: Handshake,
  },
  {
    id: 2,
    title: "Chemical Handling",
    subtitle:
      "We are running a projects that handles chemical safely and securely.",
    bg: drum,
    Icon: Handshake,
  },
  {
    id: 3,
    title: "Industrial Economy",
    subtitle:
      "We are living the connection economy and enter the industrial economy",
    bg: branding,
    Icon: Handshake,
  },
];

export const homeTeamData: CardData[] = [
  {
    id: 1,
    title: "Alan Curtis",
    subtitle: "Tech Adviser",
    bg: team1,
    Icon: Handshake,
  },
  {
    id: 2,
    title: "Charles Luke",
    subtitle: "Senior Engineering",
    bg: team2,
    Icon: Handshake,
  },
  {
    id: 3,
    title: "Maria Davies",
    subtitle: "Partner-Chief",
    bg: team3,
    Icon: Handshake,
  },
  {
    id: 4,
    title: "James Sienna",
    subtitle: "Director & CEO",
    bg: team4,
    Icon: Handshake,
  },
];

const homeGalleryData = [
  {
    id: 1,
    bg: landingPage,
  },
  {
    id: 2,
    bg: majorDeal1,
  },
  {
    id: 3,
    bg: majorDeal2,
  },
  {
    id: 4,
    bg: majorDeal3,
  },
  {
    id: 5,
    bg: majorDeal4,
  },
  {
    id: 6,
    bg: banner6,
  },
  {
    id: 7,
    bg: banner4,
  },
  {
    id: 8,
    bg: banner5,
  },
];
export { homeGalleryData };

export const homeTestimoniaData: CardData[] = [
  {
    id: 1,
    title: "Kim",
    subtitle:
      "Major Deals consistently delivers. Their attention to safety and detail makes them our most reliable energy partner.",
    bg: ceo,
    Icon: Handshake,
  },
  {
    id: 2,
    title: " Mary",
    subtitle:
      "From start to finish, their professionalism stood out. We trust Major Deals for every major project.",
    bg: woman1,
    Icon: Handshake,
  },
  {
    id: 3,
    title: "Grace",
    subtitle:
      "Innovative, efficient, and environmentally conscious—exactly what the energy sector needs today.",
    bg: testimonia,
    Icon: Handshake,
  },
  {
    id: 4,
    title: "Stella",
    subtitle:
      "They didn’t just meet our expectations; they exceeded them with outstanding service and results.",
    bg: woman2,
    Icon: Handshake,
  },
  {
    id: 5,
    title: "Robert",
    subtitle:
      "Working with Major Deals felt like a true partnership. Their team is knowledgeable and proactive.",
    bg: man,
    Icon: Handshake,
  },
];
const homePartnerData = [
  {
    id: 1,
    bg: partner1,
  },
  {
    id: 2,
    bg: partner2,
  },
  {
    id: 3,
    bg: partner3,
  },
  {
    id: 4,
    bg: partner4,
  },
  {
    id: 5,
    bg: partner5,
  },
];
export { homePartnerData };
