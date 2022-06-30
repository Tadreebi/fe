import PageForm from '../../components/PageForm'
import PageHeader from '../../components/PageHeader'
import PageTable from '../../components/PageTable'
import PageStatistics from '../../components/PageStatistics'

const TemplatePage = ({ pageTitle, pageDescrbition, statisticsTitle, statisticsData, formTitle, formInputs, onFormSubmit, onFormReset, tableTitle, tableData, onDataCreate, onDataEdit, onDataDelete, onActionSelection, currentAction }) => {

  return (
    <>
      <PageHeader title={pageTitle} descrbition={pageDescrbition} />
      {statisticsData && (<PageStatistics title={statisticsTitle} statistics={statisticsData} />)}
      <PageForm title={formTitle} inputs={formInputs} onSubmit={onFormSubmit} onReset={onFormReset} currentAction={currentAction} />
      <PageTable title={tableTitle} data={tableData} onCreate={onDataCreate} onEdit={onDataEdit} onDelete={onDataDelete} onActionSelection={onActionSelection} />
    </>
  )
}

export default TemplatePage
