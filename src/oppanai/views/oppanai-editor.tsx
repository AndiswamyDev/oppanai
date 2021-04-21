import React from 'react';
import { Image } from 'react-bootstrap';
import RND from '../components/rnd/reactRND';

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
            <div className='d-flex justify-content-center oppanai-editor-wrapper preview-on-edit' >
                <div className=' align-items-center my-image'>
                    <Image src={this.props.imageSource} className='mw-100 oppanai-box-shadow oppanai-hero-image' />
                    <RND />
                </div>
            </div>
        )
    }
}

export default OppanaiEditor;