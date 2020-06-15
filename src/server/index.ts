
import http from "http";
import {readFileSync} from "fs";
import {root} from "../common/root";
import url from "url";

http.createServer((request, response) => {

    const {pathname} = url.parse(request.url!);

    response.write(`
    <!doctype html>
    <html lang="en">
    <head>
    
    <meta charset="UTF-8">
    <link rel="shortcut icon" type="image/x-icon" href="data:image/x-icon;,">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    </head>
    <body>
      <div id="content">${root(pathname!)}</div>
      <script>${readFileSync("dist/main.js").toString()}</script>
    </body>
    </html>
    `);
    response.end();

}).listen(8545);
