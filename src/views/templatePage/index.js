import PageCharts from 'src/components/PageCharts'
import PageForm from 'src/components/PageForm'
import PageHeader from 'src/components/PageHeader'
import PageStatistics from 'src/components/PageStatistics'
import PageTable from 'src/components/PageTable'

const TemplatePage = ({ pageTitle, pageDescrbition, statisticsTitle, statisticsData, chartsTitle, chartsData, formTitle, formInputs, onFormSubmit, onFormReset, tableTitle, tableData, onDataCreate, onDataEdit, onDataDelete, onActionSelection, currentAction }) => {

  return (
    <>
      <PageHeader title={pageTitle} descrbition={pageDescrbition} />
      {statisticsData && (<PageStatistics title={statisticsTitle} statistics={statisticsData} />)}
      {chartsData && (<PageCharts title={chartsTitle} charts={chartsData} />)}
      <PageForm title={formTitle} inputs={formInputs} onSubmit={onFormSubmit} onReset={onFormReset} currentAction={currentAction} />
      <PageTable title={tableTitle} data={tableData} onCreate={onDataCreate} onEdit={onDataEdit} onDelete={onDataDelete} onActionSelection={onActionSelection} />
    </>
  )
}

export default TemplatePage
