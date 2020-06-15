import {menu} from "./menu";
import {home} from "./home";
import {page1} from "./page1";
import {page2} from "./page2";
import {page3} from "./page3";
import {error} from "./error";


const routes: {[key: string]: () => string} = {
    "/": home,
    "/page1": page1,
    "/page2": page2,
    "/page3": page3,
    "/error": error
};

export function root(path: string){
    const pageComponent = routes[path] || routes["/error"];


    return `
        <div>
            ${menu()}
            ${pageComponent()}
        </div>`
}