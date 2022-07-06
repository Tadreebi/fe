import { faCopy, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';
import { Button, ButtonGroup } from '../Buttons';
import { Col, Row } from '../Grid';
import Icon from '../Icon';

const Table = ({ columns, data, expandedComponent, onActionSelection, loading }) => {

  const detailPanel = ({ data }) => (
    <Row>
      {
        Object.keys(data).map(key => (
          <Col md={6}>
            <b>{`${key}`}:</b>{" "}{data[key]}
          </Col>
        ))
      }
    </Row>
  );

  return (
    <DataTable
      loading={loading}
      columns={[...columns,
      {
        name: "Actions",
        cell: row => (
          <ButtonGroup size="sm">
            <Button color="info" className="text-white" onClick={() => onActionSelection("view", row)}>
              <Icon icon={faEye} />
            </Button>

            <Button color="success" className="text-white" onClick={() => onActionSelection("create", row)}>
              <Icon icon={faCopy} />
            </Button>

            <Button color="warning" className="text-white" onClick={() => onActionSelection("update", row)}>
              <Icon icon={faEdit} />
            </Button>

            <Button color="danger" className="text-white" onClick={() => onActionSelection("delete", row)}>
              <Icon icon={faTrash} />
            </Button>
          </ButtonGroup>
        )
      }]}
      data={data}
      expandableRows={expandedComponent}
      expandableRowsComponent={detailPanel}
      fixedHeader
      fixedHeaderScrollHeight="60vh"
      pagination
      paginationComponentOptions={{
        rowsPerPageText: 'Per Page',
        rangeSeparatorText: 'to',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All'
      }}
      paginationRowsPerPageOptions={[5, 10, 25, 50, 100]}

    />
  )
}

export default Table
