/** 
 * Tests for Gittip client creation
 * Test Framework: Mocha (http://visionmedia.github.io/mocha/)
 * Assertions: Should (https://github.com/visionmedia/should.js/) 
 */
var Gittip = require('..')
  , utils = require('../lib/utils')
  , should = require ('should');

describe('Create gittip client', function () {
  describe('Correct Defaults', function () {
    it('should be created with correct defaults', function () {

		var defaults = {
	    	key: null,
	        headers: {
	            'Accept': 'application/json',
	            'Connection': 'close',
	            'User-Agent': 'node-gittip/'
	        },
	        restBase:              'https://www.gittip.com/',
	        paydaysURL:            'about/paydays.json',
	        statsURL:              'about/stats.json'
		};

        var g = new Gittip();
        g.defaults.should.eql(defaults);
    });

    it('should have correct API endpoints as defaults', function () {
		var g = new Gittip();
		g.defaults.restBase.should.equal('https://www.gittip.com/');
		g.defaults.paydaysURL.should.equal('about/paydays.json');
		g.defaults.statsURL.should.equal('about/stats.json');
    });
  });
});