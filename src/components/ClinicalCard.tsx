"use client";

import Image from "next/image";
import Link from "next/link";
import type { Route } from "next";
import { useState } from "react";
import { Activity, ArrowRight } from "lucide-react";

interface ClinicalCardProps {
  index: number;
  title: string;
  description: string;
  href: string;
  ctaLabel: string;
  image?: string;
}

/**
 * ClinicalCard v2 — corrige 2 problemas reportados sobre la v1: (a) la imagen
 * era demasiado pequeña (64x64) para justificar su existencia, ahora es una
 * banda superior real; (b) el hover del CTA dejaba el texto invisible por un
 * bug de especificidad en .clinical-label (ya corregido en globals.css) — el
 * color ahora se define aquí explícitamente en cada estado.
 */
export default function ClinicalCard({ index, title, description, href, ctaLabel, image }: ClinicalCardProps) {
  const [failed, setFailed] = useState(!image);

  return (
    <article className="animate-scan-reveal-up group relative overflow-hidden border border-[var(--color-line)] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_-12px_rgba(16,38,52,0.35)]">
      <div className="relative h-44 w-full overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-blue-100)]/40">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[var(--color-blue-100)]/50 to-[var(--color-blue-100)]/10">
            <Activity className="h-10 w-10 text-[var(--color-blue-accent)]" aria-hidden="true" />
          </div>
        ) : (
          <Image
            src={image as string}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
            onError={() => setFailed(true)}
          />
        )}
        <span className="clinical-label absolute top-3 left-3 flex h-8 w-8 items-center justify-center border border-[var(--color-ink-900)]/20 bg-[var(--color-ink-900)] text-[var(--color-blue-100)]">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-semibold text-[var(--color-ink-900)]">{title}</h3>
        <p className="mt-2 text-sm text-[var(--color-ink-600)]">{description}</p>
      </div>
      <Link
        href={href as Route}
        className="clinical-label flex items-center justify-between border-t border-[var(--color-line)] px-6 py-3 text-[var(--color-blue-accent)] transition-colors group-hover:bg-[var(--color-ink-900)] group-hover:text-white"
      >
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
      </Link>
    </article>
  );
}
