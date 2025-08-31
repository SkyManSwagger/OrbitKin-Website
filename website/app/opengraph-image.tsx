import { ImageResponse } from "next/og"

export const runtime = "edge"

export const alt = "OrbitKin - Meaningful Friendships Through Smart Matching"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <span style={{ fontSize: 100, marginRight: 20 }}>🪐</span>
          <span style={{ fontSize: 80, fontWeight: "bold" }}>OrbitKin</span>
        </div>
        <div
          style={{
            fontSize: 32,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.4,
            opacity: 0.9,
          }}
        >
          Meaningful Friendships Through Smart Matching
        </div>
        <div
          style={{
            fontSize: 24,
            marginTop: 30,
            opacity: 0.8,
          }}
        >
          Connect with your perfect social orbit
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}