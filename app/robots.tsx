export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Optional: prevent crawling of hidden/admin folders
    },
    sitemap: 'https://www.victoriaprintmakers.co.uk',
  }
}