import { Fragment } from "react";
import DynamicPageLayout from "@/layouts/DynamicPageLayout.layout";
import PageContent from "@/components/PageContent";
import {
  getPageDataBySlug,
  getDynamicPagesPaths,
} from "@/utils/pages";
import { normalizePath } from "@/utils/misc";
import { getLayout } from "@/utils/getLayout";
import { Metadata } from "next";
import { favicon } from "../../../multitenant-images";
import { notFound } from "next/navigation";

type PageProps = {
  params: { slug?: string[], layoutData?: any };
};

export async function generateMetadata({ params }: { params: { slug?: string[] } }): Promise<Metadata> {
  const path = params.slug?.join("/") || "";
  const pageData = await getPageDataBySlug(path);

  if (!pageData) {
    notFound();
  }

  const seoData = pageData?.data?.attributes?.seo_section;
  const robots = seoData?.metaRobots?.split(",") || [];
  const socialMedia = seoData?.metaSocial?.reduce((acc, meta) => {
    acc[meta?.socialNetwork] = meta;
    return acc;
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
  }, {} as Record<string, any>);

  return {
    title: pageData?.data?.attributes?.title || "  ",
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

export async function generateStaticParams() {
  const dynamicPagesPaths = await getDynamicPagesPaths();
  const allPagesPaths = dynamicPagesPaths?.map(normalizePath);
  const layoutData = await getLayout();


  return allPagesPaths.map((path) => ({
    slug: path?.split("/"),
    layoutData: layoutData,
  }));
}

export default async function Page({ params }: PageProps) {
  const path = params.slug?.join("/") || "";
  const pageData = await getPageDataBySlug(path);
  if (!pageData) {
    notFound();
  }
  return (
    <DynamicPageLayout layoutData={pageData?.data?.attributes?.layout?.data || params.layoutData}>
      <Fragment>
        <PageContent {...pageData?.data} />
      </Fragment>
    </DynamicPageLayout>
  );
}
