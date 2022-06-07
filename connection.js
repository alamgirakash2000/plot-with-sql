const sqlite3 = require("sqlite3").verbose();

// DB config
const db = new sqlite3.Database(
  "./MQTTNew.db",
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) return console.error(err.message);

    console.log("Connection success");
  }
);

const loadDataFromSQL = (number) => {
  channel = [0, 3, 4, 5, 6, 7];
  let data = {
    channel0: [],
    channel3: [],
  };

  for (let i = 0; i < channel.length; i++) {
    let count = 0;

    // Fetch rows
    db.all(
      `SELECT * FROM (SELECT * FROM CH${channel[i]} ORDER BY ID DESC LIMIT ${number}) ORDER BY ID ASC`,
      [],
      async (err, rows) => {
        if (err) return console.error(err.message);

        // Do something with rows
        let rowsValue = await rows.map(
          (value) => value[`Channel${channel[i]}`]
        );

        if (channel[i] === 0) data.channel0 = rowsValue;
        else if (channel[i] === 3) data.channel3 = rowsValue;
        else if (channel[i] === 4) data.channel4 = rowsValue;
        else if (channel[i] === 5) data.channel5 = rowsValue;
        else if (channel[i] === 6) data.channel6 = rowsValue;
        else if (channel[i] === 7) data.channel7 = rowsValue;
      }
    );

    // Fetch Number of data
    // db.all(`SELECT COUNT(*) FROM CH${channel[i]}`, [], async (err, res) => {
    //   if (err) return console.error(err.message);
    //   count = res[0]["COUNT(*)"];
    // });
  }

  return data;
};

module.exports = loadDataFromSQL;
