import { archive } from "./archive";
import { normalizeSearch } from "./format";
import type { InfluenceField, InfluencePerson } from "./types";

export const peopleBySlug = new Map(archive.people.map((person) => [person.slug, person]));

export function fieldFor(id: InfluenceField) {
  const field = archive.categories.find((category) => category.id === id);
  if (!field) throw new Error(`Unknown influence field: ${id}`);
  return field;
}

export const fieldFilters = archive.categories.map((field) => ({
  id: field.id,
  label: field.short,
  color: field.color,
  count: archive.people.filter((person) => person.category === field.id).length,
}));

export function directoryEntry(person: InfluencePerson) {
  const { id, slug, name, role, milestones, ideas, tags, quote } = person;
  const searchText = [
    person.name, person.role, person.intro, person.impact, person.motivation,
    quote.text, person.funFact, ...ideas.flatMap((idea) => [idea.title, idea.text]),
    ...tags, ...milestones.map((event) => event.text),
  ];
  const years = milestones.map((event) => event.year);
  return {
    id, slug, name, role,
    field: fieldFor(person.category),
    firstYear: Math.min(...years),
    lastYear: Math.max(...years),
    search: normalizeSearch(searchText.join(" ")),
  };
}
