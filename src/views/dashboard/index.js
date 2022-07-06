
import { useEffect, useState } from 'react';
import CompanyAppResponseAPI from 'src/api/CompanyAppResponse';
import CompanyReportAPI from 'src/api/CompanyReport';
import CompanyPostAPI from 'src/api/OpportunityPost';
import StudentApplicationAPI from 'src/api/StudentApplication';
import StudentExperienceAPI from 'src/api/StudentExperience';
import StudentGoalsAPI from 'src/api/StudentGoals';
import StudentProposalAPI from 'src/api/StudentProposal';
import StudentReportAPI from 'src/api/StudentReport';
import UniversityFeedbackAPI from 'src/api/UniversityFeedback';
import UniversityProposalResponseAPI from 'src/api/UniversityProposalResponse';
import PageCharts from 'src/components/PageCharts';
import PageStatistics from 'src/components/PageStatistics';
import CompanyAppResponse from "../Company/CompanyAppResponse/visualRepresentations";
import CompanyReport from "../Company/CompanyReport/visualRepresentations";
import OpportunityPosts from "../Company/OpportunityPosts/visualRepresentations";
import StudentApplication from "../Students/StudentApplication/visualRepresentations";
import StudentExperience from "../Students/StudentExperience/visualRepresentations";
import StudentGoals from "../Students/StudentGoals/visualRepresentations";
import StudentProposals from "../Students/StudentProposals/visualRepresentations";
import StudentReports from "../Students/StudentReports/visualRepresentations";
import StudentProposalRemarks from "../University/StudentProposalRemarks/visualRepresentations";
import StudentReportRemarks from "../University/StudentReportRemarks/visualRepresentations";
import UniversityFeedback from "../University/UniversityFeedback/visualRepresentations";

const Dashboard = () => {
  const [studentApplicationResponsesList, setStudentApplicationResponsesList] = useState([]);
  const [compnyReportsList, setCompnyReportsList] = useState([]);
  const [internshipPostsList, setInternshipPostsList] = useState([]);
  const [studentApplicationsList, setStudentApplicationsList] = useState([]);
  const [studentGoalsList, setStudentGoalsList] = useState([]);
  const [studentExperiencesList, setStudentExperiencesList] = useState([]);
  const [studentProposalList, setStudentProposalList] = useState([]);
  const [studentReportsList, setStudentReportsList] = useState([]);
  const [universityProposalResponseList, setUniversityProposalResponseList] = useState([]);
  const [studentReportRemarksList, setStudentReportRemarksList] = useState([]);
  const [universityFeedbackList, setUniversityFeedbackList] = useState([]);

  const callData = async () => {
    await UniversityFeedbackAPI.getAllUniversityFeedback()
      .then(res => {
        console.log("Called Data", res.data);
        setUniversityFeedbackList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentReportAPI.getAllRemarks()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentReportRemarksList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await UniversityProposalResponseAPI.getAllResponses()
      .then(res => {
        console.log("Called Data", res.data);
        setUniversityProposalResponseList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentReportAPI.getAllReports()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentReportsList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentProposalAPI.getAllProposals()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentProposalList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentGoalsAPI.getAllGoals()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentGoalsList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentExperienceAPI.getAllExperience()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentExperiencesList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await StudentApplicationAPI.getAllApplications()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentApplicationsList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await CompanyAppResponseAPI.getAllAppResponses()
      .then(res => {
        console.log("Called Data", res.data);
        setStudentApplicationResponsesList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await CompanyReportAPI.getAllReports()
      .then(res => {
        console.log("Called Data", res.data);
        setCompnyReportsList(res.data);
      })
      .catch(e => {
        console.log(e);
      });

    await CompanyPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Data", res.data);
        setInternshipPostsList(res.data[0]);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    callData()
  }, []);

  const dashboardFilter = list => list?.filter(item => !item.dashboardInclusion);

  return (
    <>
      {/* Student Views */}
      {/* Student Applications  */}
      <PageStatistics title={"Student Application Statistics"} statistics={dashboardFilter(StudentApplication(studentApplicationsList).statisticsData)} open />
      <PageCharts title={"Student Application Charts"} statistics={dashboardFilter(StudentApplication(studentApplicationsList).chartsData)} open />

      {/* Student Experiences  */}
      <PageStatistics title={"Student Experience Statistics"} statistics={dashboardFilter(StudentExperience(studentExperiencesList).statisticsData)} open />
      <PageCharts title={"Student Experience Charts"} charts={dashboardFilter(StudentExperience(studentExperiencesList).chartsData)} open />

      {/* Student Goals  */}
      <PageStatistics title={"Student Goal Statistics"} statistics={dashboardFilter(StudentGoals(studentGoalsList).statisticsData)} open />
      <PageCharts title={"Student Goal Charts"} charts={dashboardFilter(StudentGoals(studentGoalsList).chartsData)} open />

      {/* Student Proposals  */}
      <PageStatistics title={"Student Proposal Statistics"} statistics={dashboardFilter(StudentProposals(studentProposalList).statisticsData)} open />
      <PageCharts title={"Student Proposal Charts"} charts={dashboardFilter(StudentProposals(studentProposalList).chartsData)} open />

      {/* Student Reports  */}
      <PageStatistics title={"Student Report Statistics"} statistics={dashboardFilter(StudentReports(studentReportsList).statisticsData)} open />
      <PageCharts title={"Student Report Charts"} charts={dashboardFilter(StudentReports(studentReportsList).chartsData)} open />

      {/* University Supervisor Views */}
      {/* Student Proposal Remarks  */}
      <PageStatistics title={"Student Proposal Remark Statistics"} statistics={dashboardFilter(StudentProposalRemarks(universityProposalResponseList).statisticsData)} open />
      <PageCharts title={"Student Proposal Remark Charts"} charts={dashboardFilter(StudentProposalRemarks(universityProposalResponseList).chartsData)} open />

      {/* Student Report Remarks  */}
      <PageStatistics title={"Student Report Remark Statistics"} statistics={dashboardFilter(StudentReportRemarks(studentReportRemarksList).statisticsData)} open />
      <PageCharts title={"Student Report Remark Charts"} charts={dashboardFilter(StudentReportRemarks(studentReportRemarksList).chartsData)} open />

      {/* University Feedback  */}
      <PageStatistics title={"University Feedback Statistics"} statistics={dashboardFilter(UniversityFeedback(universityFeedbackList).statisticsData)} open />
      <PageCharts title={"University Feedback Charts"} charts={dashboardFilter(UniversityFeedback(universityFeedbackList).chartsData)} open />

      {/* Company Views */}
      {/* Company Application Response  */}
      <PageStatistics title={"Company Application Response Statistics"} statistics={dashboardFilter(CompanyAppResponse(studentApplicationResponsesList).statisticsData)} open />
      <PageCharts title={"Company Application Response Charts"} charts={dashboardFilter(CompanyAppResponse(studentApplicationResponsesList).chartsData)} open />

      {/* Company Report  */}
      <PageStatistics title={"Company Report Statistics"} statistics={dashboardFilter(CompanyReport(compnyReportsList).statisticsData)} open />
      <PageCharts title={"Company Report Charts"} charts={dashboardFilter(CompanyReport(compnyReportsList).chartsData)} open />

      {/* Oppertunity Posts  */}
      <PageStatistics title={"Oppertunity Post Statistics"} statistics={dashboardFilter(OpportunityPosts(internshipPostsList).statisticsData)} open />
      <PageCharts title={"Oppertunity Post Charts"} charts={dashboardFilter(OpportunityPosts(internshipPostsList).chartsData)} open />

    </>
  )
}

export default Dashboard
