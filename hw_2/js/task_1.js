"use strict";

// // stage_1
const logItems = ["1 - Mango", "2 - Poly", "3 - Ajax"];
for (let i = 0; i < logItems.length; i += 1) {
  console.log(i);
  console.log(logItems[i]);
}

const logItems = ["1 - Mango", "2 - Poly", "3 - Ajax"];
for (const logItem of logItems) {
  console.log(logItems);
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const logItems = [""];
for (const logItem of logItems) {
  console.log(logItems);
}
logItems[5] = "1 - Mango";
logItems[10] = "2 - Poly";
logItems[15] = "3 - Ajax";
logItems[20] = "4 - Lux";
logItems[25] = "5 - Jay";
logItems[30] = "6 - Kong";
logItems[35] = "1 - Mango";
logItems[40] = "2 - Poly";
logItems[45] = "3 - Ajax";
logItems[50] = "4 - Lux";
