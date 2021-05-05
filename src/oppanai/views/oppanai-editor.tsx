import React from 'react';
import { Image } from 'react-bootstrap';
import EditOption from './editOptions';
// import RND from '../components/rnd/reactRND';
import RotateImage from './rotateImage';
interface OppanaiEditorProps {
    imageSource: string;
}

class OppanaiEditor extends React.Component<OppanaiEditorProps> {
    state = {
        imageWidth: 0,
        imageHeight: 0
    }
    render() {
        return (
            <div className='d-flex flex-column align-items-center  oppanai-editor-wrapper preview-on-edit' >
                <div className=''>
                    <Image src={this.props.imageSource} className='mw-100 p-5 oppanai-box-shadow oppanai-hero-image' />
                    {/* <RND /> */}
                </div>
                <EditOption />
                <RotateImage />
            </div>
        )
    }
}

export default OppanaiEditor;