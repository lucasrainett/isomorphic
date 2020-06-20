import {root} from "../common/root";
import {queryParser} from "./query";

async function fetch(url: string){
    const result = await window.fetch(url);
    return await result.json();
}

function render(){
    const {pathname, search} = document.location
    const query = queryParser(search.slice(1));
    document.querySelector("#content")!.innerHTML = root(pathname, query, fetch, (window as any).state, render);
}

function go(url: string, event?: Event){
    if(event){
        event.preventDefault();
    }
    history.pushState({}, url, url);
    render();
}

render();

export {
    go, render
}