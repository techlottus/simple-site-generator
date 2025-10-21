import { FC, memo } from "react";
import Container from "@/layouts/Container.layout";
import ContactTargetCard from "@/components/ContactTargetCard";
import type { ContactTargetListSection } from "@/utils/strapi/sections/ContactTargetList";
import { RichTextRenderer } from "@design-system/components/RichTextRenderer/RichTextRenderer";

const ContactTargetList: FC<ContactTargetListSection> = memo((props: ContactTargetListSection) => {
  const { title, subtitle, cards, descriptionTarget } = props

  return (
    <section>
      <Container>
        <div className="flex flex-col space-y-6">
          {
            title || subtitle || descriptionTarget ?
              <div className="flex flex-col space-y-4">
                {
                  title ? <h2 className="font-headings text-10 font-bold leading-tight w-t:text-8.5 w-p:text-6">{title}</h2> : null
                }
                {
                  subtitle ? <p className="font-headings font-semibold leading-tight text-5.5 w-t:text-4.5 w-p:text-4">{subtitle}</p> : null
                }
                {
                  descriptionTarget
                    ? <div><RichTextRenderer content={descriptionTarget} /></div>
                    : null
                }
              </div>
              : null
          }
          {
            cards?.length > 0 ?
              <div className="grid w-d:grid-cols-3 gap-6 w-t:grid-cols-2 w-p:grid-cols-1">
                {
                  cards?.map(({ title, email, phone, link = '', image, textLink }, j: number) =>
                    <ContactTargetCard
                      key={`card-item-${j}`}
                      image={image?.data?.attributes?.url}
                      title={title}
                      email={email}
                      phone={phone}
                      link={link}
                      textLink={textLink}
                    />)
                }
              </div>
              : null
          }
        </div>
      </Container>
    </section>
  );
})

export default ContactTargetList