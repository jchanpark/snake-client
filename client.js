const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  })
  Name: 'JAY';

  conn.on('connect', () => {
    console.log('Successfully connected to the game server!');
  })

  conn.on('connect', () => {
    conn.write("Name: JAY");   
  })

  conn.on('connect', () => {
    conn.write("Say: Hi");   
  })

  return conn;
};

module.exports = connect;