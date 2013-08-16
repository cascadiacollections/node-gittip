"use strict";

/*!
 *  Gittip API Node.js Library
 *  Author: Kevin Coughlin @kevintcoughlin
 *  MIT Licensed
 */
var https = require('https')
  , request = require('request')
  , utils = require('./utils');

/**
 * Class for handling communications with Gittip's API.
 *
 * @param {Object} options The Client's options object.
 */
function Gittip (options) {
    if (!(this instanceof Gittip)) {
        return new Gittip(options);
    }
    // Default Client Options
    this.defaults = {
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
    this.options = utils.merge(this.defaults, options);
}

/** 
 * Issues an HTTPS Get request.
 *
 * @param {String}      url         String of the URL to issue the request to.
 * @param {Object}      params      Object containing query string parameters to issue in the Get request.
 * @param {Function}    callback    Callback function that will be called when the processing is done.
 */
Gittip.prototype.get = function (url, params, callback) {
    if (typeof params === 'function') {
        callback = params;
        params = null;
    }

    if (typeof callback !== 'function') {
        throw new Error('ERROR: Invalid callback function.');
    }

    if (url == null) {
        throw new Error('ERROR: Invalid URL called.');
    }

    if (url.charAt(0) == '/') {
        url = this.options.restBase + url;
    }

    if (params !== null) {
        url = url + "?" + querystring.stringify(params);
    }

    var options = {
    	url: url,
    	json: true,
    }

	request(options, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    callback(body);
	  }
	  if (error) {
	  	throw new Error(error);
	  }
	})

    return this;
}

/**
 * Function for requesting and returning Gittip's pay days data in JSON form.
 *
 * @param {Function}    callback    Callback function that will be called when the processing is done.
 */
Gittip.prototype.getPaydays = function (callback) {
    var url = this.options.restBase + this.options.paydaysURL;
    this.get(url, null, function(data) {
    	callback(data);
    });
    return this;
}

/**
 * Function for requesting and returning Gittip's statistical data in JSON form.
 *
 * @param {Function}    callback    Callback function that will be called when the processing is done.
 */
Gittip.prototype.getStats = function (callback) {
    var url = this.options.restBase + this.options.statsURL;
    this.get(url, null, function(data) {
    	callback(data);
    });
    return this;
}

/**
 * Function for requesting and returning a Gittip User's public data in JSON form.
 *
 * @param {Object}      options     Options object that contains the user's name to lookup and optional API key.
 * @param {Function}    callback    Callback function that will be called when the processing is done.
 */
Gittip.prototype.getUser = function (options, callback) {
	/*
	if (options.key) {
		this.options.key = options.key
	} 
	else if (!this.options.key) {
		throw new Error('No Gittip API key supplied.');
	}
	*/
	// Check that options exists
	if (typeof options != 'object' || typeof options === null) {
		throw new Error('Invalid options passed to function.');
	}
    var url = this.options.restBase + '/' + options.name + '/public.json';
    this.get(url, null, function(data) {
    	callback(data);
    });
    return this;
}

/**
 * Function for requesting and returning a Gittip User's private tip data in JSON form.
 * NOTE: Requires API key for the user requested to access data.
 *
 * @param {Object}      options    Options object that contains the user's name to lookup and 
 * 								   required API key if not set when intializing client.
 *
 * @param {Function}    callback   Callback function that will be called when the processing is done.
 */
Gittip.prototype.getTips = function (options, callback) {
	/*
	// Check that options exists
    var options = {
    	url: 'https://www.gittip.com/kevintcoughlin/tips.json',
    	auth: {
    		username: 'API_KEY',
    		password: 'e901d201-17b3-4727-a905-8de9247a83ad'
    	},
    	json: true
    };

	request(options, function (error, response, body) {
		console.log(response);

	  if (!error && response.statusCode == 200) {
	  	console.log(body);
	    callback(body);
	  }
	  if (error) {
	  	console.log("ERROR");
	  	throw new Error(error);
	  }
	});

	if (typeof options != 'object' || typeof options === null) {
		throw new Error('Invalid options passed to function.');
	}

	if (options.key) {
		this.options.key = options.key
	} 
	else if (!this.options.key) {
		throw new Error('No Gittip API key supplied.');
	}

    var url = this.options.restBase + '/' + options.username + '/tips.json';
    this.get(url, null, function(data) {
    	callback(data);
    });
	*/
    return this;
}

/**
 * Function for creating / updating a Gittip User's tip(s) to Gittip.
 * NOTE: Requires User's API key.
 *
 * @param {Object}      options    Options object that contains the user's name to lookup and 
 * 								   required API key if not set when intializing client.
 *
 * @param {Function}    callback   Callback function that will be called when the processing is done.
 */
Gittip.prototype.postTips = function (options, callback) {

}

module.exports = Gittip;