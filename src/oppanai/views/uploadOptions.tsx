import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { ReactComponent as UploadImageIcon } from '../assets/icons/upload-image-icon.svg'
import SuccessFailUploadStatus from '../components/uploadedStatus/successFailUpload';
import { CONSTANTS } from '../constants';

class UploadOptions extends React.Component {
    state = {
        isFileUploaded: false,
        uploadedImageData: {},
        isFileError: false
    }
    handleLocalFileUpload = (event: any) => {
        const imageMeta = event?.target?.files[0];
        if (imageMeta) this.setState({
            isFileError: false,
            isFileUploaded: true,
            uploadedImageData: imageMeta
        });
    }
    throwInvalidImageAlert = (event: any) => {
        if (event.type === 'error')
            this.setState({
                isFileError: true
            });
    }
    render() {
        return (
            <div className='d-flex d-flex justify-content-center m-2'>
                <Card className='m-3 upload-img-options-div' >
                    <Card.Body className=''>
                        <h5 className='d-flex justify-content-center'>{CONSTANTS.UPLOAD_FROM_PC}</h5>
                        <Card.Title className='d-flex justify-content-center'>
                            <label id={CONSTANTS.OPPANAI_UPLOAD_BUTTON} className='btn border border-primary' >
                                <UploadImageIcon width={50} height={50} />
                                <input type="file" accept='image/*' hidden onChange={(e) => this.handleLocalFileUpload(e)} />
                            </label>
                        </Card.Title>
                        <Card.Text className='d-flex justify-content-center'>
                            {CONSTANTS.BROWSE_AN_IMAGE_FROM_YOUR_DEVICE_TO_EDIT}
                        </Card.Text>
                        <SuccessFailUploadStatus isFileUploaded={this.state.isFileUploaded} uploadedImageData={this.state.uploadedImageData} isFileError={this.state.isFileError} throwInvalidImageAlert={this.throwInvalidImageAlert} />
                        <div className='d-flex justify-content-center'>
                            <Button id={CONSTANTS.OPPANAI_START_EDIT_BUTTON} className='text-light m-3 font-weight-bold' disabled={!this.state.isFileUploaded || this.state.isFileError}>{CONSTANTS.START_EDIT}</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div >
        )
    }
}

export default UploadOptions;