const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemp = require("./module/replaceTemp");
const overviewTemp = fs.readFileSync(
  `${__dirname}/templates/overview.html`,
  "utf-8"
);
const productTemp = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const cardTemp = fs.readFileSync(
  `${__dirname}/templates/cardTemplate.html`,
  "utf-8"
);

const dataRead = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(dataRead);

const server = http.createServer((req, res) => {
  const { query, pathname } = url.parse(req.url, true);
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, { "Content-type": "text/html" });
    const mapCard = dataObj.map((el) => replaceTemp(cardTemp, el)).join("");
    const output = overviewTemp.replace("{%CardPart%}", mapCard);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, { "Content-type": "text/html" });
    const product = dataObj[query.id];
    const output = replaceTemp(productTemp, product);
    res.end(output);
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server running @ http://127.0.0.1:8000/ ");
});
