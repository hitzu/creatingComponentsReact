import axios from 'axios'

const baseURl = process.env.REACT_APP_BASE_URL

export async function getProducts() {
    console.log(process.env.REACT_APP_BASE_URL)
    try {
        console.log(`${baseURl}/user/profiles/1`)
        const response = await axios({
            url : `${baseURl}/user/profiles/1`,
            method : 'GET'
        })
        console.log(response)
        return response
    } catch (e) {
        console.log(e)
    }
}