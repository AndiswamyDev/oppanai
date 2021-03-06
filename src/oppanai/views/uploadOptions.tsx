import React from 'react';
import { Card } from 'react-bootstrap';
import { ReactComponent as UploadImageIcon } from '../assets/icons/upload-image-icon.svg'
import SuccessFailUploadStatus from '../components/uploadedStatus/successFailUpload';
import { CONSTANTS } from '../constants';
import StartEdit from '../components/startEdit/startEdit';
import OppanaiEditor from './oppanai-editor';
import { createBlobImageUrl } from '../utils/handlers';

interface uploadProps {
    editView: (isEditView: boolean) => void;
}
class UploadOptions extends React.Component<uploadProps>{
    state = {
        isFileUploaded: false,
        uploadedImageData: {},
        isFileError: false,
        startEdit: false,
        imageSource: ''
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
    handleStartEdit = () => {
        this.setState({
            startEdit: true,
            imageSource: createBlobImageUrl(this.state.uploadedImageData)
        });
        this.props.editView(true);
    }
    render() {
        return (
            <>{this.state.startEdit ?
                <OppanaiEditor imageSource={this.state.imageSource} imageFile={this.state.uploadedImageData} /> :
                <div className='d-flex justify-content-center upload-wrapper m-2'>
                    <Card className='m-3 upload-img-option oppanai-box-shadow' >
                        <Card.Body className=''>
                            <p className='d-flex justify-content-center h5'>{CONSTANTS.UPLOAD_FROM_PC}</p>
                            <Card.Title className='d-flex justify-content-center'>
                                <label id={CONSTANTS.OPPANAI_UPLOAD_BUTTON} className='btn border oppanai-box-shadow' >
                                    <UploadImageIcon width={50} height={50} />
                                    <input type='file' accept='image/*' hidden onChange={(e) => this.handleLocalFileUpload(e)} />
                                </label>
                            </Card.Title>
                            <Card.Text className='d-flex justify-content-center'>
                                <small>{CONSTANTS.BROWSE_AN_IMAGE_FROM_YOUR_DEVICE_TO_EDIT}</small>
                            </Card.Text>
                            <SuccessFailUploadStatus isFileUploaded={this.state.isFileUploaded} uploadedImageData={this.state.uploadedImageData} isFileError={this.state.isFileError} throwInvalidImageAlert={this.throwInvalidImageAlert} />
                            <StartEdit isFileUploaded={this.state.isFileUploaded} isFileError={this.state.isFileError} handleStartEdit={this.handleStartEdit} />
                        </Card.Body>
                    </Card>
                </div >
            }
            </>
        )
    }
}

export default UploadOptions;