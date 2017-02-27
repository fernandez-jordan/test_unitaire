"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
	function Hand(config) {
		_classCallCheck(this, Hand);

		this.cards = config.cards;
		if (config.limit === undefined) {
			config.limit = 7;
		}
		// this.cards = config.limit;
	}

	_createClass(Hand, [{
		key: "addCard",
		value: function addCard(card) {
			var count_arr = this.cards.length;
			if (count_arr < 7 && card !== undefined) {
				this.cards.push(card);
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: "removeCard",
		value: function removeCard(position) {
			if (position !== undefined) {
				this.cards.splice(position, 1);
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: "getAllCard",
		value: function getAllCard() {
			return this.cards;
		}
	}, {
		key: "getCardsCount",
		value: function getCardsCount() {
			var hand = this.cards.length;
			return hand;
		}
	}]);

	return Hand;
}();

exports.default = Hand;