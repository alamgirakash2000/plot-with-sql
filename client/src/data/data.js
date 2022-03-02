const fs = require("fs");
const csv = require("csv-parser");

let myData = {};
let CHANNEL1 = [];
let CHANNEL2 = [];
let CHANNEL3 = [];
let CHANNEL4 = [];
let CHANNEL5 = [];
let CHANNEL6 = [];
let CHANNEL7 = [];
let CHANNEL8 = [];

// 1. listen for socket connections
setInterval(() => {
  // Re- initialization
  CHANNEL1 = [];
  CHANNEL2 = [];
  CHANNEL3 = [];
  CHANNEL4 = [];
  CHANNEL5 = [];
  CHANNEL6 = [];
  CHANNEL7 = [];
  CHANNEL8 = [];

  // Read CSV
  fs.createReadStream("./src/data/Voltage.csv")
    .pipe(csv())
    .on("data", function (row) {
      loadData(row);
    })
    .on("end", () => {
      myData = {
        channel1: limit(CHANNEL1),
        channel2: limit(CHANNEL2),
        channel3: limit(CHANNEL3),
        channel4: limit(CHANNEL4),
        channel5: limit(CHANNEL5),
        channel6: limit(CHANNEL6),
        channel7: limit(CHANNEL7),
        channel8: limit(CHANNEL8),
      };
    });
}, 1000);

const loadData = async (dat) => {
  if (dat["Channel1"]) {
    CHANNEL1.push({
      value: dat["Channel1"],
    });
  }
  if (dat["Channel2"]) {
    CHANNEL2.push({
      value: dat["Channel2"],
    });
  }
  if (dat["Channel3"]) {
    CHANNEL3.push({
      value: dat["Channel3"],
    });
  }
  if (dat["Channel4"]) {
    CHANNEL4.push({
      value: dat["Channel4"],
    });
  }
  if (dat["Channel5"]) {
    CHANNEL5.push({
      value: dat["Channel5"],
    });
  }
  if (dat["Channel6"]) {
    CHANNEL6.push({
      value: dat["Channel6"],
    });
  }
  if (dat["Channel7"]) {
    CHANNEL7.push({
      value: dat["Channel7"],
    });
  }
  if (dat["Channel8"]) {
    CHANNEL8.push({
      value: dat["Channel8"],
    });
  }
};

const limit = (value) => {
  if (value?.length <= 1000) {
    return value;
  } else {
    return value?.slice(-1000);
  }
};

module.exports = myData;
