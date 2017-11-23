const test = require('tape');
const shot = require('shot');
const router = require('./router');


test('Unknown route', (t) => {
  shot.inject(router, { method: 'get', url: '/chocolate' }, (res) => {
    t.equal(res.statusCode, 404, 'should respond with a status code of 404');
    t.equal(res.payload, 'unknown uri', 'response should contain \'unknown uri\'');
    t.end();
  })
})

test('Home route', (t) => {
  shot.inject(router, { method: 'get', url: '/' }, (res) => {
    console.log(res.statusMessage);
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(res.statusMessage, 'Content-Type: text/html', 'Correct type of document');
    t.end();
  })
})

test('Date', (t) => {
  shot.inject(router, { method: 'get', url: '/date' }, (res) => {
    var responseObj = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(typeof responseObj, 'object', 'response should be an object');
    t.end();
  })
});

test('Static files', (t) => {
  shot.inject(router, { method: 'get', url: '/public'} ), (res) => {
    t.equals(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal();
    t.end();
  }
});

test('Api route'), (t) => {
  shot.inject(router, { method: 'get', url:}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(typeof responseObj, 'string', 'response object should be a string');
    t.end();
  })
};
