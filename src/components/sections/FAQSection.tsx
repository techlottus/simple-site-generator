'use client'
import Container from '@/layouts/Container.layout';
import { FAQSection } from '@/utils/strapi/sections/FAQ';
import Accordion from '@design-system/components/Accordion/Accordion'
import { RichTextRenderer } from '@design-system/components/RichTextRenderer/RichTextRenderer';
import { BlocksContent } from '@strapi/blocks-react-renderer';
import React from 'react'



export const FaqSection = (props: FAQSection) => {
  const { title, description, faqs } = props;
  const faqList: Array<{ question: string; answer: BlocksContent }> = faqs?.categoria_faq?.data?.attributes?.preguntas_frecuentes?.data?.map(({ attributes }) => ({
    question: attributes.question,
    answer: attributes.answer,
  }));

  return (
    <section id='faq-section'>
      <Container>
        <h3 className='font-headings font-bold text-2xl text-surface-900 mb-6'>{title}</h3>
        <RichTextRenderer content={description!} />
        <Accordion>
          {({ open }) => (
            <>
              {faqList?.map(({ question, answer }, index) => (
                <React.Fragment key={index}>
                  <Accordion.Button open={open} className='flex flex-row justify-between items-center'>
                    <p className='font-texts font-bold text-base text-surface-900'>{question}</p>
                    <span className={open ? 'rotate-180 transform delay-75 material-symbols-outlined text-surface-500' : 'material-symbols-outlined text-surface-500'} >expand_more</span>
                  </Accordion.Button>
                  <Accordion.Content>
                    {open ? <RichTextRenderer content={answer} /> : null}
                  </Accordion.Content>
                </React.Fragment>
              ))}
            </>
          )
          }
        </Accordion>
      </Container>
    </section>

  )
}

export default FaqSection;