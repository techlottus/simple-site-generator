'use client';
import Container from "@/layouts/Container.layout";
import type { FC } from "react";
import type { CardListSection } from "@/utils/strapi/sections/CardList";
import  {Card}  from "@design-system/components/Card/Card";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";

const CardList: FC<CardListSection> = (props: CardListSection) => {
  const {
    title,
    cards,
  } = props;
  return (
    <section>
      <Container>
        <div className="flex flex-col space-y-6">
          {
            title
              ? <h2 className="font-headings text-6xl font-bold leading-tight tablet:text-5xl mobile:text-2xl">{title}</h2>
              : null
          }
          {
            cards?.length > 0 ?
              <div className="col-span-12 tablet:col-span-8 mobile:col-span-4 grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-6 h-max">
                {
                  cards?.map((card, index) => {
                    const urlImage = card?.image?.data?.attributes?.url;
                    const {
                      linkText,
                      linkUrl
                    } = card;

                    return (
                      <div key={index} className="card">
                        <Card
                          onClick={linkUrl ? () => {
                            if (!!linkUrl) {
                              return window?.open(linkUrl, linkUrl?.includes("https") ? "_blank" : "_self")
                            }
                            return null
                          } : () => undefined}
                          imageUrl={urlImage}
                          link={{
                            linkText,
                            linkIcon: "chevron_right"
                          }}
                          cardOrientation={card.type === "horizontal" ? "horizontal" : "vertical"}
                        >
                          <div className="px-2 flex flex-col break-words h-full w-full ">
                            <p className="pt-3 mb-2 font-texts font-normal text-surface-500 text-xs">
                              {card?.subtitle}
                            </p>
                            <h2 className="mb-2 font-texts font-bold text-base">
                              {card?.title}
                            </h2>
                            <RichTextRenderer content={card?.content} className="mb-2 pb-2 text-surface-500" />
                          </div>
                        </Card>
                      </div>
                    )
                  })
                }
              </div>
              : null
          }
        </div>
      </Container>
    </section>
  );
};

export default CardList;