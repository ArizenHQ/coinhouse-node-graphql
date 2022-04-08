import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Comment } from 'src/types/graphql';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CommentsService {
  constructor(private httpService: HttpService) {}

  findAll(limit = 10): Observable<AxiosResponse<Comment[]>> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/comments')
      .pipe(map((res) => res.data.slice(0, limit)));
  }

  findOneById(id: string): Observable<AxiosResponse<Comment>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .pipe(map((res) => res.data));
  }

  findCommentsByPostId(id: string, limit = 10): Observable<AxiosResponse<any>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/comments?userId=${id}`)
      .pipe(map((res) => res.data.slice(0, limit)));
  }
}
