const { CONNREFUSED } = require("dns");
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding("utf8");
  conn.on('data', (data) => {
    console.log(data);
  })
  Name: 'JAY';

  conn.on('connect', () => {
    console.log('Successfully connected to game server!');
  })

  conn.on('connect', () => {
    conn.write("Name: JAY");
  })

  return conn;
};

module.exports = connect;