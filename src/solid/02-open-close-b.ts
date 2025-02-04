// Hay que agregar la dependencia de axios ```yarn add axios```
// import axios from 'axios';
import { HttpClient } from './02-open-close-c';

export class TodoService { 

    constructor(private httpClient: HttpClient) {} // this is the short way to declare and assign a property

    async getTodoItems() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor(private httpClient: HttpClient) {} 

    async getPosts() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor(private httpClient: HttpClient) {}

    async getPhotos() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const { data } = await this.httpClient.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}