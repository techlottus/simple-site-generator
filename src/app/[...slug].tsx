import { Fragment } from "react";
import DynamicPageLayout from "@/layouts/DynamicPageLayout.layout";
import Container from "@/layouts/Container.layout";
import PageContent from "@/components/PageContent";
import {
  getPageDataBySlug,
  getDynamicPagesBreadcrumbs,
  getDynamicPagesPaths,
} from "@/utils/pages";
import { normalizePath } from "@/utils/misc";
import type { PageEntityResponse } from "@/utils/getPageDataById";
import { getLayout } from "@/utils/getLayout";

type PageProps = {
  page: PageEntityResponse
  breadcrumbs: Record<string, string>;
  layoutData?:any;
};

const Page = (props: PageProps) => {
  const { page, breadcrumbs,layoutData } = props;

  // const layout = (page.data?.attributes as PageEntityResponse | BlogEntryPageEntityResponse) ? 

  return (
    <DynamicPageLayout layoutData={page?.data?.attributes?.layout?.data || layoutData}>
    <Fragment>
      <Container>
        {/* <Breadcrumbs visible breadcrumbs={breadcrumbs} /> */}
      </Container>
       <PageContent {...page?.data} />
    </Fragment></DynamicPageLayout>
  );
};

// Page.getLayout = (page: ReactElement) => {
  
//   console.log("prop",page.props, "page: ", page)
//   return < >{page}</>;
// };

export default Page;

export async function getStaticPaths() {
  const dynamicPagesPaths = await getDynamicPagesPaths();

  const allPagesPaths = [
    ...dynamicPagesPaths,
  ]?.map(normalizePath);

  return {
    paths: allPagesPaths?.map((path) => ({
      params: { slug: path?.split("/") },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: any): Promise<{props: PageProps}> {

  try {
    const {
      params: { slug },
    } = context;

    const path = slug?.join("/");
    const pageType = await "dynamic"; //await getPageTypeByPath(path);

    const breadcrumbs = await getDynamicPagesBreadcrumbs();
    const layoutData = await getLayout();
    switch (pageType) {
      case "dynamic": {
        const pageData = await getPageDataBySlug(path);

        return {
          props: {
            page: { ...pageData },
            breadcrumbs,
            layoutData: layoutData || null
          },
        };
      }
      default: {
        return {
          props: {
            page: {} as PageEntityResponse,
            breadcrumbs: {},
            layoutData: layoutData || null
          },
        };
      }
    }
  } catch {
    return {
      //@ts-ignore
      notFound: true,
    };
  }
}
