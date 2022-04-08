import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { HttpModule } from '@nestjs/axios';
import { PostsService } from 'src/posts/posts.service';

@Module({
  imports: [HttpModule],
  providers: [UsersResolver, UsersService, PostsService],
})
export class UsersModule {}
