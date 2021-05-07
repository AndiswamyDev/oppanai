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
        rotateStyle: 0,
        flipAxis: null
    }
    handleEditOptions = () => {
    }
    handleRotateImage = (rotateType: string) => {
        switch (rotateType) {
            case 'right':
                this.setState((prevState: any) => {
                    if (prevState.rotateStyle <= 360)
                        return { rotateStyle: prevState.rotateStyle + 90 }
                    else this.setState({ rotateStyle: 0 });
                });
                break;
            case 'left':
                this.setState((prevState: any) => {
                    if (prevState.rotateStyle >= 0)
                        return { rotateStyle: prevState.rotateStyle - 90 }
                    else this.setState({ rotateStyle: 360 });
                });
                break;
            case 'flip-h':
                if (this.state.rotateStyle % 180 === 0)
                    this.setState((prevState: any) => {
                        return {
                            flipAxis: (prevState.flipAxis === 'X') ? null : 'X'
                        }
                    });
                else this.setState((prevState: any) => {
                    return {
                        flipAxis: (prevState.flipAxis === 'Y') ? null : 'Y'
                    }
                });
                break;
            case 'flip-v':
                if (this.state.rotateStyle % 180 === 0)
                    this.setState((prevState: any) => {
                        return {
                            flipAxis: (prevState.flipAxis === 'Y') ? null : 'Y'
                        }
                    });
                else this.setState((prevState: any) => {
                    return {
                        flipAxis: (prevState.flipAxis === 'X') ? null : 'X'
                    }
                });
                break;

            default:
                break;
        }
    }
    render() {
        console.log(`rotate(${this.state.rotateStyle}deg) ${this.state.flipAxis ? `scale${this.state.flipAxis}(-1)` : ''}`);
        const styles = {
            transform: `rotate(${this.state.rotateStyle}deg) ${this.state.flipAxis ? `scale${this.state.flipAxis}(-1)` : ''}`
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