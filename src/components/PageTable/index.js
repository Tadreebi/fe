import { faTable } from '@fortawesome/free-solid-svg-icons';
import CollapseCard from '../CollapseCard';
import Table from '../Root/Table';

const dataDemo = [
  {
    id: "1",
    column1: "Row 1",
    column2: "Row 1",
    column3: "Row 1",
    column4: "Row 1",
    column5: "Row 1",
    column6: "Row 1",
  },
  {
    id: "2",
    column1: "Row 2",
    column2: "Row 2",
    column3: "Row 2",
    column4: "Row 2",
    column5: "Row 2",
    column6: "Row 2",
  }
];

const keyFilter = key => {
  switch (key) {
    case "id": return false;
    default: return true;
  }
}

const PageTable = ({ title = "Table", columns, data, expandedComponent, onActionSelection = action => console.log("Selecting Action", action), loading, onCreate, onEdit, onDelete }) => {
  return (
    <CollapseCard title={title} icon={faTable} open>
      <Table
        columns={columns}
        data={data}
        expandedComponent={expandedComponent}
        onActionSelection={onActionSelection}
        loading={loading}
        onCreate={onCreate}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    </CollapseCard>
  )
}

export default PageTable
