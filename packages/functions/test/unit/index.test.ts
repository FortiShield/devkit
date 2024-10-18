import { describe, expect, test } from 'vitest';
import $ from 'tinyspawn';

const evalScript = (code: string, flags: string[] = []) =>
  $('node', ['--eval', code, ...flags]).then(({ stdout }) => stdout);
evalScript.esm = code => evalScript(code, ['--input-type', 'module']);

describe('@khulnasoft/functions', () => {
  test('load as CommonJS', async () => {
    const code =
      "console.log(JSON.stringify(Object.keys(require('@khulnasoft/functions'))))";
    const exportedMethods = await evalScript(code).then(output =>
      JSON.parse(output)
    );

    expect(exportedMethods).toEqual([
      'geolocation',
      'getEnv',
      'ipAddress',
      'waitUntil',
    ]);
  });

  test('load as ESM', async () => {
    const code =
      "import f from '@khulnasoft/functions'; console.log(JSON.stringify(Object.keys(f)))";
    const exportedMethods = await evalScript
      .esm(code)
      .then(output => JSON.parse(output));
    expect(exportedMethods).toEqual([
      'geolocation',
      'getEnv',
      'ipAddress',
      'waitUntil',
    ]);
  });
});

describe('@khulnasoft/functions/oidc', () => {
  test('load as CommonJS', async () => {
    const code =
      "console.log(JSON.stringify(Object.keys(require('@khulnasoft/functions/oidc'))))";
    const exportedMethods = await evalScript(code).then(output =>
      JSON.parse(output)
    );

    expect(exportedMethods).toEqual([
      'awsCredentialsProvider',
      'getVercelOidcToken',
    ]);
  });

  test('load as ESM', async () => {
    const code =
      "import f from '@khulnasoft/functions/oidc'; console.log(JSON.stringify(Object.keys(f)))";
    const exportedMethods = await evalScript
      .esm(code)
      .then(output => JSON.parse(output));

    expect(exportedMethods).toEqual([
      'awsCredentialsProvider',
      'getVercelOidcToken',
    ]);
  });
});
