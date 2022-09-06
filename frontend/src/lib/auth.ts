export async function tokenIsValid(token): Promise<boolean> {
    if(token){
        try{
            let res = await fetch('http://localhost:3030/login/validate', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'authorization': token
                }
            })
            res = await res.json()
            console.log(res)
        } catch (e) {
            return false
        }
    }
    return false
}