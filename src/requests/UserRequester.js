import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "";

export class UserRequester {

    static async userSanity() {
        const result = axios.get(`${url}/user/sanity`);
        return result.data
    }
}