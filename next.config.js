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
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/cabennetts/congenial-octo-happiness/main/images/**',
            },
        ],
    }
}

module.exports = nextConfig
