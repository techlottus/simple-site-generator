import { Metadata } from 'next';
import HeaderFooterLayout from '@/layouts/HeaderFooter.layout';
import ContentFullLayout from '@/layouts/ContentFull.layout';
import ContentGenerator from '@/utils/ContentGenerator';
import { getNotFoundPageData } from '@/utils/getNotFoundPageData';
import getLayout from '@/utils/getLayout';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default async function NotFoundPage() {
  try {
    const notFoundPageData = await getNotFoundPageData();
    const layoutData = await getLayout();

    const sections = notFoundPageData?.notFoundPage?.data?.attributes?.sections || [];
    const meta = notFoundPageData?.notFoundPage?.data?.attributes?.seo_section || {
      metaTitle: 'Not Found',
    };

    return (
      <ContentFullLayout classNames="bg-surface-100">
        <HeaderFooterLayout layoutData={layoutData}>
          {sections.length > 0 && <ContentGenerator blocks={sections} />}
        </HeaderFooterLayout>
      </ContentFullLayout>
    );
  } catch (err) {
    console.error(err);
    return (
      <ContentFullLayout classNames="bg-surface-100">
        <HeaderFooterLayout layoutData={null}>
          <h1>Not Found</h1>
          <p>hollllllllllllll</p>
        </HeaderFooterLayout>
      </ContentFullLayout>
    );
  }
}