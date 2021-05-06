import React from 'react';
import { ReactComponent as LeftRotate } from '../assets/icons/left-rotate.svg';
import { ReactComponent as RightRotate } from '../assets/icons/right-rotate.svg';
import { ReactComponent as FlipVertical } from '../assets/icons/flip-v.svg';
import { ReactComponent as FlipHorizontal } from '../assets/icons/flip-h.svg';
import { CONSTANTS } from '../constants';

interface RotateImageProps {
    handleRotateImage: (rotateType: string) => void;
}
class RotateImage extends React.Component<RotateImageProps> {
    state = {
        rightRotate: 0,
        leftRotate: 0
    }
    render() {
        return (
            <div className='d-flex flex-row oppanai-rotate-wrapper'>
                <label >
                    <RightRotate id={CONSTANTS.OPPANAI_RIGHT_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} onClick={(e) => this.props.handleRotateImage('right')} />
                </label>
                <label >
                    <LeftRotate id={CONSTANTS.OPPANAI_LEFT_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} onClick={(e) => this.props.handleRotateImage('left')} />
                </label>
                <label >
                    <FlipHorizontal id={CONSTANTS.OPPANAI_HORIZONTAL_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} onClick={(e) => this.props.handleRotateImage('flip-h')} />
                </label>
                <label >
                    <FlipVertical id={CONSTANTS.OPPANAI_VERTICAL_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} onClick={(e) => this.props.handleRotateImage('flip-v')} />
                </label>
            </div>
        )
    }
}

export default RotateImage;
