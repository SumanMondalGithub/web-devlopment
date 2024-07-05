import express from "express";
import ejs from "ejs";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("welcome");
});

app.get("/render", (req, res) => {
  const advice = [
    "Relax and recharge on Sunday!",
    "Start the week with a positive mindset on Monday.",
    "Tackle your tasks with enthusiasm on Tuesday.",
    "Midweek blues? Take a break and recharge on Wednesday.",
    "Stay focused and productive on Thursday.",
    "Plan something fun for Friday—it's almost the weekend!",
    "Enjoy your Saturday to the fullest!",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date();
  const dayOfWeek = day.getDay(); // Returns a number (0 to 6)
  const today = weekdays[dayOfWeek];
  const adviceForToday = advice[dayOfWeek];
  console.log(adviceForToday);
  console.log(today);

  res.render("index.ejs", {
    dayType: today,
    advice: adviceForToday,
  });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
