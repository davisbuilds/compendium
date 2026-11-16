"use client";

import Link from "next/link";
import { useState } from "react";
import type { InfluenceField, Milestone } from "@/lib/influence/types";
import { accentStyle, MilestoneDate } from "./ArchiveUI";
import { FieldFilters, type FieldFilter, type FieldSelection } from "./FieldFilters";

export type TimelineEvent = Milestone & {
  slug: string; name: string; field: InfluenceField; color: string;
};

function periodFor(year: number) {
  if (year >= 1000) return `${Math.floor(year / 10) * 10}s`;
  const century = Math.ceil(Math.abs(year) / 100);
  const suffixes: Record<number, string> = { 1: "st", 2: "nd", 3: "rd" };
  const suffix = century % 100 >= 11 && century % 100 <= 13 ? "th" : suffixes[century % 10] ?? "th";
  return `${century}${suffix} c. ${year < 0 ? "BCE" : "CE"}`;
}

export function InfluenceTimeline({ events, fields, total }: {
  events: TimelineEvent[]; fields: FieldFilter[]; total: number;
}) {
  const [field, setField] = useState<FieldSelection>("all");
  const selected = events.filter((event) => field === "all" || event.field === field);
  const periods = new Map<string, TimelineEvent[]>();
  for (const event of selected) {
    const period = periodFor(event.year);
    const group = periods.get(period);
    if (group) group.push(event);
    else periods.set(period, [event]);
  }

  return (
    <>
      <FieldFilters fields={fields} active={field} total={total} onChange={setField} label="Filter the timeline by field" />
      <div className="results-bar"><span aria-live="polite">{selected.length} milestones</span></div>
      <ol className="timeline-list">
        {[...periods].map(([period, group]) => (
          <li key={period}>
            <h2 className="timeline-decade">{period}</h2>
            <ul className="timeline-events">
              {group.map((event) => (
                <li key={`${event.slug}-${event.year}-${event.text}`} style={accentStyle(event.color)}>
                  <MilestoneDate event={event} />
                  <p><Link href={`/people/${event.slug}`} prefetch={false}>{event.name}</Link> · {event.text}</p>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </>
  );
}
