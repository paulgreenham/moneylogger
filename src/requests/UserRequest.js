import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "http://localhost";

export class UserRequest {

    static async userSanity() {
        const result = await axios.get(`${url}/user/sanity`);
        return result.data
    }
}