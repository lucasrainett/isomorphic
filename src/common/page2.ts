import {Component} from "./IComponent";

export const page2: Component = (path, query, fetch, state, render)  => {

    const {person} = query;

    const personIndex = person ? Number(person)-1 : null;

    if(state.people){

        let pageData = "";
        if(personIndex !== null){
            pageData = "Loading";
            if(state.peopleData && state.peopleData[personIndex]){
                pageData = JSON.stringify(state.peopleData[personIndex]);
            }else{
                fetch(`https://swapi.dev/api/people/${person}/`).then((data) => {
                    state.peopleData = state.peopleData || {};
                    state.peopleData[personIndex] = data;
                    render();
                });
            }
        }

        return `<h1>Page2</h1>
            <ul>
            ${state.people.map((item: string, index: number) => (`<li>
                <a onclick="go('/page2?person=${index+1}', event)" href="/page2?person=${index+1}">${item}</a>
            </li>`)).join("")}
            </ul>
            ${pageData}
        `;

    }else{
        if(personIndex !== null) {
            fetch(`https://swapi.dev/api/people/${person}/`).then((data) => {
                state.peopleData = state.peopleData || {};
                state.peopleData[personIndex] = data;
            });
        }
        fetch("https://swapi.dev/api/people/").then((data) => {
            state.people = data.results.map((item: any) => item.name);
            render();
        });
        return `<h1>Page2</h1> Loading`
    }
}