import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export class GeneralRequester {

    static async generalSanity() {
        const result = axios.get(`${url}/alive`);
        return result.data
    }
}