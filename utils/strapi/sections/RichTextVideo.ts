import { BlocksContent } from "@strapi/blocks-react-renderer";
import { button } from "./RichTextImage";

export type RichTextVideoSection = {
  type: "ComponentSectionsRichTextVideo";
  title: string;
  text: BlocksContent;
  providerId:string;
  provider:'Youtube'|'Vimeo';
  videoPosition: "left" | "right";
  backgroundColor: string;
  richTextVideoContentVariant: "light" | "dark";
  buttons?: Array<button>
};
  
export const RICH_TEXT_VIDEO = `
...on ComponentSectionsRichTextVideo{
  title
  text
  providerId
  provider
  videoPosition
  backgroundColor
  richTextVideoContentVariant: contentVariant
  buttons {
    CTA
    label
    iconName
    variant
    id
    size
  }
}
`;