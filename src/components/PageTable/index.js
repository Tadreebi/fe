import {
  CButton, CButtonGroup, CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react';
import CollapseCard from '../Cards/CollapseCard';

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

const Tables = ({ title, data = dataDemo, onActionSelection = action => console.log("Selecting Action", action) }) => {
  return (
    <CollapseCard title={title} open>
      <CTable striped hover>
        <CTableHead>
          <CTableRow>
            {data.length > 0 ?
              <>
                {Object.keys(data[0]).filter(key => keyFilter(key)).map((key, i) => (
                  <CTableHeaderCell key={i}>
                    {key}
                  </CTableHeaderCell>
                ))}
                <CTableHeaderCell >
                  Actions
                </CTableHeaderCell>
              </>
              : <CTableHeaderCell className="text-center">
                No Data to Show
              </CTableHeaderCell>
            }
          </CTableRow>
        </CTableHead>

        <CTableBody>
          {data?.map((record, i) => (
            <CTableRow key={i}>
              {Object?.keys(record).filter(key => keyFilter(key))?.map((key, y) => (
                <CTableDataCell key={y}>{record[key]}</CTableDataCell>
              ))}
              <CTableDataCell >
                <CButtonGroup role="group" size='sm'>
                  <CButton onClick={() => onActionSelection('view', record)} color='info' className='text-white'>
                    View
                  </CButton>

                  <CButton onClick={() => onActionSelection('create', record)} color='success' className='text-white'>
                    Duplicate
                  </CButton>

                  <CButton onClick={() => onActionSelection('update', record)} color='warning' className='text-white'>
                    Edit
                  </CButton>

                  <CButton onClick={() => onActionSelection('delete', record)} color='danger' className='text-white'>
                    Delete
                  </CButton>
                </CButtonGroup>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </CollapseCard>
  )
}

export default Tables
