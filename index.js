const http = require("http");

const hostName = "0.0.0.0";

const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("15 Docker Project for absolute beginners\n");
});
server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});

/**
 * to deploy to docker user the command [ docker build -t node-app .]
 * to run the docker file  use command [docker run -p 3000:3000 node-app]
 */
