import pawn from '../src/models/pawn.js';
import config from '../src/models/config';

var conf = JSON.parse(config.deck.param)
var models = new pawn(conf.cards[0]);

var models_2 = new pawn(conf.cards[0]);

describe('class pawn', function () {

	it('constructor', function () {
		expect(typeof(config)).toBe("object");
	});

	it('get life', function () {
		expect(isNaN(models.getLife())).not.toBe(true);
		expect(!isNaN(parseFloat(models.getLife())) && isFinite(models.getLife())).toBe(true);
	});

	it('get strength', function () {
		expect(isNaN(models.getStrength())).not.toBe(true);
		expect(!isNaN(parseFloat(models.getStrength())) && isFinite(models.getStrength())).toBe(true);
	});

	it('get def', function () {
		expect(isNaN(models.getDef())).not.toBe(true);
		expect(!isNaN(parseFloat(models.getDef())) && isFinite(models.getDef())).toBe(true);
	});

	it('attack', function () {
		expect(models.attack(models_2)).toMatch(/true|false/);
	});

	it('recieveAttack()', function () {
		expect(models.recieveAttack(models_2)).toMatch(/true|false/);
	});
});
