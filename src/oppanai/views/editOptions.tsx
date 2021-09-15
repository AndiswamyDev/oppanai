import React from 'react';
// import { ReactComponent as CropIcon } from '../assets/icons/crop.svg';
import { ReactComponent as FilterIcon } from '../assets/icons/filter.svg';
import { ReactComponent as ColorIcon } from '../assets/icons/color.svg';
import { ReactComponent as RotateIcon } from '../assets/icons/rotate.svg';
import { CONSTANTS } from '../constants';
import { initiateTooltip } from '../components/tooltip/tippy';

interface EditOptionProps {
    handleEditOptions: (option: string) => void;
}
class EditOptions extends React.Component<EditOptionProps> {
    state = {
        editOption: 'rotate',
    }
    componentDidMount() {
        initiateTooltip();
    }
    handleChooseEditOption = (option: string) => {
        this.setState({
            editOption: option
        });
        this.props.handleEditOptions(option);
    }
    render() {
        return (
            <div className={`d-flex justify-content-around ${CONSTANTS.OPPANAI_EDIT_OPTIONS_WRAPPER}`}>
                <label className=''>
                    <RotateIcon id={CONSTANTS.OPPANAI_ROTATE_ICON} className={this.state.editOption === 'rotate' ? 'm-2 btn rounded border border-danger rounded-circle' : 'm-2 btn rounded'} width={50} height={50} fill={'#da2e75'} onClick={() => this.handleChooseEditOption('rotate')} />
                </label>
                {/* <label className=''>
                    <CropIcon id={CONSTANTS.OPPANAI_CROP_ICON} className='m-2 btn rounded' width={50} height={50} fill={'#da2e75'} onClick={() => this.handleChooseEditOption('crop')} />
                </label> */}
                <label >
                    <FilterIcon id={CONSTANTS.OPPANAI_FILTER_ICON} className={this.state.editOption === 'filter' ? 'm-2 btn rounded border border-danger rounded-circle' : 'm-2 btn rounded'} width={50} height={50} fill={'#da2e75'} onClick={() => this.handleChooseEditOption('filter')} />
                </label>
                <label>
                    <ColorIcon id={CONSTANTS.OPPANAI_COLOR_ICON} className={this.state.editOption === 'color' ? 'm-2 btn rounded border border-danger rounded-circle' : 'm-2 btn rounded'} width={50} height={50} fill={'#da2e75'} onClick={() => this.handleChooseEditOption('color')} />
                </label>
            </div>

        )
    }
}

export default EditOptions;