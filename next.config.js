const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, "src/styles")]
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                pathname: "/t/p/w500/**"
            }
        ]
    },
    env:{
        TMDB_API_KEY:process.env.TMDB_API_KEY,
        TMDB_API_URL:process.env.TMDB_API_URL,
        TMDB_IMAGE_BASE_PATH:process.env.TMDB_IMAGE_BASE_PATH
      }
}

module.exports = nextConfig
