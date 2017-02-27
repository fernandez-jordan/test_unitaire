import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import Handmodel from './hand';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1", "life":10, "strength":20, "def":12}, {"face":"card-2", "life":13, "strength":25, "def":13}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    }
}