import { ImageResponse } from "next/og";
export const alt =
  "Concierge Group — Ghanaian Roots. African Ambition. Global Standards.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#12372d",
        color: "#f4f1ea",
        padding: "65px 80px",
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 20,
          letterSpacing: 5,
          color: "#c6a15b",
        }}
      >
        CONCIERGE GROUP
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontFamily: "serif",
          fontSize: 82,
          lineHeight: 1.1,
          marginTop: 70,
          letterSpacing: -3,
        }}
      >
        <span>Ghanaian Roots.</span>
        <span>African Ambition.</span>
        <span style={{ color: "#d7bd89", fontStyle: "italic" }}>
          Global Standards.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 16,
          marginTop: "auto",
          borderTop: "1px solid #536b53",
          paddingTop: 25,
        }}
      >
        Building businesses. Creating value. Connecting markets.
      </div>
    </div>,
    size,
  );
}
