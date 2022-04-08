import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { UsersService } from 'src/users/users.service';
import { CommentsService } from 'src/comments/comments.service';

@Module({
  imports: [HttpModule],
  providers: [PostsResolver, PostsService, CommentsService, UsersService],
})
export class PostsModule {}
