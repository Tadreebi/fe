

const statisticsDemoData = [
  {
    color: "primary",
    title: "Submitted Reports",
    number: postsList.length,
    chart: {
      type: "bar",
      // data: {
      //   "Pending Posts": postsList.filter(
      //     (rep) => !rep.remarks?.length && rep.accepted !== true
      //   )?.length,
      //   "Accepted Posts": postsList.filter((rep) => rep.accepted === true)
      //     ?.length,
      //   "Rejected Reports": postsList.filter(
      //     (rep) => rep.remarks?.length && rep.accepted === false
      //   )?.length,
      // },
      fill: true,
    },
  },
  {
    color: "primary",
    number: "26",
    title: "Users",
    chart: {
      type: "line",
      data: {
        "Label 1": 70,
        "Label 2": 60,
        "Label 3": 40,
        "Label 4": 50,
      },
      fill: true,
    },
  },
  {
    number: "26",
    title: "Users",
    chart: {
      type: "line",
      data: {
        "Label 1": 70,
        "Label 2": 60,
        "Label 3": 40,
        "Label 4": 50,
      },
    },
  },
  {
    number: "26",
    title: "Users",
    chart: {
      type: "bar",
      data: {
        "Label 1": 7,
        "Label 2": 6,
        "Label 3": 4,
        "Label 4": 5,
      },
    },
  },
];

export default statisticsDemoData;
