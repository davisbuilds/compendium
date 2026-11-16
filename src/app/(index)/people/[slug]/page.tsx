import Link from "next/link";
import { notFound } from "next/navigation";
import { accentStyle, PersonCard, Portrait, SourceList, Titlebar } from "@/components/influence/ArchiveUI";
import { FunFact, Ideas, Milestones, ProfileQuote } from "@/components/influence/ProfileContent";
import { archive } from "@/lib/influence/archive";
import { fieldFor, peopleBySlug } from "@/lib/influence/data";
import { compareHref } from "@/lib/influence/format";

type ProfilePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return archive.people.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProfilePageProps) {
  const person = peopleBySlug.get((await params).slug);
  if (!person) notFound();
  return { title: person.name, description: person.intro };
}

export default async function InfluenceProfile({ params }: ProfilePageProps) {
  const { slug } = await params;
  const person = peopleBySlug.get(slug);
  if (!person) notFound();
  const field = fieldFor(person.category);
  const notes = archive.themes.filter((theme) => theme.people.includes(slug));
  const related = [...new Set([
    ...notes.flatMap((theme) => theme.people),
    ...archive.people.filter((candidate) => candidate.category === person.category).map((candidate) => candidate.slug),
  ])].filter((candidate) => candidate !== slug).slice(0, 4);
  const sources = [...new Map(
    [...person.sources, ...person.ideaSources, person.quote, person.funFactSource].map((source) => [source.url, source]),
  ).values()];

  return (
    <>
      <Link className="crumb" href="/#directory">← People directory</Link>
      <article className="profile-page" style={accentStyle(field.color)}>
        <header className="window profile-window">
          <Titlebar>{field.name}</Titlebar>
          <div className="profile-head">
            <div className="portrait"><Portrait slug={slug} eager /></div>
            <div className="profile-heading">
              <h1>{person.name}</h1>
              <p>{person.role}</p>
              <div className="tags">{person.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              {person.portraitNote && <p className="portrait-note">{person.portraitNote}</p>}
            </div>
          </div>
        </header>
        <ProfileQuote person={person} />
        <div className="profile-layout">
          <div className="profile-main">
            <section className="profile-overview">
              <h2>Known for</h2>
              <p className="profile-intro">{person.intro}</p>
            </section>
            <Ideas person={person} />
            <h2>What changed</h2>
            <p>{person.impact}</p>
            <section className="profile-fact"><FunFact person={person} /></section>
          </div>
          <aside className="profile-aside">
            <h2>Career timeline</h2>
            <Milestones person={person} />
            <Link className="btn" href={compareHref(slug)}>Compare with someone <span aria-hidden="true">↗</span></Link>
            {notes.length > 0 && (
              <>
                <h2>Related field notes</h2>
                <ul className="sources">{notes.map((note) => (
                  <li key={note.slug}><Link href={`/themes/${note.slug}`}>{note.title}<span aria-hidden="true">↗</span></Link></li>
                ))}</ul>
              </>
            )}
            <details className="profile-sources">
              <summary>Sources <span>{sources.length}</span></summary>
              <SourceList sources={sources} />
            </details>
          </aside>
        </div>
        <section className="related">
          <h2>Read next</h2>
          <div className="people-grid">
            {related.map((candidate) => {
              const profile = peopleBySlug.get(candidate);
              return profile && <PersonCard key={candidate} person={profile} field={fieldFor(profile.category)} />;
            })}
          </div>
        </section>
      </article>
    </>
  );
}
