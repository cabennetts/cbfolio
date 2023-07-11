/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { 
                protocol: 'https',
                hostname: 'cdn.sanity.io'
            },
            { hostname: 'source.unsplash.com' },
            {
                hostname: 'images.unsplash.com'
            },
        ],
    }
}

module.exports = nextConfig
