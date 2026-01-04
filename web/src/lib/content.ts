export type Category =
  | "productivity"
  | "success"
  | "startups"
  | "fundraising"
  | "hiring"
  | "career"
  | "life-advice"
  | "communication";

export interface ContentItem {
  filename: string;
  title: string;
  type: "image" | "pdf";
  categories: Category[];
}

export interface Persona {
  id: string;
  name: string;
  slug: string;
  description: string;
  content: ContentItem[];
}

export interface Template {
  filename: string;
  title: string;
  description: string;
}

export const categories: { id: Category; label: string; color: string }[] = [
  { id: "productivity", label: "Productivity", color: "bg-blue-100 text-blue-800" },
  { id: "success", label: "Success", color: "bg-green-100 text-green-800" },
  { id: "startups", label: "Startups", color: "bg-purple-100 text-purple-800" },
  { id: "fundraising", label: "Fundraising", color: "bg-yellow-100 text-yellow-800" },
  { id: "hiring", label: "Hiring", color: "bg-orange-100 text-orange-800" },
  { id: "career", label: "Career", color: "bg-pink-100 text-pink-800" },
  { id: "life-advice", label: "Life Advice", color: "bg-teal-100 text-teal-800" },
  { id: "communication", label: "Communication", color: "bg-indigo-100 text-indigo-800" },
];

export const personas: Persona[] = [
  {
    id: "daniel-gross",
    name: "Daniel Gross",
    slug: "daniel-gross",
    description: "Entrepreneur, investor, and former Y Combinator partner",
    content: [
      {
        filename: "DGross_HowToWin.png",
        title: "How To Win",
        type: "image",
        categories: ["success"],
      },
    ],
  },
  {
    id: "elon-musk",
    name: "Elon Musk",
    slug: "elon-musk",
    description: "CEO of Tesla and SpaceX, founder of multiple companies",
    content: [
      {
        filename: "Elon_2018email.PNG",
        title: "2018 Email on Productivity",
        type: "image",
        categories: ["productivity", "communication"],
      },
      {
        filename: "Elon_HowToWin.png",
        title: "How To Win",
        type: "image",
        categories: ["success"],
      },
    ],
  },
  {
    id: "marc-andreessen",
    name: "Marc Andreessen",
    slug: "marc-andreessen",
    description: "Co-founder of Netscape and Andreessen Horowitz",
    content: [
      {
        filename: "Pmarca_CareerPlanning.png",
        title: "Career Planning",
        type: "image",
        categories: ["career"],
      },
      {
        filename: "Pmarca_antistartup.png",
        title: "Anti-Startup Advice",
        type: "image",
        categories: ["startups"],
      },
      {
        filename: "Pmarca_hiring.png",
        title: "Hiring Guide",
        type: "image",
        categories: ["hiring"],
      },
      {
        filename: "Pmarca_productivity.JPG",
        title: "Productivity Tips",
        type: "image",
        categories: ["productivity"],
      },
    ],
  },
  {
    id: "nat-friedman",
    name: "Nat Friedman",
    slug: "nat-friedman",
    description: "Former CEO of GitHub, entrepreneur and investor",
    content: [
      {
        filename: "NatFriedman_productivity.jpg",
        title: "Productivity Philosophy",
        type: "image",
        categories: ["productivity"],
      },
    ],
  },
  {
    id: "naval-ravikant",
    name: "Naval Ravikant",
    slug: "naval-ravikant",
    description: "Co-founder of AngelList, philosopher and angel investor",
    content: [
      {
        filename: "Naval_HowToGetRich.JPG",
        title: "How To Get Rich",
        type: "image",
        categories: ["success", "life-advice"],
      },
    ],
  },
  {
    id: "paul-graham",
    name: "Paul Graham",
    slug: "paul-graham",
    description: "Co-founder of Y Combinator, essayist and programmer",
    content: [
      {
        filename: "PG_HowToRaiseMoney.png",
        title: "How To Raise Money",
        type: "image",
        categories: ["fundraising", "startups"],
      },
      {
        filename: "PG_HowToStartStartup.png",
        title: "How To Start a Startup",
        type: "image",
        categories: ["startups"],
      },
    ],
  },
  {
    id: "sam-altman",
    name: "Sam Altman",
    slug: "sam-altman",
    description: "CEO of OpenAI, former president of Y Combinator",
    content: [
      {
        filename: "Altman_HowToStartStartup.png",
        title: "How To Start a Startup",
        type: "image",
        categories: ["startups"],
      },
      {
        filename: "Altman_LifeAdvice.png",
        title: "Life Advice",
        type: "image",
        categories: ["life-advice"],
      },
      {
        filename: "Altman_productivity.png",
        title: "Productivity Tips",
        type: "image",
        categories: ["productivity"],
      },
    ],
  },
  {
    id: "tim-ferriss",
    name: "Tim Ferriss",
    slug: "tim-ferriss",
    description: "Author of The 4-Hour Workweek, podcaster and investor",
    content: [
      {
        filename: "Tferriss_productivity.JPG",
        title: "Productivity System",
        type: "image",
        categories: ["productivity"],
      },
    ],
  },
];

export const templates: Template[] = [
  {
    filename: "PersonalPlanner.pdf",
    title: "Personal Planner",
    description: "A comprehensive personal planning template",
  },
  {
    filename: "TimeBoxTemplate.pdf",
    title: "Time Box Template",
    description: "Template for time-boxing your schedule",
  },
];

export function getPersonaBySlug(slug: string): Persona | undefined {
  return personas.find((p) => p.slug === slug);
}

export function getContentByCategory(category: Category): { persona: Persona; item: ContentItem }[] {
  const results: { persona: Persona; item: ContentItem }[] = [];
  for (const persona of personas) {
    for (const item of persona.content) {
      if (item.categories.includes(category)) {
        results.push({ persona, item });
      }
    }
  }
  return results;
}

export function getAllCategories(): Category[] {
  const categorySet = new Set<Category>();
  for (const persona of personas) {
    for (const item of persona.content) {
      for (const category of item.categories) {
        categorySet.add(category);
      }
    }
  }
  return Array.from(categorySet);
}
