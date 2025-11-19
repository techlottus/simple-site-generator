import Container from "@/layouts/Container.layout";
import SliderPortalverseWrapper from "@/components/sections/SliderPortalverse";
import type { HeroSliderSection } from "@/utils/strapi/sections/HeroSlider";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";

const HeroSlider = (props: HeroSliderSection) => {
  return (
    <section>
      <Container classNames="mobile:!p-0 tablet:!p-0">
        {
          props?.title ?
            <p className="font-headings font-bold text-6xl tablet:text-2xl mobile:text-2xl leading-tight mb-6">{props?.title}</p>
            : null
        }
        {
          props?.heroDescription ?
            <RichTextRenderer content= {props.heroDescription} />
            : null
        }
        <div className="desktop:hidden">
          <SliderPortalverseWrapper data={{ ...props }} mobile />
        </div>
        <div className="mobile:hidden tablet:hidden">
          <SliderPortalverseWrapper data={{ ...props }} />
        </div>
      </Container>
    </section>
  );
};

export default HeroSlider;
