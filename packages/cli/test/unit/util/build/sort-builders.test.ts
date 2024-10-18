import { describe, expect, test } from 'vitest';
import { sortBuilders } from '../../../../src/util/build/sort-builders';

describe('sortBuilders()', () => {
  test.each([
    {
      name: 'should sort @vercel/next from middle to beginning',
      input: ['@vercel/node', '@vercel/next', '@vercel/python'],
      output: ['@vercel/next', '@vercel/python', '@vercel/node'],
    },
    {
      name: 'should sort @vercel/static-build from middle to beginning',
      input: ['@vercel/node', '@vercel/static-build', '@vercel/python'],
      output: ['@vercel/static-build', '@vercel/python', '@vercel/node'],
    },
    {
      name: 'should sort @vercel/remix from end to beginning',
      input: ['@vercel/python', '@vercel/node', '@khulnasoft/remix-builder'],
      output: ['@khulnasoft/remix-builder', '@vercel/python', '@vercel/node'],
    },
    {
      name: 'should sort @khulnasoft/redwood from beginning to beginning',
      input: ['@khulnasoft/redwood', '@vercel/python', '@khulnasoft/ruby'],
      output: ['@khulnasoft/redwood', '@vercel/python', '@khulnasoft/ruby'],
    },
    {
      name: 'should sort @vercel/hydrogen from end to beginning',
      input: ['@vercel/python', '@vercel/hydrogen'],
      output: ['@vercel/hydrogen', '@vercel/python'],
    },
    {
      name: 'should sort @vercel/static-build to beginning with many @vercel/node',
      input: [
        '@vercel/node',
        '@vercel/node',
        '@vercel/node',
        '@vercel/static-build',
        '@vercel/node',
      ],
      output: [
        '@vercel/static-build',
        '@vercel/node',
        '@vercel/node',
        '@vercel/node',
        '@vercel/node',
      ],
    },
  ])('$name', ({ input, output }) => {
    const builders = sortBuilders(input.map(use => ({ use })));
    expect(builders.map(b => b.use)).toEqual(output);
  });
});
