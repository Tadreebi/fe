import { useEffect, useState } from "react";
import CompanyPostAPI from 'src/api/OpportunityPost';
import TemplatePage from "../..";


const opportunityPosts = () => {
  const [postsList, setPostsList] = useState([]);
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
    { id: 4, name: "CSS" },
  ];

  useEffect(() => {
    callData();
  }, []);

  const inputs = [
    // Companies List API
    {
      title: "Company",
      name: "company_id",
      type: "select",
      required: true,
      value: post.company_id,
      onChange: (e) =>
        setPost(current => ({ ...current, company_id: e.target.value })),
      options: companies?.map((company) => ({ title: company.name, value: company.id })),
    },
    {
      title: "Position",
      name: "position",
      type: "text",
      placeholder: "Internship Position",
      required: true,
      value: post.position,
      onChange: (e) =>
        setPost(current => ({ ...current, position: e.target.value })),
    },
    {
      title: "Payment",
      name: "paid",
      type: "switch",
      value: post.paid,
      onChange: (e) =>
        setPost(current => ({ ...current, paid: e.target.checked })),
    },
    {
      title: "Internship Hours",
      name: "type",
      type: "select",
      required: true,
      value: post.type,
      onChange: (e) =>
        setPost(current => ({ ...current, type: e.target.value })),
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
        setPost(current => ({ ...current, experience: e.target.value })),
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
        setPost(current => ({ ...current, education: e.target.value })),
      options: [
        { title: "Bachelors", value: "BACHELORS" },
        { title: "Masters", value: "MASTERS" },
        { title: "Phd", value: "PHD" },
      ],
    },
    {
      title: "Industry",
      name: "industry",
      type: "select",
      required: true,
      value: post.industry,
      onChange: (e) =>
        setPost(current => ({ ...current, industry: e.target.value })),
      options: [
        { title: "Business", value: "BUSINESS" },
        { title: "It", value: "IT" },
        { title: "Banking", value: "BANKING" },
        { title: "Education", value: "EDUCATION" },
        { title: "Engineering", value: "ENGINEERING" },
        { title: "Medical", value: "MEDICAL" },
        { title: "Others", value: "OTHERS" },
      ],
    },
    {
      title: "Salary",
      name: "salary",
      type: "number",
      min: 0,
      required: true,
      value: post.salary,
      onChange: (e) =>
        setPost(current => ({ ...current, salary: e.target.value })),
    },
    {
      title: "City",
      name: "city",
      type: "text",
      required: true,
      value: post.city,
      onChange: (e) =>
        setPost(current => ({ ...current, city: e.target.value })),
    },
    {
      title: "Location",
      name: "location",
      type: "select",
      required: true,
      double: true,
      value: post.location,
      onChange: (e) =>
        setPost(current => ({ ...current, location: e.target.value })),
      options: [
        { title: "On Site", value: "On Site" },
        { title: "Remote", value: "Remote" },
      ],
    },
    {
      title: "Vacancies",
      name: "vacancies",
      type: "number",
      required: true,
      value: post.vacancies,
      onChange: (e) =>
        setPost(current => ({ ...current, vacancies: e.target.value })),
    },
    {
      title: "Internship Overview",
      name: "description",
      type: "text",
      required: true,
      fullwidth: true,
      value: post.description,
      onChange: (e) =>
        setPost(current => ({ ...current, description: e.target.value })),
    },
    {
      title: "Supervisor Name",
      name: "supervisor_Name",
      type: "text",
      required: true,
      value: post.supervisor_Name,
      onChange: (e) =>
        setPost(current => ({ ...current, supervisor_Name: e.target.value })),
    },
    {
      title: "Supervisor Position",
      name: "subervisor_position",
      type: "text",
      required: true,
      value: post.subervisor_position,
      onChange: (e) =>
        setPost(current => ({
          ...current,
          subervisor_position: e.target.value,
        })),
    },
    {
      title: "Supervisor Phone Number",
      name: "supervisor_phone_number",
      type: "text",
      required: true,
      value: post.supervisor_phone_number,
      onChange: (e) =>
        setPost(current => ({
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
        setPost(current => ({ ...current, endDate: e.target.value })),
    },
  ];

  const onFormSubmit = (e) => {
    e.preventDefault();

    action === "create"
      ? onDataCreate()
      : action === "update"
        ? onDataUpdate()
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

  const onDataUpdate = async () => {
    setLoading(true);

    await CompanyPostAPI.updatePost(post.id, post)
      .then(res => {
        console.log("Data Updated Successfully");
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

    await CompanyPostAPI.deletePost(post.id)
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
      number: postsList?.map(intern => intern.type).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
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
      number: postsList?.map(intern => intern.paid).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
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
      number: postsList?.map(intern => intern.education).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
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
      number: postsList?.map(intern => intern.industry).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
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
      selector: row => companies.find(company => company.id === row.company_id)?.name,
      sortable: true,
    },
    {
      name: "Position",
      selector: row => row.position,
      sortable: true,
    },
    {
      name: "End Date of Application",
      selector: row => row.endDate,
      sortable: true,
    },
  ];

  // const chartsData = [];
  return (
    <>
      <TemplatePage
        pageTitle={"Internship Opportunities"}
        pageDescrbition={"Companies to post new internship opportunities"}
        loading={loading}
        statisticsData={statisticsData}
        chartsData={chartsData}
        formTitle={"CRUD Posts"}
        formInputs={inputs}
        onFormSubmit={onFormSubmit}
        onFormReset={onFormReset}
        tableTitle={"Internship Opportunities List"}
        tableColumns={tableColumns}
        tableRowDetails={true}
        tableData={postsList}
        onActionSelection={onActionSelection}
        currentAction={action}
        onDataCreate={onDataCreate}
        onDataUpdate={onDataUpdate}
        onDataDelete={onDataDelete}
      />
    </>
  );
};

export default opportunityPosts;
