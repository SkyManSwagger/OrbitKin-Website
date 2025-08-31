import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "OrbitKin - Find Your Social Orbit"
export const size = {
  width: 1200,
  height: 600,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(to right, #0a0a0b, #1a1a2e)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          position: "relative",
        }}
      >
        {/* Decorative orbs */}
        <div
          style={{
            position: "absolute",
            top: 50,
            left: 100,
            width: 150,
            height: 150,
            borderRadius: "50%",
            background: "radial-gradient(circle, #7C5EFF 0%, transparent 70%)",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 50,
            right: 100,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, #FFD700 0%, transparent 70%)",
            opacity: 0.3,
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 30,
          }}
        >
          <span style={{ fontSize: 90 }}>🪐</span>
          <span style={{ fontSize: 72, fontWeight: "bold", marginLeft: 20 }}>OrbitKin</span>
        </div>
        <div
          style={{
            fontSize: 28,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.3,
            background: "linear-gradient(to right, #7C5EFF, #FFD700)",
            backgroundClip: "text",
            color: "transparent",
            fontWeight: "600",
          }}
        >
          Find Your Perfect Social Orbit
        </div>
        <div
          style={{
            fontSize: 20,
            marginTop: 20,
            opacity: 0.8,
            color: "#ffffff",
          }}
        >
          Smart matching • Groups of 4-6 • Meaningful connections
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}