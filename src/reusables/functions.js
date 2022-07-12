const dateRangeFormatter = (date, position, secDate) => (
  position === "start" ? (
    new Date(date).getFullYear() === new Date(secDate).getFullYear() ? (
      new Date(date).getMonth() === new Date(secDate).getMonth() ? (
        `${new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()}`
      ) : (
        `${new Date(date).getDate() < 10 ? `0${new Date(date).getDate()}` : new Date(date).getDate()}/${new Date(date).getMonth() + 1 < 10 ? `0${new Date(date).getMonth() + 1}` : new Date(date).getMonth() + 1}`
      )
    ) : (
      new Date(date).toLocaleDateString('en-GB')
    )
  ) : (
    new Date(date).toLocaleDateString('en-GB')
  )
);

const rgbColors = color => {
  switch (color) {
    case "primary": return "50, 31, 219";
    case "info": return "51, 153, 255";
    case "success": return "46, 184, 92";
    case "danger": return "229, 83, 83";
    case "warning": return "249, 177, 21";
    case "dark": return "79, 93, 115";
    case "secondary": return "157, 165, 177";
    default: return "51, 153, 255";
  }
};

export {
  dateRangeFormatter,
  rgbColors
};
