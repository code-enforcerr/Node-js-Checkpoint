const fs = require("fs");

fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File has been created and data written.");

  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("Data from file:", data);
  });
});
