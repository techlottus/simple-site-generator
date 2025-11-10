import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";
import Container from "@/layouts/Container.layout";
import type { TextContentSection } from "@/utils/strapi/sections/TextContent";

const TextContent = (props: TextContentSection) => {
  const { title, subtitle, text } = props;
  return (
    <section className="text-content-section ">
      <div className= "max-w-d-base mx-auto w-d-base:px-6">
        <div className="w-p:col-span-4 w-t:col-span-8 w-d:col-span-8 flex flex-col space-y-4 h-fit">
          {
            title
              ? <h1 className="font-headings font-bold desktop:text-4xl desktop:leading-10 text-3xl leading-8.5">
                  {title}
                </h1>
              : null}
          {
            subtitle
              ? <h2 className="font-headings font-semibold desktop:text-lg leading-5.5 text-lg leading-4.5">
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
      </div>
    </section>
  );
};

export default TextContent;