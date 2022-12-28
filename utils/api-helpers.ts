export async function fetchPostJSON(url: string, data?:{}){
    try {
        const response = await fetch(url, {
            method: "POST",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers:{
                "Content-type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data || {})
        })

        return await response.json()
    } catch (error) {
        console.log('eeee', error)
        if(error instanceof Error){
            console.log('eee', error)
            throw new Error(error.message)
        }
        throw error;
    }
}