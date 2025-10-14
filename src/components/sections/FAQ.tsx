import { useRouter } from "next/router";
import Accordion from "@/old-components/Accordion/Accordion";
import Button from "@/old-components/Button/Button";
import type { FAQSection } from "@/utils/strapi/sections/FAQ";
import type { AccordionItemConfig } from "@/types/Accordion.types";

const FAQ = (props: FAQSection) => {
  /**
   *  Currently, all FAQ section components are rendered through an Accordion,
   *  leaving component prop unused for the time being.
   */
  const { title, ctaText, ctaUrl, component, faqCategory } = props;

  const router = useRouter();
  
  const faqItems = faqCategory?.data?.attributes?.faqs?.data;

  const accordionItems = faqItems?.map(faqItem => {

    const formattedItem: AccordionItemConfig = {
      icon: "",
      title: faqItem?.attributes?.question,
      iconArrow: "",
      text: "<p>text</p>",
      content: "<p>content</p>",
      //@ts-ignore
      answer: faqItem?.attributes?.answer,
      id: ""
    }
    return formattedItem;
  });

  if (faqItems?.length === 0) return null;

  return (
    <section>
        <div className="flex flex-col space-y-6">
          {
            title
              ? <h2 className="font-headings text-10 font-bold leading-tight w-t:text-8.5 w-p:text-6">
                  {title}
                </h2>
              : null
          }
          <div>
            <Accordion data={{ items: accordionItems }} />
          </div>
          {
            ctaText && ctaUrl
              ? <div className="flex justify-center">
                  <Button
                    dark
                    data={{
                      "title": ctaText,
                      "type": "outlined",
                      "icon": "",
                      "isExpand": false,
                    }}
                    onClick={() => {
                      router.push(ctaUrl)
                    }}
                  />
                </div>
              : null
          }
        </div>
    </section>
  );
}

export default FAQ