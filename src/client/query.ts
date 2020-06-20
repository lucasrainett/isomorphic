

export function queryParser(query: string){
    //test=abc&test2=123
    return query.split("&") // ["test=abc", "test2=123" ]
        .map((param) => param.split("=")) // [["test", "abc], ["test2", "123" ]]
        .reduce((acc, item) => {
            return {...acc, [item[0]]: item[1]};
        }, {});
}