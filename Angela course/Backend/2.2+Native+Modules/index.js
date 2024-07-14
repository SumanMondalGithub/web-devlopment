const fs = require("fs");

fs.writeFile(
  "message.txt",
  "We are the people from earth and now we are somehow technologically advanced...we dont know what will happen in future but looking at the weather change and extreme heat, the future is not looking promising.",
  (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  }
);

fs.readFile("message.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
