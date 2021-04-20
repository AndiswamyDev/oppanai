import React from 'react';
import { Button } from 'react-bootstrap';
import { CONSTANTS } from '../../constants';

interface StartEditProps {
    isFileUploaded: boolean;
    isFileError: boolean;
    handleStartEdit: () => void;
}

class StartEdit extends React.Component<StartEditProps> {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Button id={CONSTANTS.OPPANAI_START_EDIT_BUTTON} className='text-light m-3 font-weight-bold' disabled={!this.props.isFileUploaded || this.props.isFileError} onClick={this.props.handleStartEdit}>{CONSTANTS.START_EDIT} </Button>
            </div>
        )
    }
}

export default StartEdit;