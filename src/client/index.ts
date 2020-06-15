import {root} from "../common/root";

function render(){
    const {pathname} = document.location

    document.querySelector("#content")!.innerHTML = root(pathname);
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