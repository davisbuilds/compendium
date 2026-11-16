import { Fragment } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PersonCard, SourceList, Titlebar, ViewTitle } from "@/components/influence/ArchiveUI";
import { archive } from "@/lib/influence/archive";
import { fieldFor, peopleBySlug } from "@/lib/influence/data";
import { compareHref } from "@/lib/influence/format";

type ThemePageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return archive.themes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ThemePageProps) {
  const { slug } = await params;
  const theme = archive.themes.find((note) => note.slug === slug);
  if (!theme) notFound();
  return { title: theme.title, description: theme.intro };
}

export default async function ThemePage({ params }: ThemePageProps) {
  const { slug } = await params;
  const theme = archive.themes.find((note) => note.slug === slug);
  if (!theme) notFound();
  const profiles = theme.people.map((personSlug) => {
    const profile = peopleBySlug.get(personSlug);
    if (!profile) throw new Error(`Unknown profile ${personSlug} in ${slug}`);
    return profile;
  });
  return (
    <>
      <Link className="crumb" href="/themes">← All field notes</Link>
      <article>
        <ViewTitle title={theme.title} />
        <div className="profile-layout">
          <div className="window">
            <Titlebar>{theme.kicker}</Titlebar>
            <div className="theme-body">
              <p className="opening">{theme.intro}</p>
              {theme.sections.map(({ title, text }) => (
                <Fragment key={title}><h2>{title}</h2><p>{text}</p></Fragment>
              ))}
              <div className="field-note"><span className="micro">Apply it</span><p>{theme.prompt}</p></div>
            </div>
          </div>
          <aside className="profile-aside">
            {profiles.length >= 2 && <Link className="btn" href={compareHref(profiles[0].slug, profiles[1].slug)}>Compare two profiles ↗</Link>}
            <h2>Sources</h2>
            <SourceList sources={[...profiles.flatMap((profile) => profile.sources.slice(0, 1)), ...(theme.extraSources ?? [])]} />
          </aside>
        </div>
        <section className="related">
          <h2>Related profiles</h2>
          <div className="people-grid">
            {profiles.map((person) => <PersonCard key={person.slug} person={person} field={fieldFor(person.category)} />)}
          </div>
        </section>
      </article>
    </>
  );
}
