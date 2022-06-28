import PageForm from '../../components/PageForm'
import PageHeader from '../../components/PageHeader'
import PageTable from '../../components/PageTable'

const TemplatePage = ({ pageTitle, pageDescrbition, formTitle, formInputs, onFormSubmit, onFormReset, tableTitle, tableData, onDataDuplicate, onDataEdit, onDataDelete }) => {

  return (
    <>
      <PageHeader title={pageTitle} descrbition={pageDescrbition} />
      <PageForm title={formTitle} inputs={formInputs} onSubmit={onFormSubmit} onReset={onFormReset} />
      <PageTable title={tableTitle} data={tableData} onDuplicate={onDataDuplicate} onEdit={onDataEdit} onDelete={onDataDelete} />
    </>
  )
}

export default TemplatePage
