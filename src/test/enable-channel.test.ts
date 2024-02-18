import { expect, jest, test } from '@jest/globals';
import { describe, it, beforeEach, before, after, afterEach } from 'mocha';

import { unstable_dev } from 'wrangler';
import type { UnstableDevWorker } from 'wrangler';

describe('Worker', () => {
  let worker: UnstableDevWorker;

  // run worker before tests
  before(async () => {
    worker = await unstable_dev('src/index.ts', {
      experimental: { disableExperimentalWarning: true },
    });
  });

  // stop worker after tests
  after(async () => {
    await worker.stop();
  });

  
  it('should return Hello World', async () => {
    const resp = await worker.fetch();
    const text = await resp.text();
    expect(text).toMatchInlineSnapshot(`"Hello World!"`);
  });
});
