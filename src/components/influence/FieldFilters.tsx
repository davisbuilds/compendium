import { accentStyle } from "./ArchiveUI";
import type { InfluenceField } from "@/lib/influence/types";

export type FieldSelection = InfluenceField | "all";
export type FieldFilter = { id: InfluenceField; label: string; color: string; count: number };

export function FieldFilters({ fields, active, total, onChange, label }: {
  fields: FieldFilter[];
  active: FieldSelection;
  total: number;
  onChange: (field: FieldSelection) => void;
  label: string;
}) {
  return (
    <div className="filters" role="group" aria-label={label}>
      <button type="button" className="filter" aria-pressed={active === "all"} onClick={() => onChange("all")}>
        All profiles <span>{total}</span>
      </button>
      {fields.map(({ id, label, color, count }) => (
        <button key={id} type="button" className="filter" style={accentStyle(color)}
          aria-pressed={active === id} onClick={() => onChange(id)}>
          {label} <span>{count}</span>
        </button>
      ))}
    </div>
  );
}
