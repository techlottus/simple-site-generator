
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type TestimonialCardData = {
  title: string;
  subtitle: string;
  testimonialText: BlocksContent;
  testimonialImage: StrapiImage
}

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type TestimonialSliderData = {
  type: "ComponentSectionsTestimonialSlider";
  title: string;
  description: BlocksContent;
  bgImageDesktop: StrapiImage;
  bgImageTablet: StrapiImage;
  bgImageMobile: StrapiImage;
  testimonialsCards: Array<TestimonialCardData>
}

export const TESTIMONIAL_SLIDER = `
...on ComponentSectionsTestimonialSlider {
  title
  descriptionSlider: description
  bgImageDesktop {
    data {
      attributes {
        url
        alternativeText
      }
    }
  }
  bgImageTablet {
    data {
      attributes {
        url
        alternativeText
      } 
    }
  }
  bgImageMobile {
    data {
      attributes {
        url   
        alternativeText
      }
    }
  }
  testimonialsCards: testimonialCards(pagination: {start: 0, limit: -1}) {
    title
    subtitle
    testimonialText
    testimonialImage {
      data {
        attributes {
          url
          alternativeText
        }
      }
    } 
  }
}
`;
