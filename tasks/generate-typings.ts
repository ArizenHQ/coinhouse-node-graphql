import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import config from '../src/config';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./src/**/*.graphql'],
  path: config.outputPath,
  emitTypenameField: true,
  watch: true,
});
