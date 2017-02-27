import ModelFactory from './factory';
import Pawn from './pawn';
export default class Player extends Pawn {

    constructor(config) {
        super(config)
        this.type = config.type;

        this.deck = ModelFactory.get('deck');
    }

    draw () {
        return this.deck.draw();
    }
    
    shuffle(deck = 'deck'){

    }

    playCard(){

    }

    discard(){

    }

    attack(){
    	
    }
}