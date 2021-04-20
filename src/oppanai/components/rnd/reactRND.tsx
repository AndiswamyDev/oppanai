import React from 'react';
import { Rnd } from 'react-rnd';

class RND extends React.Component {
    state = {
        rndStyle: {
            alignItems: 'center',
            justifyContent: 'center',
            border: 'solid 2px #db3d7e',
            background: 'transparent',
        },
        default: {
            x: 0,
            y: 0,
            width: 100,
            height: 100
        }
    }
    render() {
        return (
            <Rnd style={this.state.rndStyle} bounds={'parent'} default={this.state.default}>rnd
            </Rnd>
        )
    }
}

export default RND;