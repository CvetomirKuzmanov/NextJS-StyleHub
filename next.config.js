const nextConfig = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        domains: [
            "encrypted-tbn0.gstatic.com",
            "images.unsplash.com",
            "localhost",
            "img.sonofatailor.com",
            "media.meandem.com",
        ],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },
    api: {
        bodyParser: {
            sizeLimit: "16mb",
        },
        responseLimit: "16mb",
    },
    async redirects() {
        return [];
    },
    async rewrites() {
        return [];
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                ],
            },
        ];
    },
    experimental: {},
};

export default nextConfig;
