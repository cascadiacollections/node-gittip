/** 
 * Tests for gratipay client creation
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */
var gratipay = require('..')
  , utils = require('../lib/utils')
  , should = require ('should');

describe('Create gratipay client', function () {
  describe('Correct Defaults', function () {
    it('should be created with correct defaults', function () {

		var defaults = {
	    	key: null,
	        headers: {
	            'Accept': 'application/json',
	            'Connection': 'close',
	            'User-Agent': 'node-gratipay/'
	        },
	        restBase:              'https://www.gratipay.com/',
	        paydaysURL:            'about/paydays.json',
	        statsURL:              'about/stats.json'
		};

        var g = new gratipay();
        g.defaults.should.eql(defaults);
    });

    it('should have correct API endpoints as defaults', function () {
		var g = new gratipay();
		g.defaults.restBase.should.equal('https://www.gratipay.com/');
		g.defaults.paydaysURL.should.equal('about/paydays.json');
		g.defaults.statsURL.should.equal('about/stats.json');
    });
  });
});