import { BlocksContent } from "@strapi/blocks-react-renderer";

type IconText = {
  title: string;
  text: BlocksContent;
  icon: string;
}
export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};
export type IconTextListImageType = {
  type: "ComponentSectionsIconTextListImage";
  title: string;
  desc: BlocksContent;
  iconTextList: Array<IconText>
  positionImage: string;
  imageDesk: StrapiImage;
  tabletImage: StrapiImage;
  mobileImage: StrapiImage;
  iconClassNames?: string;
}

export const ICON_TEXT_LIST_IMAGE = `
... on ComponentSectionsIconTextListImage {
    title
    desc:description
    iconTextList {
      title
      text
      icon:iconName
    }
    positionImage:imagePosition
    imageDesk: desktopImage {
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
`;