import { FC } from "react";
import Container from "@/layouts/Container.layout";
import parseEditorRawData from "@/utils/parseEditorRawData";
import BannerPortalverseWrapper from "@/components/BannerPortalverseWrapper";
import RichtText from "@/old-components/Richtext/Richtext";
import type { RepeatableBanner } from "@/utils/strapi/sections/RepeatableBanner";
import router from "next/router";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const RepeatableBannerSection: FC<RepeatableBanner> = (props: RepeatableBanner) => {
  const { title, content, banners } = props
  return (
    <section>
      <Container>
        <div>
          {
            title ?
              <div className="mb-6"><p className="font-headings text-10 leading-12 w-p:text-6 w-p:leading-7 ">{title}</p></div>
              : null
          }
          {
            content ?
              <div className="mb-6">
                <RichTextRenderer content={content} />
              </div>
              : null
          }
          {
            banners?.length > 0 ?
              <div className="grid w-d:grid-cols-2 gap-6 w-t:grid-cols-1 w-p:grid-cols-1">
                {
                  banners?.map((item: any, i: number) => <div key={`section-banners-${i}`}>
                    <BannerPortalverseWrapper data={item} onClick={() => {
                      router.push(item?.ctaUrl);
                    }}/>
                  </div>)
                }
              </div>
              : null
          }
        </div>
      </Container>
    </section>
  )
}

export default RepeatableBannerSection