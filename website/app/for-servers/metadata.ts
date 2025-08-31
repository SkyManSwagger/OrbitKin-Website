import { Metadata } from "next"
import { generatePageMetadata } from "@/lib/seo"

export const metadata: Metadata = generatePageMetadata(
  "For Discord Servers",
  "Add OrbitKin bot to your Discord server and help your community members form meaningful connections through intelligent matching.",
  "/for-servers"
)