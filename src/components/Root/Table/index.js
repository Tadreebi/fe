import { faCopy, faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';
import { Button, ButtonGroup } from '../Buttons';
import { Col, Row } from '../Grid';
import Icon from '../Icon';

const Table = ({ columns, data, expandedComponent, onActionSelection, loading, onCreate, onEdit, onDelete }) => {

  const detailPanel = ({ data }) => {
    const keyName = key => (
      key.split("").map((letter, i) => letter === letter.toUpperCase() ? ` ${letter}` : i === 0 ? letter.toUpperCase() : letter).join("")
    );

    const keyFilter = key => (
      (key !== "id" && key !== "created_at" && key !== "updated_at")
    );

    return (
      <Row>
        {
          Object.keys(data)?.filter(key => keyFilter(key)).map((key, i) => (
            <Col md={6} key={i}>
              <b>{`${keyName(key)}`}:</b>{" "}{data[key]}
            </Col>
          ))
        }
      </Row>
    )
  };

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

            {onCreate && (
              <Button color="success" className="text-white" onClick={() => onActionSelection("create", row)}>
                <Icon icon={faCopy} />
              </Button>
            )}

            {onEdit && (
              <Button color="warning" className="text-white" onClick={() => onActionSelection("update", row)}>
                <Icon icon={faEdit} />
              </Button>
            )}

            {onDelete && (
              <Button color="danger" className="text-white" onClick={() => onActionSelection("delete", row)}>
                <Icon icon={faTrash} />
              </Button>
            )}
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
