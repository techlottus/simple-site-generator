import { BlocksContent } from "@strapi/blocks-react-renderer";

type FaqItem = {
  attributes: {
    question: string;
    answer: BlocksContent;
  };
};

export type CategoryAccordionListData = {
  type: 'ComponentSectionsCategoryAccordionList';
  title: string;
  subtitle: string;
  CategoryList: Array<{
    label: string;
    iconName: string;
    faq_category: {
      data: {
        attributes: {
          title: string;
          faqs: {
            data: Array<FaqItem>;
          };
        };
      };
    };
  }>
};

export const CATEGORY_ACCORDION_CONTENT = `
... on ComponentSectionsCategoryAccordionList {
  title
  subtitle
  CategoryList {
    label
    iconName
    faq_category {
      data {
        attributes {
          title
          faqs(pagination: { start: 0, limit: -1 }) {
            data {
              attributes {
                question
                answer
              }
            }
          }
        }
      }
    }
  }
}
`