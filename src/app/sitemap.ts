export const dynamic = "force-static";
import { MetadataRoute } from 'next';
import productsData from '@/data/products.json';

// دالة تحويل الاسم لرابط (تمت إضافة الـ ID ليتطابق مع صفحات المنتجات)
const createSlug = (name: string, id: string | number) => {
  if (!name) return '';
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${baseSlug}-${id}`;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ezzexport.com';
  const locales = ['ar', 'en', 'it'];
  const pages = ['', '/about', '/products', '/contact'];

  // 1. توليد الروابط للصفحات الثابتة (Home, About, etc.) لكل لغة
  const staticRoutes = pages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1.0 : 0.8,
    }))
  );

  // 2. توليد الروابط لصفحات المنتجات الديناميكية لكل لغة
  const productRoutes = productsData.products.flatMap((product) => {
    // تم تعديل الاستدعاء هنا ليمرر الـ id أيضاً
    const slug = createSlug(product.name_en, product.id);
    if (!slug) return [];

    return locales.map((locale) => ({
      url: `${baseUrl}/${locale}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));
  });

  return [...staticRoutes, ...productRoutes];
}