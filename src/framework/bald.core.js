/* bald framework *\ \* core module */

import dom from './bald.dom.js';
import math from './bald.math.js';
import text from './bald.text.js';
import time from './bald.time.js';
import utils from './bald.utils.js';

export default {
	get VERSION () {
		return "1.0.0";
	},
	run: function () {
		//
	},
	dom,
	math,
	text,
	time,
	utils
}
