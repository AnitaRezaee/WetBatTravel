import http from "http";
import app from "./app";

const server = http.createServer(app);
const port = 3001;
server.listen(port, () => console.log(`server is listening on port ${port}`));
