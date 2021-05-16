import React from 'react';
import EditOption from './editOptions';
// import RND from '../components/rnd/reactRND';
import RotateImage from './rotateImage';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { CONSTANTS } from '../constants';
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
    handleDownload = () => {
        console.log('download', this.props.imageFile.type, this.state.imageRef);
        const editedImage: any = document.getElementById(CONSTANTS.OPPANAI_EDITING_IMAGE);
        const canvas = document.createElement('canvas');
        canvas.width = (editedImage.style.transform.includes(90) || editedImage.style.transform.includes(270)) ? this.state.imageRef.naturalHeight : this.state.imageRef.naturalWidth;
        canvas.height = (editedImage.style.transform.includes(90) || editedImage.style.transform.includes(270)) ? this.state.imageRef.naturalWidth : this.state.imageRef.naturalHeight;
        const ctx: any = canvas.getContext('2d');
        if (this.state.rotateStyle === 90) {
            ctx.translate(canvas.width, 0);
        } else if (this.state.rotateStyle === 180) {
            ctx.translate(canvas.width, canvas.height);
        } else if (this.state.rotateStyle === 270) {
            ctx.translate(0, canvas.height);
        } else {
            ctx.translate(0, 0)
        }
        ctx.rotate(this.state.rotateStyle * Math.PI / 180);
        ctx.drawImage(
            this.state.imageRef,
            0, 0
        )
        // ctx.filter = 'contrast(1.4) sepia(1) drop-shadow(-9px 9px 3px #e81)';
        const base64Image = canvas.toDataURL(this.props.imageFile.type);
        ctx.restore();

        console.log('base64Image', base64Image);
        this.setState({
            oppanaiImageResult: base64Image
        });
    }
    render() {
        const styles = {
            transform: `rotate(${this.state.rotateStyle}deg) ${this.state.flipAxis ? `scale${this.state.flipAxis}(-1)` : ''}`
        };
        return (
            <div className='d-flex flex-column align-items-center  oppanai-editor-wrapper preview-on-edit' >
                <label onClick={() => this.handleDownload()}>
                    <DownloadIcon id={CONSTANTS.OPPANAI_DOWNLOAD_IMAGE} className='m-3 btn rounded' width={55} height={55} fill={'#db3d7e'} />
                </label>
                <div className='w-100 d-flex image-source-wrapper justify-content-center m-5' >
                    <img id={CONSTANTS.OPPANAI_EDITING_IMAGE} src={this.props.imageSource} className='mw-100 oppanai-hero-image' alt='hero-source' style={styles} />
                    <img id={'preview'} src={this.state.oppanaiImageResult} className='mw-100 oppanai-hero-image' alt='hero-source' />
                    {/* <RND /> */}
                </div>
                <EditOption handleEditOptions={this.handleEditOptions} />
                <RotateImage handleRotateImage={this.handleRotateImage} />
            </div>
        )
    }
}

export default OppanaiEditor;