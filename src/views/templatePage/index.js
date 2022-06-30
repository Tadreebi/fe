import PageForm from 'src/components/PageForm'
import PageHeader from 'src/components/PageHeader'
import PageTable from 'src/components/PageTable'

const TemplatePage = ({ pageTitle, pageDescrbition, formTitle, formInputs, onFormSubmit, onFormReset, tableTitle, tableData, onDataCreate, onDataEdit, onDataDelete, onActionSelection, currentAction }) => {

  return (
    <>
      <PageHeader title={pageTitle} descrbition={pageDescrbition} />
      <PageForm title={formTitle} inputs={formInputs} onSubmit={onFormSubmit} onReset={onFormReset} currentAction={currentAction} />
      <PageTable title={tableTitle} data={tableData} onCreate={onDataCreate} onEdit={onDataEdit} onDelete={onDataDelete} onActionSelection={onActionSelection} />
    </>
  )
}

export default TemplatePage
