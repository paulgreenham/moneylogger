import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "http://localhost";

export class GeneralRequester {

    static async generalSanity() {
        const result = await axios.get(`${url}/alive`);
        return result.data
    }
}