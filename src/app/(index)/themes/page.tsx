import Link from "next/link";
import { ViewTitle } from "@/components/influence/ArchiveUI";
import { archive } from "@/lib/influence/archive";

export const metadata = { title: "Field notes" };

export default function ThemesPage() {
  return (
    <>
      <ViewTitle title="Ideas across fields" intro="Follow the same idea through different industries and eras." />
      <div className="theme-grid">
        {archive.themes.map((theme) => (
          <Link className="theme-card" href={`/themes/${theme.slug}`} key={theme.slug}>
            <span className="micro">{theme.kicker}</span>
            <h2>{theme.title}</h2>
            <p>{theme.intro}</p>
            <span className="theme-next">Read the note ↗</span>
          </Link>
        ))}
      </div>
    </>
  );
}
