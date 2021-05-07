import React from 'react';
import { ReactComponent as CropIcon } from '../assets/icons/crop.svg';
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { ReactComponent as ColorIcon } from '../assets/icons/color.svg';
import { ReactComponent as RotateIcon } from '../assets/icons/rotate.svg';
import { CONSTANTS } from '../constants';
import { initiateTooltip } from '../components/tooltip/tippy';

interface EditOptionProps {
    handleEditOptions: () => void;
}
class EditOptions extends React.Component<EditOptionProps> {
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
                    <RotateIcon id={CONSTANTS.OPPANAI_ROTATE_ICON} className='m-3 btn rounded' width={55} height={55} fill={'#db3d7e'} onClick={(e) => this.props.handleEditOptions()} />
                </label>
                <label className=''>
                    <CropIcon id={CONSTANTS.OPPANAI_CROP_ICON} className='m-3 btn rounded' width={55} height={55} fill={'#db3d7e'} onClick={(e) => this.props.handleEditOptions()} />
                </label>
                <label >
                    <FilterIcon id={CONSTANTS.OPPANAI_FILTER_ICON} className='m-3 btn rounded' width={55} height={55} fill={'#db3d7e'} onClick={(e) => this.props.handleEditOptions()} />
                </label>
                <label>
                    <ColorIcon id={CONSTANTS.OPPANAI_COLOR_ICON} className='m-3 btn rounded' width={55} height={55} fill={'#db3d7e'} onClick={(e) => this.props.handleEditOptions()} />
                </label>
            </div>

        )
    }
}

export default EditOptions;