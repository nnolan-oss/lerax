export default defineEventHandler(async (event) => {
  const baseUrl = 'https://lerax.nolan.uz'
  
  // Static pages
  const staticPages = [
    { loc: `${baseUrl}/`, changefreq: 'daily', priority: '1.0' },
    { loc: `${baseUrl}/examples`, changefreq: 'daily', priority: '0.9' },
  ]
  
  // Get all content from examples collection
  let contentPages: any[] = []
  try {
    // Use serverQueryContent for server-side content access in Nuxt Content
    const examples = await serverQueryContent('examples').find()
    
    // Dynamic pages from content
    contentPages = examples.map((example: any) => {
      const path = example._path || ''
      return {
        loc: `${baseUrl}${path}`,
        changefreq: 'weekly',
        priority: '0.8',
        lastmod: example.date || new Date().toISOString(),
      }
    })
  } catch (error) {
    // If content query fails, continue with static pages only
    // This ensures sitemap always works even if content is unavailable
    console.warn('Sitemap: Could not fetch content pages', error)
  }
  
  // Combine all pages
  const allPages = [...staticPages, ...contentPages]
  
  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${page.loc}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
    ${page.lastmod ? `<lastmod>${new Date(page.lastmod).toISOString().split('T')[0]}</lastmod>` : ''}
  </url>`
  )
  .join('\n')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  event.node.res.setHeader('Cache-Control', 'public, max-age=3600')
  
  return sitemap
})

