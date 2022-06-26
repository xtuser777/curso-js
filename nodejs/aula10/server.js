const express = require("express");
const app = express();
const router = require("./routes");

app.use(express.urlencoded({ extended: true }));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(router);

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
