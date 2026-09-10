"use client";

import Image from "next/image";
import { useState } from "react";
import { Activity } from "lucide-react";
import Breadcrumbs from "./Breadcrumbs";

interface DetailHeroImageProps {
  src?: string;
  alt: string;
  category: string;
  title: string;
  breadcrumbItems: { label: string; href?: string }[];
  children?: React.ReactNode;
}

/**
 * Hero de banner completo para las vistas de detalle — v2. La v1 (una foto
 * pequeña de 192x192 al lado del título) se sintió "igual que el template" y
 * no justificaba su espacio (feedback real del usuario). Ahora es una banda
 * grande de ancho completo con degradado y el título sobrepuesto, con
 * fallback clínico si no hay imagen real todavía (AGENTS.md §2).
 */
export default function DetailHeroImage({ src, alt, category, title, breadcrumbItems, children }: DetailHeroImageProps) {
  const [failed, setFailed] = useState(!src);

  return (
    <div className="relative flex h-80 w-full flex-col justify-between overflow-hidden bg-[var(--color-ink-900)] sm:h-[26rem]">
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[var(--color-ink-800)] to-[var(--color-ink-900)]">
          <Activity className="h-16 w-16 text-[var(--color-blue-accent)]/40" aria-hidden="true" />
        </div>
      ) : (
        <Image src={src as string} alt={alt} fill className="object-cover" priority onError={() => setFailed(true)} />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink-900)] via-[var(--color-ink-900)]/40 to-transparent" />
      <div className="relative">
        <Breadcrumbs items={breadcrumbItems} isDark />
      </div>
      <div className="relative mx-auto w-full max-w-5xl px-4 pb-8">
        <span className="clinical-label text-[var(--color-blue-100)]">{category}</span>
        <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">{title}</h1>
        {children && <div className="mt-3">{children}</div>}
      </div>
    </div>
  );
}
