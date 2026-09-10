import Link from "next/link";
import type { Route } from "next";
import StructuredData from "./StructuredData";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** true en fondos oscuros, false en fondos claros — AGENTS.md §7 */
  isDark?: boolean;
}

export default function Breadcrumbs({ items, isDark = false }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  };

  const textClass = isDark ? "text-[var(--color-blue-100)]/70" : "text-[var(--color-ink-600)]";
  const currentClass = isDark ? "text-white" : "text-[var(--color-ink-900)]";
  const linkClass = isDark
    ? "hover:text-white transition-colors"
    : "hover:text-[var(--color-blue-accent)] transition-colors";

  return (
    <>
      <StructuredData data={schema} />
      <nav aria-label="Breadcrumb" className={`clinical-label px-4 py-4 ${textClass}`}>
        <ol className="mx-auto flex max-w-6xl flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              {index > 0 && <span aria-hidden="true">/</span>}
              {item.href ? (
                <Link href={item.href as Route} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span className={currentClass}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
