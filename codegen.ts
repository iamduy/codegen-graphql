import type { CodegenConfig } from '@graphql-codegen/cli';
import yml from 'yaml';
import { writeFileSync } from 'fs';
const config: CodegenConfig = {
  schema: 'https://kodomo-api-dev.its-globaltek.com/graphql',
  documents: ['./src/graphql/**/*.graphql'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    'src/graphql/generated/graphql.codegen.ts': {
      plugins: ['typescript'],
    },
  },
};

writeFileSync('codegen.yml', yml.stringify(config));

export default config;
