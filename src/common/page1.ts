

export function page1(path: string, query: any) {

    const {value} = query;

    const number = value ? Number(value) : 0;

    return `<h1>Page1</h1>

        Value = ${number}
        
        <div><a onclick="go('${path}?value=${number+1}', event)" href="${path}?value=${number+1}"> + </a></div>
        <div><a onclick="go('${path}?value=${number-1}', event)" href="${path}?value=${number-1}"> - </a></div>
    `
}