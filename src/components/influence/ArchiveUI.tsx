import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { InfluenceSource, Milestone, ProfileCard } from "@/lib/influence/types";

export function accentStyle(color: string): CSSProperties {
  return { "--accent": color } as CSSProperties;
}

export function Portrait({ slug, eager = false }: { slug: string; eager?: boolean }) {
  return (
    <Image src={`/content/influence/${slug}.webp`} alt="" width={144} height={144}
      unoptimized loading={eager ? "eager" : "lazy"} />
  );
}

export function PersonCard({ person, field }: {
  person: ProfileCard;
  field: { short: string; color: string };
}) {
  return (
    <Link className="person-card" href={`/people/${person.slug}`} style={accentStyle(field.color)} prefetch={false}>
      <span className="portrait">
        <Portrait slug={person.slug} />
        <span className="portrait-open" aria-hidden="true">↗</span>
      </span>
      <div className="card-copy">
        <div className="card-meta">{field.short}</div>
        <h3>{person.name}</h3>
        <p>{person.role}</p>
      </div>
    </Link>
  );
}

export function Titlebar({ children }: { children: string }) {
  return (
    <div className="titlebar">
      <span>{children}</span>
      <span className="leds" aria-hidden="true"><i /><i /><i /></span>
    </div>
  );
}

export function ViewTitle({ title, intro }: { title: string; intro?: string }) {
  return (
    <header className="view-title">
      <h1>{title}</h1>
      {intro && <p>{intro}</p>}
    </header>
  );
}

export function SourceLink({ source }: { source: InfluenceSource }) {
  return (
    <a href={source.url} target="_blank" rel="noopener noreferrer">
      {source.label} <span aria-hidden="true">↗</span>
    </a>
  );
}

export function SourceList({ sources }: { sources: InfluenceSource[] }) {
  const unique = [...new Map(sources.map((source) => [source.url, source])).values()];
  return <ul className="sources">{unique.map((source) => (
    <li key={source.url}><SourceLink source={source} /></li>
  ))}</ul>;
}

export function MilestoneDate({ event }: { event: Milestone }) {
  const { year, approx } = event;
  const era = year < 0 ? " BCE" : year < 1000 ? " CE" : "";
  const label = `${approx ? "c. " : ""}${Math.abs(year)}${era}`;
  if (year < 0) return <span className="event-year">{label}</span>;
  return <time className="event-year" dateTime={String(year).padStart(4, "0")}>{label}</time>;
}
