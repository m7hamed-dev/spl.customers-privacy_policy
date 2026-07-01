/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — `npm run build` emits a self-contained site in `out/`
  // that deploys to any static host (the privacy policy URL both stores require).
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
