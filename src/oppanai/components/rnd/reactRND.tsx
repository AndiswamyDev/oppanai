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
        },
        mutedXYScale: {
            x: 0,
            y: 0
        },
        mutedWidthHeightScale: {
            width: 100,
            height: 100
        }
    }
    componentDidMount = () => {
        var imageElement = document.createElement('img');
        const heroImage = document.getElementsByClassName('oppanai-hero-image')[0] as HTMLImageElement;
        imageElement.src = heroImage.src;
        imageElement.style.maxHeight = '60vh';
        imageElement.onload = () => {
            this.setState({
                default: {
                    x: 0,
                    y: 0,
                    width: imageElement.width,
                    height: imageElement.height
                }
            })
        }
    }
    onDragStop = (e: any, d: any) => {
        this.setState({
            mutedXYScale: {
                x: d.x,
                y: d.y
            }
        })
    }
    onResize = (ref: any, position: any) => {
        this.setState({
            mutedWidthHeightScale: {
                width: ref.offsetWidth,
                height: ref.offsetHeight
            }
        })
    }
    render() {
        return (
            <Rnd
                style={this.state.rndStyle}
                bounds={'parent'}
                default={this.state.default}
                onDragStop={(e, d) => { this.onDragStop(e, d) }}
                onResize={(e, direction, ref, delta, position) => {
                    this.onResize(ref, position)
                }}
            >rnd
            </Rnd>
        )
    }
}

export default RND;