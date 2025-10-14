import { TableSectionType } from '@/utils/strapi/sections/TableSection'
import React, { FC } from 'react'
import Table from '../lottus-education/Table';
import Container from '@/layouts/Container.layout';
import { MarkdownRenderer } from '../lottus-education/MarkdownRenderer';


const TableSection: FC<TableSectionType> = (props: TableSectionType) => {

  const { title, tableBody, tableHead } = props;

  return (
    <section>
      <Container>
        {title? <h3 className='text-10 font-headings font-bold mb-6'>{title}</h3>:null}
        <Table id={title} title={title} className='w-full'>
          <Table.Head className="sticky top-0 z-10">
            {tableHead?.map((row, index) => (
              <Table.Row className="" key={index}>
                {row.tableCell.map((cell, cellIndex) => (
                  <Table.Cell
                    key={cellIndex}
                    isHeader
                    align={cell.align}
                    className='!font-bold'
                  >
                   <MarkdownRenderer>{cell.content}</MarkdownRenderer>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Head>
          <Table.Body>
            {tableBody?.map((row, index) => (
              <Table.Row key={index}>
                {row.tableCell.map((cell, cellIndex) => (
                  <Table.Cell
                    key={cellIndex}
                    align={cell.align}
                    className='font-normal font-texts'
                  >
                  <MarkdownRenderer>{cell.content}</MarkdownRenderer>
                  </Table.Cell>
                ))}
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </section>

  )
}

export default TableSection;