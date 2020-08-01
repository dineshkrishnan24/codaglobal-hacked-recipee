export const toTitleCase = (str) => {
  return str
    .split(" ")
    .map(
      ([firstChar, ...rest]) =>
        firstChar.toUpperCase() + rest.join("").toLowerCase()
    )
    .join(" ");
};
