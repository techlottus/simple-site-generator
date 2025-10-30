import getPageDataById from "./getPageDataById";
import getPagesInfo from "@/utils/getPagesInfo";
import { isValidPath, normalizePath } from "@/utils/misc";
import { LayoutAttributes } from "./getLayout";


/**
 * PAGE DATA FETCHING
 */

export type DynamicProgramDetailData = {
  attributes:{
    layout?: LayoutAttributes;
    levelLayout?: any;
  }}

export const getPageDataBySlug = async (slug: string) => {
  const pagesInfo = await getPagesInfo();
    
  const targetPage = pagesInfo?.find(
    (page) => normalizePath(page?.attributes?.slug) === normalizePath(slug)
  );
  const targetPageId = targetPage?.id;

  if (!targetPageId) return null;
    
  const pageData = await getPageDataById({ id: targetPageId });
  return pageData?.page || null;
};


/**
 * PAGES PATHS
 */

export const getDynamicPagesPaths = async () => {
  const pagesInfo = await getPagesInfo();
  const pagesPaths = pagesInfo?.map((page) => page?.attributes?.slug);

  // pages with an invalid path format are filtered out and won't be generated at build time
  const dynamicPagesPaths = pagesPaths?.filter(isValidPath);
  
  return dynamicPagesPaths;
}

/**
 * PAGES BREADCRUMBS
 */

export const getDynamicPagesBreadcrumbs = async () => {
  const breadcrumbs: Record<string, string> = {};

  const pagesInfo = await getPagesInfo();

  pagesInfo?.forEach((page) => {
    const slug = normalizePath(page?.attributes?.slug);
    const pathSegments = slug?.split("/");
    const lastPathSegment = pathSegments?.[pathSegments?.length - 1];

    const breadcrumbLabel = page?.attributes?.breadcrumb || "";

    breadcrumbs[lastPathSegment] = breadcrumbLabel;
  });

  return breadcrumbs;
};