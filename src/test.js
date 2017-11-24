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
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(res.statusMessage, 'Content-Type: text/html', 'Correct type of document');
    t.end();
  })
})

test('Check response object from 2017-11-23', (t) => {
  shot.inject(router, { method: 'get', url: '/date=2017-11-23' }, (res) => {
    var responseObj = JSON.parse(res.payload);
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.deepEquals(responseObj, testObj, 'response object should match test object');
    t.end();
  })
});

test('Check CSS file is returning', (t) => {
  shot.inject(router, { method: 'get', url: '/public/style.css'}, (res) => {
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.equal(res.payload.includes("body"), true, 'should return true');
    t.end();
});
});

const testObj = {
      "copyright": "Mohammad Nouroozi",
      "date": "2017-11-23",
      "explanation": "Alnitak, Alnilam, and Mintaka, are the bright bluish stars from east to west (lower right to upper left) along the diagonal in this cosmic vista. Otherwise known as the Belt of Orion, these three blue supergiant stars are hotter and much more massive than the Sun. They lie from 800 to 1,500 light-years away, born of Orion's well-studied interstellar clouds. In fact, clouds of gas and dust adrift in this region have some surprisingly familiar shapes, including the dark Horsehead Nebula and Flame Nebula near Alnitak at the lower right. The famous Orion Nebula itself is off the right edge of this colorful starfield. This well-framed, 2-panel telescopic mosaic spans about 4 degrees on the sky.",
      "hdurl": "https://apod.nasa.gov/apod/image/1711/BeltStars_nouroozi2000.jpg",
      "media_type": "image",
      "service_version": "v1",
      "title": "Alnitak, Alnilam, Mintaka",
      "url": "https://apod.nasa.gov/apod/image/1711/BeltStars_nouroozi1024.jpg"
    }

// test('Api route'), (t) => {
//   shot.inject(router, { method: 'get', url:}, (res) => {
//     t.equal(res.statusCode, 200, 'should respond with a status code of 200');
//     t.equal(typeof responseObj, 'string', 'response object should be a string');
//     t.end();
//   })
// };
