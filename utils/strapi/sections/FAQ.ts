import { BlocksContent } from "@strapi/blocks-react-renderer";

type FaqItem = {
  attributes: {
    question: string;
    answer: BlocksContent;
  };
};

export type FAQSection = {
  type: "ComponentSectionsFaqSection";
  title?: string;
  description?: BlocksContent;
  faqs: {
    categoria_faq: {
      data: {
        attributes: {
          preguntas_frecuentes: {
            data: Array<FaqItem>;
          };
        };
      };
    };
    sortdate?: string;
    max_entries?: number;
  };
};

export const FAQ_SECTION = `
...on ComponentSectionsFaqSection {
  title
  description
  faqs {
    categoria_faq {
      data {
        attributes {
          preguntas_frecuentes {
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
    sortdate
    max_entries
  }
}
`;
