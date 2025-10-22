
import { RichTextImageSection } from "./RichTextImage";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};


export type RichTextImageBgImageSection = {
  type: "ComponentSectionsRichTextImageBgImage"
  desktopBgImage?: StrapiImage;
  tabletBgImage?: StrapiImage;
  mobileBgImage?: StrapiImage;
  RichTextImageComponent: RichTextImageSection;
}

export const RICHTEXTIMAGE_BGIMAGE = `
... on ComponentSectionsRichTextImageBgImage {
  desktopBgImage {
    data {
      attributes {
        url
      }
    }
  }
  tabletBgImage {
    data {
      attributes {
        url
      }
    }
  }
  mobileBgImage {
    data {
      attributes {
        url
      }
    }
  }
  RichTextImageComponent:RichTextImage {
    title
    text
    richTextImageContentVariant: contentVariant
    image {
      data {
        attributes {
          url
        }
      }
    }
    imagePosition
    buttons {
      CTA
      label
      iconName
      variant
      id
      size
    }
  }
}`;
