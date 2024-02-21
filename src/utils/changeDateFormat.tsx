export const changeDateFormat = (
  dateString: string | null | undefined
): string => {
  if (dateString === undefined || dateString === null) {
    throw new Error("The date string cannot be null or undefined.");
  }

  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Check if the date object is valid
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string provided.");
  }

  // Use Intl.DateTimeFormat to format the date
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
};
