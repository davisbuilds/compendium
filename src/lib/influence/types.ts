export type InfluenceField =
  | "industry"
  | "technology"
  | "capital"
  | "science"
  | "media"
  | "performance"
  | "philosophy";

export interface InfluenceCategory {
  id: InfluenceField;
  name: string;
  short: string;
  color: string;
  body: string;
}

export interface InfluenceSource {
  label: string;
  url: string;
}

export interface Milestone {
  year: number;
  approx?: boolean;
  text: string;
}

export interface InfluencePerson {
  id: number;
  slug: string;
  name: string;
  category: InfluenceField;
  role: string;
  intro: string;
  milestones: Milestone[];
  impact: string;
  tags: string[];
  sources: InfluenceSource[];
  ideas: { title: string; text: string }[];
  motivation: string;
  quote: InfluenceSource & { text: string; context: string };
  ideaSources: InfluenceSource[];
  funFact: string;
  funFactSource: InfluenceSource;
  portraitNote?: string;
}

export type ProfileCard = Pick<InfluencePerson, "id" | "slug" | "name" | "role">;

export interface InfluenceTheme {
  slug: string;
  title: string;
  kicker: string;
  intro: string;
  sections: { title: string; text: string }[];
  prompt: string;
  people: string[];
  extraSources?: InfluenceSource[];
}

export interface InfluenceArchive {
  categories: InfluenceCategory[];
  people: InfluencePerson[];
  themes: InfluenceTheme[];
}
