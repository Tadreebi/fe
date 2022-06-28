import {
  CButton, CButtonGroup, CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody, CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow
} from '@coreui/react'

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

const Tables = ({ title, data = dataDemo, onDuplicate = id => console.log("Duplicating", id), onEdit = id => console.log("Editing", id), onDelete = id => console.log("Deleting", id) }) => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          {title && (
            <CCardHeader>
              {title}
            </CCardHeader>
          )}

          <CCardBody>
            <CTable striped hover>
              <CTableHead>
                <CTableRow>
                  {Object.keys(data[0]).filter(key => keyFilter(key)).map((key, i) => (
                    <CTableHeaderCell key={i}>
                      {key}
                    </CTableHeaderCell>
                  ))}
                  <CTableHeaderCell>
                    Actions
                  </CTableHeaderCell>
                </CTableRow>
              </CTableHead>

              <CTableBody>
                {data.map((record, i) => (
                  <CTableRow key={i}>
                    {Object.keys(record).filter(key => keyFilter(key)).map((key, y) => (
                      <CTableDataCell key={y}>{record[key]}</CTableDataCell>
                    ))}
                    {onEdit && (
                      <CTableDataCell >
                        <CButtonGroup role="group" size='sm'>
                          <CButton onClick={onDuplicate(record.id)} color='success' className='text-white'>
                            Duplicate
                          </CButton>

                          {onEdit && (
                            <CButton onClick={onEdit(record.id)} color='warning' className='text-white'>
                              Edit
                            </CButton>
                          )}
                          {onDelete && (
                            <CButton onClick={onDelete(record.id)} color='danger' className='text-white'>
                              Delete
                            </CButton>
                          )}
                        </CButtonGroup>
                      </CTableDataCell>
                    )}
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Tables
