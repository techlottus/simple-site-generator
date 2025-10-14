import { BlocksContent } from "@strapi/blocks-react-renderer";

type AlertLink = {
  text: string;
  href: string;
  target: "self" | "blank";
  iconName: string;
  iconPosition: "left" | "right";
  disabled: boolean;
};

export type AlertSection = {
  type: "ComponentSectionsAlert";
  title: string;
  text: BlocksContent;
  links: Array<AlertLink>;
  iconName: string;
};

export const ALERT = `
  ...on ComponentSectionsAlert {
    title
    text
    links(pagination: {start: 0, limit: -1}) {
      text
      href
      target
      iconName
      iconPosition
      disabled
    }
    iconName
  }
  `;
