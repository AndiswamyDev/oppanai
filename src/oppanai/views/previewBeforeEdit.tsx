import React from 'react';
import { Image } from 'react-bootstrap';

interface ImagePreviewProps {
    imageMetaData?: any;
    throwInvalidImageAlert: (e: any) => void;
}

class PreviewBeforeEdit extends React.Component<ImagePreviewProps> {
    render() {
        return (
            <div className='d-flex justify-content-center oppanai-box-shadow p-3 preview-before-edit'>
                <Image src={URL.createObjectURL(this.props.imageMetaData)} className='mw-100 mh-100' title={this.props.imageMetaData.name} onError={(e) => this.props.throwInvalidImageAlert(e)} />
            </div>
        )
    }
}

export default PreviewBeforeEdit;