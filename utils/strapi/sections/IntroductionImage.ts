import { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Images = {
  desktopImage: StrapiImage;
  tabletImage: StrapiImage;
  mobileImage: StrapiImage;
  desktopRatio: string;
  mobileRatio: string;
  tabletRatio: string;
}

export type IntroductionImageSection = {
  type: "ComponentSectionsIntroductionImage";
  title: string;
  text: BlocksContent;
  images: Array<Images>
}

export const INTRODUCTION_IMAGE_SECTION = `
...on ComponentSectionsIntroductionImage {
  title
  text:description
  images {
    desktopRatio
    desktopImage {
      data {
        attributes {
          url
        }
      }
    }
    tabletRatio
    tabletImage {
      data {
        attributes {
          url
        }
      }
    }
    mobileRatio
    mobileImage {
      data {
        attributes {
          url
        }
      }
    }
  }
}
`;