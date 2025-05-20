import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import server from '../src/server.js';

// Start the server on an ephemeral port before each test
function startServer() {
  return new Promise((resolve) => {
    server.listen(0, () => resolve(server.address().port));
  });
}

// Simple helper to fetch from the server
function fetch(port, path = '/') {
  return new Promise((resolve) => {
    http.get({ host: 'localhost', port, path }, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve({ status: res.statusCode, data }));
    });
  });
}

test('GET / returns hello message', async (t) => {
  const port = await startServer();
  t.after(() => server.close());
  const res = await fetch(port);
  assert.equal(res.status, 200);
  assert.equal(res.data, 'Hello from IdeaPortal');
});
