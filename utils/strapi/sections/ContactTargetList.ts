import { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type ContactTargetCard = {
  image: StrapiImage;
  title: string;
  email: string;
  phone: string;
  link: string;
  textLink: string;
};

export type ContactTargetListSection = {
  type: "ComponentSectionsContactTargetList";
  title: string;
  subtitle: string;
  descriptionTarget: BlocksContent;
  cards: Array<ContactTargetCard>;
};

export const CONTACT_TARGET_LIST = `
...on ComponentSectionsContactTargetList {
    title
    subtitle
    descriptionTarget:description
    cards(pagination: {start: 0, limit: -1}) {
      image {
        data {
          attributes {
            url
          }
        }
      }
      title
      email
      phone
      link
      textLink
    }
  }
`;