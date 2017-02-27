
import EventManager from '../eventManager';

export default class Pawn extends EventManager {

	constructor (config) {
		super(config);
		this.life = (config.life || 15)
		this.strength = (config.strength || 18)
		this.def = (config.def || 13)
	}

	getLife() {
		return this.life;
	}

	getStrength() {
		return this.strength;
	}

	getDef() {
		return this.def;
	}

	attack(target) {
		target.recieveAttack(this);
		return true;
	}

	recieveAttack(opponent, strikeBack = false){
		if(strikeBack === false ){
			this.life -= opponent.strength;
			opponent.recieveAttack(this, true);
			return false;
		}
		if (strikeBack === true ){
			this.life -= opponent.def;
			return true;
		}
	}

}