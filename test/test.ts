import test = require('blue-tape');

import nodeStatic = require('node-static');

test('node-static exists', (t) => {
  t.plan(3);
  t.notEqual(nodeStatic, undefined);
  let Server = nodeStatic.Server;

  t.notEqual(Server, undefined);
  let staticServer = new Server();

  t.notEqual(staticServer, undefined);
});
