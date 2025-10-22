import { BlocksContent } from "@strapi/blocks-react-renderer";

export type StrapiButton = {label?:string, variant?:"primary"|"outlined"|"outlined_negative", iconName?:string, CTA:string, size?:"xs"|"sm"|"md"|"lg" }

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type ContentVariant = "dark" | "light";

export type OutstandingSection = {
  title: string;
  content: BlocksContent;
  outstandingContentVariant: ContentVariant;
  outstandingImage: StrapiImage;
  outstandingImagePosition: "left" | "right";
  button: StrapiButton;
  backgroundColor: string;
  backgroundWidth:"w_3_4"|"w_full"
};

export type OutstandingListSection = {
  type: "ComponentSectionsContainerOutstandingList";
  title: string;
  outstandings: Array<OutstandingSection>;
};

export const OUTSTANDING_LIST = `
...on ComponentSectionsContainerOutstandingList {
    title
    outstandings(pagination: {start: 0, limit: -1}) {
      title
      content
      outstandingContentVariant:contentVariant            
      outstandingImage:image {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }            
      outstandingImagePosition:imagePosition
      button{
        label
        variant
        size
        iconName
        CTA
      }
      backgroundColor 
      backgroundWidth  
    }
}
`;