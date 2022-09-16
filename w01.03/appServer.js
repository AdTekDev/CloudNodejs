const  express = require("express");
const PORT = 8080;
const appServer = express();
const router = express.Router();
const fs = require("fs");

// ------------------- Routing
router.get( "/" , (yeucau, trave) => {
    data = fs.readFileSync("./html/main.html");
    pageContent = data.toString();
    trave.send(pageContent);
});

// -------------------------
appServer.use("/", router);
// ----------- RUN / Lauching !!! 
appServer.listen( PORT );

console.log("Web da mo tai " + PORT);
