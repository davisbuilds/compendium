import type { InfluencePerson } from "@/lib/influence/types";
import { MilestoneDate, SourceLink } from "./ArchiveUI";

export function Milestones({ person }: { person: InfluencePerson }) {
  return <ol className="milestones">{person.milestones.map((event) => (
    <li key={`${event.year}-${event.text}`}><MilestoneDate event={event} /><span>{event.text}</span></li>
  ))}</ol>;
}

export function Ideas({ person, heading: Heading = "h2" }: {
  person: InfluencePerson; heading?: "h2" | "h3";
}) {
  return (
    <>
      <Heading>Key ideas</Heading>
      <dl className="ideas-list">
        {person.ideas.map(({ title, text }) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}
      </dl>
      <Heading>Motivation</Heading>
      <p>{person.motivation}</p>
    </>
  );
}

export function ProfileQuote({ person }: { person: InfluencePerson }) {
  const quote = person.quote;
  return (
    <figure className="profile-quote">
      <span className="micro">In their words</span>
      <blockquote cite={quote.url}><p>“{quote.text}”</p></blockquote>
      <figcaption>{quote.context} <SourceLink source={quote} /></figcaption>
    </figure>
  );
}

export function FunFact({ person, heading: Heading = "h2" }: {
  person: InfluencePerson; heading?: "h2" | "h3";
}) {
  return (
    <>
      <Heading>Fun fact</Heading>
      <p>{person.funFact}</p>
      <p className="fact-source"><SourceLink source={person.funFactSource} /></p>
    </>
  );
}
