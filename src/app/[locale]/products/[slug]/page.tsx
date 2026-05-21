import productsData from "../../../../data/products.json";
import ProductContent from "../../../../components/products/productdetails";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import TechnicalSpecs from "@/components/products/TechnicalSpecs";
import QualitySpecs from "@/components/products/QualitySpecs";

const createSlug = (name: string, id: string | number) => {
  if (!name) return '';
  const baseSlug = name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `${baseSlug}-${id}`;
};

interface PageProps {
  params: Promise<{ slug: string; locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, locale } = await params;

  const parts = slug.split('-');
  const idFromSlug = parts[parts.length - 1];

  const product = productsData.products.find(
    (p) => String(p.id) === idFromSlug
  );

  if (!product) return {};

  const productName = locale === 'ar' ? product.name_ar : product.name_en;
  const productDesc = locale === 'ar' ? product.description_ar : product.description_en;

  return {
    title: `${productName} | Ezz Export`,
    description: productDesc,
    openGraph: {
      title: `${productName} | Ezz Export`,
      description: productDesc,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: productName,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${productName} | Ezz Export`,
      description: productDesc,
      images: [product.image],
    },
  };
}

// دالة واحدة شاملة لتوليد كل المسارات الثابتة للمنتجات بجميع اللغات
export async function generateStaticParams() {
  try {
    if (!productsData?.products) return [];

    const locales = ['ar', 'en', 'it'];
    const paths: { slug: string; locale: string }[] = [];

    productsData.products.forEach((p) => {
      if (p && p.name_en && p.id) {
        const slugValue = createSlug(p.name_en, p.id);
        if (slugValue) {
          locales.forEach((lang) => {
            paths.push({
              slug: slugValue,
              locale: lang,
            });
          });
        }
      }
    });

    return paths;
  } catch (error) {
    console.error("Error in generateStaticParams:", error);
    return [];
  }
}

export default async function ProductPage({ params }: PageProps) {
  const { slug, locale } = await params;
  setRequestLocale(locale);

  if (!productsData?.products) {
    return notFound();
  }

  const parts = slug.split('-');
  const idFromSlug = parts[parts.length - 1];

  const product = productsData.products.find(
    (p) => String(p.id) === idFromSlug
  );

  if (!product) {
    return notFound();
  }

  const safeProduct = JSON.parse(JSON.stringify(product));

  return <>
    <ProductContent product={safeProduct} />;
    <TechnicalSpecs />
    <QualitySpecs />
  </>
}