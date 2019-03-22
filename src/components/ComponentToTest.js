import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComponentToTest extends Component {

    constructor(props) {
        super(props);


        this.state = {
            header: ''

        };
    }

    componentDidMount() {
        this.setState()
    }

    render() {

        return (
            <div>
            </div>
        );
    }

}

ComponentToTest.propTypes = {
    header: PropTypes.string
}