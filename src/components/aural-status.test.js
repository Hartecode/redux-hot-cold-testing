import React from 'react';
import { shallow } from 'enzyme';

import {AuralStatus} from './aural-status';

describe('AuralStatus', () => {
	it('Render without crashig', () =>{
		shallow(<AuralStatus />);
	});

	it('Should update the state for auralStatus', () => {
		let TEST_STATUS = 'You are listening to a game!';

		let wrapper = shallow(<AuralStatus auralStatus={TEST_STATUS} />);
		expect(wrapper.contains(TEST_STATUS)).toEqual(true);
	});
});