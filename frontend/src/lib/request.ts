export const request = async (path: string, method: string, body: object = {} , headers: object = {}) => {
    if(method==='GET'){
        return await fetch(path, {
            method,
            headers: {'Content-Type': 'application/json', ...headers},
            credentials: 'include',
        })    
    }
    return await fetch(path, {
        method,
        headers: {'Content-Type': 'application/json', ...headers},
        credentials: 'include',
        body: JSON.stringify(body)
    })
}