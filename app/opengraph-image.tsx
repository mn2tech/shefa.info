import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #050a14 0%, #0f1f33 100%)",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#c5a059",
            marginBottom: 24,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          Strategic Business Growth Advisory
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#d9e2ec",
            marginTop: 24,
            maxWidth: 800,
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#c5a059",
            marginTop: 40,
          }}
        >
          {siteConfig.address.area}
        </div>
      </div>
    ),
    { ...size }
  );
}
