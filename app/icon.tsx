import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

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
          background: "#050a14",
          borderRadius: 6,
        }}
      >
        <div
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            border: "2px solid #c5a059",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#c5a059",
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          S
        </div>
      </div>
    ),
    { ...size }
  );
}
