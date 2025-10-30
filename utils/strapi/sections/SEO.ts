
export type StrapiImage = {
  data: {
    attributes: {
      url: string;
      alternativeText?: string;
    };
  };
};

type MetaSocial = {
  socialNetwork: string;
  title: string;
  description: string;
  image: StrapiImage;
};

export type SeoData = {
  metaTitle: string;
  metaDescription: string;
  metaImage: StrapiImage;
  metaSocial: Array<MetaSocial>;
  keywords: string;
  metaRobots: string;
  structuredData: string;
  metaViewport: string;
  canonicalURL: string;
};

export const SEO = `
seo_section {
  metaTitle
  metaDescription
  metaImage {
    data {
        attributes {
        url
      }
    }
  }
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
  keywords
  metaRobots
  structuredData
  metaViewport
  canonicalURL
}
`;
