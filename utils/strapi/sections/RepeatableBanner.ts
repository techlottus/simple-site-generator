import { BlocksContent } from "@strapi/blocks-react-renderer";
import { BannerData } from "./Banner";

export type RepeatableBanner = {
  type: "ComponentSectionsRepeatableBanner";
  title: string;
  content: BlocksContent;
  banners: Array<BannerData>
}

export const REPEATABLE_BANNER = `
...on ComponentSectionsRepeatableBanner {
  title
  content:description
  banners {
    title
    subtitle
    ctaText
    ctaUrl
    textPosition
    contentVariant
    overlay
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