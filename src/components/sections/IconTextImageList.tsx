import { FC } from "react"
import cn from "classnames";
import Container from "@/layouts/Container.layout";
import type {IconTextListImageType } from "@/utils/strapi/sections/IconTextListImage";
import RichtText from "@/old-components/Richtext/Richtext";
import parseEditorRawData from "@/utils/parseEditorRawData";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const IconTextListImage: FC<IconTextListImageType> = (props: IconTextListImageType) => {
  const { title, desc, iconTextList, imageDesk, tabletImage, mobileImage, positionImage = "right", iconClassNames = "" } = props

  return (
    <section>
      <Container>
        <section className="w-d:hidden">
          {
            title ?
              <div>
                <h3 className="font-headings text-10 font-bold leading-12 w-t:text-8.5 w-p:text-6 w-d:mb-6">{title}</h3>
              </div>
              : null
          }
          {
            desc ?
              <div className="w-d:mb-12">
                <RichTextRenderer content={desc} />
              </div>
              : null
          }
        </section>
        <section className={cn('flex gap-6 w-t:flex-col-reverse w-p:flex-col-reverse', { "flex-row-reverse": positionImage === "left" })}>
          <div className="w-d:w-1/2 my-auto">
            {
              title ?
                <div className="w-p:hidden w-t:hidden">
                  <h3 className="font-headings text-10 font-bold leading-12 w-t:text-8.5 w-p:text-6 w-d:mb-6">{title}</h3>
                </div>
                : null
            }
            {
              desc ?
                <div className="w-d:mb-12 w-p:hidden w-t:hidden">
                  <RichTextRenderer content={desc} />
                </div>
                : null
            }
            {
              iconTextList ?
                iconTextList?.length > 0 ?
                  iconTextList?.map((item: any, i: number) =>
                    <div key={`icon-${i}`} className="flex gap-6">
                      <div className="my-auto">
                        <span className={cn("material-symbols-outlined text-primary-500 !text-16", iconClassNames)}>{item?.icon}</span>
                      </div>
                      <div className="">
                        <p className="font-headings font-bold">{item?.title}</p>
                        <RichtText data={{
                          content: parseEditorRawData(item?.text)
                        }} />
                      </div>
                    </div>
                  )
                  : null
                : null
            }
          </div>
          <div className="w-d:w-1/2">
            {
              imageDesk ?
                <div className={cn("w-t:hidden w-p:hidden flex justify-start", { "justify-end": positionImage === "right" || !positionImage })}>
                  <img
                    alt={""}
                    src={imageDesk?.data?.attributes?.url}
                  />
                </div>
                : null
            }
            {
              tabletImage ?
                <div className="w-d:hidden w-p:hidden">
                  <img
                    alt={""}
                    src={tabletImage?.data?.attributes?.url}
                    className="w-full h-full"
                  />
                </div>
                : null
            }
            {
              mobileImage ?
                <div className="w-d:hidden w-t:hidden">
                  <img
                    alt={""}
                    src={mobileImage?.data?.attributes?.url}
                    className="w-full h-full"
                  />
                </div>
                : null
            }
          </div>
        </section>
      </Container>
    </section>
  );
}

export default IconTextListImage