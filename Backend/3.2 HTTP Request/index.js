import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send(
    "<h1>About Me</h1><p>this is slsfs sfslfsskl ls fslkdflsk sldkfjlskd  sldf </p>"
  );
});

app.get("/contact", (req, res) => {
  res.send(
    "<h1>Contact Me</h1><li>2342342234</li><li>thisis.this@gmail.com</li>"
  );
});

app.listen(3000, () => {
  console.log(`Server running on port ${3000}`);
});
