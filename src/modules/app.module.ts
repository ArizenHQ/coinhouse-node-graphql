import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import resolvers from 'src/resolvers';
import services from 'src/services';
// import { UsersResolver } from 'src/resolvers/users.resolver';
import { UsersService } from 'src/services/users.service';
// import { PostsResolver } from 'src/resolvers/posts.resolver';
import { PostsService } from 'src/services/posts.service';
import { CommentsService } from 'src/services/comments.service';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import config from 'src/config';

@Module({
  imports: [
    HttpModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: config.outputPath,
      },
      plugins: [ApolloServerPluginLandingPageLocalDefault],
    }),
  ],
  providers: [...services, ...resolvers],
})
export class AppModule {}
