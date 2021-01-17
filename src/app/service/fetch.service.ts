import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from "../shared/post";

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private readonly BASE_URL = `https://jsonplaceholder.typicode.com/posts`

  constructor(private httpClient: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.BASE_URL);
  }

  getPost(id: number): Observable<Post> {
    return this.httpClient.get<Post>(`${this.BASE_URL}/${id}`);
  }
}
