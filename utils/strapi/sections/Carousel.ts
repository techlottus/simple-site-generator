
import type { StrapiImage } from "@/types/strapi/common";
import type { Card } from "@/utils/strapi/sections/CardList";
import type { VideoItem } from "@/utils/strapi/sections/Videos";
import type { button } from "@/utils/strapi/sections/RichTextImage";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type mediaQueryImage = {
  desktopRatio: string;
  desktopImage: StrapiImage
  tabletRatio: string;
  tabletImage: StrapiImage;
  mobileRatio: string;
  mobileImage: StrapiImage;
}
export type CarouselSection = {
  type: "ComponentSectionsCarousel"
  title: string;
  descriptionCarousel: BlocksContent;
  backgroundColor: string;
  origin: "center" | "auto",
  typeCarousel: "card" | "image";
  cards?: Array<Card>
  images?: Array<mediaQueryImage>
  videos?: Array<VideoItem>
  button?: button
}

export const CAROUSEL_SECTION = `
... on ComponentSectionsCarousel {
  title
  descriptionCarousel: description
  typeCarousel: type
  backgroundColor
  origin
  button {
    label
    CTA
    variant
    size
  }
  cards(pagination: { start: 0, limit: -1 }) {
    title
    subtitle
    type
    content
    linkText
    linkUrl
    imageAspectRatio
    image {
      data {
        attributes {
          url
        }
      }
    }
  }
  images(pagination: { start: 0, limit: -1 }) {
    desktopRatio
    desktopImage {
      data{
        attributes{
          url
        }
      }
    }
    tabletRatio
    tabletImage {
      data{
        attributes{
          url
        }
      }
    }
    mobileRatio
    mobileImage {
      data{
        attributes{
          url
        }
      }
    }
  }
}
`;