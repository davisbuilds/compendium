export function normalizeSearch(value: string) {
  return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
}

export function surnameKey({ name, slug }: { name: string; slug: string }) {
  if (slug === "wright-brothers") return "Wright brothers";
  return `${name.split(" ").at(-1)} ${name}`;
}

export function compareHref(left: string, right?: string) {
  const query = new URLSearchParams({ left });
  if (right) query.set("right", right);
  return `/compare?${query}`;
}
