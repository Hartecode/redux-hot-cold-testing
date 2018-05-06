import reducer from './reducer';

import {generateAuralUpdate, restartGame, makeGuess} from './actions';

describe('reducer', () => {
	 it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});

        expect(state.guesses).toEqual([]);
        expect(state.feedback).toEqual('Make your guess!');
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0);
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
    	it('Should reset all the valuses', () => {
    		let state = {
	    		guesses: [1, 2, 3, 4],
	    		feedback: 'Awesome',
	    		correctAnswer: 2
	    	}
	    	let correctAnswer = 42;
	    	state = reducer(state, restartGame(correctAnswer));
	    	expect(state.guesses).toEqual([]);
	    	expect(state.feedback).toEqual('Make your guess!');
	    	expect(state.auralStatus).toEqual('');
	    	expect(state.correctAnswer).toEqual(correctAnswer);
    	});
    });

    describe('makeGuess', () => {
    	it('Should return the correct  update to state for the guess', () => {
    		let state = {
	    		guesses: [],
			    feedback: 'Make your guess!',
			    auralStatus: '',
			    correctAnswer: 40
	    	}
	    	state = reducer(state, makeGuess(30));
	    	expect(state.feedback).toEqual("You're Warm.");
	    	expect(state.guesses).toEqual([30]);

	    	state = reducer(state, makeGuess(44));
	    	expect(state.feedback).toEqual("You're Hot!");
	    	expect(state.guesses).toEqual([30,44]);

	    	state = reducer(state, makeGuess(77));
	    	expect(state.feedback).toEqual("You're Cold...");
	    	expect(state.guesses).toEqual([30,44, 77]);

	    	state = reducer(state, makeGuess(99));
	    	expect(state.feedback).toEqual("You're Ice Cold...");
	    	expect(state.guesses).toEqual([30,44, 77, 99]);

	    	state = reducer(state, makeGuess(40));
	    	expect(state.feedback).toEqual('You got it!');
	    	expect(state.guesses).toEqual([30,44, 77, 99, 40]);
    	});
    	
    });

    it('Can generate aural updates', () => {
        let state = {
            guesses: [25, 3, 90],
            feedback: "You're Warm.",
            auralStatus: ''
        };

        state = reducer(state, generateAuralUpdate());
        expect(state.auralStatus).toEqual(
            "Here's the status of the game right now: You're Warm. You've made 3 guesses. In order of most- to least-recent, they are: 90, 3, 25"
        );
    });
});
