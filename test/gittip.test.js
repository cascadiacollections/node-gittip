/** 
 * Tests for HTTP GET requests
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */
var Gittip = require('..'),
    should = require('should');

var g;

beforeEach(function(){
  g = new Gittip;
});

describe('g.get()', function() {
  it('should throw error if callback is not typeof function', function () {
    (function() {
      g.get(null, null, 'string');
    }).should.throwError('ERROR: Invalid callback function.');
  });

  it('should throw error if an invalid url is passed', function () {
    (function() {
      g.get(null, null, function(done) {
      });
    }).should.throwError('ERROR: Invalid URL called.');
  });

  it('should successfully complete a request', function (done) {
    var url = g.defaults.restBase + g.defaults.paydaysURL;
    g.get(url, null, function(data) {
      should.exist(data);
      should.exist(data.results);
      data.results.should.not.be.empty;
      done();
    });
  });
});

describe('g.getPaydays()', function () {
    it('should successfully complete request', function (done) {
      g.getPaydays(function(data) {
        should.exist(data);
        data.results.should.not.be.empty;
        done();
      });
    });
    it('should successfully complete request with params', function (done) {
      g.getPaydays(function(data) {
        should.exist(data);
        data.results.should.not.be.empty;
        sampleResult = data.results[0];
        should.exist(sampleResult.availableBikes);
        should.not.exist(sampleResult.latitude);
        done();
      });
    });
});

describe('g.getStats()', function () {
    it('should successfully complete request', function (done) {
      g.getStats(function(data) {
        should.exist(data);
        data.results.should.not.be.empty;
        done();
      });
    });
});

describe('g.getUser()', function () {
    it('should successfully complete request', function (done) {
      g.getUser({ name: 'kevintcoughlin' }, function(data) {
        should.exist(data);
        data.results.should.not.be.empty;
        done();
      });
    });
});