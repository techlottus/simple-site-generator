
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type TextPosition =
  | "center"
  | "center_top"
  | "center_bottom"
  | "left_top"
  | "left_center"
  | "left_bottom"
  | "right_top"
  | "right_center"
  | "right_bottom";

export type OverlayColor = "black" | "white" | "none";

export type ContentVariant = "dark" | "light";

export type Slide = {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
  textPosition: TextPosition;
  overlay: OverlayColor;
  contentVariant: ContentVariant;
  desktopImage: StrapiImage;
  tabletImage: StrapiImage;
  mobileImage: StrapiImage;
};

export type HeroSliderSection = {
  type: "ComponentSectionsHeroSlider";
  slides: Array<Slide>;
  title: string;
  heroDescription: BlocksContent;
};

export const HERO_SLIDER = `
...on ComponentSectionsHeroSlider {
  title
  heroDescription:description
  slides: slide(pagination: {start: 0, limit: -1}) {
    title
    subtitle
    ctaText
    ctaUrl
    textPosition
    overlay
    contentVariant
    desktopImage {
      data {
        attributes {
          url
        }
      }
    }
    tabletImage {
      data {
        attributes {
          url
        }
      }
    }
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