import { FC } from "react"
import Container from "@/layouts/Container.layout";
import type { AlertSection } from "@/utils/strapi/sections/Alert"
import { RichTextRenderer } from "../lottus-education/RichTextRenderer";

const Alert: FC<AlertSection> = (props: AlertSection) => {
  const { title, text, links, iconName } = props;

  return (
    <section>
      <Container>
        <div className="border-2 border-solid border-surface-300 rounded-lg flex space-x-4 items-start p-4">
          {
            iconName
              ? <span className="material-symbols-outlined select-none text-surface-500 text-4.5!">{iconName}</span>
              : null
          }
          <div className="flex flex-col space-y-4">
            {
              title
                ? <p className="font-normal text-4">{title}</p>
                : null
            }
            {
              text
                ? <div style={{overflowWrap: "anywhere"}}><RichTextRenderer content={text}/></div>
                : null
            }
            {
              links?.length > 0
                ? <div className="flex flex-col items-start space-y-4">
                  {
                    links?.map((link, i) => {
                      return (
                        link?.href && link?.href
                          ? <a key={i} href={link?.href} target={link?.target === "blank" ? "_blank" : "_self"} rel={link?.target === "blank" ? "noreferrer" : undefined} className="flex items-center space-x-2">
                              {
                                link?.iconName && link?.iconPosition === "left"
                                  ? <span className="material-symbols-outlined select-none font-normal">{link?.iconName}</span>
                                  : null
                              }
                              {
                                link?.text
                                  ? <span className="font-normal hover:underline">{link?.text}</span>
                                  : null
                              }
                              {
                                link?.iconName && link?.iconPosition === "right"
                                  ? <span className="material-symbols-outlined select-none font-normal">{link?.iconName}</span>
                                  : null
                              }
                            </a>
                          : null
                      )
                    })
                  }
                </div>
                : null
            }
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Alert