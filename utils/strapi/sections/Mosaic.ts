import { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

type Image = {
    image: StrapiImage;
    idImage: string;
}

  export type MosaicSectionType = {
    type: "ComponentSectionsMosaic";
    title: string;
    mosaicDescription: BlocksContent;
    images: Array<Image>;
  };
  
  export const MOSAIC = `
  ...on ComponentSectionsMosaic {
    title
    mosaicDescription:description
    images(pagination:{start: 0, limit:-1}) {
      image {
        data {
          attributes {
            url
          }
        }
      }
    }
  }
  `;