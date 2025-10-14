import { BlocksContent } from "@strapi/blocks-react-renderer";

type itemsAccordion = {
  title: string;
  content: string;
};

export type AccordionSection = {
  type: "ComponentSectionsAccordion";
  title: string;
  subtitle: string;
  accordionDescription: BlocksContent;
  accordionItems: Array<itemsAccordion>;
};

export const ACCORDION_SECTION = `
...on ComponentSectionsAccordion {
  title
  subtitle
  accordionDescription:description
  accordionItems(pagination: {start: 0, limit: -1}) {
    title
    content
  }
}
`;