import { Parent, ResolveField, Resolver, Query, Args } from '@nestjs/graphql';
import { PostsService, CommentsService } from 'src/services';
import { Post } from 'src/types/graphql';

@Resolver('Post')
export class PostsResolver {
  constructor(
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
}
