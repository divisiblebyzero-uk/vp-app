export default async function sitemap() {
  const baseUrl = 'https://www.victoriaprintmakers.co.uk'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ]
}