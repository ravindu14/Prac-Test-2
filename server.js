const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extends: false }));

app.listen(port, () => {
  console.log(`App connected to http://localhost:${port}`);
});

const addNumbers = (number1, number2) => {
  return parseInt(number1) + parseInt(number2);
};

app.get("/addTwoNumbers", (req, res) => {
  let { number1, number2 } = req.query;

  let result = addNumbers(number1, number2);
  res.json({ status: 200, data: result, message: "success" });
});
