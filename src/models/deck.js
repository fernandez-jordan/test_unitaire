
export default class Deck {

	constructor (config) {
		this.cards = config.cards;
	}

	shuffle () {
		var ctr = this.cards.length, temp, index;
		while (ctr > 0) {
			index = Math.floor(Math.random() * ctr);
			ctr--;
			temp = this.cards[ctr];
			this.cards[ctr] = this.cards[index];
			this.cards[index] = temp;
		}
		return this.cards;
	}

	draw () {
		if (this.cards[0] !== undefined){
			return this.cards[0];
		}
		else {
			return undefined;
		}
	}

	getCardsCount () {
		var count_array = this.cards.length;
		return count_array;
	}

	insertAt (card, position) {
		this.cards.splice(position, 0, card);
		return [card, position, this.cards];
	}
}