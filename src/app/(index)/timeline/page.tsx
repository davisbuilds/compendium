import { ViewTitle } from "@/components/influence/ArchiveUI";
import { InfluenceTimeline } from "@/components/influence/Timeline";
import { archive } from "@/lib/influence/archive";
import { fieldFilters, fieldFor } from "@/lib/influence/data";

export const metadata = { title: "Timeline" };

const events = archive.people.flatMap((person) => (
  person.milestones.map((event) => ({
    ...event,
    slug: person.slug,
    name: person.name,
    field: person.category,
    color: fieldFor(person.category).color,
    id: person.id,
  }))
)).sort((left, right) => left.year - right.year || left.id - right.id);

export default function TimelinePage() {
  return (
    <>
      <ViewTitle title="A timeline of influence" intro="Select a field to trace its milestones across centuries." />
      <InfluenceTimeline events={events} fields={fieldFilters} total={archive.people.length} />
    </>
  );
}
