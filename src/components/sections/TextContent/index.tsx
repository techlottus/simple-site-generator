import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";
import Container from "@/layouts/Container.layout";
import type { TextContentSection } from "@/utils/strapi/sections/TextContent";

const TextContent = (props: TextContentSection) => {
  const { title, subtitle, text } = props;
  return (
    <section className="text-content-section ">
      <Container>
        <div className="w-p:col-span-4 w-t:col-span-8 w-d:col-span-8 flex flex-col space-y-4 h-fit">
          {
            title
              ? <h1 className="font-headings font-bold desktop:text-10 desktop:leading-10 text-8.5 leading-8.5">
                  {title}
                </h1>
              : null}
          {
            subtitle
              ? <h2 className="font-headings font-semibold desktop:text-5.5 leading-5.5 text-4.5 leading-4.5">
                  {subtitle}
                </h2>
              : null
          }
          {
            text
              ? <div><RichTextRenderer content = {text} /></div>
              : null
          }
        </div>
      </Container>
    </section>
  );
};

export default TextContent;