const connection = require("./db");
const express = require("express");
const app = express();

//database connection

const barang = {
  Buku: 10000,
  Pensil: 2000,
  Penghapus: 1500,
  Penggaris: 3000,
  Spidol: 5000,
};

const port = process.env.PORT || 4000;
app.listen(port, console.log(`Listening on port ${port}...`));
