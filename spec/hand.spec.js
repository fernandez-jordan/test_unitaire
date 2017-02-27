import hand from '../src/models/hand.js';
import config from '../src/models/config';

var models = new hand(JSON.parse(config.deck.param));

describe('class Hand', function () {

	it('constructor', function () {
		expect(typeof(config)).toBe("object");
		expect(Array.isArray(models.cards)).toBe(true);
	});

	it('addCard()', function () {
		// models.addCard({ face: 'card-3' });
		expect(models.addCard()).toMatch(/true|false/);
	});

	it('removeCard()', function () {
		// models.removeCard();
		expect(models.removeCard()).toMatch(/true|false/);
	});

	it('getAllCard()', function () {
		// models.getAllCard();
		expect(Array.isArray(models.getAllCard())).toBe(true);
	});

	it('getCardsCount()', function () {
		// models.getCardsCount();
		expect(Number.isInteger(models.getCardsCount())).toBe(true);
	
	});

});
