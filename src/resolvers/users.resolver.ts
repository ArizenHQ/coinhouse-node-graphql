import { Parent, ResolveField, Resolver, Query, Args } from '@nestjs/graphql';
import { UsersService } from 'src/services/users.service';
import { PostsService } from 'src/services/posts.service';
import { User } from 'src/types/graphql';

@Resolver('User')
export class UsersResolver {
  constructor(
    private usersService: UsersService,
    private postsService: PostsService,
  ) {}

  @Query('users')
  getUsers(@Args('limit') limit: number) {
    return this.usersService.findAll(limit);
  }

  @Query('user')
  getUser(@Args('id') id: string) {
    return this.usersService.findOneById(id);
  }

  @ResolveField()
  posts(@Parent() user: User, @Args('limit') limit: number) {
    return this.postsService.findPostsByUserId(user.id, limit);
  }
}
