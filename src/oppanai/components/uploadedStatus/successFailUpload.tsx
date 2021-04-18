import React from 'react';
import { Card } from 'react-bootstrap';
import PreviewBeforeEdit from '../../views/previewBeforeEdit';
import { ReactComponent as SadEmoji } from '../../assets/icons/sad.svg'
import { CONSTANTS } from '../../constants';

interface SuccessFailUploadStatusProps {
    isFileUploaded: boolean;
    uploadedImageData: any;
    isFileError: boolean;
    throwInvalidImageAlert: (e: any) => void;
}

class SuccessFailUploadStatus extends React.Component<SuccessFailUploadStatusProps>{
    render() {
        return (
            this.props.isFileUploaded && this.props.uploadedImageData && !this.props.isFileError ? <PreviewBeforeEdit imageMetaData={this.props.uploadedImageData} throwInvalidImageAlert={this.props.throwInvalidImageAlert} /> : this.props.isFileUploaded && this.props.isFileError ?
                <>
                    <div className='d-flex justify-content-center'>
                        <SadEmoji width={50} height={50} />
                    </div>
                    <Card.Text className='d-flex justify-content-center text-danger'>
                        {CONSTANTS.IMAGE_UPLOAD_ERROR_ALERT_TEXT}
                    </Card.Text>
                </> : ''
        )
    }
}

export default SuccessFailUploadStatus;