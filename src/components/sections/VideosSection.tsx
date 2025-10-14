import { FC } from "react";
import Container from "@/layouts/Container.layout";
import Aspect from "@/components/Aspect";
import type { VideosSectionData } from "@/utils/strapi/sections/Videos";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const VideoSection: FC<VideosSectionData> = (props: VideosSectionData) => {
  const { title, testimonialContent, videos } = props;


  return (
    <section>
      <Container>
        {
          title ?
            <p className="font-headings font-bold text-10 w-t:text-6 w-p:text-6 leading-tight mb-6">{title}</p>
          : null
        }
        {
          testimonialContent ?
            <div className="mb-6">
              <RichTextRenderer content={testimonialContent} />
            </div>
          : null
        }
        {
          videos ?
            <div className="grid w-d:grid-cols-2 w-t:grid-cols-1 gap-6 w-p:grid-cols-1 w-p:gap-7">
              {
                videos?.length > 0 ?
                  videos?.map((item, i) => {
                    return (
                      <div key={`section-videos-${i}`} className="w-full h-full" >
                        <Aspect ratio="2/1">
                          <iframe
                            className="w-full h-full"
                            src={item?.provider === 'youtube' ? `https://www.youtube.com/embed/${item?.providerId}` : item?.provider === 'vimeo' ? `https://player.vimeo.com/video/${item?.providerId}` : ''}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen>
                          </iframe></Aspect>
                      </div>
                    )
                  })
                : null
              }
            </div>
          : null
        }
      </Container>
    </section>
  )

}
export default VideoSection

