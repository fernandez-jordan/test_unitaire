
export default class Hand {

	constructor (config) {
		this.cards = config.cards;
		if(config.limit === undefined){
			config.limit = 7;
		}
		// this.cards = config.limit;
	}

	addCard(card){
		var count_arr = this.cards.length;
		if(count_arr < 7  && card !== undefined){
			this.cards.push(card);
			return true;
		}
		else {
			return false
		}
	}

	removeCard(position) {
		if(position !== undefined){
			this.cards.splice(position, 1);
			return true;
		}
		else {
			return false;
		}
	}

	getAllCard(){
		return this.cards;
	}

	getCardsCount() {
		var hand = this.cards.length;
		return hand;
	}
}
