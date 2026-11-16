import Link from "next/link";
import { accentStyle, Portrait, ViewTitle } from "@/components/influence/ArchiveUI";
import { CompareControls } from "@/components/influence/CompareControls";
import { FunFact, Ideas, Milestones, ProfileQuote } from "@/components/influence/ProfileContent";
import { archive } from "@/lib/influence/archive";
import { fieldFor, peopleBySlug } from "@/lib/influence/data";
import { surnameKey } from "@/lib/influence/format";
import type { InfluencePerson } from "@/lib/influence/types";

export const metadata = { title: "Compare profiles" };

const options = archive.people.map(({ slug, name }) => ({ slug, name }))
  .sort((left, right) => surnameKey(left).localeCompare(surnameKey(right), "en"));

function ComparisonCard({ person }: { person: InfluencePerson }) {
  const field = fieldFor(person.category);
  return (
    <article className="comparison-card" style={accentStyle(field.color)}>
      <div className="comparison-head">
        <div className="portrait"><Portrait slug={person.slug} eager /></div>
        <div>
          <span className="micro">{field.short}</span>
          <h2><Link href={`/people/${person.slug}`}>{person.name} <span aria-hidden="true">↗</span></Link></h2>
        </div>
      </div>
      <p>{person.intro}</p>
      <Ideas person={person} heading="h3" />
      <ProfileQuote person={person} />
      <h3>Key milestones</h3>
      <Milestones person={person} />
      <h3>What changed</h3>
      <p>{person.impact}</p>
      <FunFact person={person} heading="h3" />
    </article>
  );
}

export default async function ComparePage({ searchParams }: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = await searchParams;
  const left = peopleBySlug.get(typeof query.left === "string" ? query.left : "") ?? peopleBySlug.get("sol-price");
  const right = peopleBySlug.get(typeof query.right === "string" ? query.right : "") ??
    peopleBySlug.get(left?.slug === "sam-walton" ? "sol-price" : "sam-walton");
  if (!left || !right) throw new Error("Missing default comparison profiles");
  const notes = archive.themes.filter((theme) => theme.people.includes(left.slug) || theme.people.includes(right.slug));
  return (
    <>
      <ViewTitle title="Compare two people" intro="Explore their ideas, motivations, and career decisions side by side." />
      <CompareControls key={`${left.slug}/${right.slug}`} options={options} left={left.slug} right={right.slug} />
      <div className="compare-grid">
        <ComparisonCard person={left} />
        <ComparisonCard person={right} />
      </div>
      {notes.length > 0 && (
        <div className="compare-themes">
          <span className="micro">Related notes</span>
          {notes.map((note) => <Link className="tag" href={`/themes/${note.slug}`} key={note.slug}>{note.title} ↗</Link>)}
        </div>
      )}
    </>
  );
}
