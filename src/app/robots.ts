import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin/', '/api/'], // منع جوجل من أرشفة لوحة التحكم والـ API
    },
    sitemap: 'https://www.swl-lawfirm.com.sa/sitemap.xml',
  }
}
