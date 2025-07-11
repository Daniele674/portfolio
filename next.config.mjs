// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Aggiungi questa configurazione per le immagini
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.microlink.io',
            },
        ],
    },
};

export default nextConfig;