import HeaderFooterLayout from "@/layouts/HeaderFooter.layout";
import getLayout from "@/utils/getLayout";

import { Metadata } from "next";
import { favicon } from "../../multitenant-images";
import { getHomePageData } from "@/utils/getHomePageData";
import ContentGenerator from "@/utils/ContentGenerator";

export async function generateMetadata(): Promise<Metadata> {
  const homePageData = await getHomePageData();
  const seoData = homePageData?.homePage?.data?.attributes?.seo_section;
  const robots = seoData?.metaRobots?.split(",") || [];
  const socialMedia = seoData?.metaSocial?.reduce((acc, meta) => {
    acc[meta?.socialNetwork] = meta;
    return acc;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as Record<string, any>);

  return {
    title: homePageData?.homePage?.data?.attributes?.title || "  ",
    description: seoData?.metaDescription || "  ",
    alternates: {
      canonical: seoData?.canonicalURL || " ",
    },
    icons: { icon: favicon },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: seoData?.canonicalURL || " ",
      title: socialMedia?.Facebook?.title || " ",
      description: socialMedia?.Facebook?.description || "  ",
      siteName: seoData?.canonicalURL || "Next.js",
      images: [
        {
          url: socialMedia?.Facebook?.image?.data?.attributes?.url || "  ",
          width: 800,
          height: 600,
          alt: socialMedia?.Facebook?.image?.data?.attributes?.alt || "",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@ssg",
      title: socialMedia?.Twitter?.title || "  ",
      description: socialMedia?.Twitter?.description || "  ",
      images: [
        {
          url: socialMedia?.Twitter?.image?.data?.attributes?.url || "   ",
          width: 800,
          height: 600,
          alt: socialMedia?.Twitter?.image?.data?.attributes?.alt || "",
        },
      ],
    },
    robots: {
      index: robots?.includes("index") || false,
      follow: robots?.includes("follow") || false,
      noarchive: robots?.includes("noarchive") || false,
      nosnippet: robots?.includes("nosnippet") || false,
      noimageindex: robots?.includes("noimageindex") || false,
      nocache: robots?.includes("nocache") || false,
    },
    keywords: seoData?.keywords || " ",
    viewport: seoData?.metaViewport || "width=device-width, initial-scale=1.0",
    other: seoData?.structuredData
      ? { "application/ld+json": JSON.stringify(seoData.structuredData) }
      : undefined,
  };
}

export default async function Home() {
  const homePageData = await getHomePageData();
  const sections = homePageData?.homePage?.data?.attributes?.sections;
  const layoutData = await getLayout();


  return (
    <HeaderFooterLayout breadcrumbs={false} layoutData={layoutData}>
      {sections?.length > 0 ? (
          <ContentGenerator blocks={sections} />
        ) : null}
    </HeaderFooterLayout>
  );
} 