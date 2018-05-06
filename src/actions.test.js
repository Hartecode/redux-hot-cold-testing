import {GENERATE_AURAL_UPDATE, generateAuralUpdate, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';

describe('generateAuralUpdate', () => {
	it('Should return the action', () => {
		const auralStatus = undefined;
		const action = generateAuralUpdate();
		expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
		expect(action.auralStatus).toEqual(auralStatus);
	});
});

describe('restartGame', () => {
	it('Should return the action', () => {
		const correctAnswer = 42;
		const action = restartGame(correctAnswer);
		expect(action.type).toEqual(RESTART_GAME);
		expect(action.correctAnswer).toEqual(correctAnswer);
	});
});

describe('makeGuess', () => {
	it('Should return the action', () => {
		const guess = '42';
		const action = makeGuess(guess);
		expect(action.type).toEqual(MAKE_GUESS);
		expect(action.guess).toEqual(guess);
	});
});

