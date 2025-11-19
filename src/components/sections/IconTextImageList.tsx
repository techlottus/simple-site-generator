import { FC } from "react"
import cn from "classnames";
import Container from "@/layouts/Container.layout";
import type {IconTextListImageType } from "@/utils/strapi/sections/IconTextListImage";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";

const IconTextListImage: FC<IconTextListImageType> = (props: IconTextListImageType) => {
  const { title, desc, iconTextList, imageDesk, tabletImage, mobileImage, positionImage = "right", iconClassNames = "" } = props

  return (
    <section>
      <Container>
        <section className="desktop:hidden">
          {
            title ?
              <div>
                <h3 className="font-headings text-6xl font-bold leading-12 tablet:text-4xl mobile:text-2xl desktop:mb-6">{title}</h3>
              </div>
              : null
          }
          {
            desc ?
              <div className="desktop:mb-12">
                <RichTextRenderer content={desc} />
              </div>
              : null
          }
        </section>
        <section className={cn('flex gap-6 tablet:flex-col-reverse mobile:flex-col-reverse', { "flex-row-reverse": positionImage === "left" })}>
          <div className="desktop:w-1/2 my-auto">
            {
              title ?
                <div className="mobile:hidden tablet:hidden">
                  <h3 className="font-headings text-6xl font-bold leading-12 tablet:text-4xl mobile:text-2xl desktop:mb-6">{title}</h3>
                </div>
                : null
            }
            {
              desc ?
                <div className="desktop:mb-12 mobile:hidden tablet:hidden">
                  <RichTextRenderer content={desc} />
                </div>
                : null
            }
            <div className="flex flex-col gap-5">
                          {
              iconTextList ?
                iconTextList?.length > 0 ?
                  iconTextList?.map((item: any, i: number) =>
                    <div key={`icon-${i}`} className="flex gap-6">
                      <div className="my-auto">
                        <span className={cn("material-symbols-outlined text-primary-500 !text-5xl", iconClassNames)}>{item?.icon}</span>
                      </div>
                      <div className="">
                        <p className="font-headings font-bold">{item?.title}</p>
                        <RichTextRenderer content={item?.text} />
                      </div>
                    </div>
                  )
                  : null
                : null
            }
            </div>

          </div>
          <div className="desktop:w-1/2">
            {
              imageDesk ?
                <div className={cn("tablet:hidden mobile:hidden flex justify-start", { "justify-end": positionImage === "right" || !positionImage })}>
                  <img
                    alt={""}
                    src={imageDesk?.data?.attributes?.url}
                  />
                </div>
                : null
            }
            {
              tabletImage ?
                <div className="desktop:hidden mobile:hidden">
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
                <div className="desktop:hidden tablet:hidden">
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