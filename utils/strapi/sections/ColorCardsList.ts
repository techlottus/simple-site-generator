import { BlocksContent } from "@strapi/blocks-react-renderer";

type ColorCard = {
  headline: string;
  title: string;
  subtitle: string;
  description: BlocksContent;
  classNames: string;
}

export type ColorCardListData = {
  type: "ComponentSectionsColorCardList"
  title: string;
  desc: BlocksContent;
  alternativeText: BlocksContent;
  cards: Array<ColorCard>;  
}

export const COLOR_CARD_LIST = `
...on ComponentSectionsColorCardList{
  title
  desc:description
  alternativeText
  cards {
    headline
    title
    subtitle
    description
    classNames
  }
}
`