
const  httpWEB = require("http");
const hostname = "localhost";
const PORT = 8080;

const serverListen = httpWEB.createServer(
    ( yeucau, trave ) => {
        trave.statusCode = 200;
        trave.setHeader("content-type", "text/html");
        trave.end("Hi, Toi la Ba !");
    }
);

serverListen.listen(PORT, hostname,
    () => {
        console.log("Da ket noi !!");
    }
);