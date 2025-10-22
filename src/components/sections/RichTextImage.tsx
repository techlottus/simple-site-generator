'use client';
import { FC } from "react";
import Container from "@/layouts/Container.layout";
import Image from "@design-system/components/Image/Image";
import cn from "classnames";
import type { RichTextImageSection } from "@/utils/strapi/sections/RichTextImage";
import Button from "@design-system/components/Button/Button";
import { useRouter } from "next/navigation";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";

const RichTextImage: FC<RichTextImageSection> = (props: RichTextImageSection) => {

  const {
    title,
    image,
    text,
    imagePosition = "right",
    backgroundColor,
    richTextImageContentVariant = "dark",
    buttons
  } = props;
  const router = useRouter();

  const renderImage = () => {
    return (
      <div>
        <Image
          classNamesImg="!h-auto !static"
          src={image?.data?.attributes?.url}
          alt="imagen"
        />
      </div>
    );
  };
  
  return (
    <section
      style={{ backgroundColor }}
      className={cn({
        "w-p:py-10 w-t:py-6 w-d:py-10": !!backgroundColor,
      })}
    >
      <Container>
        <div className="flex flex-col space-y-6">
          {
            title ? <h2 className={cn("font-headings font-bold desktop:text-10 desktop:leading-10 text-6 leading-6",{"text-surface-0":richTextImageContentVariant ==="light"})}>{title}</h2> : null
          }
          <div className="grid w-p:grid-cols-1 w-t:grid-cols-1 grid-cols-2 gap-6">
            <div
              className={cn("my-auto", {
                "w-d:hidden": imagePosition !== "left",
                "w-p:hidden w-t:hidden": !title
              })}
            >
              {renderImage()}
            </div>
            {
              text
                ?
                <div className="my-auto">
                 <RichTextRenderer 
                 className={richTextImageContentVariant === "light" ? "text-surface-100" : "text-surface-900"} 
                 content = {text} /> 
                  {
                    buttons && buttons?.length > 0 ?
                      <div className="grid gap-6 w-d:grid-cols-2 w-t:grid-cols-2">
                        {
                          buttons?.map((item, i) => {
                            return (
                              <div key={`richTextImage-button-${i}`}>
                                <Button 
                                  variant={item?.variant === "outlined_negative" ? "outline" : "solid"}
                                  size={item?.size=="small"?"sm":"md"}
                                  icon={item?.iconName}
                                  className="w-full"
                                  onClick={() => router?.push(item?.CTA)}>{item?.label}</Button>
                              </div>
                            )
                          }
                          )
                        }
                      </div>
                      : null
                  }
                </div>
                : null
            }
            <div
              className={cn("my-auto", {
                "w-d:hidden": imagePosition !== "right",
                "w-p:hidden w-t:hidden": !!title
              })}
            >
              {renderImage()}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default RichTextImage