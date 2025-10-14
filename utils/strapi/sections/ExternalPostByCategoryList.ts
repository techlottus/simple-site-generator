import { StrapiImage } from "@/types/strapi/common";
import { BlocksContent } from "@strapi/blocks-react-renderer";

export type ExternalPost = {
  title?: string;
  abstract: BlocksContent;
  ctaText: string;
  ctaUrl: string;
  publicationDate: string;
  featuredImage: StrapiImage;
}

export type ExternalPosts = {
  attributes: ExternalPost
}

export type ExternalPostListData = {
  type: "ComponentSectionsExternalPostByCategoryList"
  title: string;
  descriptionCategory: BlocksContent;
  externalPostCategories: {
    data: Array<{
      attributes: {
        title: string;
        external_posts: { data: Array<ExternalPosts> }
      }
    }>
  }
}

export const EXTERNAL_POST_BY_CATEGORY_LIST = `
... on ComponentSectionsExternalPostByCategoryList {
  title
  descriptionCategory:description
  externalPostCategories(pagination: { start: 0, limit: -1 } ) {
    data {
      attributes {
        title
        external_posts(sort:"publicationDate:desc" pagination: { start: 0, limit: -1 } ) {
          data {
            attributes {
              title
              abstract
              ctaText
              ctaUrl
              publicationDate
              featuredImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`;
