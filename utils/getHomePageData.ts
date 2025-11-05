import { fetchStrapiGraphQL } from "@/utils/getStrapi";
import { FAQ_SECTION } from "./strapi/sections/FAQ";
import { TEXT_CONTENT } from "@/utils/strapi/sections/TextContent";
import { HERO_SLIDER } from "@/utils/strapi/sections/HeroSlider";
import { OVERLAY_CARD_LIST } from "@/utils/strapi/sections/OverlayCardList";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import type { OverlayCardListSection } from "@/utils/strapi/sections/OverlayCardList";
import { TextContentSection } from "@/utils/strapi/sections/TextContent";
import { SEO } from "./strapi/sections/SEO";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

type MetaSocial = {
  socialNetwork: string;
  title: string;
  description: string;
  image: StrapiImage;
};

export type SeoData = {
  metaTitle: string;
  metaDescription: string;
  metaImage: StrapiImage;
  metaSocial: Array<MetaSocial>;
  keywords: string;
  metaRobots: string;
  structuredData: string;
  metaViewport: string;
  canonicalURL: string;
};

export type HomeComponentSection =
  | HeroSliderSection
  | OverlayCardListSection
  | TextContentSection

type HomePageResponse = {
  homePage: {
    data: {
      attributes: {
        title: string;
        slug: string;
        sections: Array<HomeComponentSection>;
        seo_section: SeoData;
      };
    };
  };
};

// const formatHomePageData = async (
//   data: HomePageResponse
// ): Promise<HomePageResponse> => {
//   const sections = data?.homePage?.data?.attributes?.sections;

//   // const formattedSections = await Promise.all(
//   //   sections?.map(async (section) => {
//   //     switch (section?.type) {
//   //       case "ComponentSectionsListconfig": {
//   //         const formattedData = await formatListconfigSection(section);
//   //         return formattedData;
//   //       }
//   //       case "ComponentSectionsEventsCardContainer": {
         
//   //         const events = section && section?.max_entries
//   //           ? await getEvents(section?.max_entries)
//   //           : null
//   //         const formattedData = {
//   //           ...section,
//   //           events: events?.map(event => ({id: event.id, ...event.attributes}))
//   //         };
//   //         return formattedData;
//   //       }
//   //       default:
//   //         return section;
//   //     }
//   //   })
//   // );

//   data.homePage.data.attributes.sections = formattedSections;
//   return data;
// };

export const getHomePageData = async () => {
  const data = await fetchStrapiGraphQL<HomePageResponse>(HOME_PAGE);
  // const formattedData = await formatHomePageData(data);
  return data;
};

const HOME_PAGE_SECTIONS = `
sections {
  type: __typename
  ${FAQ_SECTION}
  ${HERO_SLIDER}
  ${OVERLAY_CARD_LIST}
  ${TEXT_CONTENT}

}
`;

const HOME_PAGE = `
query HomePage {
  homePage {
    data {
      attributes {
        title
        slug
        ${HOME_PAGE_SECTIONS}
        ${SEO}
      }
    }
  }
}
`;