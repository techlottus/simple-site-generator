import type { LinkComponentConfig } from "@/types/LinkListComponentS";
import type { Card } from "@/utils/strapi/sections/CardList";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type CardsDetailContentData = {
  type: 'ComponentSectionsCardsDetailContent';
  title: string;
  detailDescription: BlocksContent;
  links: Array<LinkComponentConfig>;
  cards: Array <Card>;
  textPositionCardsDetailGroup: string;
};

export const CARDS_DETAIL_CONTENT = `
... on ComponentSectionsCardsDetailContent {
  title
  detailDescription: description
  links {
    text
    href
    target
    iconName
    iconPosition
    disabled
  }
  cards {
    title
    subtitle
    type
    content
    linkUrl
    linkText
    image {
      data {
        id
        attributes {
          alternativeText
          url
        }
      }
    }
    imageAspectRatio              
  }
  textPositionCardsDetailGroup: textPosition
}
`