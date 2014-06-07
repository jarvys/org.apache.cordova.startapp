var exec = require('cordova/exec');
var platform = require('cordova/platform');

/** Open a native alert dialog, with a customizable title and button text.
 *
 * @param {String} message              app name
 * @param {Function} completeCallback   The callback that is called when open app
 */
module.exports = {
	check: function(message, completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "check", [message]);
	},
	start: function(message, completeCallback, errorCallback) {
		exec(completeCallback, errorCallback, "startApp", "start", (typeof message === 'string') ? [message] : message);
	}	
};
