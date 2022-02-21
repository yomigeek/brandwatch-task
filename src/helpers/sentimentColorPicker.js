export const sentimentColorPicker = (data) => {
  if (data > 60 || data === 'positive') {
    return "green";
  } else if (data < 40 || data === 'negative') {
    return "red";
  } else {
    return "#67778f";
  }
};
