"use client";

import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { directoryEntry } from "@/lib/influence/data";
import { normalizeSearch, surnameKey } from "@/lib/influence/format";
import { PersonCard } from "./ArchiveUI";
import { FieldFilters, type FieldFilter, type FieldSelection } from "./FieldFilters";

type Entry = ReturnType<typeof directoryEntry>;
type SortOrder = "earliest" | "name" | "latest";
const sortProfiles: Record<SortOrder, (left: Entry, right: Entry) => number> = {
  earliest: (left, right) => left.firstYear - right.firstYear || left.id - right.id,
  name: (left, right) => surnameKey(left).localeCompare(surnameKey(right), "en"),
  latest: (left, right) => right.lastYear - left.lastYear || left.id - right.id,
};

export function Directory({ entries, fields }: { entries: Entry[]; fields: FieldFilter[] }) {
  const [field, setField] = useState<FieldSelection>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortOrder>("earliest");
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if (event.key !== "/" || event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey) return;
      if (event.target instanceof HTMLElement &&
          (event.target.isContentEditable || event.target.closest("input, textarea, select"))) return;
      event.preventDefault();
      searchInput.current?.focus();
    }
    document.addEventListener("keydown", focusSearch);
    return () => document.removeEventListener("keydown", focusSearch);
  }, []);

  const terms = normalizeSearch(query.trim()).split(/\s+/).filter(Boolean);
  const results = entries
    .filter((entry) => (field === "all" || entry.field.id === field) &&
      terms.every((term) => entry.search.includes(term)))
    .sort(sortProfiles[sort]);

  return (
    <section id="directory" aria-labelledby="directory-title">
      <div className="section-heading">
        <h2 id="directory-title">Choose a profile</h2>
        <label className="search">
          <span className="sr-only">Search profiles</span>
          <Search size={15} aria-hidden="true" />
          <input ref={searchInput} type="search" placeholder="Search names, ideas, or companies…"
            value={query} onChange={(event) => setQuery(event.target.value)} />
          <kbd aria-hidden="true">/</kbd>
        </label>
      </div>
      <FieldFilters fields={fields} active={field} total={entries.length} onChange={setField} label="Filter profiles by field" />
      <div className="results-bar">
        <span aria-live="polite">Showing {results.length} of {entries.length} profiles</span>
        <label>Sort{" "}
          <select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}>
            <option value="earliest">First milestone</option>
            <option value="name">Name A–Z</option>
            <option value="latest">Newest milestone</option>
          </select>
        </label>
      </div>
      <div className="people-grid">
        {results.length ? results.map((entry) => (
          <PersonCard key={entry.slug} person={entry} field={entry.field} />
        )) : <div className="empty"><h3>No profiles found</h3><p>Try a broader search or choose another field.</p></div>}
      </div>
    </section>
  );
}
