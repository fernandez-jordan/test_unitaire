"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
	function Deck(config) {
		_classCallCheck(this, Deck);

		this.cards = config.cards;
	}

	_createClass(Deck, [{
		key: "shuffle",
		value: function shuffle() {
			var ctr = this.cards.length,
			    temp,
			    index;
			while (ctr > 0) {
				index = Math.floor(Math.random() * ctr);
				ctr--;
				temp = this.cards[ctr];
				this.cards[ctr] = this.cards[index];
				this.cards[index] = temp;
			}
			return this.cards;
		}
	}, {
		key: "draw",
		value: function draw() {
			if (this.cards[0] !== undefined) {
				return this.cards[0];
			} else {
				return undefined;
			}
		}
	}, {
		key: "getCardsCount",
		value: function getCardsCount() {
			var count_array = this.cards.length;
			return count_array;
		}
	}, {
		key: "insertAt",
		value: function insertAt(card, position) {
			this.cards.splice(position, 0, card);
			return [card, position, this.cards];
		}
	}]);

	return Deck;
}();

exports.default = Deck;