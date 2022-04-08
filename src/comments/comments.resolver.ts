import { Resolver, Query, Args } from '@nestjs/graphql';
import { CommentsService } from './comments.service';

@Resolver('Comment')
export class CommentsResolver {
  constructor(private commentsService: CommentsService) {}

  @Query('comments')
  getComments(@Args('limit') limit: number) {
    return this.commentsService.findAll(limit);
  }

  @Query('comment')
  getComment(@Args('id') id: string) {
    return this.commentsService.findOneById(id);
  }
}
