import CollapseCard from '../CollapseCard';
import { Button, ButtonGroup } from '../Root/Buttons';
import { Table, TableBody, TableHeader, TableRow, TableTD, TableTH } from '../Root/Table';

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

const Tables = ({ title = "Table", data = dataDemo, onActionSelection = action => console.log("Selecting Action", action) }) => {
  return (
    <CollapseCard title={title} open>
      <Table striped hover>
        <TableHeader>
          <TableRow>
            {data.length > 0 ?
              <>
                {Object.keys(data[0]).filter(key => keyFilter(key)).map((key, i) => (
                  <TableTH key={i}>
                    {key}
                  </TableTH>
                ))}
                <TableTH >
                  Actions
                </TableTH>
              </>
              : <TableTH className="text-center">
                No Data to Show
              </TableTH>
            }
          </TableRow>
        </TableHeader>

        <TableBody>
          {data?.map((record, i) => (
            <TableRow key={i}>
              {Object?.keys(record).filter(key => keyFilter(key))?.map((key, y) => (
                <TableTD key={y}>{record[key]}</TableTD>
              ))}
              <TableTD >
                <ButtonGroup role="group" size='sm'>
                  <Button onClick={() => onActionSelection('view', record)} color='info' className='text-white'>
                    View
                  </Button>

                  <Button onClick={() => onActionSelection('create', record)} color='success' className='text-white'>
                    Duplicate
                  </Button>

                  <Button onClick={() => onActionSelection('update', record)} color='warning' className='text-white'>
                    Edit
                  </Button>

                  <Button onClick={() => onActionSelection('delete', record)} color='danger' className='text-white'>
                    Delete
                  </Button>
                </ButtonGroup>
              </TableTD>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CollapseCard>
  )
}

export default Tables
