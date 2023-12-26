/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "loremflickr.com",
            },
        ],
    },
    async redirects() {
        return [
            {
                source: "/",
                destination: "/home",
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
