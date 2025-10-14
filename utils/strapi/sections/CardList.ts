import type { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type Card = {
  title: string;
  subtitle: string;
  type: string;
  content: BlocksContent;
  linkText: string;
  linkUrl: string;
  image: StrapiImage;
  imageAspectRatio: string;
};

export type CardListSection = {
  type: "ComponentSectionsCardList",
  title: string;
  cards: Array<Card>;
};

export const CARD_LIST = `
...on ComponentSectionsCardList {
  id
  title
  cards(pagination: {start: 0, limit: -1}) {
    id
    title
    subtitle
    content
    type
    linkText
    linkUrl
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }
    imageAspectRatio
  }
}
`;