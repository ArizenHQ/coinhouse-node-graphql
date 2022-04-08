import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { User } from 'src/types/graphql';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  findAll(limit = 10): Observable<AxiosResponse<User[]>> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((res) => res.data.slice(0, limit)));
  }

  findOneById(id: string): Observable<AxiosResponse<User>> {
    return this.httpService
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(map((res) => res.data));
  }
}
