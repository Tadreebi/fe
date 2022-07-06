const visualRepresentations = postsList => {

  const statisticsData = [
    {
      title: "Internships Hours",
      number: postsList?.map(intern => intern.type).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Full Time": postsList?.filter(intern => intern.type === "Full Time")?.length,
          "Part Time": postsList?.filter(intern => intern.type === "Part Time")?.length,
        },
      }
    },
    {
      title: "Internships Type",
      number: postsList?.map(intern => intern.paid).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Paid Internship": postsList?.filter(intern => intern.paid === "Paid Internship")?.length,
          "Partially-paid Internship": postsList?.filter(intern => intern.paid === "Partially-paid Internship")?.length,
          "Unpaid Internship": postsList?.filter(intern => intern.paid === "Unpaid Internship")?.length,
          "Virtual Internship": postsList?.filter(intern => intern.paid === "Virtual Internship")?.length,
        },
      }
    },
    {
      title: "Education",
      number: postsList?.map(intern => intern.education).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Bachelors": postsList?.filter(intern => intern.education === "Bachelors")?.length,
          "Masters": postsList?.filter(intern => intern.education === "Masters")?.length,
          "Phd": postsList?.filter(intern => intern.education === "Phd")?.length,
        },
      }
    },
    {
      title: "Indsutry",
      number: postsList?.map(intern => intern.industry).reduce((final, current) => final.includescurrent ? final : [...final, current], []).length,
      chart: {
        type: "bar",
        data: {
          "Business": postsList?.filter(intern => intern.industry === "Business")?.length,
          "It": postsList?.filter(intern => intern.industry === "It")?.length,
          "Banking": postsList?.filter(intern => intern.industry === "Banking")?.length,
          "Education": postsList?.filter(intern => intern.industry === "Education")?.length,
          "Engineering": postsList?.filter(intern => intern.industry === "Engineering")?.length,
          "Medical": postsList?.filter(intern => intern.industry === "Medical")?.length,
          "Others": postsList?.filter(intern => intern.industry === "Others")?.length,
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
        "Part Time": postsList?.filter(intern => intern.type === "Part Time")?.length,
        "Full Time": postsList?.filter(intern => intern.type === "Full Time")?.length,
      },
    },
    {
      title: "Industry",
      type: "doughnut",
      data:
      {
        "Business": postsList?.filter(intern => intern.industry === "Business")?.length,
        "It": postsList?.filter(intern => intern.industry === "It")?.length,
        "Banking": postsList?.filter(intern => intern.industry === "Banking")?.length,
        "Education": postsList?.filter(intern => intern.industry === "Education")?.length,
        "Engineering": postsList?.filter(intern => intern.industry === "Engineering")?.length,
        "Medical": postsList?.filter(intern => intern.industry === "Medical")?.length,
        "Others": postsList?.filter(intern => intern.industry === "Others")?.length,
      },
    },
    {
      title: "Education",
      type: "doughnut",
      data:
      {
        "Bachelors": postsList?.filter(intern => intern.education === "Bachelors")?.length,
        "Masters": postsList?.filter(intern => intern.education === "Masters")?.length,
        "Phd": postsList?.filter(intern => intern.education === "Phd")?.length,
      },
    },
    {
      title: "Internship Type",
      type: "doughnut",
      data:
      {
        "Paid Internship": postsList?.filter(intern => intern.paid === "Paid Internship")?.length,
        "Partially-paid Internship": postsList?.filter(intern => intern.paid === "Partially-paid Internship")?.length,
        "Unpaid Internship": postsList?.filter(intern => intern.paid === "Unpaid Internship")?.length,
        "Virtual Internship": postsList?.filter(intern => intern.paid === "Virtual Internship")?.length,
      },
    },
  ]

  return ({ statisticsData, chartsData });
};

export default visualRepresentations;
