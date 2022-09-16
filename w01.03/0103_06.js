const  httpWEB = require("http");
const hostname = "";
const PORT = 8080;
const fs = require("fs");

const serverListen = httpWEB.createServer(
    ( yeucau, trave ) => {
        console.log("\n---- Request: " + yeucau.url);

        trave.statusCode = 200;
        trave.setHeader("content-type", "text/html");

        pageContent = "<h1>No Content !</h1>";
        // Tach PAGE / Routing !!!
        switch (yeucau.url) {
            case "/" : {
                data = fs.readFileSync("./html/main.html");
                pageContent = data.toString();
                break;
            }
            case "/home" : {
                data = fs.readFileSync("./html/home.html");
                pageContent = data.toString();
                break;
            }
            case "/about" : {
                data = fs.readFileSync("./html/about.html");
                pageContent = data.toString();
                break;
            }
            case "/contact" : {
                data = fs.readFileSync("./html/contact.html");
                pageContent = data.toString();
                break;
            }
            case "/products" : {
                data = fs.readFileSync("./html/products.html");
                pageContent = data.toString();
                break;
            }
            default:
                pageContent += " ... ! ... " + yeucau.url;
                break;
        }
        
        trave.end( pageContent );

    }
);

serverListen.listen(PORT, hostname,
    () => {
        console.log(`"Da ket noi !!" ${hostname}:${PORT}`);
    }
);