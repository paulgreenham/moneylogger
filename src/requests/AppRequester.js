import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "http://localhost";

export class AppRequester {

    static async appSanity() {
        const result = await axios.get(`${url}/app/sanity`);
        return result.data
    }
}