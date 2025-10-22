import { Fragment } from "react";
import DynamicPageLayout from "@/layouts/DynamicPageLayout.layout";
import PageContent from "@/components/PageContent";
import {
  getPageDataBySlug,
  getDynamicPagesBreadcrumbs,
  getDynamicPagesPaths,
} from "@/utils/pages";
import { normalizePath } from "@/utils/misc";
import { getLayout } from "@/utils/getLayout";

type PageProps = {
  params: { slug?: string[], layoutData?: any};
};

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

  try {
    const pageData = await getPageDataBySlug(path);

    return (
      <DynamicPageLayout layoutData={pageData?.data?.attributes?.layout?.data || params.layoutData}>
        <Fragment>
          <PageContent {...pageData?.data} />
        </Fragment>
      </DynamicPageLayout>
    );
  } catch (error) {
    console.error("Error loading page:", error);
    // Optionally render a fallback UI or redirect
    return <div>Page not found</div>;
  }
}
