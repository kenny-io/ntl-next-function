import type { Context } from "@netlify/functions"
import axios from "axios";

export default async (req: Request, context: Context) => {
    const API_ENDPOINT = 'https://cat-fact.herokuapp.com/facts';
    try {
        const response = await axios.get(API_ENDPOINT);
        const data = await response.data;
        console.log(data);
        return new Response(JSON.stringify(data))
    }
    catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'An error occurred' }))
    }

}
