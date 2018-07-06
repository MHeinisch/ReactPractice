import React, { Component } from 'react';

class Home extends Component {
    onClickTest = () => {
        return "Home";
    }

    render() {
        return (
            <a href="onClick()" onClick="onClickTest">Home</a>              
        );
    }
}

export default Home;