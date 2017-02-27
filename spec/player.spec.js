import player from '../src/models/player.js';
import config from '../src/models/config';

var conf = JSON.parse(config.deck.param)
var models = new player(conf.cards[0]);

describe('class player', function () {

	it('constructor', function () {
		expect(typeof(config)).toBe("object");
	});
	
});
