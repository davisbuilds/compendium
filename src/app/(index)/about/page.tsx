import { ViewTitle } from "@/components/influence/ArchiveUI";

export const metadata = { title: "About the archive" };

export default function AboutPage() {
  return (
    <>
      <ViewTitle title="About the archive" intro="An illustrated Davis Builds field guide to people who changed how we think and what we can do." />
      <section className="about-panel">
        <h2>How to read it</h2>
        <p>Each profile follows a few documented decisions, key ideas, and motivations. Field notes connect profiles through a shared problem and offer a question you can bring to your own work.</p>
        <h2>Illustrations and sources</h2>
        <p>The pixel portraits are generated editorial illustrations. Ancient portraits are artistic reconstructions. Quotes link to their source and identify the translator where applicable. Motivation notes draw on public statements, writings, and documented decisions.</p>
      </section>
    </>
  );
}
