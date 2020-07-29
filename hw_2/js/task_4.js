const formatString = (string) => {
  if (string.length > 40) {
    string = string.slice(0, 40) + "...";
  }
  return string;
};
console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// оригінальна строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// форматована строка

console.log(formatString("Curabitur ligula sapien."));
// оригінальна строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// форматована строка