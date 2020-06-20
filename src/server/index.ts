import http from "http";
import {readFileSync} from "fs";
import {root} from "../common/root";
import url from "url";
import https from "https";

http.createServer((request, response) => {

    const {pathname, query} = url.parse(request.url!, true);

    const state = {};

    const promises: Promise<any>[] = [];
    const fetchWrapper = (url: string) => {
        const fetchPromise = fetch(url);
        promises.push(fetchPromise);
        return fetchPromise;
    }



    root(pathname!, query, fetchWrapper, state, () => {});

    Promise.all(promises).then(() => {

        const result = root(pathname!, query, fetchWrapper, state, () => {});

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
          <div id="content">${result}</div>
          <script>var state = ${JSON.stringify(state, null, 4)}</script>
          <script>${readFileSync("dist/main.js").toString()}</script>
        </body>
        </html>
        `);
        response.end();
    });

}).listen(8545);


function fetch(url: string){
    return new Promise((resolve, reject) => {
        https.request(url, {}, (response) => {
            const chunks: string[] = [];
            response.on("data", (chunk) => {
                chunks.push(chunk.toString());
            });
            response.on("end", () => {
                resolve(JSON.parse(chunks.join("")));
            });
            response.on("error", reject);
        }).end();
    });
}