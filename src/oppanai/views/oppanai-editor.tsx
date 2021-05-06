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
        imageHeight: 0,
        rotateStyle: 0
    }
    handleEditOptions = () => {
    }
    handleRotateImage = (rotateType: string) => {
        this.setState({
            rotateStyle: 180
        });
    }
    render() {
        const styles = {
            transform: `rotate(${this.state.rotateStyle}deg)`
        };
        return (
            <div className='d-flex flex-column align-items-center  oppanai-editor-wrapper preview-on-edit' >
                <div className=''>
                    <Image src={this.props.imageSource} className='mw-100 p-5 oppanai-box-shadow oppanai-hero-image' style={styles} />
                    {/* <RND /> */}
                </div>
                <EditOption handleEditOptions={this.handleEditOptions} />
                <RotateImage handleRotateImage={this.handleRotateImage} />
            </div>
        )
    }
}

export default OppanaiEditor;