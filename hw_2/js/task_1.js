"use strict";
// stage_1
const logItems = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]} `);
  }
};
logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);


// //stage_2
// const logItems = ["1 - Mango", "2 - Poly", "3 - Ajax"];
// for (const logItem of logItems) {
//   console.log(logItems);
// }


// // stage_3
// const logItems = [""];
// for (const logItem of logItems) {
//   console.log(logItems);
// }
// logItems[5] = "1 - Mango";
// logItems[10] = "2 - Poly";
// logItems[15] = "3 - Ajax";
// logItems[20] = "4 - Lux";
// logItems[25] = "5 - Jay";
// logItems[30] = "6 - Kong";
// logItems[35] = "1 - Mango";
// logItems[40] = "2 - Poly";
// logItems[45] = "3 - Ajax";
// logItems[50] = "4 - Lux";