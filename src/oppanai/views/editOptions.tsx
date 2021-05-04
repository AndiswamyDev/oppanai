import React from 'react';
import { ReactComponent as CropIcon } from '../assets/icons/crop.svg';
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { ReactComponent as ColorIcon } from '../assets/icons/color.svg';
import { CONSTANTS } from '../constants';
import { initiateTooltip } from '../components/tooltip/tippy';

class EditOptions extends React.Component {
    state = {
        editOption: 'Crop'
    }
    componentDidMount() {
        initiateTooltip();
    }
    render() {
        return (
            <div className='d-flex justify-content-around edit-options-wrapper'>
                <label className=''>
                    <CropIcon id={CONSTANTS.OPPANAI_CROP_ICON} className={this.state.editOption === 'Crop' ? 'm-3 btn border border-primary rounded' : 'm-3 btn'} width={60} height={60} fill={'#db3d7e'} />
                </label>
                <label >
                    <FilterIcon id={CONSTANTS.OPPANAI_FILTER_ICON} className='m-3 btn' width={60} height={60} fill={'#db3d7e'} />
                </label>
                <label>
                    <ColorIcon id={CONSTANTS.OPPANAI_COLOR_ICON} className='m-3 btn' width={60} height={60} fill={'#db3d7e'} />
                </label>
            </div>

        )
    }
}

export default EditOptions;