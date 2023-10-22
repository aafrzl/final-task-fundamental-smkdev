export const formatDate = (date) => {
  const FORMAT_DATE = "MMMM dd, yyyy";
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = dateObject.toLocaleDateString("en-US", options);

  return formattedDate;
};
