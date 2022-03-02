const server = require("http").createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method == "GET") {
    res.write("Hello World!");
    res.end();
  } else if (req.method == "POST") {
    var body = "";
    req.on("data", function (data) {
      body += data;
    });
    req.on("end", function () {
      number_of_data = parseInt(body);
      increment = parseInt(parseInt(body) / 100);
    });
  }
});

const axios = require("axios");
const _ = require("lodash");
let datas = {};

const loadDataFromSQL = async () => {
  await axios
    .get("http://localhost:8686")
    .then((data) => (datas = data.data))
    .catch((err) => console.log(err.message));
};

const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

loadDataFromSQL();

let number_of_data = 2000;

let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
let n7 = 0;
let n8 = 0;

// 1. listen for socket connections
io.on("connection", (client) => {
  setInterval(() => {
    loadDataFromSQL();
    increaseNumber();
    client.emit("myData", {
      channel1: {
        y: datas.channel0?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel2: {
        y: datas.channel3?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel3: {
        y: datas.channel4?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel4: {
        y: datas.channel5?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel5: {
        y: datas.channel6?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel6: {
        y: datas.channel7?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
    });
  }, 100);
});

server.listen(8080);

let increment = 20;
const increaseNumber = () => {
  if (n1 + number_of_data + 20 < datas.channel0?.length) {
    n1 += increment;
  }
  if (n2 + number_of_data + 20 < datas.channel3?.length) {
    n2 += increment;
  }
  if (n3 + number_of_data + 20 < datas.channel4?.length) {
    n3 += increment;
  }
  if (n4 + number_of_data + 20 < datas.channel5?.length) {
    n4 += increment;
  }
  if (n5 + number_of_data + 20 < datas.channel6?.length) {
    n5 += increment;
  }
  if (n6 + number_of_data + 20 < datas.channel7?.length) {
    n6 += increment;
  }
  if (n7 + number_of_data + 20 < datas.channel0?.length) {
    n7 += increment;
  }
  if (n8 + number_of_data + 20 < datas.channel3?.length) {
    n8 += increment;
  }
};

const loadData = async (dat) => {
  if (dat["Channel1"]) {
    CHANNEL1.push(dat["Channel1"]);
  }
  if (dat["Channel2"]) {
    CHANNEL2.push(dat["Channel2"]);
  }
  if (dat["Channel3"]) {
    CHANNEL3.push(dat["Channel3"]);
  }
  if (dat["Channel4"]) {
    CHANNEL4.push(dat["Channel4"]);
  }
  if (dat["Channel5"]) {
    CHANNEL5.push(dat["Channel5"]);
  }
  if (dat["Channel6"]) {
    CHANNEL6.push(dat["Channel6"]);
  }
  if (dat["Channel7"]) {
    CHANNEL7.push(dat["Channel7"]);
  }
  if (dat["Channel8"]) {
    CHANNEL8.push(dat["Channel8"]);
  }
};
