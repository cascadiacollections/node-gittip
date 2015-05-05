/** 
 * Tests for gratipay's REST API
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */

var gratipay = require('..')
  , should = require('should')
  , request = require('supertest')
  , request = request('https://www.gratipay.com/')
  , g;

beforeEach(function(){
  g = new gratipay();
});

describe('gratipay API - Paydays', function () {
  this.timeout(15000);
    it('responds with JSON', function (done) {
      request
        .get(g.defaults.paydaysURL)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.header['content-type'].should.eql('application/json');
          res.body.should.exit;
          done();
        });
    });
});

describe('gratipay API - Stats', function () {
  this.timeout(15000);
    it('responds with JSON', function (done) {
      request
        .get(g.defaults.statsURL)
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.header['content-type'].should.eql('application/json');
          res.body.should.exit;
          done();
        });
    });
});

describe('gratipay API - User Public Data', function () {
  this.timeout(15000);
    it('responds with JSON', function (done) {
      request
        .get('/kevintcoughlin/public.json')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          should.not.exist(err);
          res.header['content-type'].should.eql('application/json');
          res.body.should.exit;
          done();
        });
    });
});