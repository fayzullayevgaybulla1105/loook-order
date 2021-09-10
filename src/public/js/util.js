async function request(query, variables) {
    let response = await fetch('/graphql', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query,
            //queryga parametrs kiritilishi kerak bo`lsa variables beriladi
            variables
        })

    })

    response = await response.json()
    return response.data
}




function createElement(...elements) {
    let response = []
    for (let el of elements) {
        response.push(document.createElement(el))
    }
    return response
}


function getElement(...elements) {
    let response = []
    for (let el of elements) {
        response.push(document.querySelector(el))
    }
    return response
}