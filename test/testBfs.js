const { bfs } = require('../src/graph');
const assert = require('assert');

const dummy = [
  ['mm', 'cc'],
  ['mm', 'kk'],
  ['mm', 'hh'],
  ['mm', 'll'],
  ['aa', 'aa'],
  ['aa', 'll'],
  ['aa', 'ee'],
  ['dd', 'aa'],
  ['dd', 'dd'],
  ['dd', 'ff'],
  ['dd', 'gg'],
  ['dd', 'kk'],
  ['dd', 'hh'],
  ['dd', 'll'],
  ['ii', 'ff'],
  ['ii', 'bb'],
  ['ii', 'kk'],
  ['ff', 'mm'],
  ['ff', 'ii'],
  ['ff', 'ff'],
  ['ff', 'cc'],
  ['ff', 'kk'],
  ['ff', 'll'],
  ['bb', 'aa'],
  ['bb', 'bb'],
  ['gg', 'cc'],
  ['gg', 'hh'],
  ['gg', 'ee'],
  ['cc', 'ff'],
  ['cc', 'bb'],
  ['cc', 'gg'],
  ['cc', 'cc'],
  ['cc', 'll'],
  ['cc', 'ee'],
  ['kk', 'mm'],
  ['kk', 'aa'],
  ['kk', 'dd'],
  ['kk', 'bb'],
  ['kk', 'ee'],
  ['hh', 'dd'],
  ['hh', 'gg'],
  ['hh', 'hh'],
  ['hh', 'ee'],
  ['jj', 'mm'],
  ['jj', 'dd'],
  ['jj', 'gg'],
  ['jj', 'kk'],
  ['jj', 'hh'],
  ['jj', 'jj'],
  ['jj', 'll'],
  ['ll', 'ff'],
  ['ll', 'bb'],
  ['ee', 'aa'],
  ['ee', 'ii'],
  ['ee', 'gg'],
  ['ee', 'cc'],
  ['ee', 'kk'],
  ['ee', 'hh'],
  ['ee', 'ee'],
];

describe('bfs', function () {
  it('should give true if source have immediate target', function () {
    assert.ok(bfs(dummy, 'mm', 'kk'));
  });

  it("should give true if has it's own ref", function () {
    assert.ok(bfs(dummy, 'jj', 'jj'));
  });

  it('should not validate if there is no path', function () {
    assert.ok(!bfs(dummy, 'aa', 'jj'));
  });

  it('should validate if there is non immediate connection', function () {
    assert.ok(bfs(dummy, 'hh', 'ii'));
  });

  it('should not validate if there is no path with source itself', function () {
    const paris = [
      [1, 2],
      [1, 3],
      [1, 4],
    ];
    assert.ok(!bfs(paris, 1, 1));
  });
});
