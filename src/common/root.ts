import {menu} from "./menu";
import {home} from "./home";
import {page1} from "./page1";
import {page2} from "./page2";
import {page3} from "./page3";
import {error} from "./error";
import {Component} from "./IComponent";

const routes: {[key: string]: Component} = {
    "/": home,
    "/page1": page1,
    "/page2": page2,
    "/page3": page3,
    "/error": error
};

export const root: Component = (path, query, fetch, state, render)  => {
    const pageComponent = routes[path] || routes["/error"];

    return `
        <div>
            ${menu()}
            ${pageComponent(path, query, fetch, state, render)}
        </div>`
}