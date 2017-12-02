const { expect } = require('chai');
const request = require('supertest');
const app = require('../app.js');


describe('Get request to /', () => {
  it('should respond with 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('Get request to /latestTen', () => {
  it('should respond with 200', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
  it('should respond with 10 results', function(done) {
    request(app)
      .get('/latestTen')
      .end((err, response) => {
        if (err) { console.log(err) };
        expect(response.body.length).to.equal(10);
        done();
      })
  });
  it('should have updatedAt dates in decending order', function(done) {
    request(app)
      .get('/latestTen')
      .end((err, response) => {
        if (err) { console.log(err) };
        expect(new Date(response.body[0].updatedAt)).to.be.above(new Date(response.body[1].updatedAt));
        expect(response.body.length).to.equal(10);
        done();
      })
  });
});

describe('Get request to /search:movie', () => {
  it('should respond with 200', function(done) {
    var query = 'The Assassination of Jesse James by the Coward Robert Ford';
    request(app)
      .get(`/search/${query}`)
      .end((err, response) => {
        if (err) { console.log(err) };
        var firstResult =  JSON.parse(response.res.text).Search[0];
        expect(firstResult.Title).to.equal('The Assassination of Jesse James by the Coward Robert Ford');
        expect(firstResult.imdbID).to.equal('tt0443680');
        expect(firstResult.Year).to.equal('2007');
        done();
      })
  });
});
