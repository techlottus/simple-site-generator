import { Card } from "@/utils/strapi/sections/CardList";
import { StatisticsCard } from "@/utils/strapi/sections/StatisticsCardList";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type CardsStatisticsData = {
  type: "ComponentSectionsCardsStatistics";
  title: string;
  descriptionSection: BlocksContent;
  cardsPosition: string;
  titleCards: string;
  descriptionCards: BlocksContent;
  cards: Array<Card>;
  titleStatistics: string;
  descriptionStatistics: BlocksContent;
  statistics: Array<StatisticsCard>;
}

export const CARD_STATISTICS = `
... on ComponentSectionsCardsStatistics {
  title
  descriptionSection:description
  cardsPosition
  titleCards
  descriptionCards
  cards {
    title
    subtitle
    type
    content
    linkText
    linkUrl
    image {
      data {
        attributes {
          url
        }
      }
    }
    imageAspectRatio
  }
  titleStatistics
  descriptionStatistics
  statistics {
    title
    body
    prefix
    suffix
    maxNumber
    iconName
    color
    variant
  }
}
`;