const server = require("http").createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method == "GET") {
    res.write(
      "<h1> Welcome to localhost:8080 ! <br/>This server is running... </h1>"
    );
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

const _ = require("lodash");
const loadDataFromSQL = require("./connection.js");
const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

let number_of_data = 3000;
let increment = 100;
let n1 = 0;
let n2 = 0;
let n3 = 0;
let n4 = 0;
let n5 = 0;
let n6 = 0;
let n7 = 0;
let n8 = 0;

let datas = loadDataFromSQL();

// 1. listen for socket connections
io.on("connection", (client) => {
  // Do something after every 100 ms
  setInterval(() => {
    // Increase the initial point to  for rolling data
    increaseNumber();

    // Sent data to the client after processing
    client.emit("myData", {
      channel1: {
        y: datas.channel0?.slice(n1, n1 + number_of_data),
        x: _.range(n1, n1 + number_of_data, 1),
      },
      channel2: {
        y: datas.channel3?.slice(n3, n3 + number_of_data),
        x: _.range(n3, n3 + number_of_data, 1),
      },
      channel3: {
        y: datas.channel4?.slice(n4, n4 + number_of_data),
        x: _.range(n4, n4 + number_of_data, 1),
      },
      channel4: {
        y: datas.channel5?.slice(n5, n5 + number_of_data),
        x: _.range(n5, n5 + number_of_data, 1),
      },
      channel5: {
        y: datas.channel6?.slice(n6, n6 + number_of_data),
        x: _.range(n6, n6 + number_of_data, 1),
      },
      channel6: {
        y: datas.channel7?.slice(n7, n7 + number_of_data),
        x: _.range(n7, n7 + number_of_data, 1),
      },
    });
  }, 100);
});

server.listen(8080);

const increaseNumber = () => {
  if (n1 + number_of_data + 20 < datas.channel0?.length) {
    n1 += increment;
  }
  if (n2 + number_of_data + 20 < datas.channel0?.length) {
    n2 += increment;
  }
  if (n3 + number_of_data + 20 < datas.channel3?.length) {
    n3 += increment;
  }
  if (n4 + number_of_data + 20 < datas.channel4?.length) {
    n4 += increment;
  }
  if (n5 + number_of_data + 20 < datas.channel5?.length) {
    n5 += increment;
  }
  if (n6 + number_of_data + 20 < datas.channel6?.length) {
    n6 += increment;
  }
  if (n7 + number_of_data + 20 < datas.channel7?.length) {
    n7 += increment;
  }
  if (n8 + number_of_data + 20 < datas.channel3?.length) {
    n8 += increment;
  }
};
