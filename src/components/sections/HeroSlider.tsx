import Container from "@/layouts/Container.layout";
import SliderPortalverseWrapper from "@/components/SliderPortalverseWrapper";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const HeroSlider = (props: HeroSliderSection) => {
  return (
    <section>
      <Container classNames="w-p:!p-0 w-t:!p-0">
        {
          props?.title ?
            <p className="font-headings font-bold text-10 w-t:text-6 w-p:text-6 leading-tight mb-6">{props?.title}</p>
            : null
        }
        {
          props?.heroDescription ?
            <RichTextRenderer content= {props.heroDescription} />
            : null
        }
        <div className="w-d:hidden">
          <SliderPortalverseWrapper data={{ ...props }} mobile />
        </div>
        <div className="w-p:hidden w-t:hidden">
          <SliderPortalverseWrapper data={{ ...props }} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
