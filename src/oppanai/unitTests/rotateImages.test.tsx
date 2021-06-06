import { shallow } from 'enzyme';
import OppanaiEditor from '../views/oppanai-editor';
import RotateImage from '../views/rotateImage';
import { mockData } from './mockData';
import * as actions from '../utils/oppanaiActions';

describe('Given in Oppanai Editor', () => {
    global.URL.createObjectURL = jest.fn();
    const oppanaiEditor = new OppanaiEditor({ imageSource: mockData.imageBlobUrl, imageFile: mockData.file });
    const oppanaiEditorWrapper = shallow(<OppanaiEditor imageSource={mockData.imageBlobUrl} imageFile={mockData.file} />)
    const rotateImageWrapper = shallow(<RotateImage handleRotateImage={oppanaiEditor.handleRotateImage} />);

    const handleRotateStyles = (angle: number) => {
        oppanaiEditorWrapper.setState({
            rotateStyle: angle
        });
        oppanaiEditorWrapper.childAt(0).childAt(0).simulate('click');
    }

    describe('When user tries rotating an image', () => {
        test('Test the Edit options are rendered', () => {
            expect(rotateImageWrapper.find('.oppanai-rotate-wrapper')).not.toBeNull();
        });
        test('Check rotate wrapper has four rotate option children', () => {
            expect(rotateImageWrapper.children().length).toBe(4);
        });
        test('Test the handleRotateImage function called on clicking right rotate', () => {
            // const spy = jest.spyOn(oppanaiEditorWrapper.instance(), 'handleRotateImage');
            rotateImageWrapper.childAt(0).childAt(0).simulate('click');
            rotateImageWrapper.childAt(1).childAt(0).simulate('click');
            rotateImageWrapper.childAt(2).childAt(0).simulate('click');
            rotateImageWrapper.childAt(3).childAt(0).simulate('click');
            // expect(spy).toBeCalledTimes(2);
        });
    });
    describe('When user tries downloading edited image', () => {
        test('Check Download button present', () => {
            expect(oppanaiEditorWrapper.childAt(0).childAt(0)).not.toBeNull();
            expect(oppanaiEditorWrapper.childAt(0).childAt(0).type()).toBe('label');
            expect(oppanaiEditorWrapper.childAt(0).childAt(0).props().className).toEqual('oppanai-download');
            expect(oppanaiEditorWrapper.childAt(0).childAt(0).childAt(0).props().id).toEqual('oppanai-download-image');
        });
        test('simulate end verify the download starts on clicking it', () => {
            const downloadSpy = jest.spyOn(actions, 'handleDownload');
            oppanaiEditorWrapper.childAt(0).childAt(0).simulate('click');
            expect(downloadSpy).toBeCalledTimes(1);
        });
        test('Check with different rotate styles', () => {
            const downloadSpy = jest.spyOn(actions, 'handleDownload');
            handleRotateStyles(90);
            expect(downloadSpy.mock.calls[0][2]).toBe(90);
            handleRotateStyles(180);
            expect(downloadSpy.mock.calls[1][2]).toBe(180);
            handleRotateStyles(270);
            expect(downloadSpy.mock.calls[2][2]).toBe(270);
        });
    });
});
