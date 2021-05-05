import React from 'react';
import { ReactComponent as LeftRotate } from '../assets/icons/left-rotate.svg';
import { ReactComponent as RightRotate } from '../assets/icons/right-rotate.svg';
import { ReactComponent as FlipVertical } from '../assets/icons/flip-v.svg';
import { ReactComponent as FlipHorizontal } from '../assets/icons/flip-h.svg';
import { CONSTANTS } from '../constants';

class RotateImage extends React.Component {
    render() {
        return (
            <div className='d-flex flex-row oppanai-rotate-wrapper'>
                <label >
                    <RightRotate id={CONSTANTS.OPPANAI_LEFT_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} />
                </label>
                <label >
                    <LeftRotate id={CONSTANTS.OPPANAI_RIGHT_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} />
                </label>
                <label >
                    <FlipHorizontal id={CONSTANTS.OPPANAI_HORIZONTAL_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} />
                </label>
                <label >
                    <FlipVertical id={CONSTANTS.OPPANAI_VERTICAL_ROTATE_ICON} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} />
                </label>
            </div>
        )
    }
}

export default RotateImage;
