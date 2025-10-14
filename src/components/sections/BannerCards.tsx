import { FC } from "react";
import { BannerCardsData, CardIconData } from "@/utils/strapi/sections/BannerCards";
import ContentFullLayout from "@/layouts/ContentFull.layout";
import RichtText from "@/old-components/Richtext/Richtext";
import parseEditorRawData from "@/utils/parseEditorRawData";
import Button from "@/old-components/Button/Button";
import cn from "classnames";
import { useRouter } from "next/router";
import ContentLayout from "@/layouts/Content.layout";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";


const BannerCardsSection: FC<BannerCardsData> = (props: BannerCardsData) => {

  const { deskImage, tabletImage, mobileImage, cardIconItems, button } = props;

  const router = useRouter();

  const cardIcon = (cardIconItem?: CardIconData, i?: number) => (
    <div key={i} className="flex gap-2 items-center px-2.5  py-3 min-h-20	mobile:min-h-16  tablet:max-w-78 shadow-lg rounded-lg bg-white " >
      <span className="material-symbols-outlined select-none !text-7" style={{ color: `${cardIconItem?.iconColor}` }} >
        {cardIconItem?.IconName}
      </span>
      <div className="-mb-5 grow" >
        <RichTextRenderer content={cardIconItem?.RichText} />
      </div>
    </div>)

  const bgStyles = {
    "--img-desk": `url(${deskImage?.data?.attributes?.url})`,
    "--img-tablet": `url(${tabletImage?.data?.attributes?.url})`,
    "--img-mobile": `url(${mobileImage?.data?.attributes?.url})`,
  }

  return (
    <ContentFullLayout classNames="relative h-auto" >
      <div
        //@ts-ignore
        style={bgStyles}
        className="bg-origin-border md:bg-center bg-no-repeat bg-cover py-16 mobile:bg-[image:var(--img-mobile)] tablet:bg-[image:var(--img-tablet)] bg-[image:var(--img-desk)]"
      >  <ContentLayout classNames="w-full">
          <section id="banner-card-image" className="col-span-12 w-t:col-span-8 w-p:col-span-4 ">
            <div className="w-full h-full flex justify-center items-center mx-auto mobile:px-4 tablet:px-20 desktop:px-45 ">

              <div id="container-cards-button" className="flex flex-col gap-12 items-center justify-center mx-auto">
                <div id="cards-container" className="grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 grid-flow-row gap-6">
                  {cardIconItems?.map((cardIconItem, i) => cardIcon(cardIconItem, i))}
                </div>
                {button && <Button dark data={{
                  id: button?.id,
                  type: button?.variant,
                  title: button?.label,
                  icon: button?.iconName,
                  size: "small",
                  lyIcon: false,
                  disabled: false,
                  isExpand: true,
                }}
                  onClick={() => router?.push(button?.CTA)} />
                }
              </div>
            </div>
          </section>
        </ContentLayout>
      </div>
    </ContentFullLayout>
  );
}

export default BannerCardsSection