import { Parent, ResolveField, Resolver, Query, Args } from '@nestjs/graphql';
import { Post } from 'src/types/graphql';
import { CommentsService } from 'src/comments/comments.service';
import { UsersService } from 'src/users/users.service';
import { PostsService } from './posts.service';

@Resolver('Post')
export class PostsResolver {
  constructor(
    private usersService: UsersService,
    private commentsService: CommentsService,
    private postsService: PostsService,
  ) {}

  @Query('posts')
  getUsers(@Args('limit') limit: number) {
    return this.postsService.findAll(limit);
  }

  @Query('post')
  getUser(@Args('id') id: string) {
    return this.postsService.findOneById(id);
  }

  @ResolveField()
  comments(@Parent() post: Post, @Args('limit') limit: number) {
    return this.commentsService.findCommentsByPostId(post.id, limit);
  }

  @ResolveField()
  author(@Parent() post: Post) {
    return this.usersService.findOneById(post.userId);
  }
}
