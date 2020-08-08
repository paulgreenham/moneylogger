import axios from 'axios'

const url = process.env.NODE_ENV === "production" ? process.env.PUBLIC_URL : "http://localhost";

export class ExpenseRequest {

    static async appSanity() {
        const result = await axios.get(`${url}/expense/sanity`);
        return result.data
    }
}