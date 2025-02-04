import axios from "axios";

export class HttpClient {

    async get(url: string) {
        const { data, status } = await axios.get(url);
        console.log({ data, status });
        return {data, status};
    }
}