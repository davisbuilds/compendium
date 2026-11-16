"use client";

import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { compareHref } from "@/lib/influence/format";

export function CompareControls({ options, left, right }: {
  options: { slug: string; name: string }[]; left: string; right: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <form className="compare-choices" action="/compare" aria-busy={isPending}
      onChange={(event) => {
        const values = new FormData(event.currentTarget);
        startTransition(() => router.replace(compareHref(String(values.get("left")), String(values.get("right"))), { scroll: false }));
      }}>
      {([{ name: "left", value: left, label: "Profile A" }, { name: "right", value: right, label: "Profile B" }]).map(({ name, value, label }) => (
        <label key={name} className="compare-pick">
          <span className="micro">{label}</span>
          <select name={name} defaultValue={value}>
            {options.map(({ slug, name }) => <option key={slug} value={slug}>{name}</option>)}
          </select>
        </label>
      ))}
      <noscript><button type="submit" className="btn">Compare profiles</button></noscript>
    </form>
  );
}
