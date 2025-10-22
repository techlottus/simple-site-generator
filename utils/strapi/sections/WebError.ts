
import { SeoData } from "./SEO";
import { Layout } from "@/utils/getLayout";

export type LinkConfig = {
  /**
   * link text
   */
  text: string;
  /**
   * Sizes: small | medium | large
   */
  size: string;
  /**
   * bold text
   */
  isBold: boolean;
  /**
   * deactivate label
   */
  disabled: boolean;
  /**
   * identifier
   */
  id?: string;
  /**
   * icon text
   */
  icon?: string;
  test?: string;
  href: string;
}

export type WebErrorSection = {
  type: 'ComponentSectionsWebError'
  title?: string;
  message?: string;
  errorCode?: string;
  button?: LinkConfig
};
export type WebErrorPage = {
  sections: Array<WebErrorSection>; 
  meta: SeoData,
  layoutData:Layout
};

export const WEB_ERROR = `
...on ComponentSectionsWebError {
  title
  message
  errorCode
  button {
    href
    text
    iconName
    iconPosition
  }
}
`;