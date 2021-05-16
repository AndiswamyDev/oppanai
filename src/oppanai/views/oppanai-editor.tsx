import React from 'react';
import EditOption from './editOptions';
// import RND from '../components/rnd/reactRND';
import RotateImage from './rotateImage';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { CONSTANTS } from '../constants';
import { handleDownload } from '../utils/oppanaiActions';
interface OppanaiEditorProps {
    imageSource: string;
    imageFile: any;
}
class OppanaiEditor extends React.Component<OppanaiEditorProps> {
    state = {
        imageWidth: 0,
        imageHeight: 0,
        rotateStyle: 0,
        flipAxis: '',
        oppanaiImageResult: '',
        imageRef: { naturalWidth: 0, naturalHeight: 0 }
    }
    componentDidMount = () => {
        const objectUrl = URL.createObjectURL(this.props.imageFile);
        const myImage: any = new Image();
        myImage.src = objectUrl;
        this.setState({
            imageRef: myImage
        });
    }
    handleEditOptions = () => {
    }
    handleRotateImage = (rotateType: string) => {
        switch (rotateType) {
            case 'right':
                this.setState((prevState: any) => {
                    if (prevState.rotateStyle < 270)
                        return { rotateStyle: prevState.rotateStyle + 90 }
                    else return { rotateStyle: 0 };
                });
                break;
            case 'left':
                this.setState((prevState: any) => {
                    if (prevState.rotateStyle > 0)
                        return { rotateStyle: prevState.rotateStyle - 90 }
                    else return { rotateStyle: 270 };
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
    handleDownloadResult = () => {
        const dataURl = handleDownload(this.state.imageRef, this.props.imageFile, this.state.rotateStyle);
        this.setState({
            oppanaiImageResult: dataURl
        });
    }
    render() {
        const styles = {
            transform: `rotate(${this.state.rotateStyle}deg) ${this.state.flipAxis ? `scale${this.state.flipAxis}(-1)` : ''}`
        };
        return (
            <div className='d-flex flex-column align-items-center oppanai-editor-wrapper preview-on-edit' >
                <div className='d-flex justify-content-center'>
                    <label className='oppanai-download' onClick={this.handleDownloadResult}>
                        <DownloadIcon id={CONSTANTS.OPPANAI_DOWNLOAD_IMAGE} className='m-3 btn rounded' width={45} height={45} fill={'#db3d7e'} />
                    </label>
                </div>
                <div className='w-100 d-flex image-source-wrapper justify-content-center m-5' >
                    <img id={CONSTANTS.OPPANAI_EDITING_IMAGE} src={this.props.imageSource} className='mw-100 oppanai-hero-image' alt='hero-source' style={styles} />
                    {/* <RND /> */}
                </div>
                <div className='oppanai-edit-tool-wrapper'>
                    <RotateImage handleRotateImage={this.handleRotateImage} />
                    <EditOption handleEditOptions={this.handleEditOptions} />
                </div>
            </div>
        )
    }
}

export default OppanaiEditor;