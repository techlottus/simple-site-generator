import { BlocksContent } from "@strapi/blocks-react-renderer";

export type VideoItem= {
  provider: string;
  providerId: string;
}

export type VideosSectionData = {
  type: "ComponentSectionsVideos";
  title: string;
  testimonialContent:BlocksContent;
  videos: Array<VideoItem>;
}

export const VIDEOS_SECTION = `
...on ComponentSectionsVideos{
  title
  testimonialContent:description
  videos{
    provider
    providerId
  }
}
`;