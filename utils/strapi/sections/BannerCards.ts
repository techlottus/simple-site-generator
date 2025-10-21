import { BlocksContent } from "@strapi/blocks-react-renderer";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type CardIconData= {
  IconName?:string;
  iconColor?:string;
  RichText?: BlocksContent; 
}
export type ButtonType = {
  CTA: string;
  label: string;
  iconName: string;
  variant: 'solid' | 'outline' | 'ghost';
  id: string;
  size: string;
};
export type BannerCardsData = {
  type: "ComponentSectionsBannerCards"
  cardIconItems: Array<CardIconData>;
  deskImage?: StrapiImage;
  tabletImage?: StrapiImage;
  mobileImage?: StrapiImage;
  button?: ButtonType
}

export const BANNER_CARDS = `
... on ComponentSectionsBannerCards{
  tabletImage{
    data{
      attributes{
        url
      }
    }
  }
  mobileImage{
    data{
      attributes{
        url
      }
    }
  }
  deskImage: desktopImage{
    data{
      attributes{
        url
      }
    }
  }
  cardIconItems: cardIconItem(pagination: {start: 0, limit: -1}){
    IconName
    iconColor
    RichText
  }
  button{
    CTA
    label
    iconName
    variant
    id
    size
  }
}`
