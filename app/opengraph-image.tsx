import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ava Lumen — Product Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#080808",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Amber glow behind */}
        <div
          style={{
            position: "absolute",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "800px",
            height: "400px",
            background:
              "radial-gradient(ellipse at center, rgba(240,165,0,0.15) 0%, transparent 70%)",
          }}
        />

        {/* Amber dot */}
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            backgroundColor: "#F0A500",
            marginBottom: "32px",
            boxShadow: "0 0 40px rgba(240,165,0,0.4)",
          }}
        />

        {/* Name */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#f0f0f0",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          Ava Lumen
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "#F0A500",
            letterSpacing: "-0.01em",
          }}
        >
          I build products that matter.
        </div>

        {/* URL — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "48px",
            fontSize: "16px",
            color: "#3a3a3a",
            fontFamily: "monospace",
          }}
        >
          avalumen.me
        </div>
      </div>
    ),
    { ...size }
  );
}
