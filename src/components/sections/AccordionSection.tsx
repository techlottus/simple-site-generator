import Container from "@/layouts/Container.layout";
import Accordion from "@/old-components/Accordion/Accordion";
import type { AccordionSection } from "@/utils/strapi/sections/Accordion";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const AccordionComponent = (props: AccordionSection) => {

  const { title, subtitle, accordionDescription, accordionItems } = props;


  const items = accordionItems?.map((item) => {
    const formattedItem = {
      icon: "",
      title: item?.title,
      iconArrow: "",
      text: "<p>text</p>",
      content: "<p>content</p>",
      //@ts-ignore
      answer: item?.content,
      id: ""
    }
    return formattedItem;
  });

  return (
    <section>
      <Container>
        <div className="flex flex-col space-y-6">
          {
            title
              ? <h3 className="font-headings font-bold leading-[125%] w-p:text-6 w-t:text-8.5 text-10">
                {title}
              </h3>
              : null}
          {
            subtitle
              ? <p className="font-headings font-semibold leading-[130%] w-p:text-4 w-t:text-4.5 text-5.5">
                {subtitle}
              </p>
              : null
          }
          {
            accordionDescription
              ? <div><RichTextRenderer content= {accordionDescription} className="text-xl" /></div>
              : null
          }
          <div>
            <Accordion data={{ items: items }} />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AccordionComponent