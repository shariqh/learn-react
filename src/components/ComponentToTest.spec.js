import React from 'react';
import ComponentToTest from './ComponentToTest';

describe('Component To Test', () => {

    it('Renders successfully', () => {
        <ComponentToTest/>
    })

    it('', () => {
        let component = new ComponentToTest({header: 'Test'});

        expect(component.state.header).not.toBe(null);
    });
});


