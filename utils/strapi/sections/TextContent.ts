import { BlocksContent } from "@strapi/blocks-react-renderer";

export type TextContentSection = {
  type: "ComponentSectionsTextContent";
  title: string;
  subtitle: string;
  text: BlocksContent;
};

export const TEXT_CONTENT = `
...on ComponentSectionsTextContent {
  title
  subtitle
  text
}
`;
