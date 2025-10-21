import { VideoItem } from "./Videos";
import { button } from "./RichTextImage";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

export type VideoImageData = {
  type: "ComponentSectionsVideoImage";
  title: string;
  subtitle: BlocksContent;
  images: Array<StrapiImage>
  video: VideoItem
  button: button
};

export const VIDEO_IMAGE = `
... on ComponentSectionsVideoImage {
  title
  subtitle            
  images {
    image {
      data {
        attributes {
          url
          alternativeText
        }
      }
    }                                      
  }
  video: Video {
    providerId
    provider
  }
  button: Button {
    label
    variant
    size
    CTA
    iconName
  }
}
`;
