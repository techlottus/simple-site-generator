import React, { FC } from "react";
import Container from "@/layouts/Container.layout";
import type { MosaicSectionType } from "@/utils/strapi/sections/Mosaic";
import Mosaic from "@/old-components/Mosaic";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const MosaicSection: FC<MosaicSectionType> = (props: MosaicSectionType) => {

  const { title, mosaicDescription, images } = props;

  const arrayImages = images?.map((item, index) => {
    const img = {
      id: index.toString(),
      image: item?.image?.data?.attributes?.url
    }
    return img
  })

  return (
    <section>
      <Container>
        {
          title ?
            <h2 className="font-headings font-bold text-10 w-t:text-6 w-p:text-6 leading-tight mb-6">{title}</h2>
            : null
        }
        {
          mosaicDescription ?
            <RichTextRenderer content= {mosaicDescription} />
            : null
        }
        {
          images ?
            <Mosaic data={{
              images: arrayImages
            }} />
            : null
        }
      </Container>

    </section>
  );
};

export default MosaicSection;
