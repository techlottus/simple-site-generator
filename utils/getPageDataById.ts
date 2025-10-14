import { fetchStrapiGraphQL } from "./getStrapi";
import { SECTIONS } from "./strapi/queries";
import type { ComponentSection } from "@/utils/strapi/queries";
import { LayoutAttributes } from "./getLayout";

type PageVariables = {
  id: number;
};

export type PageData = {
  attributes: {
    title: string;
    slug: string;
    breadcrumb: string;
    sections: Array<ComponentSection>;
    seo: {
      metaTitle:string;
      metaDescription:string;
      metaImage: {
        data: {
          attributes: {
            url:string
          }
        }
      };
      keywords:string;
      metaRobots:string;
      metaViewport:string;
      canonicalURL:string;
      structuredData:JSON;
      metaSocial: {
        socialNetwork:string;
        title:string;
        description:string;
        image: {
          data: {
            attributes: {
              url:string
            }
          }
        }
      }[]
    };
    layout?: LayoutAttributes
  };
  
};

export type PageEntityResponse = {
  type: "PageEntityResponse";
  data: PageData;
};

type PageResponse = {
  page: PageEntityResponse;
};


const getDynamicPageDataById = async (variables: PageVariables) => {
  const pageData = await fetchStrapiGraphQL<PageResponse>(PAGE, variables);
  return pageData;
};

const PAGE = `
query PageById($id: ID) {
  page(id: $id) {
    type: __typename
    data {
      attributes {
        title
        slug
        breadcrumb
        sections {
          type: __typename
          ${SECTIONS}
        }
        layout{
          data {
            attributes {
              name
              footer {
                data {
                  attributes {
                    name
                    footerSection {
                      title
                      logo
                      images {
                        data {
                          attributes {
                            name
                          }
                        }
                      }
                      links {
                        text
                        href
                        target
                        iconName
                        iconPosition
                        disabled
                      }
                      position
                      social_medias {
                        data {
                          attributes {
                            name
                            icon_name
                            href
                          }
                        }
                      }
                      columns {
                        groups {
                          title
                          href
                          target
                          items {
                            label
                            href
                            bold
                            target
                          }
                        }
                      }
                    }
                  }
                }
              }
              header {
                data {
                  attributes {
                    name
                    links(pagination: {start: 0, limit: -1}){
                        id
                        text
                        target
                        href
                        iconName
                        iconPosition         
                      }  
                    button{
                      label
                      CTA
                      size
                      id
                      variant
                      iconName
                    }
                    
                    menu_items(pagination: {start: 0, limit: -1}) {
                      id
                      label
                      linkText
                      href
                      items(pagination: {start: 0, limit: -1}){
                        id
                        label
                        bold
                        href
                        linkText
                        items(pagination: {start: 0, limit: -1}){
                          id
                          label
                          bold
                          href
                          items(pagination: {start: 0, limit: -1}){
                            id
                            label
                            href
                            bold              
                          }
                        }
                      } 
                    }  
                    banners(pagination: {start: 0, limit: -1}){
                        title
                        subtitle
                        desktopRatio
                        desktopImage{
                          data{
                            attributes{
                              url
                              alternativeText
                            }
                          }
                        }
                        ctaUrl
                        ctaText
                        textPosition
                        overlay
                        contentVariant 
                      }
                
                    alert{
                      title
                      subtitle
                      image{
                        data{
                          attributes{
                            url
                          }
                        }
                      }
                      link{
                        text
                        target
                        iconName
                        iconPosition
                        href
                      }
                      
                    }
                    social_medias {
                      data {
                        attributes {
                          name
                          icon_name
                          href
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        seo {
          metaTitle
          metaDescription
          metaImage {
            data {
              attributes {
                url
              }
            }
          }
          keywords
          metaRobots
          metaViewport
          canonicalURL
          structuredData
          metaSocial {
            socialNetwork
            title
            description
            image {
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
`;

export default getDynamicPageDataById;
