import { CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow } from '@coreui/react';
import { faClockRotateLeft, faEraser, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, ButtonGroup } from '../Buttons';
import InputPicker from './ListInputPicker';

const DynamicList = ({ value, onChange, disabled, props }) => {
  const newProperites = props.reduce((final, prop) => ({ ...final, [prop.name]: prop.defaultValue }), {});

  // const moveUp = i => {
  //   let newData = [...value];
  //   let temp = newData[i - 1];
  //   newData[i - 1] = newData[i];
  //   newData[i] = temp;
  //   onChange(newData);
  // };

  // const moveDown = i => {
  //   let newData = [...value];
  //   let temp = newData[i];
  //   newData[i] = newData[i + 1];
  //   newData[i + 1] = temp;
  //   onChange(newData);
  // };

  const onInputChange = (i, prop, type) => e => {
    let newData = [...value];
    newData[i][prop] = type === "switch" ? e.target.checked : e.target.value;
    onChange(newData);
  };

  const onDeletion = (i, id) => {
    if (id) {
      onChange(currnet => currnet.map(rec => rec.id === id ? { ...rec, deleted: true } : rec))
    }
    else {
      onChange(current => current.filter((_, j) => j !== i))
    }
  };

  const undoDelete = id => {
    onChange(currnet => currnet.map(rec => rec.id === id ? { ...rec, deleted: false } : rec))
  };

  return (
    <CTable>
      <CTableHead>
        <CTableRow>
          {/* <CTableHeaderCell>
            Reorder
          </CTableHeaderCell> */}

          {props.map((prop, i) => (
            <CTableHeaderCell key={i}>
              {prop.title || "Title"} {prop.required ? <span className='text-danger'>*</span> : ""}
            </CTableHeaderCell>
          ))}

          <CTableHeaderCell>
            <ButtonGroup>
              <Button size="sm" color="success" className="text-white" onClick={() => onChange(current => [...current, newProperites])}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>

              <Button size="sm" color="warning" className="text-white">
                <FontAwesomeIcon icon={faClockRotateLeft} />
              </Button>
            </ButtonGroup>
          </CTableHeaderCell>
        </CTableRow>
      </CTableHead>

      <CTableBody>
        {value?.map((row, i) => (
          <CTableRow key={i}>
            {/* <CTableDataCell>
              <ButtonGroup size="sm">
                <Button color="ghost" disabled={i === 0} onClick={() => moveUp(i)}>
                  <FontAwesomeIcon icon={faArrowUp} />
                </Button>

                <Button color="ghost" disabled={i === value.length - 1} onClick={() => moveDown(i)}>
                  <FontAwesomeIcon icon={faArrowDown} />
                </Button>
              </ButtonGroup>
            </CTableDataCell> */}

            {props.map(({ defaultValue, ...prop }, y) => (
              <CTableDataCell key={y}>
                <InputPicker {...prop} value={row[prop.name]} onChange={onInputChange(i, prop.name, prop.type)} disabled={disabled || row.deleted} />
              </CTableDataCell>
            ))}

            <CTableDataCell>
              <Button size="sm" color={row.deleted ? "warning" : "danger"} className="text-white" onClick={() => row.deleted ? undoDelete(row.id) : onDeletion(i, row.id)}>
                <FontAwesomeIcon icon={row.deleted ? faClockRotateLeft : row.id ? faTrash : faEraser} />
              </Button>
            </CTableDataCell>
          </CTableRow>
        ))}
      </CTableBody>
    </CTable>
  )
};

export default DynamicList;

