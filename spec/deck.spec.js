import deck from '../src/models/deck.js';
import config from '../src/models/config';

var models = new deck(JSON.parse(config.deck.param));
var models_2 = new deck(config);
describe('class Dek', function () {

	it('constructor', function () {
		expect(typeof(config)).toBe("object");
		expect(Array.isArray(models.cards)).toBe(true);
	});

	it('draw()', function () {
		models_2.draw();
		// expect(models.draw()).toEqual(jasmine.any(Object));
		// expect(typeof(models_2.draw())).toBe(undefined);
	});

	it('shuffle()', function () {
		expect(models.shuffle()).not.toEqual({ face: 'card-1' }, { face: 'card-2' });
	});

	it('get cards count()', function () {
		expect(isNaN(models.getCardsCount())).toBe(false);
	});

	it('insertAt()', function () {
		models.insertAt("{ face: 'card-3' }", 1);
		var codes = models.insertAt();
		var cards  = codes[0];
		var position = codes[1];
		var arr = codes[2];
		expect(arr[position]).toBe(cards);
	});

});
