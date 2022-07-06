const visualRepresentations = applicationsList => {

  const statisticsData = [
    {
      title: "Internship Type",
      number: applicationsList?.map(intern => intern.type).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Full Time": applicationsList.filter(intern => intern.type === "Full Time")?.length,
          "Part Time": applicationsList.filter(intern => intern.type === "Part Time")?.length,
        },
      }
    },
    {
      title: "Preferable Internship Location",
      number: applicationsList?.map(intern => intern.location).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Remote": applicationsList.filter(intern => intern.location === "Remote")?.length,
          "OnSite": applicationsList.filter(intern => intern.location === "OnSite")?.length,
        },
      }
    },
    {
      title: "Expected Salary",
      number: applicationsList?.map(intern => intern.expected_salary).reduce((final, current) => final.includes(current) ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Less than 100": applicationsList.filter(intern => intern.expected_salary < 100)?.length,
          "Greater than 100": applicationsList.filter(intern => intern.expected_salary > 100)?.length,
        },
      }
    },
  ];

  const chartsData = [
    {
      title: "Internship Type",
      type: "doughnut",
      data: {
        "Full Time": applicationsList.filter(intern => intern.type === "Full Time")?.length,
        "Part Time": applicationsList.filter(intern => intern.type === "Part Time")?.length,
      },
    },
    {
      title: "Preferable Internship Location",
      type: "doughnut",
      data: {
        "Remote": applicationsList.filter(intern => intern.location === "Remote")?.length,
        "OnSite": applicationsList.filter(intern => intern.location === "OnSite")?.length,
      },
    },
    {
      title: "Expected Salary",
      type: "polar",
      data: {
        "Less than 100": applicationsList.filter(intern => intern.expected_salary < 100)?.length,
        "Greater than 100": applicationsList.filter(intern => intern.expected_salary > 100)?.length,
      },
    },
  ];

  return ({ statisticsData, chartsData });
};

export default visualRepresentations;
