import { personas, getPersonaBySlug } from "@/lib/content";
import { peopleBySlug } from "@/lib/influence/data";
import { PersonaPageClient } from "./PersonaPageClient";

export function generateStaticParams() {
  return personas.map((p) => ({ slug: p.slug }));
}

export default async function PersonaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const persona = getPersonaBySlug(slug);
  return <PersonaPageClient persona={persona ?? null} hasProfile={peopleBySlug.has(slug)} />;
}
