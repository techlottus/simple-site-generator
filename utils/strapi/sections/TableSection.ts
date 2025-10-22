
export type TableSectionType = {
  type: "ComponentSectionsTable";
  title: string;
  tableHead: {tableCell:TableCell[]}[];
  tableBody: {tableCell:TableCell[]}[];
};

type TableCell = {
  align?: "left" | "center" | "right";
  content: string;
}

export const TABLE = `
...on ComponentSectionsTable {
  title
  tableHead (pagination: { limit: -1 }) {
    tableCell (pagination: { limit: -1 }) {
      align
      content
    }
  }
  tableBody (pagination: { limit: -1 }) {
    tableCell (pagination: { limit: -1 }) {
      align
      content
    }
  }
}
`;
