import Aspect from "@design-system/components/Aspect/Aspect";
import Image from "@design-system/components/Image/Image";
import type { FC } from "react";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type TestimonialCardData = {
  title: string;
  subtitle: string;
  testimonialText: BlocksContent;
  testimonialImage: StrapiImage
}

const TestimonialCard: FC<TestimonialCardData> = (props: TestimonialCardData) => {

  const {
    title,
    subtitle,
    testimonialText,
    testimonialImage
  } = props

  return (
    <div className="rounded-2xl bg-white">
      <div className="flex w-p:flex-col w-p:items-center px-10 py-6 w-p:py-10 w-p:px-6">
        {
          testimonialImage ?
            <div className="w-d:mr-6 w-t:mr-6 w-t: my-auto w-d:my-auto">
              <div className="w-44 h-44 w-t:w-32 w-t:h-32 w-p:w-32 w-p:h-32 w-p:mb-6">
              <Aspect ratio={"1/1"}>
                <Image
                  alt={"Programa de Nivel Superior"}
                  src={testimonialImage?.data?.attributes?.url}
                  classNamesImg="w-full h-full object-cover rounded-full "
                  classNames="w-full h-full flex justify-center"
                />
              </Aspect>
              </div>
            </div>
            : null
        }
        <div className="my-auto">
          {
            title ?
              <p className="w-d:text-6 text-base font-headings leading-8 w-d:font-semibold mb-2 w-p:mb-6">{title}</p>
              : null
          }
          {
            subtitle ?
              <p className="text-base font-texts leading-5 mb-3 text-surface-600 w-p:mb-6">{subtitle}</p>
              : null
          }
          {
            testimonialText ?
              // <RichtText data={{
              //   content: parseEditorRawData(testimonialText)
              // }} />
              <RichTextRenderer content={testimonialText} />
              : null
          }
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;