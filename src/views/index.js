import PageCharts from 'src/components/PageCharts'
import PageForm from 'src/components/PageForm'
import PageStatistics from 'src/components/PageStatistics'
import PageHeader from 'src/components/PageHeader'
import PageTable from 'src/components/PageTable'

const TemplatePage = ({ pageTitle, pageDescrbition, statisticsTitle, statisticsData, chartsTitle, chartsData, formTitle, formInputs, onFormSubmit, onFormReset, tableTitle, tableColumns, tableData, tableRowDetails, onDataCreate, onDataUpdate, onDataDelete, onActionSelection, currentAction, loading, children }) => {

  return (
    <>
      <PageHeader title={pageTitle} descrbition={pageDescrbition} />
      {children}
      {statisticsData && (<PageStatistics title={statisticsTitle} statistics={statisticsData} />)}
      {chartsData && (<PageCharts title={chartsTitle} charts={chartsData} />)}
      <PageForm title={formTitle} inputs={formInputs} onSubmit={onFormSubmit} onReset={onFormReset} currentAction={currentAction} loading={loading} />
      <PageTable title={tableTitle} columns={tableColumns} expandedComponent={tableRowDetails} data={tableData} onCreate={onDataCreate} onEdit={onDataUpdate} onDelete={onDataDelete} onActionSelection={onActionSelection} loading={loading} />
    </>
  )
}

export default TemplatePage
