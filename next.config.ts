/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["v0.blob.com", "hebbkx1anhila5yf.public.blob.vercel-storage.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig

