import { FC } from "react"
import Container from "@/layouts/Container.layout";
import cn from "classnames";
import type { ColorCardListData } from "@/utils/strapi/sections/ColorCardsList";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const ColorCardList: FC<ColorCardListData> = (props: ColorCardListData) => {

  const {title, desc, cards, alternativeText} = props;


  return (
    <section>
      <Container>
        {
          title ? 
          <div>
            <h2 className="font-headings font-bold text-10 w-t:text-6 w-p:text-6 leading-tight mb-6">{title}</h2>
          </div>
          : null
        }
        {
          desc ?
          <div>
            <RichTextRenderer content= {desc} />
          </div>
          : null
        }
        {
          cards?.length > 0 ? 
          <div className="grid grid-cols-3 w-t:grid-cols-1 w-p:grid-cols-1">
            {
              cards?.map((item, i) => <section key={`colorCard-${i}`} className={cn("p-6", item?.classNames)}>
                <div>
                {
                  item?.headline ?
                    <p className="text-secondary-500 font-headings font-semibold text-10 leading-12 w-t:text-6 w-p:text-6 w-t:leading-8 w-p:leading-8">{item?.headline}</p>
                  : null
                }
                {
                  item?.title ? 
                    <p className="font-headings font-semibold text-10 leading-12 mb-4 w-t:text-6 w-p:text-6 w-t:leading-8 w-p:leading-8">{item?.title}</p>
                  : null
                }
                {
                  item?.subtitle ? 
                    <p className="font-headings font-semibold text-6 leading-8 mb-4 w-t:leading-7 w-p:leading-7">{item?.subtitle}</p>
                  : null
                }
                {
                  item?.description ?
                    <RichTextRenderer content={item?.description} />
                  : null
                }
                </div>
              </section> )
            }
          </div>
          : null
        }
        {
          alternativeText ?
            <div className="flex justify-end mt-1">
              <RichTextRenderer content={alternativeText} />
            </div>
          : null
        }
      </Container>
    </section>
  );
}

export default ColorCardList