import { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type RockstarInfoSection = {
  type: "ComponentSectionsRockstarInfo";
  name: string;
  image: StrapiImage;
  campus: {
    data: {
      attributes: {
        name: string;
      }
    }
  };
  detail: BlocksContent;
}

export type RockstarInfoListSection = {
  type: "ComponentSectionsLinkList";
  title: string;
  content?: BlocksContent;
  rockstars: Array<RockstarInfoSection>
};

export const ROCKSTARINFO_LIST = `
...on ComponentSectionsRockstarInfoList {
    title
    content:description
    rockstars(pagination:{ start: 0, limit: -1 }) {
      name
      detail
      campus {
        data {
          attributes {
            name
          }
        }
      }
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