import React from 'react';
import EditOption from './editOptions';
// import RND from '../components/rnd/reactRND';
import RotateImage from './rotateImage';
import FilterImage from './filterOptions';
import { ReactComponent as DownloadIcon } from '../assets/icons/download.svg';
import { CONSTANTS } from '../constants';
import { handleDownload } from '../utils/oppanaiActions';
import { createBlobImageUrl } from '../utils/handlers';
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
        imageRef: { naturalWidth: 0, naturalHeight: 0 },
        chosenEditOption: 'rotate',
        chosenFilterOption: ''
    }
    componentDidMount = () => {
        const objectUrl = createBlobImageUrl(this.props.imageFile);
        const myImage: any = new Image();
        myImage.src = objectUrl;
        this.setState({
            imageRef: myImage
        });
    }
    handleEditOptions = (option: string) => {
        this.setState({
            chosenEditOption: option
        });
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
    handleFilterSelection = (filterOption: string) => {
        this.setState({
            chosenFilterOption: filterOption
        });
    }
    handleDownloadResult = () => {
        handleDownload(this.state.imageRef, this.props.imageFile, this.state.rotateStyle, this.state.flipAxis, this.state.chosenFilterOption);
    }
    render() {
        const styles = {
            transform: `rotate(${this.state.rotateStyle}deg) ${this.state.flipAxis ? `scale${this.state.flipAxis}(-1)` : ''}`,
            filter: this.state.chosenFilterOption
        };
        return (
            <div id={CONSTANTS.OPPANAI_EDITOR_WRAPPER} className='d-flex flex-column align-items-center' >
                <div className='d-flex justify-content-center'>
                    <label className={CONSTANTS.OPPANAI_DOWNLOAD} onClick={this.handleDownloadResult}>
                        <DownloadIcon id={CONSTANTS.OPPANAI_DOWNLOAD_IMAGE} className='m-2 btn rounded' width={40} height={40} fill={'#da2e75'} />
                    </label>
                </div>
                <div className={`w-100 d-flex ${CONSTANTS.OPPANAI_IMAGE_SOURCE_WRAPPER} justify-content-center m-5`} >
                    <img id={CONSTANTS.OPPANAI_EDITING_IMAGE} src={this.props.imageSource} className={`mw-100 preview-on-editImg ${CONSTANTS.OPPANAI_HERO_IMAGE}`} alt='hero-source' style={styles} />
                    {/* <RND /> */}
                </div>
                <div className={CONSTANTS.OPPANAI_EDIT_TOOL_WRAPPER}>
                    {this.state.chosenEditOption === 'rotate' && <RotateImage handleRotateImage={this.handleRotateImage} />}
                    {this.state.chosenEditOption === 'filter' && <FilterImage imageSource={this.props.imageSource} handleFilterSelection={this.handleFilterSelection} />}
                    <EditOption handleEditOptions={this.handleEditOptions} />
                </div>
            </div>
        )
    }
}

export default OppanaiEditor;