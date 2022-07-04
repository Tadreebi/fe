import { useEffect, useState } from "react";
import CompanyPostAPI from 'src/api/OpportunityPost';
import TemplatePage from "../../templatePage";
import postsDemoData from "./postsData";


const opportunityPosts = () => {
  const [postsList, setPostsList] = useState([...postsDemoData]);
  const [post, setPost] = useState({});
  const [action, setAction] = useState("create");
  const [loading, setLoading] = useState(false);

  const callData = async () => {
    setLoading(true);

    await CompanyPostAPI.getAllPosts()
      .then(res => {
        console.log("Called Data", res.data);
        setPostsList(res.data[0]);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const companies = [
    { id: 1, name: "ASAC" },
    { id: 2, name: "CSS" },
    { id: 3, name: "CC" },
    { id: 4, name: "Amazon" },
    { id: 5, name: "Google" },
  ];

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    // Company Name -> From another model
    {
      title: "Company",
      name: "company",
      type: "select",
      fullwidth: true,
      required: true,
      value: post.company,
      onChange: (e) =>
        setPost((current) => ({ ...current, company: e.target.value })),
      options: companies.map((company) => ({
        title: company.name,
        value: company.id,
      })),
    },
    {
      title: "Position",
      name: "position",
      type: "text",
      placeholder: "Internship Position",
      fullwidth: true,
      required: true,
      value: post.position,
      onChange: (e) =>
        setPost((current) => ({ ...current, position: e.target.value })),
    },
    {
      title: "Internship Type",
      name: "paid",
      type: "select",
      required: true,
      value: post.paid,
      onChange: (e) =>
        setPost((current) => ({ ...current, paid: e.target.value })),
      options: [
        { title: "Paid Internship", value: "Paid Internship" },
        {
          title: "Partially-paid Internship",
          value: "Partially-paid Internship",
        },
        { title: "Unpaid Internship", value: "Unpaid Internship" },
        { title: "Virtual Internship", value: "Virtual Internship" },
      ],
    },
    {
      title: "Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: post.type,
      onChange: (e) =>
        setPost((current) => ({ ...current, type: e.target.value })),
      options: [
        { title: "Full Time", value: "Full Time" },
        { title: "Part Time", value: "Part Time" },
      ],
    },
    {
      title: "Experience",
      name: "experience",
      type: "select",
      required: true,
      value: post.experience,
      onChange: (e) =>
        setPost((current) => ({ ...current, experience: e.target.value })),
      options: [
        { title: "No Experience", value: "No Experience" },
        { title: "One Year", value: "One Year" },
        { title: "Two Years", value: "Two Years" },
        { title: "Three Years and Above", value: "Three Years and Above" },
      ],
    },
    {
      title: "Education",
      name: "education",
      type: "select",
      required: true,
      value: post.education,
      onChange: (e) =>
        setPost((current) => ({ ...current, education: e.target.value })),
      options: [
        { title: "Bachelors", value: "Bachelors" },
        { title: "Masters", value: "Masters" },
        { title: "Phd", value: "Phd" },
      ],
    },
    {
      title: "Industry",
      name: "industry",
      type: "select",
      required: true,
      value: post.industry,
      onChange: (e) =>
        setPost((current) => ({ ...current, industry: e.target.value })),
      options: [
        { title: "Business", value: "Business" },
        { title: "It", value: "It" },
        { title: "Banking", value: "Banking" },
        { title: "Education", value: "Education" },
        { title: "Engineering", value: "Engineering" },
        { title: "Medical", value: "Medical" },
        { title: "Others", value: "Others" },
      ],
    },
    {
      title: "Salary",
      name: "salary",
      type: "number",
      required: true,
      value: post.salary,
      onChange: (e) =>
        setPost((current) => ({ ...current, salary: e.target.value })),
    },
    {
      title: "City",
      name: "city",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.city,
      onChange: (e) =>
        setPost((current) => ({ ...current, city: e.target.value })),
    },
    {
      title: "Location",
      name: "location",
      type: "location",
      required: true,
      fullwidth: true,
      value: post.location,
      onChange: (e) =>
        setPost((current) => ({ ...current, location: e.target.value })),
    },
    {
      title: "Vacancies",
      name: "vacancies",
      type: "number",
      required: true,
      value: post.vacancies,
      onChange: (e) =>
        setPost((current) => ({ ...current, vacancies: e.target.value })),
    },
    {
      title: "Internship Overview",
      name: "description",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.description,
      onChange: (e) =>
        setPost((current) => ({ ...current, description: e.target.value })),
    },
    {
      title: "Supervisor Name",
      name: "supervisor_Name",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.supervisor_Name,
      onChange: (e) =>
        setPost((current) => ({ ...current, supervisor_Name: e.target.value })),
    },
    {
      title: "Supervisor Position",
      name: "subervisor_position",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.subervisor_position,
      onChange: (e) =>
        setPost((current) => ({
          ...current,
          subervisor_position: e.target.value,
        })),
    },
    {
      title: "Supervisor Phone Number",
      name: "supervisor_phone_number",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.supervisor_phone_number,
      onChange: (e) =>
        setPost((current) => ({
          ...current,
          supervisor_phone_number: e.target.value,
        })),
    },
    {
      title: "End Date of Application",
      name: "endDate",
      type: "date",
      required: true,
      value: post.endDate,
      onChange: (e) =>
        setPost((current) => ({ ...current, endDate: e.target.value })),
    },
  ];

  const onFormSubmit = (e) => {
    e.preventDefault();

    action === "create"
      ? onDataCreate()
      : action === "update"
        ? onDataEdit()
        : action === "delete" && onDataDelete();
  };

  const onFormReset = () => {
    setPost({});
    setAction("create");
    console.log("Form was reset");
  };

  const onActionSelection = (action, data) => {
    setPost(data);
    setAction(action);
  };

  const onDataCreate = async () => {
    setLoading(true);

    await CompanyPostAPI.createPost(post)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setPost({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataEdit = async () => {
    setLoading(true);

    await CompanyPostAPI.updatePost(post.id, post)
      .then(res => {
        console.log("Data Created Successfully");
        callData();
        setPost({});
        setAction("create");
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onDataDelete = async () => {
    setLoading(true);

    await CompanyPostAPI.deleteReport(post.id)
      .then(res => {
        console.log("Data Deleted Successfully");
        setPost({});
        setAction("create");
        callData();
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const statisticsData = [
    {
      title: "Internships Hours",
      number: postsList.map(intern => intern.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Full Time": postsList.filter(intern => intern.type === "Full Time")?.length,
          "Part Time": postsList.filter(intern => intern.type === "Part Time")?.length,
        },
      }
    },
    {
      title: "Internships Type",
      number: postsList.map(intern => intern.paid).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Paid Internship": postsList.filter(intern => intern.paid === "Paid Internship")?.length,
          "Partially-paid Internship": postsList.filter(intern => intern.paid === "Partially-paid Internship")?.length,
          "Unpaid Internship": postsList.filter(intern => intern.paid === "Unpaid Internship")?.length,
          "Virtual Internship": postsList.filter(intern => intern.paid === "Virtual Internship")?.length,
        },
      }
    },
    {
      title: "Education",
      number: postsList.map(intern => intern.education).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Bachelors": postsList.filter(intern => intern.education === "Bachelors")?.length,
          "Masters": postsList.filter(intern => intern.education === "Masters")?.length,
          "Phd": postsList.filter(intern => intern.education === "Phd")?.length,
        },
      }
    },
    {
      title: "Indsutry",
      number: postsList.map(intern => intern.industry).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Business": postsList.filter(intern => intern.industry === "Business")?.length,
          "It": postsList.filter(intern => intern.industry === "It")?.length,
          "Banking": postsList.filter(intern => intern.industry === "Banking")?.length,
          "Education": postsList.filter(intern => intern.industry === "Education")?.length,
          "Engineering": postsList.filter(intern => intern.industry === "Engineering")?.length,
          "Medical": postsList.filter(intern => intern.industry === "Medical")?.length,
          "Others": postsList.filter(intern => intern.industry === "Others")?.length,
        },
      }
    },
  ];
  const chartsData = [
    {
      title: "Internship Hours",
      type: "doughnut",
      data:
      {
        "Part Time": postsList.filter(intern => intern.type === "Part Time")?.length,
        "Full Time": postsList.filter(intern => intern.type === "Full Time")?.length,
      },
    },
    {
      title: "Industry",
      type: "doughnut",
      data:
      {
        "Business": postsList.filter(intern => intern.industry === "Business")?.length,
        "It": postsList.filter(intern => intern.industry === "It")?.length,
        "Banking": postsList.filter(intern => intern.industry === "Banking")?.length,
        "Education": postsList.filter(intern => intern.industry === "Education")?.length,
        "Engineering": postsList.filter(intern => intern.industry === "Engineering")?.length,
        "Medical": postsList.filter(intern => intern.industry === "Medical")?.length,
        "Others": postsList.filter(intern => intern.industry === "Others")?.length,
      },
    },
    {
      title: "Education",
      type: "doughnut",
      data:
      {
        "Bachelors": postsList.filter(intern => intern.education === "Bachelors")?.length,
        "Masters": postsList.filter(intern => intern.education === "Masters")?.length,
        "Phd": postsList.filter(intern => intern.education === "Phd")?.length,
      },
    },
    {
      title: "Internship Type",
      type: "doughnut",
      data:
      {
        "Paid Internship": postsList.filter(intern => intern.paid === "Paid Internship")?.length,
        "Partially-paid Internship": postsList.filter(intern => intern.paid === "Partially-paid Internship")?.length,
        "Unpaid Internship": postsList.filter(intern => intern.paid === "Unpaid Internship")?.length,
        "Virtual Internship": postsList.filter(intern => intern.paid === "Virtual Internship")?.length,
      },
    },
  ]

  const tableColumns = [
    {
      name: "Company",
      selector: (row) => row.company,
      sortable: true,
    },
    {
      name: "Position",
      selector: (row) => row.position,
      sortable: true,
    },
    {
      name: "Vacancies",
      selector: (row) => row.vacancies,
      sortable: true,
    },
    {
      name: "End Date of Application",
      selector: (row) => row.endDate,
      sortable: true,
    },
  ];

  // const chartsData = [];
  return (
    <>
      <TemplatePage
        pageTitle={"Internship Opportunity"}
        pageDescrbition={
          "For company to submit details of an internship opportunity"
        }
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formTitle={"CRUD Posts"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Internship Opportunity Details"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={postsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataEdit={onDataEdit}
        onDataDelete={onDataDelete}
      />
    </>
  );
};

export default opportunityPosts;
