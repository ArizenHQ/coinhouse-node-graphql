import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Post } from 'src/types/graphql';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class PostsService {
  constructor(private httpService: HttpService) {}

  findAll(limit = 10): Observable<AxiosResponse<Post[]>> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((res) => res.data.slice(0, limit)));
  }

  findOneById(id: string): Observable<AxiosResponse<Post>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .pipe(map((res) => res.data));
  }

  findPostsByUserId(id: string, limit = 10): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .pipe(map((res) => res.data.slice(0, limit)));
  }
}
