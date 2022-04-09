import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';

import config from 'src/config';

// TODO: Use graphql-tools to generate the schema and use
// validation options to ensure each field has a resolver
// https://www.graphql-tools.com/docs/generate-schema
// https://www.graphql-tools.com/docs/schema-loading
// const schema = await loadSchema('./**/*.graphql', {
//   loaders: [new GraphQLFileLoader()]
// });

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
    PostsModule,
    UsersModule,
    CommentsModule,
  ],
})
export class AppModule {}
