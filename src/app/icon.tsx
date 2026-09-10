import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

// PLANTILLA — favicon generado por convención. Sustituir por el logo real
// del doctor copiándolo a este mismo archivo o a un icon.png (AGENTS.md §6).
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0f766e",
          color: "#ffffff",
          fontSize: 20,
          fontWeight: 700,
        }}
      >
        Dr
      </div>
    ),
    size
  );
}
