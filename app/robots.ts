import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/private/'], // Disallow crawling of /api/ and /private/ directories
            },
            // Add more specific rules as needed
        ],
        // Point to the URL where your sitemap.xml is publicly accessible
        sitemap: 'https://www.agfencingllc.com/sitemap.xml',
    }
}
