import Link from "next/link";
import { accentStyle, Portrait, Titlebar } from "@/components/influence/ArchiveUI";
import { Directory } from "@/components/influence/Directory";
import { archive } from "@/lib/influence/archive";
import { directoryEntry, fieldFilters, fieldFor, peopleBySlug } from "@/lib/influence/data";
import { compareHref } from "@/lib/influence/format";

export const metadata = {
  title: "The Influence Index",
  description: "An illustrated field guide to people who shaped industries, institutions, and culture.",
};

const glyphs: Record<string, number[]> = {
  T: [31,31,4,4,4,4,4], H: [17,17,17,31,17,17,17], E: [31,31,16,30,16,31,31],
  I: [31,31,4,4,4,31,31], N: [17,25,25,21,19,19,17], F: [31,31,16,30,16,16,16],
  L: [16,16,16,16,16,31,31], U: [17,17,17,17,17,17,14], C: [15,31,16,16,16,31,15],
  D: [30,31,17,17,17,31,30], X: [17,17,10,4,10,17,17], ".": [0,0,0,0,0,12,12],
};

function PixelTitle() {
  const rows = ["THE INFLUENCE", "INDEX."];
  return (
    <>
      <span className="sr-only">The Influence Index</span>
      <span className="pixel-heading" aria-hidden="true">
        <svg viewBox="0 0 77 16" fill="currentColor" shapeRendering="crispEdges">
          {rows.map((row, line) => {
            const pixels: string[] = [];
            [...row].forEach((char, column) => {
              glyphs[char]?.forEach((bits, y) => {
                for (let x = 0; x < 5; x++) {
                  if (bits & (1 << (4 - x))) pixels.push(`M${column * 6 + x} ${line * 9 + y}h1v1h-1z`);
                }
              });
            });
            return <path key={row} d={pixels.join("")} fill={line === 1 ? "#f2ead8" : undefined} />;
          })}
        </svg>
      </span>
    </>
  );
}

export default function HomePage() {
  const entries = archive.people.map(directoryEntry);
  const pair = ["dee-hock", "jensen-huang"].map((slug) => {
    const person = peopleBySlug.get(slug);
    if (!person) throw new Error(`Missing featured profile: ${slug}`);
    return person;
  });

  return (
    <>
      <section className="hero window" aria-labelledby="home-title">
        <Titlebar>Compendium</Titlebar>
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="kicker">A Davis Builds field guide</span>
            <h1 id="home-title"><PixelTitle /></h1>
            <p>{archive.people.length} profiles of people who shaped industries, institutions, and culture. Explore what they built and how their ideas scaled.</p>
            <div className="actions">
              <a className="btn btn-primary" href="#directory">Browse the index <span aria-hidden="true">↓</span></a>
              <Link className="btn" href="/library">One-pagers and templates <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <section className="featured-pair" aria-labelledby="pair-title">
            <div className="pair-top"><span className="micro">Featured pairing</span><span className="pair-symbol" aria-hidden="true">↔</span></div>
            <div className="pair-portraits">
              {pair.map((person) => {
                const field = fieldFor(person.category);
                return (
                  <Link className="pair-person" key={person.slug} href={`/people/${person.slug}`} style={accentStyle(field.color)}>
                    <div className="portrait"><Portrait slug={person.slug} eager /></div>
                    <span className="micro">{field.short}</span><h3>{person.name}</h3>
                  </Link>
                );
              })}
            </div>
            <div className="pair-caption">
              <h2 id="pair-title">Designing systems others build on</h2>
              <p>How common rules and useful tools make independent participants more capable.</p>
              <div className="pair-actions">
                <Link href="/themes/designing-for-participants">Read the field note ↗</Link>
                <Link href={compareHref(pair[0].slug, pair[1].slug)}>Compare profiles ↗</Link>
              </div>
            </div>
          </section>
        </div>
        <div className="hero-status">
          <span><strong>{archive.people.length}</strong> PROFILES</span>
          <span><strong>{archive.categories.length}</strong> FIELDS</span>
          <span><strong>{archive.themes.length}</strong> FIELD NOTES</span>
        </div>
      </section>
      <Directory entries={entries} fields={fieldFilters} />
    </>
  );
}
