import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

const database = [];

app.post("/todo", (req, res) => {
  const newTodo = {
    id: Date.now(),
    text: req.body.text,
  };

  database.push(newTodo);

  res.json(newTodo);
});

app.get("/todo", (req, res) => {
  res.json(database);
});

app.get("/todo/:id", (req, res) => {
  const todo = database.find((t) => {
    return t.id === +req.params.id;
  });
  res.json({ data: todo });
});

app.listen(8000, () => {
  console.log(`Listening on port 8000`);
});
